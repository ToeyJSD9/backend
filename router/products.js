import express from "express";
import {
  getAllProducts,
  getProductById,
  newProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", newProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
