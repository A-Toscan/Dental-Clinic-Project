const { Patients } = require("../models");
const { sendErrorResponse } = require("../_util/sendResponse");
const isPatient = async (req, res, next) => {
  const { user_role } = req;

  if (user_role != 1) {
    return sendErrorResponse(res, 403, "Don't have permission");
  } else next();

  //   try {
  //     const patient = await Patients.findOne({
  //       where: { id_users: req.user_id },
  //     });

  //     if (!patient) {
  //       return sendErrorResponse(res, 403, "Dont have permissions");
  //     }

  //     req.id_patients = patient.id;

  //     next();
  //   } catch (error) {
  //     return sendErrorResponse(res, 500, "Error verifying user", error);
  //   }
};

module.exports = isPatient;
