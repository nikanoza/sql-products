import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/products-controller.js";

const productRouter = express.Router();

productRouter.get("/products", getAllProducts);
productRouter.post("/products", createProduct);
productRouter.delete("/products/:id", deleteProduct);
productRouter.put("/products/:id", updateProduct);

export default productRouter;
