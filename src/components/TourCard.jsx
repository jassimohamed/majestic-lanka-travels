function TourCard({ image, title, duration, description }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-amber-600 font-semibold mb-3">
          {duration}
        </p>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600">
          View Tour
        </button>
      </div>
    </div>
  );
}

export default TourCard;