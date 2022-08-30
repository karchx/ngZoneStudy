import { Room } from "./room.model";
import { User } from "../user/user.model";

export const create = async (req, res) => {
  const id = req.user._id;
  let room = new Room({
    ...req.body
  });
  const studentDB = await User.findById(id).exec();

  try {
    if (studentDB) {
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

export const joinRoom = async (req, res) => {};
