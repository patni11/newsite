import React, { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "./Nav";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const getRandomRotation = () => {
  const r = Math.floor(Math.random() * 6);
  return r * (r % 2 == 0 ? 1 : -1);
};

function index_scale(idx) {
  if (idx >= 0 && idx <= 8) {
    return 1;
  } else if (idx >= 9 && idx <= 15) {
    return 2;
  } else if (idx >= 16 && idx <= 23) {
    return 3;
  } else if (idx >= 24 && idx <= 32) {
    return 4;
  } else {
    return 5;
  }
}

function index_images(idx) {
  if (idx >= 0 && idx <= 8) {
    return 3;
  } else if (idx >= 8 && idx <= 25) {
    return 5;
  } else if (idx >= 26 && idx <= 49) {
    return 7;
  } else if (idx >= 24 && idx <= 32) {
    return 9;
  } else {
    return 11;
  }
}

export default function LifeMain() {
  const [images, setImages] = useState([]);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  //get images
  useEffect(() => {
    fetch("/projects/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  //update center
  useEffect(() => {
    const updateCenter = () => {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      setCenter({ x, y });
    };

    // Initial call to set center
    updateCenter();

    // Update center when window is resized
    window.addEventListener("resize", updateCenter);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCenter);
    };
  }, []);

  function get_sign(col, mid_point) {
    if (col == mid_point) {
      return 0;
    } else if (col < mid_point) {
      return -1;
    } else {
      return 1;
    }
  }

  function distance_to_properties(dist) {
    if (dist == 0) {
      return [300, 0];
    } else if (dist == 1) {
      return [200, 1.1];
    } else if (dist == 2) {
      return [160, 1.15];
    } else {
      return [140, 1.2];
    }
  }

  const num_of_images_in_row = index_images(images.length - 1);

  const getImagePosition = (index) => {
    //if (index === 0) return { left: center.x, top: center.y }; // center the first image
    const row = Math.floor(index / num_of_images_in_row);
    const col = index % num_of_images_in_row; //- index_scale(index) * 100;
    const gap = 10;
    const mid_point = Math.floor(num_of_images_in_row / 2);
    const distance = Math.floor(
      Math.sqrt(Math.pow(row - mid_point, 2) + Math.pow(col - mid_point, 2))
    );
    const max_size = 300;
    //const scaling_factor = getScalingFactor(num_of_images_in_row, distance);
    //const size = max_size - distance * 100;
    const [size, rate] = distance_to_properties(distance);

    const x_plus =
      get_sign(col, mid_point) *
      (size * Math.abs(mid_point - col) * rate + gap);

    const y_plus =
      get_sign(row, mid_point) *
      (size * Math.abs(mid_point - row) * rate + gap);

    console.log("num_of_images_in_row", num_of_images_in_row, mid_point);

    console.log(
      "Index: ",
      index,
      "\n",
      "distance:",
      distance,
      "\n",
      "size:",
      size,
      "\n",
      "row: ",
      row,
      "col: ",
      col,
      "\n",
      "x plus",
      x_plus,
      "y plus",
      y_plus
    );

    const x = center.x + x_plus; // calculate the x position based on the column and row
    const y = center.y + y_plus; // calculate the y position based on the row
    return [
      {
        left: `${x}px`,
        top: `${y}px`,
        zIndex: num_of_images_in_row - distance,
      },
      size,
    ];
  };

  return (
    <section className="bg-[#F5F5F5] w-screen h-screen dark:bg-gray-800 p-4">
      <Nav />

      {/* <TransformComponent
        wrapperClass="h-full w-full !overflow-visible"
        contentClass="w-[200%] h-[200%]" // Increased size of the container
      > */}
      {/* <div className="w-full h-full relative">
        {images.map((image) => (
          <div
            className="p-2 bg-white shadow-lg"
            key={image.src}
            style={{
              position: "absolute",
              left: `${center.x}px`,
              top: `${center.y}px`,
              transform: `translate(-50%, -50%) rotate(${getRandomRotation()}deg)`,
            }}
          >
            <Image src={image.src} alt={image.alt} width={300} height={300} />
          </div>
        ))}
      </div> */}

      <div className="w-full h-full relative">
        {/* {images.map((image, index) => {
          const size = 300 - index_scale(index) * 100;
          const scale = 300 * (1 - index_scale(index) * 0.08);
          const x = center.x - odd_even(index) * size;
          //const y = odd_even(index) * (center.y - index_scale(index) * img_size);
          const y = center.y - odd_even(index) * size;
          // scale(${scale})
          return (
            <div
              key={image.src}
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${getRandomRotation()}deg)`, // adjust size and rotation based on index
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={size}
                height={size}
                // layout={"responsive"}
              />
            </div>
          );
        })} */}

        {images.map((image, index) => {
          const [position, size] = getImagePosition(index);
          //const size = 300 - index_scale(index) * 100;
          return (
            <div
              key={image.src}
              style={{
                position: "absolute",
                transform: `translate(-50%, -50%) rotate(${getRandomRotation()}deg)`,
                //transform: `translate(-50%, -50%)`,

                ...position,
              }}
              className="p-2 bg-white shadow-xl rounded-sm cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={size}
                height={size}
                className="rounded-sm"
              />
            </div>
          );
        })}
      </div>

      {/* </TransformComponent> */}
    </section>
  );
}

const ImageWrapper = ({ imageSrc, imageAlt, left, top, transform }) => {
  return (
    <TransformComponent
      wrapperClass="h-full w-full !overflow-visible"
      contentClass="w-[200%] h-[200%]" // Increased size of the container
    >
      <div
        className="p-2 bg-white shadow-lg"
        key={imageSrc}
        style={{
          position: "absolute",
          left: `${left}`,
          top: `${top}`,
          transform: `${transform}`,
        }}
      >
        <Image src={imageSrc} alt={imageAlt} width={300} height={300} />
      </div>
    </TransformComponent>
  );
};
