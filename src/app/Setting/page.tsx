"use client"
import React, { SyntheticEvent, use, useEffect, useRef, useState } from "react";
import { Box, Button, CardHeader, Checkbox, Chip, FormControlLabel, FormHelperText, FormLabel, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Switch, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography, useTheme, } from '@mui/material';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import styles from '../page.module.css';
import './setting.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbLock, TbUsers, TbLink, TbDeviceMobile, TbBrandApple, TbTrash } from "react-icons/tb";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import userImg from '../../images/Avtar1.png';
import { styled } from '@mui/material/styles';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { ExpandMore, X } from "@mui/icons-material";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import ApiImg from "../../images/api_key_img.png";
import { TbCopy } from "react-icons/tb";
import { TbBrandWindows, TbBrandAndroid } from "react-icons/tb";
import { RiLink } from "react-icons/ri";
import googleIcon from "../../images/google.png";
import salakIcon from "../../images/slack.png";
import githubIcon from "../../images/github.png";
import mailchimp from "../../images/mailchimp.png";
import asana from "../../images/asana.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkdin from "../../images/linkedin.png";
import dribble from "../../images/dribbble.png";
import behance from "../../images/behance.png";
import { link } from "fs";
import { dark } from "@mui/material/styles/createPalette";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface TableRowData {
    browser: string;
    device: string;
    location: string;
    recentActivity: string;
    icon: React.ReactNode;
}

const data: TableRowData[] = [
    {
        browser: "Chrome on Windows",
        device: "HP Spectre 360",
        location: "Switzerland",
        recentActivity: "10, Sept 20:07",
        icon: <TbBrandWindows size={'22px'} style={{ color: '#00BAD1' }} />,
    },
    {
        browser: "Chrome on Android",
        device: "Google Pixel 3a",
        location: "Los Angeles, CA",
        recentActivity: "20 Apr 2022, 10:20",
        icon: <TbBrandAndroid size={'22px'} style={{ color: "#28C76F" }} />,
    },
    {
        browser: "Chrome on iPhone",
        device: "iPhone 12x",
        location: "San Francisco, CA",
        recentActivity: "16 Apr 2022, 04:20",
        icon: <TbDeviceMobile size={'22px'} style={{ color: "#FF4C51" }} />,
    },
    {
        browser: "Chrome on MacOS",
        device: "Apple iMac",
        location: "India",
        recentActivity: "28 Apr 2022, 18:20",
        icon: <TbBrandApple size={'22px'} style={{ color: "#808390" }} />,
    },
    {
        browser: "Chrome on Windows",
        device: "Macbook Pro",
        location: "Switzerland",
        recentActivity: "20 Apr 2022, 10:20",
        icon: <TbBrandApple size={'22px'} style={{ color: "#FF9F43" }} />,
    },
    {
        browser: "Chrome on Android",
        device: "Oneplus 9 Pro",
        location: "Dubai",
        recentActivity: "16 Apr 2022, 04:20",
        icon: <TbBrandAndroid size={'22px'} style={{ color: "#28C76F" }} />,
    },
];

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`profile-tabpanel-${index}`}
            aria-labelledby={`profile-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
function Setting() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const theme = useTheme();
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const [tabValue, setTabValue] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [selectedLanguages, setSelectedLanguages] = useState(['English', 'Arabic']);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [timeZone, setTimeZone] = useState('');
    const customInputRef = useRef<HTMLInputElement | null>(null);
    const [currency, setCurrency] = useState('');
    const customInputRef1 = useRef<HTMLInputElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null); // Ref for the input element
    const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown menu
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);
    const [api, setApi] = useState('');
    const customInputRef2 = useRef<HTMLInputElement | null>(null);
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleToggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    }
    const handleToggleConPasswordVisibility = () => {
        setShowConPassword(!showConPassword);
    }


    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    const timeZones = [
        '(GMT-12:00) International Date Line West',
        '(GMT-11:00) Midway Island, Samoa',
        '(GMT-10:00) Hawaii',
        '(GMT-09:00) Alaska',
        '(GMT-08:00) Pacific Time (US & Canada)',
        '(GMT-08:00) Tijuana, Baja California',
    ];
    useEffect(() => {
        if (timeZones.length > 0) {
            setTimeZone(timeZones[0]); // Set the first timezone as the default
        }
    }, [timeZones]);
    const handleIconClick = () => {
        if (customInputRef.current) {
            customInputRef.current.focus(); // Focus the input to open the dropdown
        }
    };

    const handleTimeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTimeZone(event.target.value as string);
        setIsOpen(false); // Close the dropdown after selection
    };

    const currencies = [
        'USD',
        'EUR',
        'Pound',
        'Bitcoin'
    ]
    useEffect(() => {
        if (currencies.length > 0) {
            setCurrency(currencies[0]); // Set the first currency as the default
        }
    }, [currencies]);
    const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    const handleCurrencyIconClick = () => {
        if (customInputRef1.current) {
            customInputRef1.current.focus(); // Focus the input to open the dropdown
        }
    };

    const apis = [
        'Full Control',
        'Modify',
        'Read & Execute',
        'List Folder Contents',
        'Read Only',
        'Read & Write'
    ]
    const handleApiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApi(event.target.value);
    };

    const handleApiIconClick = () => {
        if (customInputRef2.current) {
            customInputRef2.current.focus(); // Focus the input to open the dropdown
        }
    };
    const languages = [
        'Arabic',
        'English',
        'Spanish',
        'French',
        'German',
        'Chinese',
        'Japanese',
        'Korean',
        'Russian'
    ];
    const toggleLanguage = (language: string) => {
        setSelectedLanguages((prev) =>
            prev.includes(language) ? prev.filter((lang) => lang !== language) : [...prev, language]
        );
        setIsOpen(false); // Close the dropdown when a language is selected
    };

    const removeLanguage = (language: string) => {
        setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
            // !inputRef.current?.contains(event.target as Node)
        ) {
            setIsOpen(false); // Close dropdown when clicking outside
        }
    };
    useEffect(() => {
        // Add event listener for clicks outside
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleTabChange = (event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    const TabIcon = ({ icon: Icon, label }: { icon: any; label: string }) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icon size={20} />
            <span>{label}</span>
        </div>
    );


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the selected file
            setSelectedImage(imageUrl);
        }
    };
    const handleReset = () => {
        setSelectedImage(null); // Reset the image to default (null state)
    };
    const [city, setCity] = React.useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCity(event.target.value);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown manually when the icon is clicked
        console.log('click')
    };
    return (

        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
            </div>

            <div className={styles.content}>
                <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                <div className="container user_pro_cont">
                    <Box component="main" sx={{ flexGrow: 1, p: 2 }} className="main_class">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Tabs
                                        value={tabValue}
                                        onChange={handleTabChange}
                                        sx={{
                                            minHeight: '40px',
                                            '& .MuiTabs-flexContainer': {
                                                gap: '8px'
                                            },
                                            '& .MuiTab-root': {
                                                textTransform: 'none',
                                                minHeight: '40px',
                                                padding: '8px 16px',
                                                fontSize: '0.9375rem',
                                                fontFamily: '"Public Sans", sans-serif !important',
                                                fontWeight: '500',
                                                color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61)',
                                                backgroundColor: 'transparent',
                                                borderRadius: '8px',
                                                '&.Mui-selected': {
                                                    color: '#fff',
                                                    backgroundColor: '#7C6AF4',
                                                    '& svg': {
                                                        color: '#fff'
                                                    }
                                                },
                                                // Hover effect for inactive buttons
                                                '&:not(.Mui-selected):hover': {
                                                    backgroundColor: ' rgb(115 103 240 / 0.16)', // Change background color on hover
                                                    color: '#7367F0',
                                                    '& svg': {
                                                        color: '#7367F0' // Change icon color on hover
                                                    }
                                                },
                                                '& svg': {
                                                    color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61)',
                                                }
                                            },
                                            '& .MuiTabs-indicator': {
                                                display: 'none'
                                            }
                                        }}
                                    >

                                        <Tab
                                            icon={<TabIcon icon={TbUsers} label="Account" />}
                                            aria-label="Account"
                                        />
                                        <Tab
                                            icon={<TabIcon icon={TbLock} label="Security" />}
                                            aria-label="Security"
                                        />
                                        <Tab
                                            icon={<TabIcon icon={TbLink} label="connections" />}
                                            aria-label="connections"
                                        />
                                    </Tabs>
                                </Grid>

                                <Grid item xs={12}>
                                    <TabPanel value={tabValue} index={0}>
                                        <Grid container spacing={6}>
                                            <Grid item xs={12}>
                                                <Card sx={{ minWidth: 275 }} className="main_card">
                                                    <CardContent className="card_content1">
                                                        <div className="img_part d-flex flex-row align-items-center gap-4">
                                                            {/* Avatar image */}
                                                            <img
                                                                src={selectedImage || userImg.src} // Fallback to a default image
                                                                alt="profile_img"
                                                                className="rounded"
                                                                style={{ width: '100px', height: '100px', objectFit: "cover" }}
                                                            />

                                                            {/* Upload button */}
                                                            <div className="d-flex flex-column gap-3">
                                                                <div className="d-flex flex-column flex-sm-row gap-3">
                                                                    <Button
                                                                        component="label"
                                                                        variant="contained"
                                                                        tabIndex={-1}
                                                                        style={{
                                                                            backgroundColor: 'rgb(103 92 216 / 90%)',
                                                                            color: "#fff",
                                                                            textTransform: "none",
                                                                            padding: "0.5rem 1.25rem",
                                                                            borderRadius: "6px",
                                                                            fontWeight: '500',
                                                                            fontSize: '0.9375rem',
                                                                            lineHeight: '1.46667',
                                                                            minWidth: '64px',
                                                                            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                            boxShadow: '0px 2px 6px rgb(115 103 240 / 0.3)',
                                                                        }}
                                                                    >
                                                                        Upload New Photo
                                                                        <VisuallyHiddenInput
                                                                            type="file"
                                                                            accept="image/*"
                                                                            onChange={handleFileChange}
                                                                        />
                                                                    </Button>
                                                                    <Button
                                                                        onClick={handleReset}
                                                                        style={{
                                                                            color: theme.palette.mode === 'dark' ? '#808390' : '#808390',
                                                                            backgroundColor: theme.palette.mode === 'dark' ? 'rgb(128 131 144 / 0.24)' : 'rgb(128 131 144 / 0.16)',
                                                                        }}
                                                                        className="tab1_resetbtn">
                                                                        Reset
                                                                    </Button>
                                                                </div>
                                                                <Typography variant="body1" className="userpro_text"
                                                                    style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}
                                                                >Allowed JPG, GIF or PNG. Max size of 800K</Typography>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                    <CardContent className="user_form">
                                                        <form>
                                                            <Grid container spacing={6} className="form_grid">
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>First Name</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            placeholder="john"
                                                                            size="small"
                                                                            defaultValue="John"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>Last Name</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            placeholder="Doe"
                                                                            size="small"
                                                                            defaultValue="Doe"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>Email</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            placeholder="john.doe@example.com"
                                                                            defaultValue="john.doe@example.com"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>Organization</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            placeholder="Pixinvent"
                                                                            defaultValue="Pixinvent"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>Phone number</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            defaultValue="+1 (917) 543-9876"
                                                                            placeholder="+1 (917) 543-9876"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>Address</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            defaultValue="123 Main St, New York, NY 10001"
                                                                            placeholder="123 Main St, New York, NY 10001"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>State</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            defaultValue="New York"
                                                                            placeholder="New York"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined">
                                                                        <FormLabel>Zip Code</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            type="number"
                                                                            size="small"
                                                                            defaultValue="634880"
                                                                            placeholder="634880"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined" size="small">
                                                                        <FormLabel>City</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            value={city}
                                                                            onChange={handleChange}
                                                                            select // This turns the TextField into a dropdown
                                                                            SelectProps={{
                                                                            MenuProps:{
                                                                                PaperProps: {
                                                                                    style: {
                                                                                        maxHeight: 200, // Optional: set max height for dropdown
                                                                                    },
                                                                                },
                                                                                },
                                                                            }}
                                                                            InputProps={{
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end" style={{ cursor: "pointer" }} onClick={handleDropdownToggle}>
                                                                                        {isDropdownOpen ? <ExpandMore /> : <ExpandMore />}
                                                                                    </InputAdornment>
                                                                                ),
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}

                                                                        >
                                                                            <MenuItem value="USA">USA</MenuItem>
                                                                            <MenuItem value="Uk">UK</MenuItem>
                                                                            <MenuItem value="Aus">Australia</MenuItem>
                                                                            <MenuItem value="germany">Germany</MenuItem>
                                                                        </TextField>


                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined" size="small" sx={{ position: "relative" }}>
                                                                        <FormLabel>Language</FormLabel>
                                                                        <TextField
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            value=""  // Display selected languages
                                                                            onClick={() => setIsOpen(!isOpen)}
                                                                            inputRef={inputRef} // Attach the ref to the input element
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" },
                                                                                startAdornment: (
                                                                                    <InputAdornment position="start">
                                                                                        <Box sx={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                                                                                            {selectedLanguages.map((lang) => (
                                                                                                <Chip
                                                                                                    key={lang}
                                                                                                    label={lang}
                                                                                                    onDelete={() => removeLanguage(lang)}
                                                                                                    size="small"
                                                                                                    sx={{ backgroundColor: "#f0f0f0" }}
                                                                                                />
                                                                                            ))}
                                                                                        </Box>
                                                                                    </InputAdornment>
                                                                                ),
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end">
                                                                                        <ExpandMore style={{ cursor: "pointer" }} />
                                                                                    </InputAdornment>
                                                                                ),
                                                                            }}
                                                                        />
                                                                        {isOpen && (
                                                                            <Box
                                                                                ref={dropdownRef} // Attach the dropdown ref
                                                                                sx={{
                                                                                    position: "absolute", // Set the dropdown position to absolute
                                                                                    left: 0,
                                                                                    right: 0,
                                                                                    maxHeight: "200px", // Limit the height
                                                                                    zIndex: 10,
                                                                                    backgroundColor: "white",
                                                                                    border: "1px solid #ddd",
                                                                                    borderRadius: "8px",
                                                                                    overflowY: "auto",
                                                                                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                                                }}
                                                                            >
                                                                                {languages.map((language) => (
                                                                                    <MenuItem
                                                                                        key={language}
                                                                                        onClick={() => toggleLanguage(language)} // Close dropdown after selection
                                                                                        sx={{
                                                                                            backgroundColor: selectedLanguages.includes(language)
                                                                                                ? "#e0e7ff"
                                                                                                : "transparent",
                                                                                            "&:hover": {
                                                                                                backgroundColor: "#f3f4f6",
                                                                                            },
                                                                                        }}
                                                                                    >
                                                                                        {language}
                                                                                    </MenuItem>
                                                                                ))}
                                                                            </Box>
                                                                        )}
                                                                    </FormControl>

                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined" size="small">
                                                                        <FormLabel>
                                                                            TimeZone
                                                                        </FormLabel>
                                                                        <TextField
                                                                            select
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            value={timeZone}
                                                                            onChange={handleTimeChange}
                                                                            placeholder="Select Timezone"
                                                                            size="small"
                                                                            inputRef={customInputRef}
                                                                            InputProps={{
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end" style={{ cursor: "pointer" }} >
                                                                                        <ExpandMore onClick={handleIconClick} />
                                                                                    </InputAdornment>
                                                                                ),
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input

                                                                            }}
                                                                        >
                                                                            {timeZones.map((zone, index) => (
                                                                                <MenuItem key={index} value={zone}>
                                                                                    {zone}
                                                                                </MenuItem>
                                                                            ))}
                                                                        </TextField>
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth variant="outlined" size="small">
                                                                        <FormLabel>
                                                                            Currency
                                                                        </FormLabel>
                                                                        <TextField
                                                                            select
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            value={currency}
                                                                            onChange={handleCurrencyChange}
                                                                            placeholder="Select Currency"
                                                                            size="small"
                                                                            inputRef={inputRef} // Attach the ref to the input
                                                                            InputProps={{
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end" style={{ cursor: 'pointer' }} onClick={handleCurrencyIconClick}>
                                                                                        <ExpandMore />
                                                                                    </InputAdornment>
                                                                                ),
                                                                                style: { borderRadius: '8px' },
                                                                            }}
                                                                        >
                                                                            {currencies.map((currencyOption, index) => (
                                                                                <MenuItem key={index} value={currencyOption}>
                                                                                    {currencyOption}
                                                                                </MenuItem>
                                                                            ))}
                                                                        </TextField>
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} className="d-flex flex-warp gap-3 pt-4">
                                                                    <Button component="label"
                                                                        variant="contained"
                                                                        tabIndex={-1}
                                                                        style={{
                                                                            backgroundColor: 'rgb(103 92 216 / 90%)',
                                                                            color: "#fff",
                                                                            textTransform: "none",
                                                                            padding: "0.5rem 1.25rem",
                                                                            borderRadius: "6px",
                                                                            fontWeight: '500',
                                                                            fontSize: '0.9375rem',
                                                                            lineHeight: '1.46667',
                                                                            minWidth: '64px',
                                                                            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                            boxShadow: '0px 2px 6px rgb(115 103 240 / 0.3)',
                                                                        }}>Save Changes</Button>
                                                                    <Button
                                                                        onClick={handleReset}
                                                                        style={{
                                                                            color: "#808390",
                                                                            backgroundColor: "rgb(128 131 144 / 0.16)",
                                                                            textTransform: "none",
                                                                            padding: "0.5rem 1.25rem",
                                                                            borderRadius: "6px",
                                                                            transition: 'all 250ms cubic- bezier(0.4, 0, 0.2, 1) 0ms',
                                                                            fontWeight: '500',
                                                                            fontSize: ' 0.9375rem',
                                                                            lineHeight: ' 1.46667',
                                                                            minWidth: '64px',
                                                                        }}
                                                                    >
                                                                        Reset
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </form>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} className="pt-4">
                                                <Card className="main_card">
                                                    <CardHeader
                                                        style={{
                                                            color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)'
                                                        }}
                                                        title="Delete Account"

                                                    />
                                                    <CardContent className="pt-0">
                                                        <form>
                                                            <FormControl fullWidth style={{ marginBottom: '15px' }}>
                                                                <FormControlLabel control={<Checkbox
                                                                    checked={isChecked}
                                                                    onChange={handleCheckboxChange}
                                                                />}
                                                                    style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.9)' }}
                                                                    label="I confirm my account deactivation" />
                                                            </FormControl>
                                                            <Button
                                                                variant="contained"
                                                                type="submit"
                                                                color="error"
                                                                disabled={!isChecked} // Disable the button when checkbox is not checked

                                                            >
                                                                Deactivate Account
                                                            </Button>
                                                        </form>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>

                                    </TabPanel>
                                    <TabPanel value={tabValue} index={1}> 
                                        <Grid container spacing={6}>
                                            <Grid item xs={12}>
                                                <Card className="main_card">
                                                    <CardHeader
                                                        title='Change Password' className="ps-4"
                                                    />
                                                    <CardContent className="user_form">
                                                        <form>
                                                            <Grid container spacing={6} className="form_grid">
                                                                <Grid item xs={12} sm={6} className="grid_password">
                                                                    <FormControl fullWidth>
                                                                        <FormLabel>Current Password</FormLabel>
                                                                        <TextField
                                                                            id="current-password"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            type={showPassword ? "text" : "password"}
                                                                            placeholder="........"
                                                                            size="small"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end">
                                                                                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                                                                            {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                                                                                        </IconButton>
                                                                                    </InputAdornment>
                                                                                ),
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container spacing={6} className="form_grid pt-5">
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth>
                                                                        <FormLabel>New Password</FormLabel>
                                                                        <TextField
                                                                            id="current-password"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            type={showNewPassword ? "text" : "password"}
                                                                            placeholder="........."
                                                                            size="small"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end">
                                                                                        <IconButton onClick={handleToggleNewPasswordVisibility} edge="end">
                                                                                            {showNewPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                                                                                        </IconButton>
                                                                                    </InputAdornment>
                                                                                ),
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} className="grid_item">
                                                                    <FormControl fullWidth>
                                                                        <FormLabel>Confirm New Password</FormLabel>
                                                                        <TextField
                                                                            id="current-password"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            type={showConPassword ? "text" : "password"}
                                                                            placeholder="........."
                                                                            size="small"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end">
                                                                                        <IconButton onClick={handleToggleConPasswordVisibility} edge="end">
                                                                                            {showConPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                                                                                        </IconButton>
                                                                                    </InputAdornment>
                                                                                ),
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                </Grid>
                                                                <Grid item xs={12} className="d-flex flex-column gap-4 pt-4">
                                                                    <Typography variant="h6" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61)' }}>Password Requirements:</Typography>
                                                                    <div className="d-flex flex-column gap-3">
                                                                        <div className="d-flex align-items-center gap-2 password_rule" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                            <VscCircleFilled />
                                                                            Minimum 8 characters long - the more, the better
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-2 password_rule" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                            <VscCircleFilled />
                                                                            At least one lowercase & one uppercase character
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-2 password_rule" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                            <VscCircleFilled />
                                                                            At least one number, symbol, or whitespace character
                                                                        </div>
                                                                    </div>
                                                                </Grid>
                                                                <Grid item xs={12} className="d-flex gap-3 pt-4">
                                                                    <Button className="savechanges_btn">
                                                                        Save Changes
                                                                    </Button>
                                                                    <Button className="reset_btn">
                                                                        Reset
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </form>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} className="main_div">
                                                <Card className="main_card">
                                                    <CardHeader title="Two-steps verification" className="ps-4">
                                                    </CardHeader>
                                                    <CardContent className="d-flex flex-column gap-4 align-items-start ps-4">
                                                        <div className="d-flex flex-column gap-4">
                                                            <Typography variant="h5" className="two_factor_subtitle" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                Two factor authentication is not enabled yet.
                                                            </Typography>
                                                            <Typography variant="body1" className="two_factow_title2" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.<a href="#" className="learn_more">Learn more.</a>
                                                            </Typography>
                                                        </div>
                                                        <Button className="savechanges_btn">
                                                            Enable two-factor authentication
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} className="main_div">
                                                <Card className="main_card">
                                                    <CardHeader title='Create an API Key' className="ps-4" />
                                                    <CardContent className="pb-0">
                                                        <Grid container spacing={6} className="form_grid">
                                                            <Grid item xs={12} sm={12} md={6}>
                                                                <form className="d-flex flex-column gap-4 justify-content-end">
                                                                    <FormControl>
                                                                        <FormLabel>Choose the API key type you want to create</FormLabel>
                                                                        <TextField
                                                                            select
                                                                            fullWidth
                                                                            variant="outlined"
                                                                            value={api}
                                                                            onChange={handleApiChange}
                                                                            size="small"
                                                                            inputRef={inputRef} // Attach the ref to the input
                                                                            InputProps={{
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end" style={{ cursor: 'pointer' }} onClick={handleApiIconClick}>
                                                                                        <ExpandMore />
                                                                                    </InputAdornment>
                                                                                ),
                                                                                style: { borderRadius: '8px' },
                                                                            }}
                                                                        >
                                                                            {apis.map((currencyOption, index) => (
                                                                                <MenuItem key={index} value={currencyOption}>
                                                                                    {currencyOption}
                                                                                </MenuItem>
                                                                            ))}
                                                                        </TextField>
                                                                    </FormControl>
                                                                    <FormControl>
                                                                        <FormLabel>Name the API key</FormLabel>
                                                                        <TextField
                                                                            id="first-name"
                                                                            variant="outlined"
                                                                            fullWidth
                                                                            size="small"
                                                                            placeholder="Server Key 1"
                                                                            InputProps={{
                                                                                style: { borderRadius: "8px" }, // Adjusts border-radius for the input
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                    <Button className="savechanges_btn">
                                                                        Create Key
                                                                    </Button>
                                                                </form>
                                                            </Grid>
                                                            <Grid item xs={12} sm={12} md={6} className="d-flex align-items-end justify-content-center">
                                                                <img src={ApiImg.src}
                                                                    alt="api_img" width={'197px'} height={'224px'}></img>
                                                            </Grid>
                                                        </Grid>

                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} className="main_div">
                                                <Card className="main_card">
                                                    <CardHeader
                                                        title='API Key List & Access'
                                                        className="ps-4"
                                                    />
                                                    <CardContent className="d-flex flex-column gap-4 pt-0 ps-4">
                                                        <Typography variant="body1" className="title_apikey" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>
                                                            An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.
                                                        </Typography>
                                                        <div className="d-flex flex-column p-4 gap-2 rounded" style={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.06)' : 'rgb(47 43 61 / 0.06)' }}>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <Typography variant="h5" className="server_keytitle" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : ' rgb(47 43 61 / 0.9)' }}>Server Key 1</Typography>
                                                                <Chip label="Full Access" color="primary" variant="outlined" />
                                                            </div>

                                                            <div className="d-flex align-items-center gap-2">
                                                                <Typography variant="body1" className="mb-0 key_text" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>23eaf7f0-f4f7-495e-8b86-fad3261282ac</Typography>
                                                                <div className="d-flex">
                                                                    <IconButton size="small" aria-label="copy">
                                                                        <TbCopy style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }} />
                                                                    </IconButton>
                                                                </div>
                                                            </div>
                                                            <Typography variant="body1" className="create_dat" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.4)' }}>
                                                                Created on 28 Apr 2021, 18:20 GTM+4:10
                                                            </Typography>
                                                        </div>
                                                        <div className="d-flex flex-column p-4 gap-2 rounded" style={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.06)' : 'rgb(47 43 61 / 0.06)' }}>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <Typography variant="h5" className="server_keytitle" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : ' rgb(47 43 61 / 0.9)' }}>Server Key 2</Typography>
                                                                <Chip label="Read Only" color="primary" variant="outlined" />
                                                            </div>

                                                            <div className="d-flex align-items-center gap-2">
                                                                <Typography variant="body1" className="mb-0 key_text" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>bb98e571-a2e2-4de8-90a9-2e231b5e99</Typography>
                                                                <div className="d-flex">
                                                                    <IconButton size="small" aria-label="copy">
                                                                        <TbCopy style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }} />
                                                                    </IconButton>
                                                                </div>
                                                            </div>
                                                            <Typography variant="body1" className="create_dat" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.4)' }}>
                                                                Created on 12 Feb 2021, 10:30 GTM+2:30
                                                            </Typography>
                                                        </div>
                                                        <div className="d-flex flex-column p-4 gap-2 rounded" style={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.06)' : 'rgb(47 43 61 / 0.06)' }}>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <Typography variant="h5" className="server_keytitle" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : ' rgb(47 43 61 / 0.9)' }}>Server Key 3</Typography>
                                                                <Chip label="Full Access" color="primary" variant="outlined" />
                                                            </div>

                                                            <div className="d-flex align-items-center gap-2">
                                                                <Typography variant="body1" className="mb-0 key_text" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>2e915e59-3105-47f2-8838-6e46bf83b711</Typography>
                                                                <div className="d-flex">
                                                                    <IconButton size="small" aria-label="copy">
                                                                        <TbCopy />
                                                                    </IconButton>
                                                                </div>
                                                            </div>
                                                            <Typography variant="body1" className="create_dat" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.4)' }} >
                                                                Created on 28 Dec 2021, 12:21 GTM+4:10
                                                            </Typography>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} className="main_div">
                                                <Card className="main_card">
                                                    <CardHeader
                                                        title='Recent Devices'
                                                        className="ps-4"
                                                    />
                                                    <div className="overflow-x-auto">
                                                        <TableContainer style={{ width: '100%' }}>
                                                            <Table>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell className="tablecell_txt"
                                                                            style={{
                                                                                whiteSpace: 'nowrap',
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                            }}>
                                                                            Browser
                                                                        </TableCell>
                                                                        <TableCell className="tablecell_txt"
                                                                            style={{
                                                                                whiteSpace: 'nowrap',
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                            }}>
                                                                            Device
                                                                        </TableCell>
                                                                        <TableCell className="tablecell_txt"
                                                                            style={{
                                                                                whiteSpace: 'nowrap',
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                            }}>
                                                                            Location
                                                                        </TableCell>
                                                                        <TableCell className="tablecell_txt"
                                                                            style={{
                                                                                whiteSpace: 'nowrap',
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                            }}>
                                                                            Recent Activities
                                                                        </TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {data.map((row, index) => (
                                                                        <TableRow key={index}>
                                                                            <TableCell className="tablecell_txt"
                                                                                style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis',
                                                                                    color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                                }}>
                                                                                <div className="d-flex gap-1 align-items-center name_brow" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : ' rgb(47 43 61 / 0.9)' }}>
                                                                                    {row.icon}
                                                                                    {row.browser}
                                                                                </div>
                                                                            </TableCell>
                                                                            <TableCell className="tablecell_txt"
                                                                                style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis',
                                                                                    color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                                }}>{row.device}</TableCell>
                                                                            <TableCell className="tablecell_txt"
                                                                                style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis',
                                                                                    color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                                }}>{row.location}</TableCell>
                                                                            <TableCell className="tablecell_txt"
                                                                                style={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis',
                                                                                    color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)',
                                                                                }}>{row.recentActivity}</TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>
                                                    </div>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={tabValue} index={2}>
                                        <Grid container spacing={6}>
                                            <Grid item xs={12}>
                                                <Card className="main_card">
                                                    <Grid container className="connection_grid ms-0">
                                                        <Grid item xs={12} sm={12} md={6}>
                                                            <CardHeader
                                                                title="Connected Accounts"
                                                                subheader="Display content from your connected accounts on your site"
                                                                className="ps-4"
                                                            />
                                                            <CardContent className="d-flex flex-column gap-4">
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={googleIcon.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.9)' }}>Google</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Calendar and Contacts</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Switch {...label} defaultChecked />
                                                                </div>

                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={salakIcon.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">slack</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Communications</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Switch {...label} />
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={githubIcon.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Github</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Manage your Git repositories</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Switch {...label} defaultChecked />
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={mailchimp.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Mailchimp</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Email marketing service</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Switch {...label} defaultChecked />
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={asana.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Asana</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Task Communication</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Switch {...label} />
                                                                </div>
                                                            </CardContent>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={6}>
                                                            <CardHeader
                                                                title="Social Accounts"
                                                                subheader="Display content from social accounts on your site"
                                                                className="ps-4"
                                                            />
                                                            <CardContent className="d-flex flex-column gap-4">
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={facebook.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Facebook</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Not Connected</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Button className="link_icon">
                                                                        <RiLink />
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={twitter.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Twitter</Typography>
                                                                            <Typography variant="body2"><a href="#">@Pixinvent</a></Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Button className="delete_btn">
                                                                        <TbTrash />
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={linkdin.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Linkedin</Typography>
                                                                            <Typography variant="body2"><a href="#">@Pixinvent</a></Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Button className="delete_btn">
                                                                        <TbTrash />
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={dribble.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Dribbble</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Not Connected</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Button className="link_icon">
                                                                        <RiLink />
                                                                    </Button>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center gap-4">
                                                                    <div className="d-flex align-items-center gap-4">
                                                                        <img src={behance.src} alt="google" width={32} height={32} />
                                                                        <div>
                                                                            <Typography variant="body1">Behance</Typography>
                                                                            <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>Not Connected</Typography>
                                                                        </div>
                                                                    </div>
                                                                    <Button className="link_icon">
                                                                        <RiLink />
                                                                    </Button>
                                                                </div>
                                                            </CardContent>
                                                        </Grid>
                                                    </Grid>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
            </div >
        </div >

    )

}

export default function ThemedList() {
    return (
        <ThemeProvider>
            <Setting />
        </ThemeProvider>
    );
}