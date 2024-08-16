import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Nav from "./Nav";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
//import styles from "./Life.module.css";

const getRandomRotation = () => {
  const r = Math.floor(Math.random() * 4);
  return r * (r % 2 == 0 ? 1 : -1);
};

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
  const [screenWidth, setScreenWidth] = useState(0);

  //get images
  useEffect(() => {
    fetch("/article_images/images.json")
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
      setScreenWidth(window.innerWidth);
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

  // Calculate image size based on screen width and number of images
  const max_size = useMemo(() => {
    if (screenWidth === 0 || images.length === 0) return 0;

    // Clamp size between minSize and maxSize
    const size = (0.8 * screenWidth) / Math.pow(images.length, 0.65);
    return size;
  }, [screenWidth, images.length]);

  function get_sign(col, mid_point) {
    if (col == mid_point) {
      return 0;
    } else if (col < mid_point) {
      return -1;
    } else {
      return 1;
    }
  }

  // function distance_to_properties(dist) {
  //   if (dist == 0) {
  //     return [300, 0];
  //   } else if (dist == 1) {
  //     return [200, 1.1];
  //   } else if (dist == 2) {
  //     return [160, 1.15];
  //   } else {
  //     return [140, 1.2];
  //   }
  // }

  function distance_to_properties(dist) {
    if (dist == 0) {
      return [1, 0];
    } else if (dist == 1) {
      return [0.65, 1.1];
    } else if (dist == 2) {
      return [0.55, 1.15];
    } else {
      return [0.45, 1.2];
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

    //const max_size = 300;
    //const scaling_factor = getScalingFactor(num_of_images_in_row, distance);
    //const size = max_size - distance * 100;
    const [size_rate, dist_rate] = distance_to_properties(distance);
    const size = max_size * size_rate;
    const x_plus =
      get_sign(col, mid_point) *
      (size * Math.abs(mid_point - col) * dist_rate + gap);

    const y_plus =
      get_sign(row, mid_point) *
      (size * Math.abs(mid_point - row) * dist_rate + gap);

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
      {/* <TransformWrapper
        centerOnInit
        minScale={0.25}
        initialScale={1}
        limitToBounds={false}
        centerZoomedOut={false}
        pinch={{ step: 12 }}
        wheel={{ step: 0.8 }}
      > */}
      <div className={" relative"}>
        {images.map((image, index) => {
          const [position, size] = getImagePosition(index);
          //const size = 300 - index_scale(index) * 100;
          return (
            <div
              key={image.src}
              style={{
                position: "absolute",
                transform: `translate(-50%, -50%) rotate(${getRandomRotation()}deg)`,
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
                layout="intrinsic"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
      {/* </TransformWrapper> */}
    </section>
  );
}
