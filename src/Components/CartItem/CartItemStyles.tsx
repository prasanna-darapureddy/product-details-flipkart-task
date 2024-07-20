export const styles = {
    item_container:{
        display: 'flex',
        flexDirection: 'column',         
        marginBottom: '30px',   
        gap: 2,  
        marginLeft: '10px',
        hover:{
            title:{
                color: '#2874f0',
            }
        }   
    },
    content_container:{
        display: 'flex',
        alignItems: 'center',   
    },
    title:{
        color: '#000'
    },
    thumbnail_img:{
        width: '230px',
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
    },
    buttons_container:{
        display:'flex',
        gap: 3,
        alignItems:'center',
        justifyContent:'center',
        // borderTop: '1px solid #c8c8c8'
    },
    remove_button:{
        backgroundColor: '#ff9f00',
        color: '#fff',           
        padding:'15px',
        outline:' none',
        border: 'none',
        fontWeight: 700,
        fontSize: '18px',
        cursor: 'pointer',
        display: 'flex',       
        justifyContent: 'center',
        width: '220px',
    },
   view_product:{
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
    }
}