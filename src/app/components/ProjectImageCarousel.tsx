import Image from "next/image";

interface ProjectImageCarouselProps {
  images: { src: string; alt: string }[];
}

export default function ProjectImageCarousel({ images }: ProjectImageCarouselProps) {
  return (
    <div className="mt-6 overflow-x-auto pb-2">
      <div className="flex gap-4 w-max">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={180}
            height={360}
            className="rounded-lg border border-gray-300 shadow-md"
          />
        ))}
      </div>
    </div>
  );
}