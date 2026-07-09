import { pricingData } from "../data/pricingData";

export function calculatePrice(booking) {
  const selectedPrice = pricingData.find(
    (item) =>
      item.service === booking.tourType &&
      item.vehicle === booking.vehicle
  );

  if (!selectedPrice) {
    return 0;
  }

  return selectedPrice.price;
}