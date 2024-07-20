import { Box,  Grid,  Paper, Typography, FormControl, Input, InputAdornment,} from '@mui/material'
import React, { useState } from 'react'
import { styles } from './DetailedProductItemStyle.tsx'
import { FiberManualRecord, FiberManualRecordOutlined, ShoppingCart, Bolt, } from '@mui/icons-material'
import {Star, Sell, KeyboardArrowRight, LocationOn, } from '@mui/icons-material'
import ProductItem from '../ProductItem/ProductItem.tsx'


interface IProps{
    productsDetails :{
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
}

interface IState{
    index: number,
    cartList:{
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
    }[],  
}

function DetailedProductItem(props: IProps) {
    const eachproductsDetails = props.productsDetails
    const imagesLength = eachproductsDetails.images.length
    const initialIndex = imagesLength-1
    const [index, setindex] = useState<IState['index']>(initialIndex)
    const [scrollIndex, setScrollIndex] = useState<IState['index']>(0)
    const storedCartList = JSON.parse(localStorage.getItem('cartList') || '[]')
    const storedProductsList = JSON.parse(localStorage.getItem('productsList') || '[]')
    const similarProductsList = storedCartList !== '[]' && storedProductsList.filter(eachProduct => eachProduct.brand === eachproductsDetails.brand)

    const handleImg = (i:number) => {
        setindex(i)
    }

    const handleCarouselDots = (index:number) => {
        setScrollIndex(index)
    }

   const onClickAddToCart = () => {
    window.location.reload()   
    localStorage.setItem('cartList', JSON.stringify([eachproductsDetails, ...storedCartList]))
   }
    

  return (
    <>         
         <Grid container>
        <Grid xs={12} sm={12} md={6} lg={6} sx={styles.images_container}>
            <Box sx={styles.imgs_thumbnail_buttons_container}>
                <Paper sx={styles.nav_imgs_container}>
                    <Box sx={styles.left_imgs_container}>
                        {eachproductsDetails?.images.map((img,i) => (
                            <Box component='img' src={img} alt={eachproductsDetails.title} sx={styles.left_imgs} onMouseOverCapture={()=>handleImg(i)}/>
                        ))}                                
                    </Box>                        
                    <Box component='img' src={eachproductsDetails.images[index]} alt={eachproductsDetails?.title} sx={styles.thumbnail_img}/>                       
                </Paper>
                <Box sx={styles.buttons_container}>
                    <Box component='button' sx={styles.cart_button}  onClick={onClickAddToCart}><ShoppingCart/> Add to cart</Box>
                    <Box component='button' sx={styles.buy_button}><Bolt/> Buy now</Box>
                </Box>
            </Box>

            <Box sx={styles.small_images_container}>                
                {eachproductsDetails?.images.map((img,index) => (
                    index === scrollIndex && 
                    <>
                        <Box component='img' src={img} alt={eachproductsDetails.title} sx={styles.carosuel_imgs}/>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            {eachproductsDetails.images.map((e, index:number) => (index === scrollIndex ? <FiberManualRecord sx={{fontSize: 15, color:'#000'}}/> : <FiberManualRecordOutlined sx={{fontSize: 12, color:'#808080'}} onClick={()=>handleCarouselDots(index)}/>))}
                        </Box>
                    </>                    
                ))}
                <Box sx={styles.small_buttons_container}>
                    <Box component='button' sx={styles.cart_button} onClick={onClickAddToCart}><ShoppingCart/> Add to cart</Box>
                    <Box component='button' sx={styles.buy_button} ><Bolt/> Buy now</Box>
                </Box>
            </Box>
        </Grid>


        <Grid xs={12} sm={12} md={6} lg={6} sx={styles.content_container}>
            <Box sx={styles.discription_container}>
                <Box sx={styles.category_brand_container}>
                    <Box>{eachproductsDetails.category}</Box>
                    <KeyboardArrowRight/>
                    <Box>{eachproductsDetails.brand}</Box>
                </Box>   
                <Box sx={styles.title_description}>
                    <Typography variant='h2'>{eachproductsDetails?.title}</Typography>  
                    <Typography>{eachproductsDetails.description}</Typography>
                </Box>
                <Box sx={styles.rating_container}>
                    <Typography sx={styles.rating}>{eachproductsDetails?.rating}<Star sx={styles.star}/></Typography>
                        1,85,841 Ratings & 10,618 Reviews
                </Box>
                <Box>
                    <Box sx={styles.price_container}>
                        <Typography sx={styles.price}>$ {eachproductsDetails?.price} 
                            <Typography component='span' sx={styles.discounted_price}>5254</Typography>
                            <Typography component='span' sx={styles.discount_percent}>{eachproductsDetails?.discountPercentage}% Off</Typography>
                        </Typography>                                
                    </Box>
                    <Typography>+29 Rs Secured Packaging Fee</Typography>                    
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    <Typography sx={{fontWeight: 700}}>Available Offers</Typography>
                    <Box sx={{paddingInlineStart: '0px', gap:'5px'}}>
                        <Typography component='span' sx={styles.list_item}><Sell sx={styles.sell_icon}/><Box sx={{fontWeight:600}} component='span'>Bank Offer </Box>10% off on {eachproductsDetails.title} Axis Bank Infinite Credit Card <Box color='#2874f0' component='span'> T&C</Box></Typography>
                        <Box  sx={styles.list_item}><Sell sx={styles.sell_icon}/><Box sx={{fontWeight:600}} component='span'>Bank Offer </Box>10% off on {eachproductsDetails.title} Axis Bank Signature credit card<Box color='#2874f0'> T&C</Box></Box>
                        <Box  sx={styles.list_item}><Sell sx={styles.sell_icon}/><Box sx={{fontWeight:600}} component='span'>Bank Offer </Box>5% Cashback on Flipkart Axis Bank Card<Box color='#2874f0'> T&C</Box></Box>
                        <Box sx={styles.list_item}><Sell sx={styles.sell_icon}/><Box sx={{fontWeight:600}} component='span'>Bank Offer </Box>Get extra ₹6800 off (price inclusive of cashback/coupon)<Box color='#2874f0'> T&C</Box></Box>  
                    </Box>
                </Box>                    
                <Typography variant='h6'>Stock Avaliable: {eachproductsDetails.stock}</Typography>                  
                
                <Box sx={styles.delivery}>
                    <Typography color='#808080'>Delivery</Typography>

                    <Box>
                    <FormControl variant="standard">                          
                        <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <LocationOn />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                Check
                            </InputAdornment>
                        }
                        placeholder='Enter Delivery Pincode'
                        />
                    </FormControl>
                    </Box>
                </Box>

                <Box sx={{display: 'flex', justifyContent:'space-between' }}>
                    <Box sx={styles.highlights}>
                        <Typography color='#808080'>Highlights</Typography>
                        <Box component='ul' sx={{paddingInlineStart: '0px'}}>
                            <Box component='li'>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</Box>
                            <Box component='li'>16.76 cm (6.6 inch) Full HD+ Display</Box>
                            <Box component='li'>50MP + 5MP + 2MP | 8MP Front Camera</Box>
                            <Box component='li'>6000 mAh Lithium Ion Battery</Box>
                            <Box component='li'>Exynos 850 Processor</Box>
                        </Box>
                    </Box>
                    <Box sx={styles.payment_options}>
                        <Typography color='#808080' >Easy Payment options</Typography>
                        <Box component='ul' sx={{paddingInlineStart: '0px'}}>
                            <Box component='li'>EMI starting from ₹289/month</Box>
                            <Box component='li'>Cash on Delivery</Box>
                            <Box component='li'>Net banking & Credit/ Debit/ ATM card</Box>                           
                        </Box>
                    </Box>
                </Box>

                <Box sx={styles.description}>
                    <Typography color='#808080'>Description</Typography>
                    <Box >
                        <Typography>Enjoy seamless connectivity and an uninterrupted movie marathon with the 
                            impressive Samsung Galaxy F13 that is designed specifically to impress the 
                            entertainment fanatics. This smartphone features a terrific 16.62 cm (6.6) 
                            FHD+ LCD Display that can effortlessly blow your mind with its incredible performance. 
                            Furthermore, this phone boasts a 50 MP Triple Camera setup that allows you to capture 
                            awesomeness with a gentle tap. Moreover, the Samsung Galaxy F13 sports up to 8 GB of 
                            RAM and features an innovative RAM plus technology that taps into the phone’s internal 
                            storage to elevate its performance.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={styles.product_description}>
                    <Box sx={styles.product_description_heading}>
                        <Typography variant='h4'>Product Description</Typography>
                    </Box>
                    <Box sx={styles.display}> 
                        <Box order={{xs: 1, sm:2}}>
                            <Typography variant='h6'>Dashing Display</Typography>
                            <Typography >The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD
                                 Display that delivers a cinematic visual experience with stunning picture 
                                 quality. Thus, you can seamlessly immerse yourself into your favourite movie
                                  with enhanced precision.
                            </Typography>
                        </Box>
                        <Box component='img' src={eachproductsDetails.thumbnail} alt='display' order={{xs: 0, sm:1}} sx={styles.display_img}/>
                    </Box>
                    <Box sx={styles.glass}>                         
                        <Box component='img' src={eachproductsDetails.thumbnail} alt='Gorilla Glass' order={{xs: 0, sm:1}} sx={styles.display_img}/>
                        <Box order={{xs: 1, sm:0}}>
                            <Typography variant='h6'>Superior Toughness</Typography>
                            <Typography>Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen
                                 which protects it from inadvertent falls and scratches. This way you can
                                  carry your phone anywhere without any inhibition.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Grid>
        </Grid>

        <Box sx={{marginTop: '50px'}}>
            <Typography variant='h6'>Similar Products</Typography>   
        </Box>
        <Grid container sx={{marginTop: '20px'}}>           
            {similarProductsList.map(eachProduct => (
                <ProductItem eachProduct={eachProduct} key={eachProduct.id}/>
            ))}          
        </Grid>            
    </>
  )
}

export default DetailedProductItem