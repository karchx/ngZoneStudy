import { Room } from "./room.model";
import { User } from "../user/user.model";

export const listRoom = async (_, res) => {
  const rooms = await Room.find()
    .populate("students", "-password -__v")
    .select("-__v")
    .lean()
    .exec();
  return res.status(200).send({ rooms });
};

export const listMyRoom = async (req, res) => {
  const myRooms = await Room.findOne({ students: { $gte: req.user._id } })
    .lean()
    .exec();
  return res.status(200).send({ myRooms });
};

export const create = async (req, res) => {
  const id = req.user._id;

  const studentDB = await User.findById(id).lean().exec();
  const roomNameExist = await Room.findOne({ nameRoom: req.body.nameRoom }).lean().exec();

  try {
    if (studentDB && !roomNameExist) {
      let room = new Room({
        ...req.body
      });
      room.students = studentDB._id;
      room.save();
      return res.status(201).send({ room });
    }

    return res.status(400).end();
  } catch (e) {
    console.error(e);
    return res.status(400).end();
  }
};

export const joinRoom = async (req, res) => {
  const { id } = req.params;

  try {
    const joinRoom = await Room.findByIdAndUpdate(
      id,
      { $push: { students: req.user._id } },
      { new: true }
    );
    return res.status(200).send({ joinRoom });
  } catch (e) {
    console.error(e);
    return res.status(400).end();
  }
};
