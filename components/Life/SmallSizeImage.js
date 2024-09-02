import React, { useMemo } from "react";
import Navbar from "@components/Navbar";
import Image from "next/image";

const getRandomRotation = () => {
  const r = Math.floor(Math.random() * 6);
  return r * (r % 2 == 0 ? 1 : -1);
};

export default function SmallSizeImage({ images, screenWidth }) {
  const size = useMemo(() => {
    if (screenWidth === 0) return 0;

    return screenWidth / 2;
  }, [screenWidth]);

  return (
    <main className="dark:bg-gray-800 w-full overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-2 gap-1 mx-2 w-full justify-items-center">
        {images.map((image, index) => {
          return (
            <div
              key={image.src}
              className="p-1 bg-white shadow-xl rounded-sm cursor-pointer w-fit"
              style={{
                transform: `rotate(${getRandomRotation()}deg)`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={size}
                height={size}
                className="rounded-sm"
                layout="intrinsic"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
