import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

export default function MainAppBar() {
    const navigate = useNavigate();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    useEffect(() => {
        //     check on every render if user is logged in or not
        //     if not we will re-route them to / common home
    }, []);

    const handleProfileMenuOpen = (route: 'profile' | 'signin' | 'signup') => {
        navigate(`/${route}`);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {

    }

    const renderMenu = ({icon, text}: { icon: any; text: string }) => {
        return (
            <Box display='flex' justifyContent='space-between' gap={1} width='100%'>
                {icon}
                <Typography>{text}</Typography>
            </Box>
        )
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const loggedInView = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => handleProfileMenuOpen('profile')}>
                {renderMenu({icon: <Person2Icon fontSize='small'/>, text: 'Profile'})}
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                {renderMenu({icon: <LogoutIcon fontSize='small'/>, text: 'Logout'})}
            </MenuItem>
        </Menu>
    );

    const loggedOutView = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => handleProfileMenuOpen('signin')}>
                {renderMenu({icon: <LoginIcon fontSize='small'/>, text: 'SignIn'})}
            </MenuItem>
            <MenuItem onClick={() => handleProfileMenuOpen('signup')}>
                {renderMenu({icon: <AddIcon fontSize='small'/>, text: 'SignUp'})}
            </MenuItem>
        </Menu>
    );


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: 'block'}}
                    >
                        BLUE BELL
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: 'flex'}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {userLoggedIn ? loggedInView : loggedOutView}
        </Box>
    );
}
