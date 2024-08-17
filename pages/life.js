import React from "react";
//import ContainerBlock from "../components/ContainerBlock";
import LifeMain from "../components/Life/LifeMain";
import Nav from "@components/Nav";
import SmallSizeImage from "@components/Life/SmallSizeImage";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
export default function life() {
  return (
    <main>
      <div className="hidden md:flex h-full w-full dark:bg-gray-800 bg-[#F5F5F5]">
        <Nav />
        <TransformWrapper
          centerOnInit
          minScale={0.25}
          initialScale={1}
          limitToBounds={false}
          centerZoomedOut={false}
          pinch={{ step: 12 }}
          wheel={{ step: 0.8 }}
        >
          <TransformComponent wrapperClass="h-full w-full overflow-visible #{!important}">
            <LifeMain />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div className="h-full w-full md:hidden">
        <SmallSizeImage />
      </div>
    </main>
  );
}
