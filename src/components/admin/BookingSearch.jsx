function BookingSearch({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="bg-[#181818] border border-[#D4AF37]/20 rounded-3xl p-6">
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search Booking ID, customer, email, phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37] text-white"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37] text-white"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Driver Assigned">Driver Assigned</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-[#111111] rounded-xl p-4 outline-none border border-transparent focus:border-[#D4AF37] text-white"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highest">Highest Price</option>
          <option value="lowest">Lowest Price</option>
          <option value="date">Trip Date</option>
        </select>
      </div>
    </div>
  );
}

export default BookingSearch;