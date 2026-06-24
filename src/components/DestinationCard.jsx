function DestinationCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-gray-600">
          {description}
        </p>

        <button className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
          View Tour
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;