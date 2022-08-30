import { Router } from "express";
import { listRoom, listMyRoom ,create, joinRoom } from "./room.controller";

const router = Router();

router.get("/", listRoom);
router.get("/myroom", listMyRoom);
router.post("/", create);
router.put("/join/:id", joinRoom);
//router.delete("/:id", me);

export default router;
