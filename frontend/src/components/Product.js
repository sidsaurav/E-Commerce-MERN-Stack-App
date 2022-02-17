import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <>
            <Card style={{ margin: '15px 0px' }}>
                <Link
                    style={{ textDecoration: 'none' }}
                    to={`/products/${product._id}`}
                >
                    <Card.Img src={product.image} variant='top' />
                </Link>
                <Card.Body>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/products/${product._id}`}
                    >
                        <Card.Title style={{ margin: '10px 0px' }}>
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as='div' style={{ margin: '20px 0px' }}>
                        <Rating
                            value={product.rating}
                            numReviews={product.numReviews}
                        />
                    </Card.Text>
                    <Card.Text as='h3'>${product.price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
