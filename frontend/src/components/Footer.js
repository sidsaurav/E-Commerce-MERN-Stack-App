import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../bootstrap.min.css'
const Footer = () => {
    return (
        <footer style={{ marginTop: '30px', marginBottom: '15px' }}>
            <Container>
                <Row>
                    <Col className='text-center'>Copyright &copy; ProShop</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
