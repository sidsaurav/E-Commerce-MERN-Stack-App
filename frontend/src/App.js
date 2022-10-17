import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
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
                        <Route path='/order/:id' component={OrderScreen} />
                        <Route path='/shipping' component={ShippingScreen} />
                        <Route path='/payment' component={PaymentScreen} />
                        <Route
                            path='/placeorder'
                            component={PlaceOrderScreen}
                        />
                        <Route path='/login' component={LoginScreen} />
                        <Route path='/register' component={RegisterScreen} />
                        <Route path='/profile' component={ProfileScreen} />
                        <Route path='/products/:id' component={ProductScreen} />
                        <Route path='/cart/:id?' component={CartScreen} />
                        <Route path='/' component={HomeScreen} exact />
                    </Switch>
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
