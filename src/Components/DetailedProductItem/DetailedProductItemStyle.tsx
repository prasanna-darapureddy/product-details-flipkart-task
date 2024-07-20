
    export const styles = {
        loading_failure_container:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        },

       images_container:{
            display: 'flex',
            alignItems: 'flex-start',
            padding: '10px',
        },
        nav_imgs_container:{
            display: 'flex',
            height: '80vh',
            padding: '10px',
        },
        left_imgs_container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginRight: '30px',
            borderRight: '1px solid #c8c8c8',
        },
    
        left_imgs:{
            height: '70px',
            width: '70px'
        },
    
        thumbnail_img:{
            height: '100%',
            minWidth: '80%',
            maxWidth: '100%',
        },

        imgs_thumbnail_buttons_container:{
            display:{xs: 'none', sm:'flex', md:'flex'},
            flexDirection:'column',
        },

        buttons_container:{
            width: '100%',
            marginTop: '20px',
            display: 'flex',
            justifyContent: {sm: 'center', md:'flex-end'},
            gap: 4,
        },

        cart_button:{
            backgroundColor: '#ff9f00',
            color: '#fff',
            width: '220px',
            padding:'15px',
            outline:' none',
            border: 'none',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        buy_button:{
            backgroundColor: '#fb641b',
            color: '#fff',
            width: '220px',
            padding:'15px',
            outline:' none',
            border: 'none',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
    
        small_images_container:{
            display: {xs: 'flex', sm:'none',},
            flexDirection: {xs:'column', alignItems:'center', justifyContent:'center'}

        },

        small_buttons_container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            justifyContent:'center',
            gap: 2,
            marginTop: '10px',
        },
        
        carosuel_imgs:{
            height: '350px',
            width: '100%',
        },

        content_container:{
            visible: 'scroll',
            scrollY:'scroll',
            height: '100vh',
        },
    
        discription_container:{
            display: 'flex',
            flexDirection: 'column',         
            gap:'12px',
            scrollY: 'scroll', visible: 'scroll',          
            marginLeft: '20px',
            maxHeight: '100vh',
            overflow: {xs:'none', sm: 'auto'},
        },
        
       
        title_description:{
            marginBottom: '20px'
        },
        rating_container:{
            display: 'flex',
            alignItems: 'center',  
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
        },
        price:{
            marginLeft: '10px',
            fontWeight: 700,
            fontSize: {xs:'25px', sm:'30px', md:'40px',lg: '40px'},            
        },
        discount_container:{
            display: 'flex',
            alignItems: 'center',
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
        },
    
        list_item:{
            display: 'flex',
            alignItems: 'center',
            listStyleType: 'none',
        },
    
        sell_icon:{
            color: 'green',
            marginRight: '10px'
        },
    
        category_brand_container:{
            display: 'flex',
            alignItems: 'center',
            color: '#c8c8c8',
            fontWeight: 600,
        },
        delivery:{
            display: {xs: 'flex'},
            flexDirection: {xs:'column', sm:'row'},
            alignItems: {xs: 'flex-start', sm: 'center', },
            gap: {xs: 3, sm:10},
            marginTop: '20px'
        },
        highlights:{
            display: {xs: 'flex'},
            flexDirection: {xs:'column', sm:'row'},
            alignItems: {xs: 'flex-start', },
            gap: {xs: 2, sm:10}, 
            marginTop: '20px',
        },
    
        description:{
            display: {xs: 'flex'},
            flexDirection: {xs:'column', sm:'row'},
            alignItems: {xs: 'flex-start', },
            gap: {xs: 2, sm:10}, 
            marginTop: '20px',
        },
    
    
        payment_options:{
            display: {xs: 'flex'},
            flexDirection: {xs:'column', sm:'row'},
            alignItems: {xs: 'flex-start', },
            gap: {xs: 2, sm:4}, 
            marginTop: '20px',
            marginLeft: '10px',
        },
    
        product_description:{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #c8c8c8',
            padding: '8px',
        },
        product_description_heading:{
            borderBottom: '1px solid #c8c8c8'
        },
        display:{
            display: {xs: 'flex'},
            flexDirection: {xs: 'column', md:'row'},
            alignItems: 'center',
            marginTop: '15px',
            borderBottom: '1px solid #c8c8c8',
            gap: 2,
        },
    
        glass:{
            display: {xs: 'flex'},
            flexDirection: {xs: 'column', md:'row'},
            alignItems: 'center',
            marginTop: '15px',
            gap: 2,
        },
    
        display_img:{
            height:'100px',
            width: '200px',        
        },
    
}
