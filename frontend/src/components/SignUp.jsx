import React from 'react';
import { Card, Text, Button } from '@nextui-org/react';
import { Grid, Input } from '@nextui-org/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import IconButton from '@mui/material/IconButton';
import { Link as LinkRouter } from "react-router-dom";
import { useState } from 'react';
import userAction from '../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import GoogleSignUp from './GoogleSignUp';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

function SignUp() {
    const dispatch = useDispatch()

    const countries = ["unselected", "Argentina", "Brazil", "Colombia", "Chile", "Uruguay", "Spain", "Mexico", "Peru", "France", "Cuba", "Aruba", "Italy", "Netherlands"];
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [country, setCountry] = useState("unselected")
    const [pass, setPass] = useState("")


    const handleSubmit = async (event) => {
        console.log(event)
        event.preventDefault()
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            image: image,
            country: country,
            password: pass,
            from: "form-signup"
        }

        const res = await dispatch(userAction.signUpUser(userData))
        // console.log(res)
        const errormsg = res.data.message

        if (res.data.from === "validator") {
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res.data.from === "signup") {
            if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }

        setFirstName("")
        setLastName("")
        setEmail("")
        setImage("")
        setPass("")
    }
    console.log(country)
    return (
        <div className='itiNotFoundBox' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text css={{ fontFamily: "Allura", fontSize: "50px", color: "grey", textShadow: "8px -2px 3px white", margin: "1rem" }}>Register!</Text>
            <Card isHoverable variant="bordered" css={{ mw: "30rem", backgroundColor: "WhiteSmoke", boxShadow: "0px 1px 20px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }} className='signup-inBox'>
                <Text style={{ fontFamily: "Vollkorn", fontSize: "4vh", color: "grey", paddingTop: "1rem" }}>Sign Up</Text>
                <Grid.Container css={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: 0 }} gap={3}>
                    {country === "unselected" ? (
                        <form onSubmit={handleSubmit}>
                            <Grid css={{ paddingTop: 0, paddingBottom: 0 }}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native"
                                    sx={{ color: "#808070", fontSize: "14px" }}>
                                    Country
                                </InputLabel>
                                <NativeSelect
                                    sx={{ width: '300px', color: "#808070" }}
                                    value={country} onChange={e => setCountry(e.target.value)} defaultValue={30}
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    {countries.map((country, index) => (
                                        <option key={index}>{country}</option>
                                    ))}
                                </NativeSelect>
                            </Grid>
                        </form>

                    ) : (

                        <>
                            <form onSubmit={handleSubmit}>
                                <Grid>
                                    <Input
                                        className='inputForm'
                                        clearable
                                        underlined
                                        width='300px'
                                        type='text'
                                        color="secondary"
                                        value={firstName}
                                        labelPlaceholder="First Name"
                                        onChange={e => setFirstName(e.target.value)}
                                        contentRight={
                                            <PersonIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1" }} />
                                        }
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                        clearable
                                        underlined
                                        width='300px'
                                        color="primary"
                                        type='text'
                                        labelPlaceholder="Last Name"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        contentRight={
                                            <PersonIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1" }} />
                                        }
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                        clearable
                                        underlined
                                        width='300px'
                                        color="primary"
                                        type="text"
                                        label="Url Image"
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
                                        labelPlaceholder="Image"
                                        contentRight={
                                            <EmailIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1" }} />
                                        }
                                    />
                                </Grid>
                                <Grid>
                                    <Input
                                        clearable
                                        underlined
                                        width='300px'
                                        color="primary"
                                        type="email"
                                        label="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        labelPlaceholder="Email Adress"
                                        contentRight={
                                            <EmailIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1" }} />
                                        }
                                    />
                                </Grid>
                                <Grid>
                                    <Input.Password
                                        clearable
                                        underlined
                                        width='300px'
                                        type='password'
                                        color="primary"
                                        value={pass}
                                        onChange={e => setPass(e.target.value)}
                                        labelPlaceholder="Password"
                                        contentRight={
                                            <KeyIcon width="16" height="16" fill="#f5a623" sx={{ color: "#83F6E1" }} />
                                        }
                                    />
                                </Grid>
                                <Grid css={{ display: "flex", justifyContent: "center" }}>
                                    <Button type='submit' shadow auto className='botonSignup-in'>
                                        Create Account
                                    </Button>
                                </Grid>
                                <Grid.Container css={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "1rem" }} gap={1}>
                                    <Text style={{ fontFamily: "Vollkorn", fontSize: "15px", color: "grey", paddingTop: "1rem" }}>Or Sign Up with:</Text>
                                    <Grid className="appsContainer" css={{ paddingTop: "1rem" }}>
                                        <IconButton sx={{ color: "#83F6E1" }} aria-label="facebook icon">
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton sx={{ color: "#83F6E1" }} aria-label="InstagramIcon">
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton sx={{ color: "#83F6E1" }} aria-label="GoogleIcon">
                                            <GoogleSignUp props={country} />

                                        </IconButton>
                                    </Grid>
                                    <Grid css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <Text style={{ fontFamily: "Vollkorn", fontSize: "15px", color: "grey" }}>Already have an account?</Text>
                                        <LinkRouter to='/login' style={{ textDecoration: "none", color: "#06DCF8" }}>
                                            Log in here
                                        </LinkRouter>
                                    </Grid>
                                </Grid.Container>
                            </form>
                        </>
                    )}
                </Grid.Container>
            </Card>
        </div>
    )
}

export default SignUp