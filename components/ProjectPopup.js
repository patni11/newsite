// Popup.js

import React, { useRef, useEffect } from "react";

const ProjectPopup = ({
  isOpen,
  onClose,
  title,
  description,
  link,
  videoLink,
}) => {
  const popupRef = useRef(null);

  const handleClose = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClose);
    } else {
      document.removeEventListener("mousedown", handleClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "flex z-5" : "hidden"
      } items-center justify-center bg-black bg-opacity-50`}
      style={{ zIndex: isOpen ? 2 : -1 }}
    >
      <div
        ref={popupRef}
        className="dark:bg-gray-800 bg-white p-4 md:p-8 flex flex-col lg:flex-row w-3/4 lg:w-11/12 min-[1500px]:3/4 lg:max-h-[50%] rounded-lg"
      >
        {/* Left half - Video */}
        <div className="w-full mb-4 lg:mb-0 lg:w-1/2 lg:mr-2 min-[1500px]:mr-8">
          {/* Your video component goes here */}
          {videoLink ? (
            <iframe
              className="w-[100%] aspect-video"
              src={videoLink}
              title="Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex justify-center h-full">
              <h2 className="my-auto text-xs md:text-2xl text-gray-500">
                <span className="italic">
                  Will upload the video for this proj soon
                </span>{" "}
                😊
              </h2>
            </div>
          )}
        </div>

        {/* Right half - Title, Description, Button */}
        <div className="w-full lg:w-1/2 lg:px-4 lg:ml-2 min-[1500px]:ml-8 flex flex-col justify-between lg:max-h-[50%]">
          <div className="flex flex-col max-h-[85%]">
            <h2 className="text-lg md:text-2xl min-[1500px]:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p
              className="text-sm md:text-md min-[1500px]:text-lg text-gray-600 mb-4 max-h-48 lg:max-h-max overflow-y-auto dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
          <a
            className="mx-auto text-lg min-[1500px]:text-2xl bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 font-bold"
            href={link}
            target="blank"
          >
            Show Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
