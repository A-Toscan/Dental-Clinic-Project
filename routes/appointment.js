const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

/* GET users listing */

// Create appointment
router.post(
  "/createAppointment",
  verifyToken,
  appointmentController.createAppointment
);
// Delete appointment
router.delete(
  "/deleteAppointment/:id",
  verifyToken,
  appointmentController.deleteAppointment
);
// Modify appointment
router.put(
  "/updateAppointment/:id",
  verifyToken,
  appointmentController.updateAppointment
);
// See appointment as Patient
router.get("/appointment", verifyToken, appointmentController.getAppointment);
// See appointment as Doctor
router.get(
  "/appointment",
  verifyToken,
  appointmentController.getDoctorAppointment
);

module.exports = router;
