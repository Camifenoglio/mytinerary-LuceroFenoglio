import React from 'react';
import { Card, Text, Button } from '@nextui-org/react';
import { Grid, Input } from '@nextui-org/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import IconButton from '@mui/material/IconButton';
import { Link as LinkRouter } from "react-router-dom";
import userAction from '../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import GoogleLogIn from './GoogleLogIn';
import { useNavigate } from 'react-router-dom';


function LogIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const userData = {
            email: event.target[0].value,
            password: event.target[2].value,
            from: "form-signup"
        }
        const res = await dispatch(userAction.logInUser(userData))
        if (res.data.success) {
            toast.success(res.data.message)
            navigate('/')
        } else {
            toast.error(res.data.message)
        }
        event.target[0].value = ""
        event.target[2].value = ""
    }

    return (
        <div className='loginBox' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", paddingRight: "2rem" }}>
            <Text css={{ fontFamily: "Allura", fontSize: "50px", color: "white", textShadow: "0px 0px 3px white", margin: "1rem", alignSelf: "center" }}>Welcome Back!</Text>
            <Card isHoverable variant="bordered" css={{ mw: "30rem", backgroundColor: "WhiteSmoke", boxShadow: "0px 1px 20px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }} className='signup-inBox'>
                <Text style={{ fontFamily: "Vollkorn", fontSize: "4vh", color: "#83F6E1", paddingTop: "1rem" }}>Log In</Text>
                <Grid.Container css={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} gap={3}>
                    <form onSubmit={handleSubmit}>
                        <Grid style={{color: "black"}}>
                            <Input
                                clearable
                                underlined
                                width='250px'
                                color='default'
                                labelPlaceholder="Email Adress"
                                status="warning"
                                contentRight={
                                    <EmailIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1" }} />
                                }
                            />
                        </Grid>
                        <Grid>
                            <Input.Password
                                clearable
                                underlined
                                width='250px'
                                labelPlaceholder="Password"
                                contentRight={
                                    <KeyIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1" }} />
                                }
                            />
                        </Grid>
                        <Grid css={{ display: "flex", justifyContent: "center", alignItems: "center" }} gap={1}>
                            <Button type="submit" shadow auto className='botonSignup-in'>
                                Log in
                            </Button>
                        </Grid>
                    </form>
                </Grid.Container>
                <Grid.Container css={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} gap={1}>
                    <Text style={{ fontFamily: "Vollkorn", fontSize: "15px", color: "whitesmoke", paddingTop: "1rem" }}>Or Log In with:</Text>
                    <Grid className="appsContainer" css={{ paddingTop: "1rem" }}>
                        <IconButton sx={{ color: "#83F6E1" }} aria-label="facebook icon">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#83F6E1" }} aria-label="InstagramIcon">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#83F6E1" }} aria-label="InstagramIcon">
                            <GoogleLogIn />
                        </IconButton>
                    </Grid>
                    <Grid css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <Text style={{ fontFamily: "Vollkorn", fontSize: "15px", color: "white" }}>Don't have an account yet?</Text>
                        <LinkRouter to='/signup' style={{ textDecoration: "none", color: "#06DCF8" }}>
                            Sign up here
                        </LinkRouter>
                    </Grid>
                </Grid.Container>
            </Card>
        </div>
    )
}

export default LogIn
