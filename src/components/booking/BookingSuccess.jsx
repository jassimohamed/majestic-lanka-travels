function BookingSuccess() {
  return (
    <div className="bg-[#181818] border border-green-500/30 rounded-3xl p-8 text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-4">
        Booking Request Ready
      </h2>

      <p className="text-gray-300">
        Your booking message is ready to send via WhatsApp.
      </p>
    </div>
  );
}

export default BookingSuccess;