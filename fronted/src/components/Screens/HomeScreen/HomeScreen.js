import React, { useState, useEffect } from "react"
import Product from "./../../Products/Product/Product"
import axios from "axios"
const initialState = []
const HomeScreen = () => {
  const [products, setproducts] = useState(initialState)

  useEffect(() => {
    const fetchedProducts = async () => {
      const { data } = await axios.get("/api/products")
      setproducts(data)
    }
    fetchedProducts()
  }, [])
  return (
    <div className='home-screen py-5'>
      <h3>Lastest Products</h3>
      <div className='row card-row '>
        {products.map((product) => {
          return (
            <div
              className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex'
              key={product._id}
            >
              <Product product={product} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HomeScreen
