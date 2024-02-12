const express = require("express");
const {
  updateUser,
  deleteUser,
  createAppointment,
  getAppointment,
} = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.post("/createAppointment", verifyToken, createAppointment);
router.get("/getAppointments", verifyToken, getAppointment);
module.exports = router;
