import express from "express";
import {
  getAll,
  createCustomer,
  getById,
  updateById,
} from "../controller/customerController.js";

export const router = express.Router();

router.get("/", getAll);
router.post("/", createCustomer);
router.get("/:id",getById)
router.patch("/:id",updateById)