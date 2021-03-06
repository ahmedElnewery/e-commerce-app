import React, { useEffect,useState } from "react"
import { Col, Row, Button, Image, ListGroup, Card,Form } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Rating from "../../UI/Rating/Rating"
import { useSelector, useDispatch } from "react-redux"
import { getProductDetail } from "./../../../store/actions/productDetailActions"
import Spinner from "./../../UI/Spinner/Spinner"
import Message from "../../UI/Message/Message"
const ProductScreen = (props) => {

const [quantity, setQuantity] = useState(0)  
  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  )
  const id = props.match.params.id
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [id, dispatch])

  return (
    <div className='product-screen py-5'>
      <LinkContainer to='/' className='my-3'>
        <Button variant='light'>Back</Button>
      </LinkContainer>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
              <ListGroup.Item>
                Description : {product.description}
              </ListGroup.Item>
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
                <ListGroup.Item>
                  <Row>
                    <Col>Qunatity:</Col>
                    <Col>
                      {product.countInStock > 0 && (
                        <Form.Control as='select' value={quantity} onChange={(e)=>setQuantity(e.target.value)}> 
                          {[...Array(product.countInStock).keys()].map(x=> 
                            <option key={x+1}>{x+1}</option>
                            )}
                        </Form.Control>
                      )}
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
      )}
    </div>
  )
}

export default ProductScreen
