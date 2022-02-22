import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProductScreen = ({ match }) => {
    const id = match.params.id

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, product, error } = productDetails
    console.log(productDetails)

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch])
    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <>
                    <Button
                        as={Link}
                        to='/'
                        variant='light'
                        style={{ margin: '5px' }}
                    >
                        Go Back
                    </Button>
                    <Row>
                        <Col md={6}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fluid
                            />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating
                                        value={product.rating}
                                        numReviews={product.numReviews}
                                    ></Rating>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: $ {product.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price: </Col>
                                                <Col>$ {product.price}</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status: </Col>
                                                <Col>
                                                    {product.countInStock > 0
                                                        ? 'In Stock'
                                                        : 'Out of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Button
                                                style={{ width: '100%' }}
                                                disabled={
                                                    product.countInStock < 1
                                                }
                                            >
                                                Add To Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </div>
    )
}

export default ProductScreen
