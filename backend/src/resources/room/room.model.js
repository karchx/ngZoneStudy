import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    nameRoom: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    ]
  },
  { timestamps: true }
);

export const Room = mongoose.model("room", roomSchema);
