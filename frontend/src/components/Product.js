import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <>
            <Card style={{ margin: '15px 0px' }}>
                <Card.Img src={product.image} variant='top' />
                <Card.Body>
                    <Card.Title style={{ margin: '10px 0px' }}>
                        <strong>{product.name}</strong>
                    </Card.Title>
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
