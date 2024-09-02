import React, { useState, useEffect } from "react";
//import ContainerBlock from "../components/ContainerBlock";
import LifeMain from "../components/Life/LifeMain";
import "@components/Life/Life.module.css";
import Nav from "@components/Nav";
import { FileEdit, HandIcon } from "lucide-react";
import SmallSizeImage from "@components/Life/SmallSizeImage";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
//import { Slider } from "@/components/ui/slider";
export default function life() {
  const [images, setImages] = useState([]);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [screenWidth, setScreenWidth] = useState(0);
  const [imageCount, setImageCount] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  //get images
  useEffect(() => {
    fetch("/life/images.json")
      .then((response) => response.json())
      .then((data) => {
        // Randomize the images
        const shuffledImages = data.sort(() => Math.random() - 0.5);
        setImages(shuffledImages);
        setImageCount(shuffledImages.length);
      })
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setImageCount(parseInt(value, 10)); // Update number of images
    // Calculate the percentage for the background gradient
    const percentage = (value / e.target.max) * 100;

    // Set the slider background size based on the value
    e.target.style.setProperty("--percent", `${percentage}%`);
  };

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

  function toggleInteraction() {
    setIsInteracting(!isInteracting);
  }

  return (
    <main>
      <div className="hidden md:flex h-full w-full dark:bg-gray-800 bg-[#F5F5F5]">
        <TransformWrapper
          centerOnInit
          minScale={0.25}
          initialScale={0.8}
          limitToBounds={true}
          centerZoomedOut={true}
          pinch={{ step: 12 }}
          wheel={{ step: 0.8 }}
          disabled={isInteracting}
        >
          {({ zoomToElement, resetTransform }) => (
            <TransformComponent wrapperClass="h-[90%] w-[90%] overflow-visible #{!important}">
              <LifeMain
                images={images}
                center={center}
                screenWidth={screenWidth}
                imageCount={imageCount}
                zoomToElement={zoomToElement}
                resetTransform={resetTransform}
              />
            </TransformComponent>
          )}
        </TransformWrapper>
        <div className="absolute top-0 w-full">
          <Nav />
        </div>
        {/* 
        <input
          type="range"
          min="1"
          max={images.length}
          value={imageCount}
          onChange={handleSliderChange}
          className="custom-slider absolute bottom-10 left-[50%]"
          style={{ transform: "translate:(-50%,0%)" }}
        /> */}

        <div
          className="absolute bottom-10 left-[50%]"
          style={{ transform: "translateX(-50%)" }}
        >
          <input
            type="range"
            min="1"
            max={images.length}
            value={imageCount}
            onChange={handleSliderChange}
          />
        </div>
      </div>
      <div className="h-full w-full md:hidden">
        <SmallSizeImage images={images} screenWidth={screenWidth} />
      </div>
    </main>
  );
}
