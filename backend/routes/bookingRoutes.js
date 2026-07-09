const express = require("express");

const {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

router
  .route("/")
  .get(getBookings)
  .post(createBooking);

router
  .route("/:id")
  .put(updateBooking)
  .delete(deleteBooking);

module.exports = router;