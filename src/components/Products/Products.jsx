import React from "react"
import { Grid }from "@material-ui/core"

import Product from "./Product/Product"

import useStyles from './styles'

const products = [
    {id:1, name:"laptop", description:"A good laptop", price:"$10", image:"https://pngimg.com/uploads/laptop/laptop_PNG5928.png"},
    {id:2, name:"Iphone", description:"A good phone", price:"$5", image:"https://phonesdata.com/files/models/Nokia-5800-XpressMusic-736.jpg"},
    {id:3, name:"Headphones", description:"High quality headphones", price:"$10", image:"https://i5.walmartimages.com/asr/c2a3e351-6e63-431f-ac63-7413ebe48d2d_1.79142d0acd3296ec714280ba991db136.jpeg"},
]


const Products = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
