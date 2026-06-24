import { useState } from "react";

function ImageSlider({ images, alt }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      <img
        src={images[current]}
        alt={alt}
        className="w-full h-64 object-cover rounded-lg"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
          >
            ❯
          </button>
        </>
      )}

      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              current === index
                ? "bg-blue-900"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;