const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
      default: "10/12/2023",
      required: true,
    },
    address: {
        type: String,
        required: true
    },
    diagonseWith: {
      type: String,
      required: true,
    },
    scheldule: {
        type: String,
        required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
