import Image from "next/image";

function ImageCard({ image }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 opacity-75">
      <div className="relative w-full max-w-sm rounded-md p-4 bg-white shadow-lg">
        <button
          type="button"
          className="absolute top-2 right-2 p-1 bg-red-700 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => alert("Close button clicked")}
        >
          Close
        </button>
        <div className="flex justify-center">
          <Image src={image.src} alt={image.alt} width={300} height={200} />
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
