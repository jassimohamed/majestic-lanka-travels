import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function AIAssistantPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const generateResponse = () => {
    const q = question.toLowerCase();

    if (!q.trim()) {
      alert("Please enter your question.");
      return;
    }

    if (q.includes("airport")) {
      setResponse(
        "For airport transfers, please share your pickup airport, destination, date, time, passenger count, and luggage details. Our team will confirm the best vehicle and final price via WhatsApp."
      );
    } else if (q.includes("price") || q.includes("cost")) {
      setResponse(
        "Prices are not fixed on the website because each trip depends on pickup, destination, vehicle, passengers, luggage, and date. Please submit a booking request and we will send the final quotation via WhatsApp."
      );
    } else if (q.includes("vehicle") || q.includes("car") || q.includes("van")) {
      setResponse(
        "For 1–3 passengers, Toyota Prius, Honda Vezel, or Toyota Raize is suitable. For 4–5 passengers, Suzuki Every is better. For larger groups, we recommend arranging a van."
      );
    } else if (q.includes("sigiriya")) {
      setResponse(
        "Sigiriya is one of Sri Lanka's most famous attractions. A day tour can include Sigiriya Rock Fortress, Dambulla Cave Temple, village tour, and local lunch. Early morning departure is recommended."
      );
    } else if (q.includes("kandy")) {
      setResponse(
        "A Kandy tour can include Temple of the Tooth, Peradeniya Botanical Garden, Kandy Lake, cultural show, and viewpoint. It is suitable for a full-day tour from Colombo."
      );
    } else if (q.includes("ella")) {
      setResponse(
        "Ella is best for nature lovers. Popular places include Nine Arch Bridge, Little Adam's Peak, Ravana Falls, and Ella Gap. It is better as a 2-day or 3-day tour."
      );
    } else if (q.includes("yala")) {
      setResponse(
        "Yala Safari is ideal for wildlife lovers. The best safari times are early morning or late afternoon. We can arrange transport and safari jeep coordination."
      );
    } else if (q.includes("galle")) {
      setResponse(
        "A Galle tour can include Galle Fort, lighthouse, Dutch architecture, beaches, turtle hatchery, and Madu River boat safari depending on your schedule."
      );
    } else if (q.includes("booking") || q.includes("book")) {
      setResponse(
        "To make a booking, fill the booking form with your journey details and send it via WhatsApp. Our admin team will review your request and confirm availability and final price."
      );
    } else if (q.includes("payment")) {
      setResponse(
        "Payment can be discussed after booking confirmation. Cash payment is available, and online/card payment options can be arranged depending on the booking."
      );
    } else {
      setResponse(
        "Thank you for your question. For the best answer, please mention your destination, date, number of passengers, preferred vehicle, and any special requests. Our team can then guide you properly."
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8 bg-[#050505] min-h-screen text-white">
        <p className="uppercase tracking-[4px] text-[#D4AF37]">
          Travel Support
        </p>

        <h1 className="text-5xl font-bold mt-3 mb-10">
          AI Travel Assistant
        </h1>

        <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-8">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about tours, airport transfer, vehicles, pricing, or booking..."
            className="w-full h-44 bg-[#111111] rounded-2xl p-5 outline-none border border-transparent focus:border-[#D4AF37] resize-none"
          />

          <button
            onClick={generateResponse}
            className="mt-6 bg-[#D4AF37] hover:bg-[#F5D76E] text-black px-8 py-4 rounded-xl font-bold transition"
          >
            Generate Answer
          </button>

          <div className="mt-10 bg-[#111111] rounded-2xl p-6 min-h-[220px] whitespace-pre-wrap">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-5">
              Assistant Response
            </h2>

            {response ? (
              <p className="text-gray-300 leading-8">{response}</p>
            ) : (
              <p className="text-gray-500">
                Your answer will appear here.
              </p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AIAssistantPage;