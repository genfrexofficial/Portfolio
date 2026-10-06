const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const encPath = path.join(__dirname, "character.enc");
const glbPath = path.join(__dirname, "character.glb");

const key = crypto.createHash("sha256").update("Character3D#@").digest();
const encryptedData = fs.readFileSync(encPath);
const iv = encryptedData.subarray(0, 16);
const data = encryptedData.subarray(16);

const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
fs.writeFileSync(glbPath, decrypted);

console.log("SUCCESS: Decrypted character.glb size:", decrypted.length);
