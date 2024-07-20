import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import { styles } from './ProductItemStyles.tsx'
import {Star} from '@mui/icons-material'

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
    }
}

function ProductItem(props: IProps) {
    const eachProductDetails = props.eachProduct
    const id = eachProductDetails.id

  return (
    <>        
        
        <Grid  xs={12} sm={12} md={6} lg={6} >
            <Link to={`/products/${id}`} style={{ textDecoration: 'none', color:'WindowText' }} >
                <Paper component='li' sx={styles.item_container}>
                    <Box component='img' src={eachProductDetails.thumbnail} alt={eachProductDetails.title} sx={styles.thumbnail_img}/>
                    <Box>
                        <Typography variant='h5' sx={styles.title}>{eachProductDetails.title}</Typography>
                        <Box sx={styles.rating_container}><Typography sx={styles.rating}>{eachProductDetails.rating}<Star sx={styles.star}/></Typography> Rating</Box>
                        <Box>
                            <Box sx={styles.price_container}>Price <Typography sx={styles.price}> ${eachProductDetails.price}</Typography> </Box>
                            <Box sx={styles.discount_container}>Discount <Typography sx={styles.discount}>{eachProductDetails.discountPercentage}%</Typography></Box>
                        </Box>
                    </Box>  
                </Paper>         
            </Link>
        </Grid>        
    </>
  )
}

export default ProductItem