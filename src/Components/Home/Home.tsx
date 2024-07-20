import { Box, CircularProgress, Grid, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styles } from './HomeStyles.tsx'
import ProductItem from '../ProductItem/ProductItem.tsx'
import failureImg from '../../Assets/Images/failure.png';
import Header from '../Header/Header.tsx';


interface IState{
    productsList:{
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
    apiStatus: string,   
}

const apiConstants = {
    initial: 'initial',
    progress: 'progress',
    success: 'success',
    failure: 'failure',
}

function Home() {
    const [productsList, setProductsList] = useState<IState['productsList']>([])
    const [apiStatus, setapiStatus] = useState<IState['apiStatus']>(apiConstants.initial)
    const jwtToken = localStorage.getItem('jwtToken')              
    localStorage.setItem('productsList', JSON.stringify(productsList))
    const storedProductsList = JSON.parse(localStorage.getItem('productsList') || '[]')
    
    
    const getProductsData = async () => {        
        const url = 'https://dummyjson.com/products'
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET'
        }   

        setapiStatus(apiConstants.progress)

        await fetch(url, options)
        .then(response => response.json())
        .then(data => {
            setProductsList(data.products)
            setapiStatus(apiConstants.success)               
        })
        .catch(error => {
            setapiStatus(apiConstants.failure)
            console.log(error)
        })     
    }

    useEffect(() => {
      getProductsData()
    }, [])
    
    
    const renderLoaderView = () => {
        return (
        <>
            <Box sx={styles.loading_failure_container}>
                <CircularProgress sx={styles.loader}/>
            </Box>
        </>
        )
    }


    const onClickTryAgain = () => {
        getProductsData()
    }

    const renderFailureView = () => {
        return (
        <>
            <Box sx={styles.loading_failure_container}>
                <Box component='img' src={failureImg} alt='failure-img'/>
                <Typography variant='h5'>Oops! somthing went wrong</Typography>
                <Box component='button' sx={styles.try_again_button} onClick={onClickTryAgain}>Try Again</Box>
            </Box>
        </>
        )
    }

    const renderSuccessView = () => {        
        return(
        jwtToken !== undefined &&
        <>      
            <Box sx={styles.products_page}>
                <Typography variant='h3'>All Products</Typography>
                <Grid container component='ul' sx={styles.products_container}>                                        
                    {storedProductsList.length !== 0 && storedProductsList.map(eachProduct => (
                        <ProductItem eachProduct={eachProduct} key={eachProduct.id}/>
                    ))}
                </Grid>
            </Box>               
        </>
        )
    }

    const renderHomePage = () => {
        switch (apiStatus) {
            case apiConstants.progress:
                return renderLoaderView();
            case apiConstants.success:
                return renderSuccessView();
            case apiConstants.failure:
                return renderFailureView();   
            default: 
                return null;             
        }
    }


  return (
    <>
        <Header/>
        <Box sx={styles.bg_container}>{renderHomePage()}</Box>        
    </>
  )
}

export default Home