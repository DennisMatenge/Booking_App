import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../Controllers/room.js";
import { verifyAdmin } from "../Utils/veryfyToken.js";

const router = express.Router();


//Create
router.post("/:hotelid", verifyAdmin, createRoom);

//Update
router.put("/:id", updateRoomAvailability);
router.put("/availability/:id", verifyAdmin, updateRoom);

//Delete
router.delete("/id/hotelid", verifyAdmin, deleteRoom);

//Get
router.get("/:id", verifyAdmin, getRoom);

//Get All
router.get("/", verifyAdmin, getRooms);


export default router;