import * as THREE from "three";

/**
 * Creates a photorealistic human eye texture matching Dharshan Selvaraj's brown eyes.
 */
export function createRealisticEyesTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Deep black outside
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1024, 1024);

  const drawEye = (
    centerX: number,
    centerY: number,
    radiusX: number,
    radiusY: number,
    isLeft: boolean
  ) => {
    ctx.save();

    // Sclera base (warm human eye white)
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.clip();

    const scleraGrad = ctx.createRadialGradient(
      centerX + (isLeft ? 20 : -20),
      centerY,
      30,
      centerX,
      centerY,
      radiusX
    );
    scleraGrad.addColorStop(0, "#fefcf9");
    scleraGrad.addColorStop(0.75, "#f3eae2");
    scleraGrad.addColorStop(0.92, "#ebd5c8");
    scleraGrad.addColorStop(1, "#c4a395");
    ctx.fillStyle = scleraGrad;
    ctx.fill();

    // Subtle eye corner vascular warmth
    ctx.strokeStyle = "rgba(180, 75, 75, 0.15)";
    ctx.lineWidth = 1.2;
    for (let a = 0; a < Math.PI * 2; a += 0.35) {
      ctx.beginPath();
      const edgeX = centerX + Math.cos(a) * radiusX * 0.95;
      const edgeY = centerY + Math.sin(a) * radiusY * 0.95;
      const inX = centerX + Math.cos(a) * (radiusX * 0.72 + Math.random() * 15);
      const inY = centerY + Math.sin(a) * (radiusY * 0.72 + Math.random() * 15);
      ctx.moveTo(edgeX, edgeY);
      ctx.lineTo(inX, inY);
      ctx.stroke();
    }

    // Realistic Iris (Warm Amber Brown like Dharshan's actual eyes)
    const irisX = centerX + (isLeft ? 45 : -45);
    const irisY = centerY + 10;
    const irisRadius = 145;

    // Dark Limbal Ring (outer edge of iris)
    const limbalGrad = ctx.createRadialGradient(
      irisX,
      irisY,
      irisRadius * 0.65,
      irisX,
      irisY,
      irisRadius
    );
    limbalGrad.addColorStop(0, "#4a2616");
    limbalGrad.addColorStop(0.85, "#251208");
    limbalGrad.addColorStop(1, "#0a0402");

    ctx.beginPath();
    ctx.arc(irisX, irisY, irisRadius, 0, Math.PI * 2);
    ctx.fillStyle = limbalGrad;
    ctx.fill();

    // Warm Rich Golden-Brown Iris Body
    const irisGrad = ctx.createRadialGradient(
      irisX,
      irisY,
      25,
      irisX,
      irisY,
      irisRadius * 0.88
    );
    irisGrad.addColorStop(0, "#6c391b");
    irisGrad.addColorStop(0.4, "#804824");
    irisGrad.addColorStop(0.7, "#542c14");
    irisGrad.addColorStop(1, "#34190b");

    ctx.beginPath();
    ctx.arc(irisX, irisY, irisRadius * 0.88, 0, Math.PI * 2);
    ctx.fillStyle = irisGrad;
    ctx.fill();

    // Radiating Iris Fibers & Texture
    ctx.save();
    ctx.translate(irisX, irisY);
    for (let i = 0; i < 90; i++) {
      const angle = (i * Math.PI) / 45;
      const len = 35 + Math.random() * 75;
      ctx.strokeStyle =
        i % 2 === 0 ? "rgba(165, 95, 45, 0.4)" : "rgba(220, 150, 80, 0.35)";
      ctx.lineWidth = 1 + Math.random() * 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * 30, Math.sin(angle) * 30);
      ctx.lineTo(Math.cos(angle) * len, Math.sin(angle) * len);
      ctx.stroke();
    }
    ctx.restore();

    // Deep Black Pupil
    const pupilRadius = 46;
    ctx.beginPath();
    ctx.arc(irisX, irisY, pupilRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#080608";
    ctx.fill();

    // Specular Catchlight (Eye Cornea Glint)
    ctx.beginPath();
    ctx.arc(irisX - 22, irisY - 26, 13, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(irisX + 18, irisY + 16, 6, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.fill();

    ctx.restore();
  };

  // Left Eye (Canvas coords: around x: 245, y: 540)
  drawEye(245, 540, 170, 360, true);

  // Right Eye (Canvas coords: around x: 745, y: 560)
  drawEye(745, 560, 170, 360, false);

  const texture = new THREE.CanvasTexture(canvas);
  texture.flipY = false;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates smooth, handsome natural Indian skin texture for Dharshan Selvaraj's face
 * with soft cheekbone warmth, gentle highlights, and healthy skin tones.
 */
export function createRealisticFaceTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Base warm Indian skin tone (matching Dharshan's photo: #c1885b)
  ctx.fillStyle = "#c1885b";
  ctx.fillRect(0, 0, 1024, 1024);

  // Soft overall ambient skin gradient
  const skinGrad = ctx.createRadialGradient(512, 512, 100, 512, 512, 550);
  skinGrad.addColorStop(0, "#c89063");
  skinGrad.addColorStop(0.65, "#be8456");
  skinGrad.addColorStop(1, "#b27648");
  ctx.fillStyle = skinGrad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Soft subtle skin noise
  ctx.fillStyle = "rgba(0, 0, 0, 0.015)";
  for (let n = 0; n < 3000; n++) {
    ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 1.5, 1.5);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.flipY = false;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Transforms the raw character into a realistic Indian human model of Dharshan Selvaraj:
 * - Proportional ears (scales vertices down to natural human ear size)
 * - Photorealistic warm Indian skin tones
 * - Photorealistic human brown eyes
 * - Elegant tailored black suit/blazer & black shirt
 * - Polished leather dress shoes
 */
export function applyDharshanHumanAppearance(character: THREE.Object3D) {
  const eyesTexture = createRealisticEyesTexture();
  const faceTexture = createRealisticFaceTexture();

  // Realistic human skin materials (warm Indian tone matching Dharshan's photo)
  const humanSkinColor = new THREE.Color("#c1885b");
  const humanSkinMaterial = new THREE.MeshStandardMaterial({
    color: humanSkinColor,
    roughness: 0.58,
    metalness: 0.04,
  });

  const faceMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#ffffff"),
    map: faceTexture,
    roughness: 0.56,
    metalness: 0.04,
  });

  const realisticEyeMaterial = new THREE.MeshStandardMaterial({
    map: eyesTexture,
    roughness: 0.04,
    metalness: 0.08,
  });

  // Tailored black blazer & black shirt matching Dharshan's photo
  const blackSuitMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#111013"),
    roughness: 0.82,
    metalness: 0.06,
  });

  const blackTrousersMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#141317"),
    roughness: 0.85,
    metalness: 0.04,
  });

  const blackShoesMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#0a0a0c"),
    roughness: 0.22,
    metalness: 0.25,
  });

  // Rich textured dark hair matching Dharshan's hairstyle
  const darkHairMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#161214"),
    roughness: 0.44,
    metalness: 0.1,
  });

  const darkEyebrowMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#181416"),
    roughness: 0.88,
    metalness: 0.0,
  });

  character.traverse((child: any) => {
    if (!child.isMesh) return;

    // Remove legacy vertex colors that override materials
    if (child.geometry && child.geometry.attributes.color) {
      child.geometry.deleteAttribute("color");
    }

    const rawName = child.name || "";
    const cleanName = rawName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // 1. Face / Head Mesh (Plane007 / Plane.007)
    if (cleanName.includes("plane007") || cleanName.includes("face002")) {
      child.material = faceMaterial;
      child.castShadow = true;
      child.receiveShadow = true;
    }
    // 2. Ears (Ear001 / Ear.001) -> Rescale vertices to realistic human ear size!
    else if (cleanName.includes("ear")) {
      child.material = humanSkinMaterial;
      child.castShadow = true;

      // Reshape vertex positions directly so skinned mesh hugs the skull naturally
      if (child.geometry && child.geometry.attributes.position && !child.userData._earReshaped) {
        child.userData._earReshaped = true;
        const pos = child.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          let x = pos.getX(i);
          let y = pos.getY(i);
          let z = pos.getZ(i);

          if (x > 0) {
            const baseX = 0.88;
            x = baseX + (x - baseX) * 0.42;
          } else {
            const baseX = -0.88;
            x = baseX + (x - baseX) * 0.42;
          }
          const centerY = 13.15;
          y = centerY + (y - centerY) * 0.52;

          pos.setXYZ(i, x, y, z);
        }
        pos.needsUpdate = true;
        child.geometry.computeVertexNormals();
      }
    }
    // 3. Eyes (EYEs001 / EYEs.001)
    else if (cleanName.includes("eye") && !cleanName.includes("brow")) {
      child.material = realisticEyeMaterial;
    }
    // 4. Eyebrows (Eyebrow)
    else if (cleanName.includes("brow")) {
      child.material = darkEyebrowMaterial;
    }
    // 5. Hair (hair)
    else if (cleanName.includes("hair")) {
      child.material = darkHairMaterial;
      child.castShadow = true;
    }
    // 6. Neck & Hands -> Warm matching skin tone
    else if (cleanName.includes("neck") || cleanName.includes("hand")) {
      child.material = humanSkinMaterial;
      child.castShadow = true;
    }
    // 7. Suit / Blazer / Shirt (BODY.SHIRT -> bodyshirt) -> Sharp black executive attire
    else if (cleanName.includes("body") || cleanName.includes("shirt")) {
      child.material = blackSuitMaterial;
      child.castShadow = true;
      child.receiveShadow = true;
    }
    // 8. Trousers / Pants (Pant)
    else if (cleanName.includes("pant")) {
      child.material = blackTrousersMaterial;
      child.castShadow = true;
    }
    // 9. Shoes (Shoe / Sole)
    else if (cleanName.includes("shoe") || cleanName.includes("sole")) {
      child.material = blackShoesMaterial;
    }
  });

  console.log("Successfully transformed 3D character into realistic human Dharshan Selvaraj!");
}
