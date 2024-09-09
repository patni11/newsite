import React, { useMemo } from "react";
import Image from "next/image";

const getRandomRotation = () => {
  return Math.floor(Math.random() * 7) - 3; // Random rotation between -3 and 3 degrees
};

function calculateDiamondPositions(imageCount) {
  const positions = [];
  const size = Math.ceil(Math.sqrt(imageCount * 2));
  const center = Math.floor(size / 2);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (Math.abs(x - center) + Math.abs(y - center) <= center) {
        positions.push([x - center, y - center]);
      }
    }
  }

  // Sort positions from center outwards
  positions.sort((a, b) => {
    const distA = Math.abs(a[0]) + Math.abs(a[1]);
    const distB = Math.abs(b[0]) + Math.abs(b[1]);
    return distA - distB;
  });

  return positions.slice(0, imageCount);
}

function calculateImageSize(distance, maxSize, minSize) {
  return Math.max(minSize, maxSize - distance * 15); // Decrease size by 15px per step
}

export default function ScalableGridDiamondLayout({
  images,
  center,
  screenWidth,
  imageCount,
}) {
  const positions = useMemo(
    () => calculateDiamondPositions(imageCount),
    [imageCount]
  );

  const maxSize = useMemo(() => {
    if (screenWidth === 0 || images.length === 0) return 0;
    return Math.min(screenWidth * 0.18, 180); // Max size is 18% of screen width or 180px, whichever is smaller
  }, [screenWidth, images.length]);

  const minSize = maxSize * 0.3; // Minimum size is 30% of max size
  const cellSize = maxSize * 0.85; // Cell size is 85% of max image size to allow for overlap

  return (
    <section className="bg-transparent w-screen h-screen dark:bg-transparent p-4">
      <div className="relative">
        {images.slice(0, imageCount).map((image, index) => {
          if (index >= positions.length) return null;
          const [x, y] = positions[index];
          const distance = Math.abs(x) + Math.abs(y);
          const size = calculateImageSize(distance, maxSize, minSize);

          return (
            <div
              id={`element${index}`}
              key={image.src}
              style={{
                position: "absolute",
                left: `${center.x + x * cellSize}px`,
                top: `${center.y + y * cellSize}px`,
                transform: `translate(-50%, -50%) rotate(${getRandomRotation()}deg)`,
                zIndex: positions.length - distance,
              }}
              className="p-1 bg-white shadow-xl rounded-sm cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={size}
                height={size}
                className="rounded-sm"
                layout="intrinsic"
                objectFit="cover"
                quality={100}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
