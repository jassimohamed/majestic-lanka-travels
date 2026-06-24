function VehicleCard({ image, name, seats }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          {name}
        </h3>

        <p className="text-gray-600">
          Capacity: {seats} Passengers
        </p>

        <button className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
  Book Vehicle
</button>
      </div>
    </div>
  );
}

export default VehicleCard;