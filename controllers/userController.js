const { User, Appointment, Client } = require("../models");

const userController = {};

userController.getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId,
            {
                attributes: { exclude: ["password", "role_id"] }
            }
        )
        return res.json(
            {
                success: true,
                message: "Here is the profile",
                data: user
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
    }
}

userController.updateProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const nombre = req.body.nombre;
        const apellidos = req.body.apellidos;
        const telefono = req.body.telefono;
        const email = req.body.email;
        const updateProfile = await User.update({ nombre: nombre, apellidos: apellidos, telefono: telefono, email: email }, { where: { id: userId } })

        return res.json(
            {
                success: true,
                message: "Profile updated",
                data: updateProfile
            }
        );

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );

    }
}

userController.getAppointmentsByUser = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({ where: { client_id: req.clientId } });
        return res.json(
            {
                success: true,
                message: "Here are your appointments",
                data: appointments
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );

    }
}

userController.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll()
        return res.json(
            {
                success: true,
                message: "Here are all the appointments",
                data: appointments
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );

    }
}

userController.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll(
            {
                include: {
                    model: User,
                    attributes: { exclude: ["password", "role_id"] }
                }
            }
        )
        return res.json(
            {
                success: true,
                message: "Here are all the clients",
                data: clients
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );

    }
}


module.exports = userController;