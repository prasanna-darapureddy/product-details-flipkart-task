import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { styles } from './ProductDetailsStyles.tsx'
import failureImg from '../../Assets/Images/failure.png'
import DetailedProductItem from '../DetailedProductItem/DetailedProductItem.tsx';
import Header from '../Header/Header.tsx'


interface IState{
    detailedProducts :{
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
    apiStatus: string,
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
    }[]
}

const apiConstants = {
    initial: 'initial',
    progress: 'progress',
    success: 'success',
    failure: 'failure',
}


function ProductDetails() {
    const [productsDetails, setProductsDetails] = useState<IState['detailedProducts']>()
    const [apiStatus, setapiStatus] = useState<IState['apiStatus']>(apiConstants.initial)

    const {id} = useParams()

    const getProductDetails = () => {
        const user = localStorage.getItem('jwtToken')
        setapiStatus(apiConstants.progress)       
        
        const url = `https://dummyjson.com/products/${id}`
        const options = {
            headers: {
                Authorization: `Bearer ${user}`,
            },
            method: 'GET',
        }

        fetch(url, options)
        .then(response => response.json())
        .then(data => {        
            setProductsDetails(data)
            setapiStatus(apiConstants.success)             
        })
        .catch(error => setapiStatus(apiConstants.failure))
    }

    useEffect(() => {
       getProductDetails()
    }, [])
    

    const renderLoaderView = () => {
        return (
            <>
                <Box sx={styles.loading_failure_container}>
                    <CircularProgress/>
                </Box>
            </>
        )
    }


    const onClickTryAgain = () => {
        getProductDetails()
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
        <>      
            <Box sx={styles.products_page}>                 
                {productsDetails &&                
                <DetailedProductItem productsDetails={productsDetails} key={productsDetails.id} /> }                
            </Box>               
        </>
        )
    }

   
    const renderDetailedProductView = () => {
        switch (apiStatus) {
            case apiConstants.progress:
                return renderLoaderView()          
            case apiConstants.failure:
                return renderFailureView()
            case apiConstants.success:
                return renderSuccessView()
            default: 
                return null; 
        }
    }


    
  return (
    <>
        <Header />
        <Box>
            {renderDetailedProductView()}
        </Box>
    </>    
  )
}

export default ProductDetails