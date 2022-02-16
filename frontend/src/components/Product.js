import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <>
            <Card style={{ margin: '15px 0px' }}>
                <Card.Img src={product.image} variant='top' />
                <Card.Body>
                    <Card.Title>
                        <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='div' style={{ marginBottom: '15px' }}>
                        {product.rating} from {product.numReviews} reviews
                    </Card.Text>
                    <Card.Text as='h3'>${product.price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
