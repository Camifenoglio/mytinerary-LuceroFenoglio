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
import {Link as LinkRouter} from "react-router-dom";



const pages = [{name:'Home', to: '/'}, {name:'Cities', to: "/cities"}];
const settings = ['Profile', 'Account', 'Log In', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
        <AppBar position="static" sx={{ backgroundColor: "black"}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
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
                            color: 'violet',
                            textDecoration: 'none',
                        }}
                    >
                        {/* LOGO */}
                        <img src={process.env.PUBLIC_URL+"/assets/logo.png"} alt="logo" style={{ height: "3.3rem" }} />
                        MiTinerary
                    </Typography>
                    {/* box hamburguesa */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "violet" }}>
                        <IconButton
                        
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{padding:0}}
                        >
                            <MenuIcon />
                        </IconButton>
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
                            {pages.map((page,index) => (
                                <LinkRouter to={page.to} className="botonLink" key={index} onClick={handleCloseNavMenu}>
                                <MenuItem>
                                    <Typography sx= {{fontFamily:'Vollkorn', color: "white"}} textAlign="center">{page.name}</Typography>
                                </MenuItem>
                                </LinkRouter>
                            ))}
                        </Menu>
                    </Box>
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
                            color: 'violet',
                            textDecoration: 'none',
                        }}
                    >
                        {/* LOGO RESPONSIVE */}
                        <img src={process.env.PUBLIC_URL+"/assets/logo.png"} alt="logo" style={{ height: "2.2rem" }} />
                        MiTinerary
                    </Typography>
                    {/* link paginas home/cities en md */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page,index) => (
                            <LinkRouter to={page.to} className="botonLink" key={index}
                            onClick={handleCloseNavMenu}>
                            <Button sx={{ my: 0, color: 'white', display: 'block', fontFamily: 'Vollkorn', fontSize: "1.15rem", mt: 0.5, ml:1, py: 0 }}>
                              {page.name}
                            </Button>
                            </LinkRouter>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {/* iconologueo */}
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ backgroundColor: "#7F19A6", color: "black", height: "6vh", width: "6vh" }} />
                            </IconButton>
                        </Tooltip>
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
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" sx={{fontFamily:'Vollkorn', color: "white"}}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
