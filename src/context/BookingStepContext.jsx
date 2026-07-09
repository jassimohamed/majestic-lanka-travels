import { createContext, useState } from "react";

export const BookingStepContext = createContext();

export function BookingStepProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <BookingStepContext.Provider
      value={{ currentStep, nextStep, previousStep, goToStep }}
    >
      {children}
    </BookingStepContext.Provider>
  );
}