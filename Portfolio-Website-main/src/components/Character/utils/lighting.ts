import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // Ambient light ensures 3D character is clearly visible at all times
  const ambientLight = new THREE.AmbientLight(0xfff6ed, 0.95);
  scene.add(ambientLight);

  // Main directional light for character rim & definition (Electric Blue #0057F8)
  const directionalLight = new THREE.DirectionalLight(0x0057F8, 1.4);
  directionalLight.position.set(-0.47, 6, 8);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  // Warm Studio Key Light for face & realistic skin tones
  const warmKeyLight = new THREE.DirectionalLight(0xffebd2, 1.5);
  warmKeyLight.position.set(3, 12, 16);
  scene.add(warmKeyLight);

  // Front fill light for soft facial shadows
  const frontFillLight = new THREE.DirectionalLight(0xe8f0ff, 0.8);
  frontFillLight.position.set(-3, 8, 12);
  scene.add(frontFillLight);

  // Electric blue accent point light (#0057F8)
  const pointLight = new THREE.PointLight(0x0057F8, 1.3, 100, 2);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  // Load HDR environment with fallback
  try {
    new RGBELoader()
      .setPath("/models/")
      .load(
        "char_enviorment.hdr",
        function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
          scene.environmentIntensity = 0.6;
          scene.environmentRotation.set(5.76, 85.85, 1);
        },
        undefined,
        (err) => {
          console.warn("HDR environment load warning:", err);
        }
      );
  } catch (hdrErr) {
    console.warn("RGBELoader error:", hdrErr);
  }

  function setPointLight(screenLight: any) {
    if (screenLight?.material?.opacity > 0.9) {
      pointLight.intensity = (screenLight.material.emissiveIntensity || 1) * 20;
    } else {
      pointLight.intensity = 1.0;
    }
  }

  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(scene, {
      environmentIntensity: 0.85,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 1.5,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;
