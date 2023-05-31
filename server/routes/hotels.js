import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../Controllers/hotel.js";
import { verifyAdmin } from "../Utils/veryfyToken.js";


const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel);

//Update
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//Get
router.get("/find/:id", verifyAdmin, getHotel);

//Get All
router.get("/", verifyAdmin, getHotels);
router.get("/countByCity", verifyAdmin, countByCity);
router.get("/countByType", verifyAdmin, countByType);
router.get("/room/:id", getHotelRooms);


export default router;