"use client"
import React, { SyntheticEvent, useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { MdOutlineColorLens } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { Avatar, AvatarGroup, Box, Button, Card, CardContent, CardHeader, CardMedia, Chip, Grid, IconButton, LinearProgress, ListItemText, Menu, MenuItem, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { CiCalendarDate } from "react-icons/ci";
import '../globals.css'
import { TbUserCheck, TbUsers, TbLink, TbUser, TbCheck, TbCrown, TbFlag, TbLanguage, TbPhoneCall, TbMessages, TbMail, TbListDetails, TbChecklist, TbFolders, TbUserX, TbMessageDots, TbUserPlus } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useTheme } from '@mui/material'
import styles from '../page.module.css'
import './userProfile.css'
import Image from 'next/image'
import UserImg from '../../images/Avtar1.png'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { BiSolidFilePdf } from "react-icons/bi";
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider, ColorModeContext } from "@/components/ThemeProvider/ThemeProvider";
import avtar1 from '../../images/Avtar1.png';
import avtar2 from '../../images/avtar2.png';
import avtar3 from '../../images/avtar3.png';
import avtar4 from '../../images/avtare4.png';
import avtar5 from '../../images/avtar5.png';
import avtar6 from '../../images/avtar6.png';
import icon1 from '../../images/react-bg.png';
import icon2 from '../../images/support-bg.png';
import icon3 from '../../images/figma-bg.png';
import icon4 from '../../images/vue-bg.png';
import icon5 from '../../images/twitter-bg.png';
import iconXd from '../../images/xd-bg.png';
import iconSocial from '../../images/social-bg.png';
import iconEvent from '../../images/event-bg.png';
import iconhtml from '../../images/html-bg.png';
import iconpython from '../../images/python-bg.png';
import { SlStar } from "react-icons/sl";
import { MdOutlineMoreVert } from "react-icons/md";
import { icon } from '@fortawesome/fontawesome-svg-core';
import { count } from 'console';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


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
function UserProfile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleTabChange = (event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const TabIcon = ({ icon: Icon, label }: { icon: any; label: string }) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icon size={20} />
            <span>{label}</span>
        </div>
    );

    return (
        <>
            <Box sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                // Add these theme-aware styles
                '& .MuiPaper-root': {
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                },
                '& .MuiTypography-root': {
                    color: 'text.primary',
                },
                '& .pro_tbicon': {
                    color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : '#637381',
                },
                '& .colorpllate_icon': {
                    color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : '#637381',
                },
                '& .sub_Cat': {
                    color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : '#637381',
                },
                '& .timeline_card': {
                    '& .MuiTypography-root': {
                        color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'inherit',
                    },
                    '& .first': {
                        color: theme.palette.mode === 'dark' ? '#fff' : '#333',
                    },
                    '& .invoice_min': {
                        color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : '#637381',
                    },
                    '& .invoices_subtitle': {
                        color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : '#637381',
                    },
                    '& .client': {
                        color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : '#637381',
                    },

                },


            }}>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
                    </div>
                    
                    <div className={styles.content}>
                        <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                        <div className="container user_pro_cont">
                            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={6}>
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    height="194"
                                                    image="https://demos.pixinvent.com/vuexy-nextjs-admin-template/demo-1/images/pages/profile-banner.png"
                                                    alt="Paella dish"
                                                    style={{ blockSize: '250px' }}
                                                />
                                                <CardContent sx={{
                                                    display: 'flex',
                                                    gap: '20px',
                                                    paddingTop: '0px !important',
                                                    flexDirection: 'column', // default flex-direction
                                                    justifyContent: 'center', // default justify-content
                                                    alignItems: 'center', // default align-items

                                                    // Responsive styles
                                                    '@media (min-width: 900px)': {
                                                        flexDirection: 'row', // Change flex-direction on screens wider than 900px
                                                        justifyContent: 'flex-start', // Align items to the start of the flex container
                                                        alignItems: 'flex-end', // Align items to the end of the flex container
                                                    },
                                                }}>
                                                    <div className='d-flex userimg'>
                                                        <Image src={UserImg} alt={'userimg'} style={{ borderRadius: '.375rem' }}>
                                                        </Image>
                                                    </div>
                                                    <div className='d-flex flex-row justify-content-start gap-5 align-items-center w-100 custom-flex-container'>
                                                        <div className='d-flex flex-column align-items-start gap-2 res_cls'>
                                                            <Typography variant='h4' className='pro_name' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.9)' }}>
                                                                John Deo
                                                            </Typography>
                                                            <div className='d-flex flex-wrap gap-2 justify-content-center'>
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <MdOutlineColorLens className='colorpllate_icon' />
                                                                    <Typography variant='subtitle2' className='sub_Cat' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : '#333' }}>
                                                                        UX Designer
                                                                    </Typography>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <GrLocation className='colorpllate_icon' />
                                                                    <Typography variant='subtitle2' className='sub_Cat'>
                                                                        Vatican City
                                                                    </Typography>
                                                                </div>
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <CiCalendarDate className='colorpllate_icon' />
                                                                    <Typography variant='subtitle2' className='sub_Cat'>
                                                                        April 2021
                                                                    </Typography>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="ms-auto"> {/* Added this class to push the button to the right */}
                                                            <Button className="button_rigth">
                                                                <TbUserCheck className="user_icon me-2" />
                                                                Connected
                                                            </Button>
                                                        </div>
                                                    </div>

                                                </CardContent>
                                            </Card>
                                        </Grid>
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
                                                            color: '#637381' // Default icon color
                                                        }
                                                    },
                                                    '& .MuiTabs-indicator': {
                                                        display: 'none'
                                                    }
                                                }}
                                            >
                                                <Tab
                                                    icon={<TabIcon icon={TbUserCheck} label="Profile" />}
                                                    aria-label="profile"
                                                />
                                                <Tab
                                                    icon={<TabIcon icon={TbUsers} label="Teams" />}
                                                    aria-label="teams"
                                                />
                                                <Tab
                                                    icon={<TabIcon icon={RxDashboard} label="Projects" />}
                                                    aria-label="projects"
                                                />
                                                <Tab
                                                    icon={<TabIcon icon={TbLink} label="Connections" />}
                                                    aria-label="connections"
                                                />
                                            </Tabs>
                                            <TabPanel value={tabValue} index={0}>
                                                <Grid container spacing={3}>
                                                    {/* Left Column */}
                                                    <Grid item xs={12} md={5} lg={4} container direction="column" spacing={3} className='res_padding'>
                                                        <Grid item>
                                                            <Paper sx={{ p: 3, height: '100%' }}>
                                                                {/* About Section */}
                                                                <CardContent className='d-flex flex-column gap-4'>
                                                                    <div className='d-flex flex-column gap-3'>
                                                                        <Typography variant='subtitle2' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.4)' }}>
                                                                            ABOUT
                                                                        </Typography>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbUser className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    FullName:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{
                                                                                    color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)'
                                                                                }}>
                                                                                    John Doe
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbCheck className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Status:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Active
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbCrown className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Role:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Developer
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbFlag className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Country:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    USA
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbLanguage className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Language:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    English
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='d-flex flex-column gap-3'>
                                                                        <Typography variant='subtitle2' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.4)' }}>
                                                                            CONTACTS
                                                                        </Typography>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbPhoneCall className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Contact:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    (123) 456-7890
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbMessages className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Skype:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    John.doe
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbMail className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Email:
                                                                                </Typography>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    John.doe@example.com
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='d-flex flex-column gap-3'>
                                                                        <Typography variant='subtitle2' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.4)' }}>
                                                                            TEAMS
                                                                        </Typography>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                Backend Developer
                                                                            </Typography>
                                                                            <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                (126 Members)
                                                                            </Typography>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                React Developer
                                                                            </Typography>
                                                                            <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                (98 Members)
                                                                            </Typography>
                                                                        </div>
                                                                    </div>
                                                                </CardContent>
                                                            </Paper>
                                                        </Grid>
                                                        <Grid item>
                                                            <Paper sx={{ p: 3, height: '100%' }}>
                                                                <CardContent className='d-flex flex-column gap-4'>
                                                                    <div className='d-flex flex-column gap-3'>
                                                                        <Typography variant='subtitle2' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.4)' }}>
                                                                            OVERVIEW
                                                                        </Typography>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbChecklist className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Task Compiled:
                                                                                </Typography>
                                                                                <Typography variant='body1' className='text-secondary' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    13.5k
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbUsers className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Connections:
                                                                                </Typography>
                                                                                <Typography variant='body1' className='text-secondary' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    897
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <TbFolders className='pro_tbicon' />
                                                                            <div className='d-flex flex-warp align-items-center gap-1'>
                                                                                <Typography variant='body1' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    Projects Compiled:
                                                                                </Typography>
                                                                                <Typography variant='body1' className='text-secondary' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                    146
                                                                                </Typography>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </CardContent>
                                                            </Paper>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={7} lg={8} className='grid_right res_padding' container direction="column" spacing={3} style={{ flexWrap: 'nowrap' }}>
                                                        <Grid item xs={12} >
                                                            <Paper sx={{ p: 3 }}>
                                                                <CardHeader
                                                                    avatar={
                                                                        <TbListDetails />

                                                                    }
                                                                    title={<Typography>Activity Timeline</Typography>}
                                                                />
                                                                <CardContent className='timeline_card'>
                                                                    <Timeline>
                                                                        <TimelineItem>
                                                                            <TimelineSeparator>
                                                                                <TimelineDot color="secondary" />
                                                                                <TimelineConnector />
                                                                            </TimelineSeparator>
                                                                            <TimelineContent className='contentoftimeline'>
                                                                                <div className='d-flex justify-content-between pb-1 block res_dis'>
                                                                                    <Typography variant="h6" component="p" className='first'>
                                                                                        12 Invoices have been paid
                                                                                    </Typography>
                                                                                    <Typography variant="caption" display="block" style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)', marginTop: '5px' }} className='invoice_min'>12 min ago</Typography>
                                                                                </div>
                                                                                <Typography className='invoices_subtitle pb-2'>
                                                                                    Invoices have been paid to the company
                                                                                </Typography>
                                                                                <div className='pdf_part d-flex align-items-center'>
                                                                                    <BiSolidFilePdf style={{ color: '#d00606', fontSize: '20px' }} />
                                                                                    <Typography variant="subtitle1" component="span" style={{ marginLeft: '5px' }}>invoices.pdf</Typography>
                                                                                </div>
                                                                            </TimelineContent>
                                                                        </TimelineItem>
                                                                        <TimelineItem>
                                                                            <TimelineSeparator>
                                                                                <TimelineDot color="primary" />
                                                                                <TimelineConnector />
                                                                            </TimelineSeparator>
                                                                            <TimelineContent className='contentoftimeline'>
                                                                                <div className='d-flex justify-content-between pb-1 res_dis'>
                                                                                    <Typography variant="h6" component="p" className='first'>
                                                                                        Client Meeting
                                                                                    </Typography>
                                                                                    <Typography variant="caption" display="block" style={{ marginTop: '5px' }} className='invoice_min'>45 min ago</Typography>
                                                                                </div>
                                                                                <Typography className='invoices_subtitle pb-2'>
                                                                                    Project meeting with john @10:15am
                                                                                </Typography>
                                                                                <div className='d-flex align-items-center'>
                                                                                    <Avatar className='is-8 bs-8' style={{ height: "30px", width: "30px" }}>
                                                                                        <TbUser />
                                                                                    </Avatar>
                                                                                    <div className='flex-warp d-flex flex-column'>
                                                                                        <Typography variant="subtitle1" component="p" style={{ marginLeft: '5px' }} className='client'>Lester McCarthy (Client)</Typography>
                                                                                        <Typography variant="caption" display="block" style={{ marginLeft: '5px' }} className='client'>CEO of Pixinvent</Typography>
                                                                                    </div>
                                                                                </div>
                                                                            </TimelineContent>
                                                                        </TimelineItem>
                                                                        <TimelineItem>
                                                                            <TimelineSeparator>
                                                                                <TimelineDot color="success" />
                                                                                <TimelineConnector />
                                                                            </TimelineSeparator>
                                                                            <TimelineContent className='contentoftimeline'>
                                                                                <div className='d-flex justify-content-between pb-1 block res_dis'>
                                                                                    <Typography variant="h6" component="p" className='first'>
                                                                                        Create a new project for client
                                                                                    </Typography>
                                                                                    <Typography variant="caption" display="block" style={{ marginTop: '5px' }} className='invoice_min'>2 Day Ago</Typography>
                                                                                </div>
                                                                                <Typography className='invoices_subtitle pb-2'>
                                                                                    6 team members in a project
                                                                                </Typography>
                                                                                <AvatarGroup max={4} className='pull-up'>
                                                                                    <Avatar>  <PersonIcon /> </Avatar>
                                                                                    <Avatar>  <PersonIcon /> </Avatar>
                                                                                    <Avatar>  <PersonIcon /> </Avatar>
                                                                                    <Avatar>  <PersonIcon /> </Avatar>
                                                                                    <Avatar>  <PersonIcon /> </Avatar>
                                                                                    <Avatar>  <PersonIcon /> </Avatar>
                                                                                </AvatarGroup>
                                                                            </TimelineContent>
                                                                        </TimelineItem>
                                                                    </Timeline>
                                                                </CardContent>
                                                            </Paper>
                                                        </Grid>
                                                        <Grid container item spacing={3}>
                                                            {/* Connections Card */}
                                                            <Grid item xs={12} md={6}>
                                                                <Paper sx={{ p: 3, height: '100%' }}>
                                                                    <CardHeader
                                                                        title={
                                                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                {/* Title */}
                                                                                <Typography variant="h6" sx={{ mb: 2 }}>
                                                                                    Connections
                                                                                </Typography>

                                                                                {/* MoreVert Icon */}
                                                                                <div style={{ position: 'relative' }}>
                                                                                    {/* MoreVert Icon */}
                                                                                    <IconButton
                                                                                        size="small"
                                                                                        onClick={handleClick}
                                                                                        sx={{ position: 'absolute', top: -25, right: 0, color: 'text.disabled' }}
                                                                                    >
                                                                                        <MdOutlineMoreVert />
                                                                                    </IconButton>

                                                                                    {/* Menu */}
                                                                                    <Menu
                                                                                        anchorEl={anchorEl}
                                                                                        open={open}
                                                                                        onClose={handleClose}
                                                                                        anchorOrigin={{
                                                                                            vertical: 'top',
                                                                                            horizontal: 'right',
                                                                                        }}
                                                                                        transformOrigin={{
                                                                                            vertical: 'top',
                                                                                            horizontal: 'right',
                                                                                        }}
                                                                                    >
                                                                                        <MenuItem onClick={handleClose}>
                                                                                            <ListItemText primary="Share Connection" />
                                                                                        </MenuItem>
                                                                                        <MenuItem onClick={handleClose}>
                                                                                            <ListItemText primary="Suggest Edits" />
                                                                                        </MenuItem>
                                                                                        <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                            <ListItemText primary="Report Bug" />
                                                                                        </MenuItem>
                                                                                    </Menu>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    />
                                                                    <CardContent>
                                                                        {/* Connections list */}
                                                                        <div className='d-flex flex-column gap-3'>
                                                                            {[
                                                                                { name: 'Cecilia Payne', connections: '45 Connections', avatar: avtar1.src, isConnected: true },
                                                                                { name: 'Curtis Fletcher', connections: '1.32k Connections', avatar: avtar2.src, isConnected: false },
                                                                                { name: 'Alice Stone', connections: '125 Connections', avatar: avtar3.src, isConnected: false },
                                                                                { name: 'Darrell Barnes', connections: '456 Connections', avatar: avtar3.src, isConnected: true },
                                                                                { name: 'Eugenia Moore', connections: '1.2k Connections', avatar: avtar3.src, isConnected: true },

                                                                            ].map((connection, index) => (
                                                                                <div key={index} className='d-flex align-items-center justify-content-between'>
                                                                                    <div className='d-flex align-items-center gap-2'>
                                                                                        <Avatar src={connection.avatar || '/images/default-avatar.png'} />
                                                                                        <div>
                                                                                            <Typography variant='subtitle1' className='name_user' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.9)' }}>{connection.name}</Typography>
                                                                                            <Typography variant='body2' className='sub_text' style={{ marginBottom: '0px', color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                                                {connection.connections}
                                                                                            </Typography>
                                                                                        </div>
                                                                                    </div>
                                                                                    <Button variant="outlined" className={`btncheck ${connection.isConnected ? 'btn-connected' : 'btn-not-connected'}`}>
                                                                                        {connection.isConnected ? <TbUserCheck /> : <TbUserX />}
                                                                                    </Button>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <Button
                                                                            fullWidth
                                                                            sx={{ mt: 2 }}
                                                                            variant="text"
                                                                            className='vconnection'
                                                                        >
                                                                            View all connections
                                                                        </Button>
                                                                    </CardContent>
                                                                </Paper>
                                                            </Grid>

                                                            {/* Teams Card */}
                                                            <Grid item xs={12} md={6}>
                                                                <Paper sx={{ p: 3, height: '100%' }}>
                                                                    <CardHeader
                                                                        title={
                                                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                {/* Title */}
                                                                                <Typography variant="h6" sx={{ mb: 2 }}>
                                                                                    Team
                                                                                </Typography>

                                                                                {/* MoreVert Icon */}
                                                                                <IconButton
                                                                                    size="small"
                                                                                    onClick={handleClick}
                                                                                    sx={{ color: 'text.disabled', marginBottom: '20px' }}
                                                                                >
                                                                                    <MdOutlineMoreVert />
                                                                                </IconButton>

                                                                                {/* Menu */}
                                                                                <Menu
                                                                                    anchorEl={anchorEl}
                                                                                    open={open}
                                                                                    onClose={handleClose}
                                                                                    anchorOrigin={{
                                                                                        vertical: 'top',
                                                                                        horizontal: 'right',
                                                                                    }}
                                                                                    transformOrigin={{
                                                                                        vertical: 'top',
                                                                                        horizontal: 'right',
                                                                                    }}
                                                                                >
                                                                                    <MenuItem onClick={handleClose}>
                                                                                        Share Connection
                                                                                    </MenuItem>
                                                                                    <MenuItem onClick={handleClose}>
                                                                                        Suggest Edits
                                                                                    </MenuItem>
                                                                                    <MenuItem onClick={handleClose}>
                                                                                        Report Bug
                                                                                    </MenuItem>
                                                                                </Menu>
                                                                            </div>
                                                                        }
                                                                    />

                                                                    <CardContent>
                                                                        {/* Teams list */}
                                                                        <div className='d-flex flex-column gap-3'>
                                                                            {[
                                                                                { name: 'React Developers', members: '72 Members', icon: icon1.src, badge: 'Developer' },
                                                                                { name: 'Support Team', members: '122 Members', icon: icon2.src, badge: 'Support' },
                                                                                { name: 'UI Designer', members: '7 Members', icon: icon3.src, badge: 'Designer' },
                                                                                { name: 'Vue.js Developers', members: '289 Members', icon: icon4.src, badge: 'Developer' },
                                                                                { name: 'Digital Marketing', members: '24 Members', icon: icon5.src, badge: 'Marketing' },

                                                                            ].map((team, index) => (
                                                                                <div key={index} className='d-flex align-items-center justify-content-between'>
                                                                                    <div className='d-flex align-items-center gap-2'>
                                                                                        <Avatar src={team.icon}></Avatar>
                                                                                        <div>
                                                                                            <Typography variant='subtitle1' className='name_user'>{team.name}</Typography>
                                                                                            <Typography variant='body2' className='sub_text'>
                                                                                                {team.members}
                                                                                            </Typography>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className={`badge badge-${team.badge.toLowerCase()}`}>
                                                                                        {team.badge}
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <Button
                                                                            fullWidth
                                                                            sx={{ mt: 2 }}
                                                                            variant="text"
                                                                            className='vconnection'
                                                                        >
                                                                            View all teams
                                                                        </Button>
                                                                    </CardContent>
                                                                </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </TabPanel>
                                            <TabPanel value={tabValue} index={1}>
                                                <Grid container spacing={3}>
                                                    {[
                                                        {
                                                            name: 'React Developers',
                                                            description: 'We don’t make assumptions about the rest of your technology stack, so you can develop new features.',
                                                            members: [{ src: avtar1.src }, { src: avtar2.src }, { src: avtar3.src }, { count: 9 }],
                                                            badges: ['React', 'MUI'],
                                                            icon: icon1.src,
                                                        },
                                                        {
                                                            name: 'Vue.js Dev Team',
                                                            description: 'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen.',
                                                            members: [{ src: avtar4.src }, { src: avtar2.src }, { src: avtar3.src }, { count: 4 }],
                                                            badges: ['Vuejs', 'Developer'],
                                                            icon: icon4.src,
                                                        },
                                                        {
                                                            name: 'Creative Designers',
                                                            description: 'A design or product team is more than just the people on it. A team includes the people, the roles they play.',
                                                            members: [{ src: avtar1.src }, { src: avtar4.src }, { src: avtar3.src }, { count: 8 }],
                                                            badges: ['Sketch', 'XD'],
                                                            icon: iconXd.src,
                                                        },
                                                        {
                                                            name: 'Support Team',
                                                            description: 'Support your team. Your customer support team is fielding the good, the bad, and the ugly on daily basis.',
                                                            members: [{ src: avtar2.src }, { src: avtar3.src }, { src: avtar1.src }],
                                                            badges: ['Zendesk'],
                                                            icon: icon2.src,
                                                        },
                                                        {
                                                            name: 'Digital Marketing',
                                                            description: 'Digital marketing refers to advertising delivered through digital channels such as search engines, websites…',
                                                            members: [{ src: avtar2.src }, { src: avtar3.src }, { src: avtar1.src }, { count: 7 }],
                                                            badges: ['Twitter', 'Email'],
                                                            icon: iconSocial.src,
                                                        },
                                                        {
                                                            name: 'Event',
                                                            description: 'Event is defined as a particular contest which is part of a program of contests. An example of an event is the long…',
                                                            members: [{ src: avtar4.src }, { src: avtar1.src }, { src: avtar3.src }, { count: 2 }],
                                                            badges: ['Hubilo'],
                                                            icon: iconEvent.src,
                                                        },
                                                        {
                                                            name: 'Figma Resources',
                                                            description: 'Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers.',
                                                            members: [{ src: avtar3.src }, { src: avtar4.src }, { src: avtar2.src }],
                                                            badges: ['UI/UX', 'Figma'],
                                                            icon: icon3.src,
                                                        },
                                                        {
                                                            name: 'Only Beginners',
                                                            description: 'Learn the basics of how websites work, front-end vs back-end. Learn basic HTML, CSS, and JavaScript.',
                                                            members: [{ src: avtar4.src }, { src: avtar1.src }, { src: avtar2.src }],
                                                            badges: ['CSS', 'HTML'],
                                                            icon: iconhtml.src,
                                                        },
                                                        {
                                                            name: 'Python Developers',
                                                            description: 'Harness Pythons versatility for web development, data analysis & system automation for cutting-edge solutions.',
                                                            members: [{ src: avtar3.src }, { src: avtar4.src }, { src: avtar1.src }],
                                                            badges: ['Python'],
                                                            icon: iconpython.src,
                                                        },
                                                    ].map((team, index) => (
                                                        <Grid item xs={12} md={6} lg={4} key={index}>
                                                            <Box
                                                                sx={{
                                                                    border: '1px solid #e0e0e0',
                                                                    borderRadius: '8px',
                                                                    p: 2,
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: 2,
                                                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                                                }}
                                                            >
                                                                {/* Team header with icon and name */}
                                                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                                                    <Box display="flex" alignItems="center" gap={2}>
                                                                        <Avatar src={team.icon} />
                                                                        <Typography variant="h6" className='heading_txt' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.9)' }}>{team.name}</Typography>
                                                                    </Box>
                                                                    <Box display="flex" gap={1}>
                                                                        <IconButton>
                                                                            <SlStar />
                                                                        </IconButton>
                                                                        <div style={{ position: 'relative', padding: '5px' }}>
                                                                            {/* MoreVert Icon */}
                                                                            <IconButton
                                                                                size="small"
                                                                                onClick={handleClick}
                                                                            >
                                                                                <MdOutlineMoreVert />
                                                                            </IconButton>

                                                                            {/* Menu */}
                                                                            <Menu
                                                                                anchorEl={anchorEl}
                                                                                open={open}
                                                                                onClose={handleClose}
                                                                                anchorOrigin={{
                                                                                    vertical: 'top',
                                                                                    horizontal: 'right',
                                                                                }}
                                                                                transformOrigin={{
                                                                                    vertical: 'top',
                                                                                    horizontal: 'right',
                                                                                }}
                                                                            >
                                                                                <MenuItem onClick={handleClose}>
                                                                                    <ListItemText primary="Rename Team" />
                                                                                </MenuItem>
                                                                                <MenuItem onClick={handleClose}>
                                                                                    <ListItemText primary="View Details" />
                                                                                </MenuItem>
                                                                                <MenuItem onClick={handleClose}>
                                                                                    <ListItemText primary="Add to Favorite" />
                                                                                </MenuItem>
                                                                                <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                    <ListItemText primary="Delete Team" />
                                                                                </MenuItem>
                                                                            </Menu>
                                                                        </div>
                                                                    </Box>
                                                                </Box>

                                                                {/* Team description */}
                                                                <Typography variant="body2" className='subtext' style={{ color: theme.palette.mode === 'dark' ? '#E7E3Fc99' : 'rgb(47 43 61 / 0.7)' }}>
                                                                    {team.description}
                                                                </Typography>

                                                                {/* Team members */}
                                                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                                                    <Box display="flex" alignItems="center">
                                                                        <AvatarGroup max={4}>
                                                                            {team.members.slice(0, 3).map((member, index) => (
                                                                                <Avatar key={index} src={member.src} />
                                                                            ))}
                                                                            {team.members.length > 3 && (
                                                                                <Avatar>+{team.members[3].count}</Avatar>
                                                                            )}
                                                                        </AvatarGroup>
                                                                    </Box>
                                                                    <Box display="flex">
                                                                        <Stack direction="row" spacing={1}>
                                                                            {team.badges.map((badge, index) => (
                                                                                <Chip key={index} label={badge} variant="outlined" sx={{
                                                                                    bgcolor:
                                                                                        badge === 'React' || badge === 'Twitter' || badge === 'HTML'
                                                                                            ? 'rgb(115 103 240 / 0.16)'
                                                                                            : badge === 'MUI' || badge === 'Zendesk' || badge === 'CSS' || badge === 'Python'
                                                                                                ? 'rgb(0 186 209 / 0.16)'
                                                                                                : badge === 'Vuejs' || badge === 'Email' || badge === 'Hubilo' || badge === 'UI/UX'
                                                                                                    ? 'rgb(40 199 111 / 0.16)'
                                                                                                    : badge === 'Developer'
                                                                                                        ? 'rgb(255 76 81 / 0.16)'
                                                                                                        : badge === 'Sketch' || badge === 'Figma'
                                                                                                            ? 'rgb(255 159 67 / 0.16)'
                                                                                                            : badge === 'XD'
                                                                                                                ? 'rgb(255 76 81 / 0.16)'
                                                                                                                : 'default',
                                                                                    color: badge === 'XD' ? '#FF4C51'
                                                                                        : badge === 'React' || badge === 'Twitter' || badge === 'HTML' ? '#7367F0'
                                                                                            : badge === 'MUI' || badge === 'Zendesk' || badge === 'CSS' || badge === 'Python' ? '#00BAD1'
                                                                                                : badge === 'Vuejs' || badge === 'Email' || badge === 'Hubilo' || badge === 'UI/UX' ? '#28C76F'
                                                                                                    : badge === 'Developer' ? '#FF4C51'
                                                                                                        : badge === 'Sketch' || badge === 'Figma' ? '#FF9F43'
                                                                                                            : 'default',

                                                                                }} />
                                                                            ))}
                                                                        </Stack>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </TabPanel>
                                            <TabPanel value={tabValue} index={2}>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Card>
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }} >
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-3'>
                                                                        <Avatar src={iconSocial.src} />
                                                                        <div>
                                                                            <Typography
                                                                                variant="h5"
                                                                                className='heading_txt1'
                                                                                component="a"
                                                                                href="/vuexy-nextjs-admin-template/demo-1"
                                                                                style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.9)' }}
                                                                            >
                                                                                Social Banners
                                                                            </Typography>

                                                                            <Typography
                                                                                variant='body1'
                                                                                className='project_client'
                                                                                style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}
                                                                            >
                                                                                Client: Christian Jimenez
                                                                            </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ position: 'relative' }}>
                                                                        {/* MoreVert Icon */}
                                                                        <IconButton
                                                                            size="small"
                                                                            onClick={handleClick}
                                                                        >
                                                                            <MdOutlineMoreVert />
                                                                        </IconButton>

                                                                        {/* Menu */}
                                                                        <Menu
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            anchorOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Rename Project" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="View Details" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Add to Favorite" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                <ListItemText primary="Leave Project" />
                                                                            </MenuItem>
                                                                        </Menu>
                                                                    </div>
                                                                </div>
                                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
                                                                    {/* Total Budget Section */}
                                                                    <Box
                                                                        sx={{
                                                                            backgroundColor: 'action.hover',
                                                                            borderRadius: 1,
                                                                        }}
                                                                    >
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.6)' }}>
                                                                                $24.8k
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                /$18.2k
                                                                            </Typography>
                                                                        </Box>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            Total Budget
                                                                        </Typography>
                                                                    </Box>
                                                                    {/* Start Date and Deadline Section */}
                                                                    <Box display="flex" flexDirection="column">
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Start Date:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                14/2/21
                                                                            </Typography>
                                                                        </Box>
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Deadline:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                28/2/22
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Typography variant="body2" style={{ marginTop: 10, color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.6)' }} className='sub_body2'>
                                                                        We are Consulting, Software Development and Web Development Services.
                                                                    </Typography>
                                                                </Box>
                                                            </CardContent>
                                                            <hr />
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <Box display='flex'>
                                                                        <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                            All hours:
                                                                        </Typography>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            380/244
                                                                        </Typography>
                                                                    </Box>
                                                                    <Chip label="28 days left" color="success" />
                                                                </div>
                                                                <Box>
                                                                    {/* Tasks and Completed Percentage */}
                                                                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.6)' }}>
                                                                            Tasks: 328/344
                                                                        </Typography>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb" style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.6)' }}>
                                                                            95% Completed
                                                                        </Typography>
                                                                    </Box>

                                                                    {/* Progress Bar */}
                                                                    <LinearProgress
                                                                        variant="determinate"
                                                                        value={95} // This controls the progress percentage
                                                                        sx={{ height: 8 }} // `bs-2` represents the height/border spacing of the progress bar
                                                                        className="mui-vpoogh"
                                                                    />
                                                                </Box>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-1'>
                                                                        <AvatarGroup>
                                                                            <Avatar src={avtar4.src} />
                                                                            <Avatar src={avtar3.src} />
                                                                            <Avatar src={avtar2.src} />
                                                                        </AvatarGroup>
                                                                        <Typography variant='body2' className='avtar_txt' style={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>280 members</Typography>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <TbMessageDots className='msgicon' />
                                                                        <Typography variant='body1' className='mui-14ug9cz'>15</Typography>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Card>
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }} >
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-3'>
                                                                        <Avatar src={icon1.src} />
                                                                        <div>
                                                                            <Typography
                                                                                variant="h5"
                                                                                className='heading_txt1'
                                                                                component="a"
                                                                                href="/vuexy-nextjs-admin-template/demo-1"
                                                                            >
                                                                                Admin Template
                                                                            </Typography>
                                                                            <Typography variant='body1' className='project_client'>
                                                                                Client: Jeffrey Phillips
                                                                            </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ position: 'relative' }}>
                                                                        {/* MoreVert Icon */}
                                                                        <IconButton
                                                                            size="small"
                                                                            onClick={handleClick}
                                                                        >
                                                                            <MdOutlineMoreVert />
                                                                        </IconButton>

                                                                        {/* Menu */}
                                                                        <Menu
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            anchorOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Rename Project" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="View Details" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Add to Favorite" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                <ListItemText primary="Leave Project" />
                                                                            </MenuItem>
                                                                        </Menu>
                                                                    </div>
                                                                </div>
                                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
                                                                    {/* Total Budget Section */}
                                                                    <Box
                                                                        sx={{
                                                                            backgroundColor: 'action.hover',
                                                                            borderRadius: 1,
                                                                        }}
                                                                    >
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                $2.4k
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                /$1.8k
                                                                            </Typography>
                                                                        </Box>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            Total Budget
                                                                        </Typography>
                                                                    </Box>
                                                                    {/* Start Date and Deadline Section */}
                                                                    <Box display="flex" flexDirection="column">
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Start Date:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                18/8/21
                                                                            </Typography>
                                                                        </Box>
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Deadline:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                21/6/22
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Typography variant="body2" style={{ marginTop: 10 }} className='sub_body2'>
                                                                        Time is our most valuable asset, that's why we want to help you save it.
                                                                    </Typography>
                                                                </Box>
                                                            </CardContent>
                                                            <hr />
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <Box display='flex'>
                                                                        <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                            All hours:
                                                                        </Typography>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            98/135
                                                                        </Typography>
                                                                    </Box>
                                                                    <Chip label="15 days left" color="warning" />
                                                                </div>
                                                                <Box>
                                                                    {/* Tasks and Completed Percentage */}
                                                                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            Tasks: 38/90
                                                                        </Typography>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            42% Completed
                                                                        </Typography>
                                                                    </Box>

                                                                    {/* Progress Bar */}
                                                                    <LinearProgress
                                                                        variant="determinate"
                                                                        value={42} // This controls the progress percentage
                                                                        sx={{ height: 8 }} // `bs-2` represents the height/border spacing of the progress bar
                                                                        className="mui-vpoogh"
                                                                    />
                                                                </Box>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-1'>
                                                                        <AvatarGroup>
                                                                            <Avatar src={avtar2.src} />
                                                                            <Avatar src={avtar1.src} />
                                                                            <Avatar src={avtar3.src} />
                                                                        </AvatarGroup>
                                                                        <Typography variant='body2' className='avtar_txt'>1.1k members</Typography>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <TbMessageDots className='msgicon' />
                                                                        <Typography variant='body1' className='mui-14ug9cz'>236</Typography>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Card>
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }} >
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-3'>
                                                                        <Avatar src={icon4.src} />
                                                                        <div>
                                                                            <Typography
                                                                                variant="h5"
                                                                                className='heading_txt1'
                                                                                component="a"
                                                                                href="/vuexy-nextjs-admin-template/demo-1"
                                                                            >
                                                                                App Design
                                                                            </Typography>
                                                                            <Typography variant='body1' className='project_client'>
                                                                                Client: Ricky McDonald
                                                                            </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ position: 'relative' }}>
                                                                        {/* MoreVert Icon */}
                                                                        <IconButton
                                                                            size="small"
                                                                            onClick={handleClick}
                                                                        >
                                                                            <MdOutlineMoreVert />
                                                                        </IconButton>

                                                                        {/* Menu */}
                                                                        <Menu
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            anchorOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Rename Project" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="View Details" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Add to Favorite" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                <ListItemText primary="Leave Project" />
                                                                            </MenuItem>
                                                                        </Menu>
                                                                    </div>
                                                                </div>
                                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
                                                                    {/* Total Budget Section */}
                                                                    <Box
                                                                        sx={{
                                                                            backgroundColor: 'action.hover',
                                                                            borderRadius: 1,
                                                                        }}
                                                                    >
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                $980
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                /$420
                                                                            </Typography>
                                                                        </Box>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            Total Budget
                                                                        </Typography>
                                                                    </Box>
                                                                    {/* Start Date and Deadline Section */}
                                                                    <Box display="flex" flexDirection="column">
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Start Date:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                24/7/21
                                                                            </Typography>
                                                                        </Box>
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Deadline:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                8/10/21
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Typography variant="body2" style={{ marginTop: 10 }} className='sub_body2'>
                                                                        Figma dashboard app design combines the user UI & UX.
                                                                    </Typography>
                                                                </Box>
                                                            </CardContent>
                                                            <hr />
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <Box display='flex'>
                                                                        <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                            All hours:
                                                                        </Typography>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            880/421
                                                                        </Typography>
                                                                    </Box>
                                                                    <Chip label="45 days left" color="error" />
                                                                </div>
                                                                <Box>
                                                                    {/* Tasks and Completed Percentage */}
                                                                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            Tasks: 95/140
                                                                        </Typography>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            68% Completed
                                                                        </Typography>
                                                                    </Box>

                                                                    {/* Progress Bar */}
                                                                    <LinearProgress
                                                                        variant="determinate"
                                                                        value={68} // This controls the progress percentage
                                                                        sx={{ height: 8 }} // `bs-2` represents the height/border spacing of the progress bar
                                                                        className="mui-vpoogh"
                                                                    />
                                                                </Box>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-1'>
                                                                        <AvatarGroup>
                                                                            <Avatar src={avtar1.src} />
                                                                            <Avatar src={avtar3.src} />
                                                                            <Avatar src={avtar2.src} />
                                                                        </AvatarGroup>
                                                                        <Typography variant='body2' className='avtar_txt'>458 members</Typography>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <TbMessageDots className='msgicon' />
                                                                        <Typography variant='body1' className='mui-14ug9cz'>98</Typography>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Card>
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }} >
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-3'>
                                                                        <Avatar src={iconhtml.src} />
                                                                        <div>
                                                                            <Typography
                                                                                variant="h5"
                                                                                className='heading_txt1'
                                                                                component="a"
                                                                                href="/vuexy-nextjs-admin-template/demo-1"
                                                                            >
                                                                                Create Website
                                                                            </Typography>
                                                                            <Typography variant='body1' className='project_client'>
                                                                                Client: Hulda Wright
                                                                            </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ position: 'relative' }}>
                                                                        {/* MoreVert Icon */}
                                                                        <IconButton
                                                                            size="small"
                                                                            onClick={handleClick}
                                                                        >
                                                                            <MdOutlineMoreVert />
                                                                        </IconButton>

                                                                        {/* Menu */}
                                                                        <Menu
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            anchorOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Rename Project" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="View Details" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Add to Favorite" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                <ListItemText primary="Leave Project" />
                                                                            </MenuItem>
                                                                        </Menu>
                                                                    </div>
                                                                </div>
                                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
                                                                    {/* Total Budget Section */}
                                                                    <Box
                                                                        sx={{
                                                                            backgroundColor: 'action.hover',
                                                                            borderRadius: 1,
                                                                        }}
                                                                    >
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                $8.5k
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                /$2.43k
                                                                            </Typography>
                                                                        </Box>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            Total Budget
                                                                        </Typography>
                                                                    </Box>
                                                                    {/* Start Date and Deadline Section */}
                                                                    <Box display="flex" flexDirection="column">
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Start Date:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                10/2/19
                                                                            </Typography>
                                                                        </Box>
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Deadline:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                12/9/22
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Typography variant="body2" style={{ marginTop: 10 }} className='sub_body2'>
                                                                        Your domain name should reflect your products or services so that your...
                                                                    </Typography>
                                                                </Box>
                                                            </CardContent>
                                                            <hr />
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <Box display='flex'>
                                                                        <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                            All hours:
                                                                        </Typography>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            380/820
                                                                        </Typography>
                                                                    </Box>
                                                                    <Chip label="126 days left" color="warning" />
                                                                </div>
                                                                <Box>
                                                                    {/* Tasks and Completed Percentage */}
                                                                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            Tasks: 302/420
                                                                        </Typography>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            72% Completed
                                                                        </Typography>
                                                                    </Box>

                                                                    {/* Progress Bar */}
                                                                    <LinearProgress
                                                                        variant="determinate"
                                                                        value={72} // This controls the progress percentage
                                                                        sx={{ height: 8 }} // `bs-2` represents the height/border spacing of the progress bar
                                                                        className="mui-vpoogh"
                                                                    />
                                                                </Box>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-1'>
                                                                        <AvatarGroup>
                                                                            <Avatar src={avtar2.src} />
                                                                            <Avatar src={avtar1.src} />
                                                                            <Avatar src={avtar3.src} />
                                                                        </AvatarGroup>
                                                                        <Typography variant='body2' className='avtar_txt'>137 members</Typography>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <TbMessageDots className='msgicon' />
                                                                        <Typography variant='body1' className='mui-14ug9cz'>120</Typography>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Card>
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }} >
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-3'>
                                                                        <Avatar src={icon3.src} />
                                                                        <div>
                                                                            <Typography
                                                                                variant="h5"
                                                                                className='heading_txt1'
                                                                                component="a"
                                                                                href="/vuexy-nextjs-admin-template/demo-1"
                                                                            >
                                                                                Figma Dashboard
                                                                            </Typography>
                                                                            <Typography variant='body1' className='project_client'>
                                                                                Client: Jerry Greene
                                                                            </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ position: 'relative' }}>
                                                                        {/* MoreVert Icon */}
                                                                        <IconButton
                                                                            size="small"
                                                                            onClick={handleClick}
                                                                        >
                                                                            <MdOutlineMoreVert />
                                                                        </IconButton>

                                                                        {/* Menu */}
                                                                        <Menu
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            anchorOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Rename Project" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="View Details" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Add to Favorite" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                <ListItemText primary="Leave Project" />
                                                                            </MenuItem>
                                                                        </Menu>
                                                                    </div>
                                                                </div>
                                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
                                                                    {/* Total Budget Section */}
                                                                    <Box
                                                                        sx={{
                                                                            backgroundColor: 'action.hover',
                                                                            borderRadius: 1,
                                                                        }}
                                                                    >
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                $52.7k
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                /28.4k
                                                                            </Typography>
                                                                        </Box>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            Total Budget
                                                                        </Typography>
                                                                    </Box>
                                                                    {/* Start Date and Deadline Section */}
                                                                    <Box display="flex" flexDirection="column">
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Start Date:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                12/12/20
                                                                            </Typography>
                                                                        </Box>
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Deadline:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                25/12/21
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Typography variant="body2" style={{ marginTop: 10 }} className='sub_body2'>
                                                                        Time is our most valuable asset, that's why we want to help you save it.
                                                                    </Typography>
                                                                </Box>
                                                            </CardContent>
                                                            <hr />
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <Box display='flex'>
                                                                        <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                            All hours:
                                                                        </Typography>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            880/421
                                                                        </Typography>
                                                                    </Box>
                                                                    <Chip label="5 days left" color="error" />
                                                                </div>
                                                                <Box>
                                                                    {/* Tasks and Completed Percentage */}
                                                                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            Tasks: 100/285
                                                                        </Typography>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            35% Completed
                                                                        </Typography>
                                                                    </Box>

                                                                    {/* Progress Bar */}
                                                                    <LinearProgress
                                                                        variant="determinate"
                                                                        value={35} // This controls the progress percentage
                                                                        sx={{ height: 8 }} // `bs-2` represents the height/border spacing of the progress bar
                                                                        className="mui-vpoogh"
                                                                    />
                                                                </Box>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-1'>
                                                                        <AvatarGroup>
                                                                            <Avatar src={avtar3.src} />
                                                                            <Avatar src={avtar4.src} />
                                                                            <Avatar src={avtar1.src} />
                                                                        </AvatarGroup>
                                                                        <Typography variant='body2' className='avtar_txt'>82 members</Typography>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <TbMessageDots className='msgicon' />
                                                                        <Typography variant='body1' className='mui-14ug9cz'>20</Typography>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Card>
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }} >
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-3'>
                                                                        <Avatar src={iconXd.src} />
                                                                        <div>
                                                                            <Typography
                                                                                variant="h5"
                                                                                className='heading_txt1'
                                                                                component="a"
                                                                                href="/vuexy-nextjs-admin-template/demo-1"
                                                                            >
                                                                                Logo Design
                                                                            </Typography>
                                                                            <Typography variant='body1' className='project_client'>
                                                                                Client: Olive Strickland
                                                                            </Typography>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ position: 'relative' }}>
                                                                        {/* MoreVert Icon */}
                                                                        <IconButton
                                                                            size="small"
                                                                            onClick={handleClick}
                                                                        >
                                                                            <MdOutlineMoreVert />
                                                                        </IconButton>

                                                                        {/* Menu */}
                                                                        <Menu
                                                                            anchorEl={anchorEl}
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            anchorOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                            transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'right',
                                                                            }}
                                                                        >
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Rename Project" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="View Details" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose}>
                                                                                <ListItemText primary="Add to Favorite" />
                                                                            </MenuItem>
                                                                            <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                                <ListItemText primary="Leave Project" />
                                                                            </MenuItem>
                                                                        </Menu>
                                                                    </div>
                                                                </div>
                                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
                                                                    {/* Total Budget Section */}
                                                                    <Box
                                                                        sx={{
                                                                            backgroundColor: 'action.hover',
                                                                            borderRadius: 1,
                                                                        }}
                                                                    >
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                $1.3k
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                /$655
                                                                            </Typography>
                                                                        </Box>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            Total Budget
                                                                        </Typography>
                                                                    </Box>
                                                                    {/* Start Date and Deadline Section */}
                                                                    <Box display="flex" flexDirection="column">
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Start Date:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                17/8/21
                                                                            </Typography>
                                                                        </Box>
                                                                        <Box display="flex">
                                                                            <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                                Deadline:
                                                                            </Typography>
                                                                            <Typography variant="body1" className="mui-14ug9cz">
                                                                                02/11/21
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>

                                                                    <Typography variant="body2" style={{ marginTop: 10 }} className='sub_body2'>
                                                                        Premium logo designs created by top logo designers. Create the branding.
                                                                    </Typography>
                                                                </Box>
                                                            </CardContent>
                                                            <hr />
                                                            <CardContent sx={{ p: '2', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <Box display='flex'>
                                                                        <Typography variant="body1" fontWeight="500" className="mui-cb9j9j">
                                                                            All hours:
                                                                        </Typography>
                                                                        <Typography variant="body1" className="mui-14ug9cz">
                                                                            580/445
                                                                        </Typography>
                                                                    </Box>
                                                                    <Chip label="4 days left" color="success" />
                                                                </div>
                                                                <Box>
                                                                    {/* Tasks and Completed Percentage */}
                                                                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            Tasks: 290/290
                                                                        </Typography>
                                                                        <Typography variant="caption" color="textSecondary" className="mui-da3edb">
                                                                            100% Completed
                                                                        </Typography>
                                                                    </Box>

                                                                    {/* Progress Bar */}
                                                                    <LinearProgress
                                                                        variant="determinate"
                                                                        value={100} // This controls the progress percentage
                                                                        sx={{ height: 8 }} // `bs-2` represents the height/border spacing of the progress bar
                                                                        className="mui-vpoogh"
                                                                    />
                                                                </Box>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                    <div className='d-flex align-items-center gap-1'>
                                                                        <AvatarGroup>
                                                                            <Avatar src={avtar4.src} />
                                                                            <Avatar src={avtar3.src} />
                                                                            <Avatar src={avtar2.src} />
                                                                        </AvatarGroup>
                                                                        <Typography variant='body2' className='avtar_txt'>16 members</Typography>
                                                                    </div>
                                                                    <div className='d-flex align-items-center'>
                                                                        <TbMessageDots className='msgicon' />
                                                                        <Typography variant='body1' className='mui-14ug9cz'>98</Typography>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                </Grid>
                                            </TabPanel>
                                            <TabPanel value={tabValue} index={3}>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} sm={6} md={4}>
                                                        <Card sx={{ position: 'relative' }}>
                                                            <div style={{ position: 'relative' }}>
                                                                {/* MoreVert Icon */}
                                                                <IconButton
                                                                    size="small"
                                                                    onClick={handleClick}
                                                                    sx={{ position: 'absolute', top: 24, right: 20, color: 'text.disabled' }}
                                                                >
                                                                    <MdOutlineMoreVert />
                                                                </IconButton>

                                                                {/* Menu */}
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Share Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Block Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                        <ListItemText primary="Delete" />
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                                                                <Avatar src={avtar1.src} sx={{ width: 100, height: 100, marginTop: '20px' }} />
                                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                    <Typography variant="h5">Mark Gilbert</Typography>
                                                                    <Typography variant="body1" color="text.secondary">UI Designer</Typography>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <Chip label="Figma" size="small" color="secondary" />
                                                                    <Chip label="Sketch" size="small" color="warning" />
                                                                </div>
                                                                <Box display="flex" justifyContent="space-around" mb={2} gap={5}>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">18</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Projects</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">834</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Tasks</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">129</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Connections</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box display="flex" justifyContent="center" gap={3}>
                                                                    <Button variant="contained" color="primary" startIcon={<TbUserCheck />} className='connected_btn'>
                                                                        Connected
                                                                    </Button>
                                                                    <Button variant="outlined" startIcon={<TbMail />} className='email_btn' />
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={4}>
                                                        <Card sx={{ position: 'relative' }}>
                                                            <div style={{ position: 'relative' }}>
                                                                {/* MoreVert Icon */}
                                                                <IconButton
                                                                    size="small"
                                                                    onClick={handleClick}
                                                                    sx={{ position: 'absolute', top: 24, right: 20, color: 'text.disabled' }}
                                                                >
                                                                    <MdOutlineMoreVert />
                                                                </IconButton>

                                                                {/* Menu */}
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Share Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Block Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                        <ListItemText primary="Delete" />
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                                                                <Avatar src={avtar3.src} sx={{ width: 100, height: 100, marginTop: '20px' }} />
                                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                    <Typography variant="h5">Eugenia Parsons</Typography>
                                                                    <Typography variant="body1" color="text.secondary">Developer</Typography>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <Chip label="Angular" size="small" color="error" />
                                                                    <Chip label="React" size="small" color="info" />
                                                                </div>
                                                                <Box display="flex" justifyContent="space-around" mb={2} gap={5}>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">112</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Projects</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">2.31k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Tasks</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">1.28k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Connections</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box display="flex" justifyContent="center" gap={3}>
                                                                    <Button variant="contained" color="primary" startIcon={<TbUserPlus />} className='connect_btn'>
                                                                        Connect
                                                                    </Button>
                                                                    <Button variant="outlined" startIcon={<TbMail />} className='email_btn' />
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={4}>
                                                        <Card sx={{ position: 'relative' }}>
                                                            <div style={{ position: 'relative' }}>
                                                                {/* MoreVert Icon */}
                                                                <IconButton
                                                                    size="small"
                                                                    onClick={handleClick}
                                                                    sx={{ position: 'absolute', top: 24, right: 20, color: 'text.disabled' }}
                                                                >
                                                                    <MdOutlineMoreVert />
                                                                </IconButton>

                                                                {/* Menu */}
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Share Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Block Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                        <ListItemText primary="Delete" />
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                                                                <Avatar src={avtar4.src} sx={{ width: 100, height: 100, marginTop: '20px' }} />
                                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                    <Typography variant="h5">Francis Byrd</Typography>
                                                                    <Typography variant="body1" color="text.secondary">Developer</Typography>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <Chip label="Html" size="small" color="primary" />
                                                                    <Chip label="Sketch" size="small" color="info" />
                                                                </div>
                                                                <Box display="flex" justifyContent="space-around" mb={2} gap={5}>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">32</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Projects</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">1.25k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Tasks</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">890</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Connections</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box display="flex" justifyContent="center" gap={3}>
                                                                    <Button variant="contained" color="primary" startIcon={<TbUserPlus />} className='connect_btn'>
                                                                        Connect
                                                                    </Button>
                                                                    <Button variant="outlined" startIcon={<TbMail />} className='email_btn' />
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={4}>
                                                        <Card sx={{ position: 'relative' }}>
                                                            <div style={{ position: 'relative' }}>
                                                                {/* MoreVert Icon */}
                                                                <IconButton
                                                                    size="small"
                                                                    onClick={handleClick}
                                                                    sx={{ position: 'absolute', top: 24, right: 20, color: 'text.disabled' }}
                                                                >
                                                                    <MdOutlineMoreVert />
                                                                </IconButton>

                                                                {/* Menu */}
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Share Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Block Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                        <ListItemText primary="Delete" />
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                                                                <Avatar src={avtar2.src} sx={{ width: 100, height: 100, marginTop: '20px' }} />
                                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                    <Typography variant="h5">Leon Lucas</Typography>
                                                                    <Typography variant="body1" color="text.secondary">UI/UX Designer</Typography>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <Chip label="Figma" size="small" color="secondary" />
                                                                    <Chip label="Sketch" size="small" color="warning" />
                                                                    <Chip label="Photoshop" size="small" color="primary" />
                                                                </div>
                                                                <Box display="flex" justifyContent="space-around" mb={2} gap={5}>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">86</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Projects</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">12.4k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Tasks</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">890</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Connections</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box display="flex" justifyContent="center" gap={3}>
                                                                    <Button variant="contained" color="primary" startIcon={<TbUserPlus />} className='connect_btn'>
                                                                        Connect
                                                                    </Button>
                                                                    <Button variant="outlined" startIcon={<TbMail />} className='email_btn' />
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={4}>
                                                        <Card sx={{ position: 'relative' }}>
                                                            <div style={{ position: 'relative' }}>
                                                                {/* MoreVert Icon */}
                                                                <IconButton
                                                                    size="small"
                                                                    onClick={handleClick}
                                                                    sx={{ position: 'absolute', top: 24, right: 20, color: 'text.disabled' }}
                                                                >
                                                                    <MdOutlineMoreVert />
                                                                </IconButton>

                                                                {/* Menu */}
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Share Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Block Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                        <ListItemText primary="Delete" />
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                                                                <Avatar src={avtar5.src} sx={{ width: 100, height: 100, marginTop: '20px' }} />
                                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                    <Typography variant="h5">Jayden Rogers</Typography>
                                                                    <Typography variant="body1" color="text.secondary">Full Stack Developer</Typography>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <Chip label="React" size="small" color="info" />
                                                                    <Chip label="HTML" size="small" color="warning" />
                                                                    <Chip label="Node.js" size="small" color="success" />
                                                                </div>
                                                                <Box display="flex" justifyContent="space-around" mb={2} gap={5}>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">244</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Projects</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">23.8k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Tasks</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">2.14k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Connections</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box display="flex" justifyContent="center" gap={3}>
                                                                    <Button variant="contained" color="primary" startIcon={<TbUserCheck />} className='connected_btn'>
                                                                        Connected
                                                                    </Button>
                                                                    <Button variant="outlined" startIcon={<TbMail />} className='email_btn' />
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={4}>
                                                        <Card sx={{ position: 'relative' }}>
                                                            <div style={{ position: 'relative' }}>
                                                                {/* MoreVert Icon */}
                                                                <IconButton
                                                                    size="small"
                                                                    onClick={handleClick}
                                                                    sx={{ position: 'absolute', top: 24, right: 20, color: 'text.disabled' }}
                                                                >
                                                                    <MdOutlineMoreVert />
                                                                </IconButton>

                                                                {/* Menu */}
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    anchorOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                    transformOrigin={{
                                                                        vertical: 'top',
                                                                        horizontal: 'right',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Share Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose}>
                                                                        <ListItemText primary="Block Connection" />
                                                                    </MenuItem>
                                                                    <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>
                                                                        <ListItemText primary="Delete" />
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                                                                <Avatar src={avtar6.src} sx={{ width: 100, height: 100, marginTop: '20px' }} />
                                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                    <Typography variant="h5">Jeanette Powell</Typography>
                                                                    <Typography variant="body1" color="text.secondary">SEO</Typography>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <Chip label="Analysis" size="small" color="secondary" />
                                                                    <Chip label="Writing" size="small" color="success" />
                                                                </div>
                                                                <Box display="flex" justifyContent="space-around" mb={2} gap={5}>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">32</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Projects</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">1.28k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Tasks</Typography>
                                                                    </Box>
                                                                    <Box textAlign="center">
                                                                        <Typography variant="h6">1.27k</Typography>
                                                                        <Typography variant="body2" color="textSecondary">Connections</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box display="flex" justifyContent="center" gap={3}>
                                                                    <Button variant="contained" color="primary" startIcon={<TbUserPlus />} className='connect_btn'>
                                                                        Connect
                                                                    </Button>
                                                                    <Button variant="outlined" startIcon={<TbMail />} className='email_btn' />
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                </Grid>
                                            </TabPanel>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default function ThemedList() {
    return (
        <ThemeProvider>
            <UserProfile />
        </ThemeProvider>
    );
}





