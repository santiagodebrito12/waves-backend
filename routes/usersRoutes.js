import express from "express";
import { getUsers, setNewUser } from "../controllers/usersControllers.js";

const router = express.Router();

//routing
router.get('/users',getUsers);
router.post('/setuser',setNewUser);

export default router;

