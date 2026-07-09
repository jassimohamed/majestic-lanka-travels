function BookingStatusBadge({ status }) {
  const colors = {
    Pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Confirmed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Driver Assigned": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Completed: "bg-green-500/20 text-green-400 border-green-500/30",
    Cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm border ${
        colors[status] || colors.Pending
      }`}
    >
      {status}
    </span>
  );
}

export default BookingStatusBadge;