export function createWhatsappMessage(booking) {
  return `🚖 *Majestic Lanka Travels & Taxi*

Hello,

I would like to make a booking.

👤 *Customer Details*
• Name: ${booking.fullName || "-"}
• Email: ${booking.email || "-"}
• Phone: ${booking.phone || "-"}
• Country: ${booking.country || "-"}

🛣️ *Journey Details*
• Pickup: ${booking.pickup || "-"}
• Destination: ${booking.destination || "-"}
• Date: ${booking.date || "-"}
• Time: ${booking.time || "-"} ${booking.timePeriod || ""}
• Vehicle: ${booking.vehicle || "-"}
• Passengers: ${booking.passengers || "-"}
• Tour Type: ${booking.tourType || "-"}
• Payment Method: ${booking.paymentMethod || "-"}

📝 *Special Requests*
${booking.notes || "None"}

Please review my request and send me the final price.

Thank you!`;
}