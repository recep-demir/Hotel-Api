"use strict";

const { mongoose } = require("../configs/dbConnection");

const ReservationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room", // Room modeli varsa
    required: true,
  },
  arrival_date: {
    type: Date,
    required: true,
    default:Date.now
  },
  departure_date: {
    type: Date,
    required: true,
    
  },
  guest_number: {
    type: Number,
    required: true,
  },
  night: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalprice: {
    type: Number,
    required: true,
  },
}, { collection: "Reservations", timestamps: true });

module.exports = mongoose.model("Reservation", ReservationSchema);
