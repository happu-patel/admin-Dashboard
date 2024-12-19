"use client"
import React, { useState, useRef, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import { IoIosSearch } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import { Avatar, Badge, Box, Button, Divider, Typography, useTheme } from '@mui/material';
import { IoNotificationsOutline } from "react-icons/io5";
import SearchBar from './Searchbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from 'react-icons/fa';
import ThemeProvider, { ColorModeContext } from '@/components/ThemeProvider/ThemeProvider';
import TransitionsModal from './Dashboard';
import NotificationsModal from './Notification';
import { TbUser, TbSettings, TbCurrencyDollar } from "react-icons/tb";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { LiaQuestionCircle } from "react-icons/lia";



interface Header {
    themeMode: 'light' | 'dark';
    toggleSidebar: () => void;
}

const Header: React.FC<Header> = ({ themeMode, toggleSidebar }) => {
    const [isSearch, setIsSearch] = useState(false);
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [themeName, setThemeName] = useState('light');
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
    const themeDropdownRef = useRef<HTMLDivElement>(null);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isNotification, setIsNotification] = useState(false)
    const router = useRouter()

    // const navigateToProfile = () => {
    //     router.push('/UserProfile'); // Update with the actual path to your User Profile page
    //     handleClose(); // Close the menu after navigating
    // };

    const handleDashBoard = () => {
        setIsDashboardOpen(true);
    }

    const handleCloseDashboard = () => {
        setIsDashboardOpen(false);
    }
    const handleNotification = () => {
        setIsNotification(true)
    }
    const handleCloseNotification = () => {
        setIsNotification(false)
    }
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const handleSearch = () => {
        setIsSearch(!isSearch);
    }
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleThemeChange = (selectedTheme: string) => {
        setThemeName(selectedTheme);
        setIsThemeDropdownOpen(false);
        // Here you would typically apply the theme change to your app
    };

    const toggleThemeDropdown = () => {
        setIsThemeDropdownOpen(!isThemeDropdownOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
                setIsThemeDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`container1 pt-4 ${themeMode}`} style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            marginBottom: 0, marginTop: 0,
            padding: '0px 28px 8px 25px'
        }}> 
            <header className={`header d-flex p-3 pt-2 pb-2`} style={{
                boxShadow: '0px 2px 8px rgb(47 43 61 / 0.12)',
                backgroundColor: themeMode === 'dark' ? '#2B2C40' : '#FFF'
            }}>
                <div className='hamburger-menu d-md-none' onClick={toggleSidebar}>
                    <GiHamburgerMenu size={24} />
                </div>
                <div className='Search_header d-flex justify-content-between gap-4'>
                    <div className='search_icon d-flex align-items-center gap-4 flex-grow-1'>
                        {isSearch && <SearchBar themeMode={theme.palette.mode} />}
                        <div className='d-flex gap-3 align-items-center fasearch-icon' onClick={handleSearch} style={{ cursor: "pointer" }}>
                            <FaSearch className='me-3 fs-5' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }} />
                            <div className="text-center fs-6" style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>Search ⌘K</div>
                        </div>
                    </div>
                    <div className='search_end d-flex justify-content-between align-items-center'>
                        <span className='fs-3 p-2'>
                <IoLanguage style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }} />
            </span>
            <div className="dropdown" ref={themeDropdownRef}>
             <button
                    className="btn btn-link p-0"
                    type="button"
                    onClick={colorMode?.toggleColorMode}  // Optional chaining to safely call the method
                    color="inherit"
                >
                    <span className="fs-3 p-2">
                        {themeMode === 'light' ? (
                            <RiSunLine className="text-dark" />
                        ) : (
                            <RiMoonLine style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }} />
                        )}
                    </span>
                </button>
            
                            <ul className={`dropdown-menu${isThemeDropdownOpen ? ' show' : ''}`}>
                                <li><a className="dropdown-item" href="#" onClick={() => handleThemeChange('light')}>Light</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleThemeChange('dark')}>Dark</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleThemeChange('system')}>System</a></li>
                            </ul>
                        </div>
                        <span className='fs-3 p-2'>
                            <div onClick={handleDashBoard}>
                                <MdDashboardCustomize style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000', cursor: 'pointer' }} />
                            </div>
                        </span>
                        <TransitionsModal open={isDashboardOpen} handleClose={handleCloseDashboard} themeMode={theme.palette.mode} />
                        <Badge variant="dot" color="error">
                            <div onClick={handleNotification}>
                                <IoNotificationsOutline style={{ fontSize: '1.690rem', cursor: 'pointer' }} />
                            </div>
                        </Badge>
                        <NotificationsModal open={isNotification} handleClose={handleCloseNotification} themeMode={theme.palette.mode} />
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            borderRadius: 8,
                                            marginTop: '1em',
                                            padding: '0.5em',
                                            minWidth: 200,
                                        },
                                    }}
                                >
                                    <Box display="flex" alignItems="center" padding="0.5em 1em">
                                        <Avatar
                                            alt="John Doe"
                                            src="https://demos.pixinvent.com/vuexy-nextjs-admin-template/demo-1/images/avatars/1.png" // Replace with actual avatar path
                                            sx={{ width: 40, height: 40, marginRight: '1em' }}
                                        />
                                        <Box>
                                            <Typography variant="body1" fontWeight="bold">
                                                John Doe
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                admin@vuexy.com
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <MenuItem onClick={() => router.push('/UserProfile')}>
                                        <TbUser fontSize="1.375rem" style={{ marginRight: '0.5em' }} />
                                        My Profile
                                    </MenuItem>
                                    <MenuItem onClick={() => router.push('/Setting') }>
                                        <TbSettings fontSize="1.375rem" style={{ marginRight: '0.5em' }} />
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <TbCurrencyDollar fontSize="1.375rem" style={{ marginRight: '0.5em' }} />
                                        Pricing
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <LiaQuestionCircle fontSize="1.375rem" style={{ marginRight: '0.5em' }} />
                                        FAQ
                                    </MenuItem>
                                    <div className='d-flex logoutbtn'>
                                        <Button variant="contained" endIcon={<ExitToAppIcon />} className='btnLogout'>
                                            Logout
                                        </Button>
                                    </div>
                                </Menu>
                            </div>
                        )}
                    </div>
                </div >
            </header >
            <style>
                {`
                .header{
                background-color:
                ${themeMode === 'dark' ? '#2B2C40' : '#FFF'};
                }
                `}
            </style>
        </div >
    )
}

export default Header
