import { driversData } from "../../data/driversData";

function DriverStats() {
  const total = driversData.length;
  const available = driversData.filter((d) => d.status === "Available").length;
  const onTrip = driversData.filter((d) => d.status === "On Trip").length;

  return (
    <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">Driver Statistics</h2>

      <div className="space-y-4 text-gray-300">
        <p>Total Drivers: <span className="text-[#D4AF37]">{total}</span></p>
        <p>Available: <span className="text-green-400">{available}</span></p>
        <p>On Trip: <span className="text-yellow-400">{onTrip}</span></p>
      </div>
    </div>
  );
}

export default DriverStats;