// scripts/generateImageList.js
const fs = require("fs");
const path = require("path");

//const imageDir = path.join(__dirname, "../public/projects/");
const imageDir = path.join(__dirname, "../public/life/");
const outputFile = path.join(imageDir, "images.json");

const imageFiles = fs
  .readdirSync(imageDir)
  .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
  .map((file) => ({
    src: `/life/${file}`,
    alt: file.split(".")[0],
    description: "This is the description",
  }));

fs.writeFileSync(outputFile, JSON.stringify(imageFiles, null, 2));

console.log(`Generated image list with ${imageFiles.length} images.`);
