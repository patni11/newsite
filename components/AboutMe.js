import React from "react";
import userData from "@constants/data";
import { useState } from 'react';

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl sm:text-5xl font-bold py-20 text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20 mx-sm-4">
          <p
            className="md:text-4xl sm:text-2xl text-center font-semibold text-xl -leading-3"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4 pb-20">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div className="mt-8 flex flex-col space-y-4">
              <a
                href={userData.softwareDevResume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                Software Developer Resume
              </a>{" "}
              <a
                href={userData.fullstackDevResume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                Full Stack Developer Resume
              </a>{" "}
              <a
                href={userData.web3DevResume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                Web3 Developer Resume
              </a>{" "}
              <a
                href={"mailto:" + userData.email}
                target="__blank"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-4">
                  Hire Me
                </h1>
              </a>{" "}
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Timeline userData={userData}/>
    </section>
  );
}

const Timeline = ({ userData }) => {
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' or 'oldest'

  // Function to sort the timeline based on the date
  const sortedTimeline = [...userData.timeline].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 h-full mb-24 mt-24">
      <div className="grid grid-cols-1 dark:bg-gray-800 max-w-xl mx-auto">
        <div className="flex justify-between w-full items-center mb-8 p-4">
        <h1 className="text-2xl md:text-2xl sm:text-2xl font-bold text-center md:text-left">
          Timeline
        </h1>

        <button className="relative border p-2 px-4 rounded-md bg-white dark:bg-gray-800 z-10 shadow-md" onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}>
          Sort by {sortOrder === 'newest' ? 'Oldest' : 'Newest'}
        </button>

        </div>

        {sortedTimeline.map((tl, idx) => (
          <div key={idx} className="relative">
            <TimelineCard
              desc={tl.description}
              date={tl.date}
              link={tl.link}
            />
            {idx === sortedTimeline.length - 1 ? null : (
              <div className="relative divider-container flex flex-col items-center -mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full absolute z-10 top-1"></div>
                <div className="w-1 h-12 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
            )}
          </div>
        ))}
              <p className="text-gray-500 text-sm dark:text-gray-300 italics mt-12 w-full text-center">
        will update the rest soon, I am too lazy
      </p>
      </div>
    </div>
  );
};

const TimelineCard = ({ desc, date, link }) => {
  return (
    <div className="relative border p-2 px-4 rounded-md bg-white dark:bg-gray-800 z-10 mx-4 shadow-md">
      <div className="flex justify-between w-full items-center">
      <p className="text-gray-500 text-sm dark:text-gray-300">
        {desc}
      </p>
      <p className="text-xs text-gray-400 text-nowrap">
        {date}
      </p>
      </div>
    </div>
  );
};
