import express from "express";
import verifyToken from "../middleware/verify-token.js";
import {
  getSingleUserDetail,
  getUserDetails,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/", verifyToken, getUserDetails);
router.get("/:id", getSingleUserDetail);

export default router;
