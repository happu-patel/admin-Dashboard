"use client";
import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { TbUserCheck, TbUserSearch } from "react-icons/tb";
import { RiUserAddLine, RiGroupLine } from "react-icons/ri";
import styles from '../page.module.css';
import './../globals.css';
import './user.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import UserTable from '../User/UserTable';

function UserList() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const theme = useTheme();
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    const dataCards = [
        {
            title: 'Session',
            value: '21,459',
            percentage: '(+29%)',
            percentageColor: theme.palette.success.main,
            icon: <RiGroupLine className='groupuser' />,
            iconBgColor: '#E8EAF6',
            subtitle: 'Total User',
        },
        {
            title: 'Paid Users',
            value: '4,567',
            percentage: '(+18%)',
            percentageColor: theme.palette.success.main,
            icon: <RiUserAddLine className='useradd' />,
            iconBgColor: '#FFEBEE',
            subtitle: 'Last week analytics',
        },
        {
            title: 'Active Users',
            value: '19,860',
            percentage: '(-14%)',
            percentageColor: theme.palette.error.main,
            icon: <TbUserCheck className='usercheck' />,
            iconBgColor: '#E8F5E9',
            subtitle: 'Last week analytics',
        },
        {
            title: 'Pending Users',
            value: '237',
            percentage: '(+42%)',
            percentageColor: theme.palette.success.main,
            icon: <TbUserSearch className='usersearch' />,
            iconBgColor: '#FFF3E0',
            subtitle: 'Last week analytics',
        },
    ];

    return (
        <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
                </div>
                <div className={styles.content}>
                    <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                    <div className="container">
                        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                            <Grid container spacing={3}>
                                {dataCards.map((card, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Box
                                            sx={{
                                                bgcolor: 'background.paper',
                                                p: 2,
                                                borderRadius: 2,
                                                boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: '100%', // Ensure full height for each card
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography variant="h6" className='cardtitle' sx={{ color: theme.palette.mode === 'dark' ? '#E7E3FC' : 'rgb(47 43 61 / 0.9)' }}>
                                                    {card.title}
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        width: 42,
                                                        height: 42,
                                                        borderRadius: 2,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        bgcolor: card.iconBgColor,
                                                    }}
                                                >
                                                    {React.cloneElement(card.icon, { style: { backgroundColor: card.iconBgColor } })}
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="h6" className='cardvalue' sx={{ color: theme.palette.mode === 'dark' ? '#E7E3FC' : 'rgb(47 43 61 / 0.9)', mb: 1 }}>
                                                    {card.value}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: card.percentageColor, fontWeight: 'bold', mr: 1, mb: 1 }} className='cardpercentage'>
                                                    {card.percentage}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body1" className='subtitle' sx={{
                                                color: theme.palette.mode === 'dark' ? '#E7E3FC' : 'rgb(47 43 61 / 0.7)'
                                            }}>
                                                {card.subtitle}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                                <Grid item xs={12} sm={12} lg={12}>
                                    <Box sx={{
                                        bgcolor: 'background.paper',
                                        p: 2,
                                        borderRadius: 2,
                                        boxShadow: ' 0px 3px 12px rgb(47 43 61 / 0.14)',
                                        height: '100%', // Ensure full height for the table box
                                    }}>
                                        <Typography variant="h6" style={{ marginBottom: '1rem', color: 'text.primary' }}>Filter </Typography>
                                        <UserTable />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>

        </Box>
    );
}

export default function ThemeUserList() {
    return (
        <ThemeProvider>
            <UserList />
        </ThemeProvider>
    );
}
