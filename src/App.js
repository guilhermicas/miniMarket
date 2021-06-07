import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }
    
    const handleAddToCart = async (productID, quantity) => {
        const { cart } = await commerce.cart.add(productID, quantity)

        setCart(cart)
    }

    const handleUpdateCartQtd = async (productID, quantity) => {
        const { cart } = await commerce.cart.update(productID, {quantity})

        setCart(cart)
    }

    const handleRemoveFromCart = async (productID) => {
        const { cart } = await commerce.cart.remove(productID)

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty()

        setCart(cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[])

    console.log(cart)

    return (
        <Router>
            <>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}
                        handleUpdateCartQtd={handleUpdateCartQtd}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                </Switch>
            </>
        </Router>
    )
}

export default App
