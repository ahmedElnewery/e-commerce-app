import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "./../../../store/actions/productsActions"
import Product from "./../../Products/Product/Product"
import Spinner from "./../../UI/Spinner/Spinner"
import Message from './../../UI/Message/Message';

const HomeScreen = () => {
  const { products, error, loading } = useSelector((state) => state.productList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
   
  }, [dispatch])

  return (
    <div className='home-screen py-5'>
      <h3>Lastest Products</h3>
    
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant ="danger">{error}</Message>
      ) : (
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
      )}
    </div>
  )
}
export default HomeScreen
