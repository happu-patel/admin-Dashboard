import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

interface NotificationsModal {
    open: boolean;
    handleClose: () => void;
    themeMode: 'light' | 'dark';
}

interface Notification {
    avatar: string;
    title: string;
    message: string;
    time: string;
}

const NotificationsModal: React.FC<NotificationsModal> = ({ open, handleClose, themeMode }) => {
    const [hoveredNotification, setHoveredNotification] = useState<number | null>(null);

    const style = {
        position: 'fixed' as 'fixed',
        top: '48%',
        right: { xs: '0px', sm: '30px', md: '60px', lg: '10%' },
        transform: 'translateY(-50%)',
        width: { xs: 'auto', sm: '300px', md: '400px', lg: '400px' },
        bgcolor: themeMode === 'dark' ? '#2F3349' : 'background.paper',
        boxShadow: 24,
        p: 0,
        color: themeMode === 'dark' ? '#E7E3FC99' : '#000000',
    };

    const title1 = {
        fontFamily: '"Public Sans",sans-serif !important',
        color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.9)',
        fontWeight: '500 !important',
        fontSize: '0.8125rem; !important'
    }

    const subtitle = {
        fontFamily: '"Public Sans",sans-serif !important',
        fontWeight: '300px !important',
        fontSize: '0.8125rem !important',
        color: themeMode === 'dark' ? 'rgba(231, 227, 252, 0.6)' : '#00000fe3',
    }

    const time = {
        fontFamily: '"Public Sans",sans-serif !important',
        fontWeight: '400px !important',
        fontSize: '0.8125rem !important',
        color: themeMode === 'dark' ? 'rgba(231, 227, 252, 0.6)' : 'rgb( 47 43 61 / 0.4)',
    }
    const heading = {
        fontFamily: '"Public Sans",sans-serif !important',
        fontWeight: '500',
        fontSize: '0.9375rem',
        lineHeight: '1.46667',
    }
    const [notifications, setNotifications] = useState<Notification[]>([

        {
            avatar: "F",
            title: "Congratulations Flora 🎉",
            message: "Won the monthly bestseller gold badge",
            time: "1h ago"
        },
        {
            avatar: "CB",
            title: "Cecilia Becker",
            message: "Accepted your connection",
            time: "12h ago"
        },
        {
            avatar: "BW",
            title: "Bernard Woods",
            message: "You have new message from Bernard Woods",
            time: "May 18, 8:26 AM"
        },
        {
            avatar: "R",
            title: "Monthly report generated",
            message: "July month financial report is generated",
            time: "Apr 24, 10:30 AM"
        },
        {
            avatar: "MG",
            title: "Application has been approved🚀",
            message: "Your Meta Gadgets project application has been approved",
            time: "Feb 17, 12:17 PM"
        },
        {
            avatar: 'E',
            title: "New message from Harry",
            message: "You have new message from Harry",
            time: "Jan 6, 1:48 PM"
        }
    ]);

    const handleCloseNotification = (index: number) => {
        setNotifications(prevNotifications =>
            prevNotifications.filter((_, i) => i !== index)
        );
    };

    const avatarColors = ['#4caf50', '#f44336', '#2196f3', '#ff9800', '#9c27b0', '#3f51b5'];

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                            borderBottom: '1px solid #cdcbcba6',
                            backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFF',
                            color: themeMode === 'dark' ? '#E7E3FC99' : '#000000'
                        }}>
                            <Typography id="transition-modal-title" variant="h6" component="h6" sx={heading}>
                                Notifications
                            </Typography>
                            <Chip label="2 New" color="success" sx={{ marginLeft: '142px' }} />
                            <DraftsOutlinedIcon sx={{ cursor: 'pointer', color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }} />
                        </Box>
                        <Box sx={{ maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
                            {notifications.map((notification, index) => (
                                <Box
                                    key={index}
                                    onMouseEnter={() => setHoveredNotification(index)}
                                    onMouseLeave={() => setHoveredNotification(null)}
                                    sx={{
                                        position: 'relative',
                                        padding: '16px',
                                        borderBottom: '1px solid #cdcbcba6',
                                        display: 'flex',
                                        alignItems: 'center',
                                        '&:hover': {
                                            backgroundColor: themeMode === 'dark' ? 'rgba(231, 227, 252, 0.08)' : '#f5f5f5',
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: avatarColors[index % avatarColors.length],
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'white',
                                        marginRight: '10px'
                                    }}>
                                        {notification.avatar}
                                    </Box>
                                    <Box sx={{ paddingLeft: '10px' }}>
                                        <Typography variant="body1" sx={title1}>{notification.title}</Typography>
                                        <Typography variant="body2" sx={subtitle}>{notification.message}</Typography>
                                        <Typography variant="caption" sx={time}>{notification.time}</Typography>
                                    </Box>
                                    {hoveredNotification === index && (
                                        <IconButton
                                            size="small"
                                            sx={{
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                color: themeMode === 'dark' ? '#E7E3FC99' : '#000000',
                                            }}
                                            onClick={() => handleCloseNotification(index)}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    backgroundColor: '#7367F0',
                                    '&:hover': {
                                        backgroundColor: '#5E50EE',
                                    },
                                    textTransform: 'none',
                                    borderRadius: '5px',
                                    fontFamily: '"Public Sans", sans-serif',
                                    fontWeight: 500,
                                    fontSize: '0.9375rem',
                                }}
                            >
                                View All Notifications
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            <style>
                {`
                .css-sox5kk-MuiBackdrop-root {
                    background-color: none !important;
                }
                .css-4muqlg-MuiGrid-root{
                    width: 100% !important; 
                    margin-left: 0px !important;
                    margin-top: 0px !important;
                }
                .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.css-1osj8n2-MuiGrid-root:hover {
                    background-color: ${themeMode === 'dark' ? 'rgba(231, 227, 252, 0.08)' : '#f5f5f5'};
                }
                .css-9yoyiw-MuiButtonBase-root-MuiButton-root:hover {
                    -webkit-text-decoration: none;
                    text-decoration: none;
                    background-color: ${themeMode === 'dark' ? 'rgba(231, 227, 252, 0.08)' : '#f5f5f5'};
                }
                .css-nfjyxa{
                    border: none;
                }
                .css-srbf88 {
                    padding:10px;
                }
                
                 .css-gn1gcc-MuiChip-root{
                    background-color: rgb(115 103 240 / 0.16) !important;
                    border-radius: 5px;
                    white-space: nowrap;
                    color: #7367F0 !important;
                }
                    .css-1ff6is7-MuiChip-root {
                     border-radius: 5px;
                     background-color:rgb( 115 103 240 / 0.16) !important;
                     color:#7367F0 !important;
                    }
                    .css-sox5kk-MuiBackdrop-root {
                    background-color:rgba(0,0,0,0.0);
                    }
                `}
            </style>
        </div>
    );
}

export default NotificationsModal;
