import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import { styles } from './CartItemStyles.tsx'
import {Close, Star} from '@mui/icons-material'

interface IProps{
    eachProduct:{
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: string[],
    },
    handleCartList: (id:number) => void,
}

function CartItem(props: IProps) {
    const eachProductDetails = props.eachProduct
    const id = eachProductDetails.id

    const onClickRemoveItem = () => {
        props.handleCartList(id)
    }

   return (
   <>
        <Grid  xs={12} sm={6} md={6} lg={6} >            
            <Paper component='li' sx={styles.item_container}>
                <Link to={`/products/${id}`} style={{ textDecoration: 'none', color:'WindowText' }} >
                    <Box sx={styles.content_container}>
                        <Box component='img' src={eachProductDetails.thumbnail} alt={eachProductDetails.title} sx={styles.thumbnail_img}/>
                        <Box>
                            <Typography variant='h5' sx={styles.title}>{eachProductDetails.title}</Typography>
                            <Box sx={styles.rating_container}><Typography sx={styles.rating}>{eachProductDetails.rating}<Star sx={styles.star}/></Typography> Rating</Box>
                            <Box>
                                <Box sx={styles.price_container}>Price <Typography sx={styles.price}> ${eachProductDetails.price}</Typography> </Box>
                                <Box sx={styles.discount_container}>Discount <Typography sx={styles.discount}>{eachProductDetails.discountPercentage}%</Typography></Box>
                            </Box>
                        </Box> 
                    </Box>
                </Link> 
                <Box sx={styles.buttons_container}>                    
                    <Link to={`/products/${id}`} style={{ textDecoration: 'none', color:'WindowText' }} ><Box component='button' sx={styles.view_product}>View Product</Box></Link> 
                    <Box component='button' onClick={onClickRemoveItem} sx={styles.remove_button}>Remove Item  <Close/></Box>
                </Box>
            </Paper>
        </Grid>      
   </>
  )
}

export default CartItem