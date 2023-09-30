import React from "react";
import { articles, tags } from "@constants/articles";
import { useState } from "react";

export default function Writings() {
  const [articlesData, setArticles] = useState(articles);
  const [filter, setFilter] = useState("All");

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Writings
        </h1>
      </div>

      {/* Grid starts here */}

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        {/* Filter Options */}

        <div className="p-6 my-6">
          <ul className="flex lg:space-x-8 md:space-x-4 justify-center space-x-2">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className={`rounded-full text-gray-50 font-bold text-xs p-2
                md:text-xl md:p-3 md:px-6 
                 sm:text-l sm:p-3 sm:px-6
                 hover:bg-red-600
                 ${filter === tag ? "bg-red-600" : "bg-red-400"}`}
              >
                <button
                  style={{ fontWeight: "bold" }}
                  onClick={() => {
                    setFilter(tag);
                    let filteredArticles = articles.sort(
                      (a, b) =>
                        new Date(b.fields.date_created) -
                        new Date(a.fields.date_created)
                    );

                    if (tag === "All") {
                      filteredArticles = filteredArticles;
                    } else {
                      filteredArticles = articles.filter((article) =>
                        article.fields.tags.includes(tag)
                      );
                    }

                    setArticles(filteredArticles);
                  }}
                  className=""
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {articlesData.map((article, idx) => (
            <ProjectCard
              title={article.fields.title}
              link={article.fields.medium_link}
              imgUrl={article.fields.image}
              date_created={article.fields.date_created}
              key={article.pk}
              tag={article.fields.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, date_created, tag }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 right-10 text-gray-50 font-bold text-xl bg-red-500 bg-opacity-80 rounded-md px-2 ">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-m drop-shadow-sm">
          {new Date(date_created).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h1>
        <h1
          className={`absolute right-10 bottom-10 text-gray-50 font-bold text-m rounded-md px-2 bg-${tag}`}
          style={{ backgroundColor: tagColors(tag) }}
        >
          {tag}
        </h1>
      </div>
    </a>
  );
};

const tagColors = (tag) => {
  if (tag === "All") {
    return "red-500";
  } else if (tag === "Crypto") {
    return "#FF8303";
  } else if (tag === "Tech") {
    return "#3D84B8";
  } else if (tag === "Programming") {
    return "#01937C";
  } else if (tag === "Productivity") {
    return "#a8026f";
  }
};
