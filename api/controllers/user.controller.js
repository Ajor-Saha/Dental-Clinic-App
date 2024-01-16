const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const User = require("../models/userModel");
const Appointment = require("../models/appointmentModel");

const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// delete user

const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};

const createAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.create(req.body);
    return res.status(201).json(appointment);
  } catch (error) {
    next(error)
  }
}

const getAppointment = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const appointments = await Appointment.find({ userRef: userId});

    return res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
}


module.exports = { updateUser, deleteUser, createAppointment, getAppointment };
