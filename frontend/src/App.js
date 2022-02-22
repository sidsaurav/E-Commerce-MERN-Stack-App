import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Switch>
                        <Route path='/' component={HomeScreen} exact />
                        <Route
                            path='/products/:id'
                            component={ProductScreen}
                        ></Route>
                        <Route path='/cart/:id?' component={CartScreen}></Route>
                    </Switch>
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
