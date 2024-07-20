import React from 'react'
import { Box,} from '@mui/material'
import pageNotFound from '../Assets/Images/Page-Not-Found.jpg'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight: '100vh'}}>
        <Box component='img' src={pageNotFound} alt='page not found'/>
        <Link to="/products">
            <Box component="button" sx={{backgroundImage: 'linear-gradient(to bottom left, #403c9f, #b744bd)', color:'#fff', borderRadius:'5px', outline:'none', border:'none', padding:'10px'}}>
                Go Back to Home
            </Box>
      </Link>
    </Box>
  )
}

export default NotFound