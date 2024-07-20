export const styles = {
    bg_container:{
        backgroundImage: 'linear-gradient(to bottom left, #403c9f, #b744bd)',
        minHeight: '100vh',
        display: {xs: 'flex',},
        justifyContent: {xs:'center'},
        alignItems: {xs: 'center'},
        padding: '30px',
    },
    log_in_card:{
        borderRadius: '20px',
        padding: '40px',
        display: 'flex',
        flexDirection:  'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        minwidth: '150px',
        width: '300px',
        maxWidth: '350px'
    },
    login_heading:{
        marginBottom: "40px",
    },
    login_form:{
        display: 'flex',
        flexDirection:  'column',
        alignItems: 'center',
        width: '100%',
    },
    inputs_container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #bbb',
        padding: '12px',
        borderRadius : '10px',
        marginBottom: '20px',
        width: '90%',
    },
    icon:{
        color: '#bbb',  
    },
    user_input:{       
        border: 'none',
        outline: 'none',
        width: '100%',
        marginLeft: '10px',
    },
    error_msg:{
        color: 'red', alignSelf: 'flex-start', marginTop: '0px', fontSize: '12px',
    },
    login_button:{
        padding: '8px',
        borderRadius: '20px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: '#b744bd',
        color: '#fff',
        width: '100px',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
    }
}