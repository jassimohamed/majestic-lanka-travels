import DashboardLayout from "../../layouts/DashboardLayout";

function AIAssistantPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        AI Travel Assistant
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          Ask AI Anything
        </h2>

        <textarea
          placeholder="Create a 7-day Sri Lanka itinerary for a family..."
          className="w-full border rounded-lg p-4 h-40"
        />

        <button className="mt-4 bg-amber-500 text-white px-6 py-3 rounded-lg">
          Generate
        </button>

        <div className="mt-8 bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold mb-3">
            AI Response
          </h3>

          <p>
            Your AI-generated itinerary will appear here.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AIAssistantPage;