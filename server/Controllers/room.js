import Room from "../Models/Room.js";
import { createError } from "../Utils/error.js";
import Hotel from "../Models/Hotels.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom._id},
        });
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, 
            { $set: req.body},
             {new: true});
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    };
};

export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne({"roomNumbers._id": req.params.id},{
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
            },
        })
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    };
};


export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id,);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id},
            });
            res.status(200).json(savedRoom);
        } catch (error) {
            next(error);
        }
           res.status(200).json("deleted seccess");
       } catch (error) {
        next(error);
    };
};

export const getRoom = async (req, res, next) => {
    try {
        const room = await Hotel.findById(req.params.id)
        res.status(200).json(room);
    } catch (error) {
        next(error);
    };
};

export const getRooms = async (req, res, next) => {
    const failed = true;

    if(failed) return next(createError(401, "you are not authenticated"))
    try {
        const rooms = await Room.find(req.params.id)
        res.status(200).json(rooms);
    } catch (error) {
        next(error);
    };
};