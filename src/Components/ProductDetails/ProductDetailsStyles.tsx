export const styles = {
    loading_failure_container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap:3,
    },
   
    try_again_button:{
        borderRadius: '8px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: '#2874f0',
        color: '#fff',
        padding: '10px',
        width: '100px',
    },

    products_page:{
        padding: '30px',
    },

 
    product_details_container:{
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: ' 300px',
        height: '500px',
    },

    imgs_container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        marginRight: '25px',
    },

    left_imgs:{
        height: '70px',
        width: '70px'
    },

    thumbnail_img:{
        height: '400px',
        width: '450px',
    },

    discription_container:{
        marginLeft: '30px',
    },

    rating_container:{
        display: 'flex',
        alignItems: 'center',   
        marginTop: '15px',  
        color: '#808080',   
    },
    rating:{
        backgroundColor: 'green',
        color: '#fff',
        width: '60px',
        marginRight: '10px',
        textAlign: 'center',
    },
    star:{
        fontSize: '15px',
        marginLeft: '5px',  
    },
    price_container:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'
    },
    price:{
        marginLeft: '10px',
        fontWeight: 700,
        fontSize: {xs:'25px', sm:'30px', md:'40px',lg: '40px'},
        marginTop: '30px',
        
    },
    discount_container:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px'
    },
    discounted_price:{
        textDecoration: 'line-through',
        color: '#808080',
        fontSize: {xs:'12px', sm:'14px', md:'20px',lg: '20px'},
        marginLeft: '10px',

    },
    discount_percent:{
        marginLeft: '10px',
        fontWeight: 700,
        color: 'green',
    }
}