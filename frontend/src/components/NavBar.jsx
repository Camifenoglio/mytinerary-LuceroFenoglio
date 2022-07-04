import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "../styles/App.css";
import { Link as LinkRouter } from "react-router-dom";
import userAction from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const pages = [{ name: 'Home', to: '/' }, { name: 'Cities', to: "/cities" }];
const settings = [{ name: 'Log In', to: '/login' }, { name: 'Sign Up', to: '/signup' }];

const NavBar = () => {
    const user = useSelector(store => store.usersReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    async function logOut() {
        await dispatch(userAction.logOutUser())
            .then(navigate('/'))
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    {/* MITINERARY MD */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: "center",
                            fontFamily: 'Allura',
                            fontSize: "2.5rem",
                            fontWeight: 500,
                            letterSpacing: '.3rem',
                            color: '#808080',
                            textDecoration: 'none',
                        }}
                    >
                        {/* LOGO */}
                        <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" style={{ height: "3.3rem" }} />
                        MiTinerary
                    </Typography>
                    {/* BOX HAMBURGUESA */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "rgba(6, 220, 248)" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ padding: 0 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* MENU APBAR */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <LinkRouter to={page.to} className="buttonLink" key={index} onClick={handleCloseNavMenu}>
                                    <MenuItem>
                                        <Typography sx={{ fontFamily: 'Vollkorn', color: "white" }} textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </LinkRouter>
                            ))}
                        </Menu>
                    </Box>
                    {/* MITINERARY XS */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            alignItems: "center",
                            flexGrow: 1,
                            fontFamily: 'Allura',
                            fontSize: "2rem",
                            fontWeight: 500,
                            letterSpacing: '.2rem',
                            color: '#808080',
                            textDecoration: 'none',
                        }}
                    >
                        {/* LOGO RESPONSIVE */}
                        <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" style={{ height: "2.2rem" }} />
                        MiTinerary
                    </Typography>
                    {/* LINKS PAGINAS MD*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <LinkRouter to={page.to} className="buttonLink" key={index}
                                onClick={handleCloseNavMenu}>
                                <Button sx={{ my: 0, color: 'white', display: 'block', fontFamily: 'Vollkorn', fontSize: "1.15rem", mt: 0.5, ml: 1, py: 0 }}>
                                    {page.name}
                                </Button>
                            </LinkRouter>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {/* ICONO LOGUEO */}
                        {!user ?
                            <Tooltip title="User">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/user.png"} sx={{ backgroundColor: "rgba(6, 220, 248)", color: "black", height: "6vh", width: "6vh" }} />
                                </IconButton>
                            </Tooltip> :
                            <Tooltip title={user.firstName}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={user.image} sx={{ height: "6vh", width: "6vh" }} />
                                </IconButton>
                            </Tooltip>
                        }
                        {/* MENU LOGUEO */}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >{user ? (<MenuItem onClick={handleCloseUserMenu}>

                            <Typography
                                sx={{ fontFamily: "Vollkorn", color: "white" }}
                                textAlign="center" onClick={logOut}>Log Out {user.firstName}</Typography>
                        </MenuItem >
                        ) : settings.map((setting, index) => (
                            <LinkRouter to={setting.to} key={index} onClick={handleCloseUserMenu}>
                                <MenuItem>
                                    <Typography textAlign="center" sx={{ fontFamily: 'Vollkorn', color: "white" }}>{setting.name}</Typography>
                                </MenuItem>
                            </LinkRouter>
                        ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;
