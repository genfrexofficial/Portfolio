import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";
import { applyDharshanHumanAppearance } from "./humanCustomization";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const processLoadedCharacter = async (gltf: GLTF, resolve: (val: GLTF | null) => void) => {
    const character = gltf.scene;

    // Apply realistic Dharshan human textures, facial hair, brown eyes, skin tone, tailored black suit
    try {
      applyDharshanHumanAppearance(character);
    } catch (skinErr) {
      console.error("Error applying Dharshan human appearance:", skinErr);
    }

    try {
      await renderer.compileAsync(character, camera, scene);
    } catch (e) {
      console.warn("compileAsync non-fatal warning:", e);
    }

    character.traverse((child: any) => {
      if (child.isMesh) {
        const mesh = child as THREE.Mesh;
        child.castShadow = true;
        child.receiveShadow = true;
        mesh.frustumCulled = true;
      }
    });

    resolve(gltf);

    try {
      setCharTimeline(character, camera);
      setAllTimeline();
    } catch (err) {
      console.warn("Timeline setup warning:", err);
    }

    try {
      const footR = character.getObjectByName("footR");
      if (footR) footR.position.y = 3.36;
      const footL = character.getObjectByName("footL");
      if (footL) footL.position.y = 3.36;
    } catch (e) {
      console.warn("Foot position adjustment skipped:", e);
    }
  };

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      // Step 1: Try loading the direct decrypted GLB model first for maximum speed and stability
      loader.load(
        "/models/character.glb",
        async (gltf) => {
          await processLoadedCharacter(gltf, resolve);
        },
        undefined,
        async (directError) => {
          console.warn("Direct /models/character.glb load failed, falling back to decrypting character.enc...", directError);
          // Step 2: Fallback to dynamic AES decryption
          try {
            const encryptedBlob = await decryptFile(
              "/models/character.enc",
              "Character3D#@"
            );
            const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

            loader.load(
              blobUrl,
              async (gltf) => {
                await processLoadedCharacter(gltf, resolve);
                URL.revokeObjectURL(blobUrl);
              },
              undefined,
              (fallbackError) => {
                console.error("All 3D character loading attempts failed:", fallbackError);
                reject(fallbackError);
              }
            );
          } catch (decryptErr) {
            console.error("Decryption error:", decryptErr);
            reject(decryptErr);
          }
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
