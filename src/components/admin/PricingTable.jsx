function PricingTable({ prices }) {
  return (
    <div className="bg-[#181818] rounded-3xl border border-[#D4AF37]/20 p-8">
      <h2 className="text-2xl font-bold mb-8">
        Current Prices
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#D4AF37]/20">
            <th className="text-left py-4">Service</th>
            <th className="text-left py-4">Vehicle</th>
            <th className="text-left py-4">Price</th>
          </tr>
        </thead>

        <tbody>
          {prices.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#D4AF37]/10 hover:bg-[#222222]"
            >
              <td className="py-5">{item.service}</td>
              <td>{item.vehicle}</td>
              <td className="text-[#D4AF37] font-semibold">
                LKR {Number(item.price).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PricingTable;