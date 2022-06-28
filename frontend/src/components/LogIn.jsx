import React from 'react';
import { Card, Text, Button } from '@nextui-org/react';
import { Grid, Input } from '@nextui-org/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import IconButton from '@mui/material/IconButton';
import {Link as LinkRouter} from "react-router-dom";



function LogIn() {
    return (
        <div className='itiNotFoundBox' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text css={{ fontFamily: "Allura", fontSize: "50px", color: "grey", textShadow: "8px -2px 3px white", margin: "1rem" }}>Welcome Back!</Text>
            <Card isHoverable variant="bordered" css={{ mw: "30rem", backgroundColor: "WhiteSmoke", boxShadow: "0px 1px 20px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}  className='signup-inBox'>
                <Text style={{ fontFamily: "Vollkorn", fontSize: "4vh", color: "grey", paddingTop: "1rem" }}>Log In</Text>
                <Grid.Container css={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} gap={3}>
                    <Grid>
                        <Input
                            clearable
                            underlined
                            width='250px'
                            color="primary"
                            labelPlaceholder="Email Adress"
                            contentRight={
                                <EmailIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1"}}/>
                            }
                        />
                    </Grid>
                    <Grid>
                        <Input.Password
                            clearable
                            underlined
                            width='250px'
                            color="primary"
                            labelPlaceholder="Password"
                            contentRight={
                                <KeyIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1"}}/>
                            }
                        />
                    </Grid>
                </Grid.Container>
                <Grid.Container css={{ display: "flex", justifyContent: "center", alignItems: "center" }} gap={1}>
                    <Grid>
                        <Button shadow auto  className='botonSignup-in'>
                            Log in
                        </Button>
                    </Grid>
                </Grid.Container>
                <Grid.Container css={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} gap={1}>
                    <Text style={{ fontFamily: "Vollkorn", fontSize: "15px", color: "grey", paddingTop: "1rem" }}>Or Log In with:</Text>
                    <Grid className="appsContainer" css={{ paddingTop: "1rem" }}>
                        <IconButton sx={{ color: "#83F6E1"}} aria-label="facebook icon">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#83F6E1"}} aria-label="InstagramIcon">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#83F6E1"}} aria-label="InstagramIcon">
                            <GoogleIcon />
                        </IconButton>
                    </Grid>
                    <Grid css={{ display: "flex", alignItems: "center", gap: "1rem"}}>
                    <Text style={{ fontFamily: "Vollkorn", fontSize: "15px", color: "grey" }}>Don't have an account yet?</Text>
                    <LinkRouter to='/signup' style={{textDecoration: "none", color: "#06DCF8"}}>
                        Sign up here
                        </LinkRouter>
                    </Grid>
                </Grid.Container>
            </Card>
        </div>
    )
}

export default LogIn