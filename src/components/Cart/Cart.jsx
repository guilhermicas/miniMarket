import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './styles'
import CartItem from './CartItem/CartItem'

import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCartQtd, handleRemoveFromCart, handleAddToCart, handleEmptyCart }) => {
    const classes = useStyles()

    const EmptyCart = () => (
        <Typography variant="subtitle1">Não tem items no seu carrinho, <Link to="/" className={classes.link}>clique aqui</Link> para começar a adicionar!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleUpdateCartQtd={handleUpdateCartQtd} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4"> Total: {cart.subtotal.formatted_with_symbol} </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Esvaziar Carrinho</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>O seu carrinho</Typography>
            { !cart.total_items ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
