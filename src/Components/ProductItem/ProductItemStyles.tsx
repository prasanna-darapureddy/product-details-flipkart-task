export const styles = {
    item_container:{
        display: {xs: 'flex'},
        flexDirection: {xs: 'column', sm:'row'},
        alignItems: {xs: 'flex-start', sm:'center',}, 
        marginBottom: '30px',   
        gap: 2,  
        marginLeft: '10px',
        hover:{
            title:{
                color: '#2874f0',
            }
        }   
    },
    title:{
        color: '#000'
    },
    thumbnail_img:{
        width: {xs: '100%', sm: '230px',},
        maxWidth: '250px',
        height: '230px',        
        maxHeight: '250px',
        marginRight: '15px',
    },
    rating_container:{
        display: 'flex',
        alignItems: 'center',   
        marginTop: '15px'     
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
        marginTop: '15px'
    },
    price:{
        marginLeft: '10px',
        fontWeight: 700,
    },
    discount_container:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px'
    },
    discount:{
        marginLeft: '10px',
        fontWeight: 700,
    }
}