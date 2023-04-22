const express = require('express');
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const userController = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");
const isDoctor = require("../middleware/isDoctor");
const isAdmin = require("../middleware/isAdmin");
const isPatient = require("../middleware/isPatient");

router.get("/profile", verifyToken, userController.getProfile);
router.put("/profile/update", verifyToken, userController.updateProfile);
router.get(
  "/profile/checkallpatients",
  verifyToken,
  isAdmin,
  userController.getAllPatients
);
router.get(
    "/profile/checkalldoctors",
    verifyToken,
    isAdmin,
    userController.getAllDoctors
  );
// router.get(
//   "/appointments/checkall",
//   verifyToken,
//   isPatient,
//   userController.getAppointmentsByPatient
// );
// router.get(
//   "/appointments/checkall/doctor",
//   verifyToken,
//   isDoctor,
//   userController.getAllAppointmentsByDoctor
// );

module.exports = router;