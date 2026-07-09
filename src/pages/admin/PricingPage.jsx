import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import PricingTable from "../../components/admin/PricingTable";
import PriceEditor from "../../components/admin/PriceEditor";
import { pricingData } from "../../data/pricingData";

function PricingPage() {
 const [prices, setPrices] = useState(pricingData);

  const addPrice = (newPrice) => {
    setPrices((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newPrice,
      },
    ]);
  };

  return (
    <DashboardLayout>
      <div className="p-8 bg-[#050505] min-h-screen text-white">
        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Admin Panel
        </p>

        <h1 className="text-5xl font-bold mt-3">
          Pricing Management
        </h1>

        <p className="text-gray-400 mt-4">
          Manage airport transfers, tours and extra charges.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <PricingTable prices={prices} />
          </div>

          <div>
            <PriceEditor addPrice={addPrice} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default PricingPage;