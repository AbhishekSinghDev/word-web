import express from "express";
import verifyToken from "../middleware/verify-token.js";
import { getUserDetails } from "../controller/user-controller.js";

const router = express.Router();

router.post("/", verifyToken, getUserDetails);

export default router;
