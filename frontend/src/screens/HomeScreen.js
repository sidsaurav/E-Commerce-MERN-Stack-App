import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((p) => (
                    <Col sm={6} md={4} lg={3}>
                        <Product product={p} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
