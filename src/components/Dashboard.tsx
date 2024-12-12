import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CiCalendarDate } from "react-icons/ci";
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddIcon from '@mui/icons-material/Add';


interface TransitionsModalProps {
    open: boolean;
    handleClose: () => void;
    themeMode: 'light' | 'dark';
}

const TransitionsModal: React.FC<TransitionsModalProps> = ({ open, handleClose, themeMode }) => {

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

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'none',
        width: '100%',
        padding: '8px',
        borderRadius: 2,
    };

    const iconStyle = {
        marginBottom: '8px',
        borderRadius: '50%',
        fontWeight: 'bold',
        color: themeMode === 'dark' ? '#E7E3FC99' : '#000',
        padding: '10px',
        height: '45px',
        width: '45px',
        backgroundColor: themeMode === 'dark' ? 'rgba(231, 227, 252, 0.08)' : 'rgb(0 0 15 / 11%)'
    };
    const title1 = {
        fontFamily: '"Public Sans",sans-serif !important',
        color: themeMode === 'dark' ? '#E7E3FC99' : '#00000fe3',
        fontWeight: '400 !important',
        fontSize: '1.1rem !important'
    }

    const subtitle = {
        fontFamily: '"Public Sans",sans-serif !important',
        fontWeight: '300px !important',
        fontSize: '0.9rem !important',
        color: themeMode === 'dark' ? 'rgba(231, 227, 252, 0.6)' : '#00000fe3',
    }

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
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Shortcuts
                            </Typography>
                            <AddIcon sx={{ cursor: 'pointer', color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }} />
                        </Box>
                        <Grid container spacing={2} mt={2}>
                            <Grid item xs={6} style={{ borderBottom: '1px solid #cdcbcba6', borderRight: '1px solid #cdcbcba6', padding: '16px,' }}>
                                <Button sx={buttonStyle}>
                                    <CiCalendarDate style={{
                                        borderRadius: '50%',
                                        color: themeMode === 'dark' ? '#E7E3FC99' : '#000000',
                                        padding: '10px',
                                        height: '45px',
                                        width: '45px',
                                        backgroundColor: themeMode === 'dark' ? 'rgba(231, 227, 252, 0.08)' : 'rgb(0 0 15 / 11%)',
                                        marginBottom: '8px',
                                    }} />
                                    <Typography variant="body1" sx={title1}>Calendar</Typography>
                                    <Typography variant="caption" sx={subtitle} >Appointments</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ borderBottom: '1px solid #cdcbcba6', padding: '16px' }}>
                                <Button sx={buttonStyle}>
                                    <RequestPageOutlinedIcon sx={iconStyle} />
                                    <Typography variant="body1" sx={title1}>Invoice App</Typography>
                                    <Typography variant="caption" sx={subtitle}>Manage Accounts</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ borderBottom: '1px solid #cdcbcba6', borderRight: '1px solid #cdcbcba6', padding: '16px' }}>
                                <Button sx={buttonStyle}>
                                    <PermIdentityOutlinedIcon sx={iconStyle} />
                                    <Typography variant="body1" sx={title1}>Users</Typography>
                                    <Typography variant="caption" sx={subtitle}>Manage Users</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ borderBottom: '1px solid #cdcbcba6', padding: '16px' }}>
                                <Button sx={buttonStyle}>
                                    <GroupsOutlinedIcon sx={iconStyle} />
                                    <Typography variant="body1" sx={title1}>Role Management</Typography>
                                    <Typography variant="caption" sx={subtitle}>Permissions</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ borderBottom: '1px solid #cdcbcba6', borderRight: '1px solid #cdcbcba6', padding: '16px' }} >
                                <Button sx={buttonStyle}>
                                    <DashboardIcon sx={iconStyle} />
                                    <Typography variant="body1" sx={title1}>Dashboard</Typography>
                                    <Typography variant="caption" sx={subtitle}>User Dashboard</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ borderBottom: '1px solid #cdcbcba6', padding: '16px' }} >
                                <Button sx={buttonStyle}>
                                    <SettingsOutlinedIcon sx={iconStyle} />
                                    <Typography variant="body1" sx={title1}>Settings</Typography>
                                    <Typography variant="caption" sx={subtitle}>Account Settings</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
            <style>
                {`
                .css-sox5kk-MuiBackdrop-root {
                background-color:none !important;
                }
                .css-4muqlg-MuiGrid-root{
                    width:100% !important; 
                    margin-left: 0px !important;
                    margin-top:0px !important;
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
                border:none;
                }
                `}
            </style>
        </div>

    );
}
export default TransitionsModal