function PriceCard({ price }) {
  return (
    <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-3xl p-6 mt-6">
      <p className="text-gray-400 mb-2">Estimated Price</p>

      <h3 className="text-4xl font-bold text-[#D4AF37]">
        LKR {price.toLocaleString()}
      </h3>

      <ul className="text-gray-400 mt-5 space-y-2">
        <li>✓ Driver included</li>
        <li>✓ Fuel included</li>
        <li>✓ Air-conditioned vehicle</li>
        <li>✓ Final price will be confirmed by admin</li>
      </ul>
    </div>
  );
}

export default PriceCard;