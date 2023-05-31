import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.js";
import { verifyAdmin, verifyUser } from "../Utils/veryfyToken.js";

// import { verifyAdmin, verifyToken, verifyUser } from "../Utils/veryfyToken.js";

const router = express.Router();

// router.get("/checkauthentification", verifyToken, (req,res, next)=>{
//     res.send("hello, user, you are logged in")
// });


// router.get("/checkuser/:id", verifyUser, (req,res, next)=>{
//     res.send("hello, user, you are logged in and you can delete your account")
// });


// router.get("/checkadmin/:id", verifyAdmin, (req,res, next)=>{
//     res.send("hello, admin, you are logged in and you can delete all accounts")
// });

//Update
router.put("/id", verifyUser, updateUser);

//Delete
router.delete("/id", verifyUser, deleteUser);

//Get
router.get("/id", verifyUser, getUser);

//Get All
router.get("/", verifyAdmin, getUsers);


export default router;