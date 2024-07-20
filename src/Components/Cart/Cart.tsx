import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { styles } from './CartStyles.tsx'
import Header from '../Header/Header.tsx';
import CartItem from '../CartItem/CartItem.tsx';



function Cart() {
    const cartList = JSON.parse(localStorage.getItem('cartList') || '[]')
    const priceList = cartList.length !== 0 && cartList.map(eachProduct=>eachProduct.price)
    const totalPrice = cartList.length !==0 && priceList.reduce((prev, cur) => prev+cur)

    const handleCartList = (id: number) => {
        window.location.reload()
        const filteredList = cartList.filter(eachProduct => eachProduct.id !== id)
        localStorage.setItem('cartList', JSON.stringify(filteredList))
    }

  return (
   
    <>       
        <Header />
        { cartList.length !== 0 ?
            <Box sx={styles.products_page}>
                <Typography variant='h2'>Cart Items</Typography>
                <Grid container component='ul' sx={styles.products_container}>                    
                    {cartList.map(eachProduct => (
                        <CartItem eachProduct={eachProduct} key={eachProduct.id} handleCartList={handleCartList}/>
                    ))}
                </Grid>

                <Box sx={styles.prices_container}>
                    <Typography variant='h6'>Number of Items : {cartList.length}</Typography>
                    <Typography variant='h6'>Product Price : $ {totalPrice}</Typography>
                    <Typography >Shipping Price : $ 50</Typography>
                    <Typography >Secure packing : $ 29</Typography>
                    <Typography variant='h5' >Total Order: {totalPrice+50+29}</Typography>
                </Box>
            </Box> 
         :
         <>
            <Box sx={styles.empty_cart}><Typography variant='h5'>Your Cart is Empty</Typography></Box>
         </>

        }
    </>   
  )
}

export default Cart