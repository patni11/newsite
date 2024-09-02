import Image from "next/image";

function ImageCard({ source, alt }) {
  return <Image src={source} alt={alt} width={300} height={200} />;
}

export default ImageCard;
