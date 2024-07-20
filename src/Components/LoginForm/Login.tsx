import React, { useState } from 'react'
import {Box, Typography} from '@mui/material'
import {KeyboardArrowRight, PermIdentityOutlined, HttpsOutlined} from '@mui/icons-material'
import {styles} from './LoginStyles.tsx'
import { useNavigate } from 'react-router-dom'

interface IState{
    email: string,
    password: string,
    isErrorShows: boolean,
}

function Login() {
    const [email, setEmail] = useState<IState['email']>('')
    const [password, setpassword] = useState<IState['password']>('')
    const [isErrorShows, setisErrorShows] = useState<IState['isErrorShows']>(false)
    const [errorMsg, seterrorMsg] = useState<IState['email']>('')
    const navigate = useNavigate();
    // const jwtToken = localStorage.getItem('jwtToken')
    
    const onSubmitSuccess = (jwtToken:string) => {
        localStorage.setItem('jwtToken', jwtToken)
        if(jwtToken !== undefined){            
            navigate('/')
        }
    }

    const onSubmitFailure = (errorMsg:string) => {
        setisErrorShows(true)
        seterrorMsg(errorMsg)
    }

    const onSubmitUser = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        const url = 'https://reqres.in/api/login'
        const userDetails = {email, password}
        const options = {
            method: 'POST',     
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userDetails),
        }

        await fetch(url, options)
        .then(response => response.json())
        .then(data => {
           onSubmitSuccess(data.token)
           onSubmitFailure(data.error)
        })
       
        setEmail('')
        setpassword('')
    }

 

  return (
    <>
        <Box sx={styles.bg_container}>
            <Box sx={styles.log_in_card}>
                <Typography variant='h4' sx={styles.login_heading}>Login</Typography>
                <Box component='form' sx={styles.login_form} onSubmit={onSubmitUser}>
                    <Box sx={styles.inputs_container}>
                        <PermIdentityOutlined sx={styles.icon}/>
                        <Box component='input' type="text" placeholder='Email' value={email} sx={styles.user_input} onChange={(e)=>setEmail(e.target.value)}/>
                    </Box>
                    <Box sx={styles.inputs_container}>
                        <HttpsOutlined sx={styles.icon}/>
                        <Box component='input' type='password' placeholder='Password' value={password} sx={styles.user_input} onChange={(e)=>setpassword(e.target.value)}/>
                    </Box>
                    
                    {isErrorShows && <Typography sx={styles.error_msg}>{errorMsg}</Typography>}
                    <Box>
                        <Box component='button' type='submit' sx={styles.login_button}>Login <KeyboardArrowRight/></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
  
}

export default Login