const express = require("express")
const Product = require("../models/productModel.js")
const router = express.Router()
const asyncHandler = require("express-async-handler")

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
      res.json(product)
    } catch (error) {
      res.status(404)
      throw new Error(`product not found`)
    }
  })
)

module.exports = router
