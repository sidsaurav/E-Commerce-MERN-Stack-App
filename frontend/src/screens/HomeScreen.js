import { React, useState, useEffect } from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = '/api/products'
        axios.get(url).then((d) => {
            console.log(d)
            setProducts(d.data)
        })
        console.log('hello')
    })
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((p) => (
                    <Col key={p._id} sm={6} md={4} lg={3}>
                        <Product product={p} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
