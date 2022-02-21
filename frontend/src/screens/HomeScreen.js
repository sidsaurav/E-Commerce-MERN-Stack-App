import { React, useEffect } from 'react'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    console.log(products)
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <Row>
                    {products.map((p) => (
                        <Col key={p._id} sm={6} md={4} lg={3}>
                            <Product product={p} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default HomeScreen
