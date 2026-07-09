import useAppData from "../../hooks/useAppData";

function DeleteBookingDialog({ booking, onClose }) {
  const { deleteBooking } = useAppData();

  if (!booking) return null;

  const handleDelete = () => {
    deleteBooking(booking.bookingId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#181818] rounded-3xl border border-red-500/30 p-8 w-full max-w-md text-white">
        <h2 className="text-2xl font-bold text-red-400 mb-4">
          Delete Booking
        </h2>

        <p className="text-gray-300 mb-8">
          Are you sure you want to delete booking{" "}
          <strong>{booking.bookingId}</strong>?
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-500"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBookingDialog;