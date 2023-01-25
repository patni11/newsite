import React from "react";
import userData from "@constants/data";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative container flex flex-row justify-center items-start overflow-hidden mx-auto max-w-6xl">
      <div
        className="md:w-1/2 sm:w-full sm:mx-auto md:text-left mt-20 px-4"
        style={{ marginLeft: "0px" }}
      >
        {/* Text container */}

        <h1
          className="md:text-left md:text-7xl md:my-0
         text-5xl text-center mx-auto
         max-w-lg font-bold my-20 text-gray-600 dark:text-gray-400"
        >
          👋 Hi, I am <span>Shubh</span>
        </h1>

        <div
          className="md:text-left md:text-3xl m-5 
          text-2xl text-center mx-auto"
          style={{ marginLeft: "0px" }}
        >
          <p>I am a Developer and Blogger.</p>

          <p>
            On this site, you can find my
            <span className="hover:bg-red-500 rounded-md px-1 py-1  hover:text-gray-50">
              <Link href="/writing"> Writings,</Link>{" "}
            </span>
            <span className="hover:bg-red-500 rounded-md px-1 py-1  hover:text-gray-50">
              <Link href="/projects">Projects, </Link>{" "}
            </span>
            and
            <span className="hover:bg-red-500 rounded-md px-1 py-1  hover:text-gray-50">
              <Link href="/experience"> Experience </Link>{" "}
            </span>
          </p>
        </div>
      </div>
      {/* Image container */}
      <div className="hidden md:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4"></div>
        </div>
      </div>
    </div>
  );
}
