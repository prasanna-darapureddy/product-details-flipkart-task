export const styles = {
    bg_container:{
        minHeight: '100vh',

    },
    loading_failure_container:{
        // backgroundImage: 'linear-gradient(to bottom left, #403c9f, #b744bd)',
        minHeight: '100vh',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
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
    loader:{
        color: '#fff'
    },
    products_page:{
        padding: '30px',
    },
    products_container:{        
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '30px',
        padding: '20px',
    }
}