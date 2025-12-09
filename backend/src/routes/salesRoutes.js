import express from "express";
import { getSales, getSalesStats } from "../controllers/salesController.js";

const router = express.Router();

router.get("/", getSales);
router.get("/stats", getSalesStats);

export default router;
