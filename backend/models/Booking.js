const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
    },

    fullName: String,
    email: String,
    phone: String,
    country: String,

    pickup: String,
    destination: String,
    date: String,
    time: String,

    vehicle: String,
    passengers: Number,
    tourType: String,
    paymentMethod: String,

    notes: String,

    price: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      default: "Pending",
    },

    driver: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);