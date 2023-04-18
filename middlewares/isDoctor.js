const { Doctors } = require("../models");
const { sendErrorResponse } = require("../_util/sendResponse");
const isDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctors.findOne({
      where: { id_users: req.user_id },
    });

    if (!doctor) {
      return sendErrorResponse(res, 403, "Dont have permissions");
    }

    req.id_doctors = doctor.id;

    next();
  } catch (error) {
    return sendErrorResponse(res, 500, "Error verifying user", error);
  }
};

module.exports = isDoctor;