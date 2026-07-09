import useBookingStep from "../../hooks/useBookingStep";

function BookingSteps() {
  const { currentStep, goToStep } = useBookingStep();

  const steps = [
    { id: 1, title: "Journey" },
    { id: 2, title: "Details" },
    { id: 3, title: "Confirm" },
  ];

  return (
    <div className="flex justify-center gap-6 mb-12">
      {steps.map((step) => (
        <div
          key={step.id}
          onClick={() => goToStep(step.id)}
          className="text-center cursor-pointer"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto transition-all ${
              currentStep === step.id
                ? "bg-[#D4AF37] text-black"
                : "bg-[#181818] border border-[#D4AF37]/30 text-white hover:border-[#D4AF37]"
            }`}
          >
            {step.id}
          </div>

          <p className="mt-2 text-sm text-gray-300">
            {step.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BookingSteps;