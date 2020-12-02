import React, { useState, useEffect } from "react"
import { Col, Row, Button, Image, ListGroup, Card } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Rating from "../../UI/Rating/Rating"
import axios from "axios"

const ProductScreen = (props) => {
  const [product, setProduct] = useState({})
  const id = props.match.params.id

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  return (
    <div className='product-screen py-5'>
      <LinkContainer to='/' className='my-3'>
        <Button variant='light'>Back</Button>
      </LinkContainer>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price : ${product.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <Button
                variant='dark'
                disabled={product.countInStock === 0}
                block
                type='button'
              >
                Add To Cart
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
