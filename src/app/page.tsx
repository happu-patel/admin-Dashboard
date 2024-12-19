"use client";
import React, { useState, useContext } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import { Box, Button, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import OrderChart from "@/components/Charts/OrderChart";
import SalesChart from "@/components/Charts/SalesChart";
import { FaRegCreditCard } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import RevenueGrowthCard from "@/components/Charts/RevenueGrowthCard";
import EarningsChart from "@/components/Charts/EarningReportChart/EarningChart";
import SalesRadarChart from "@/components/Charts/SalesRadarChart";
import SalesCountries from "@/components/SalesByCountries/SalesCountries";
import ProjectStatus from "@/components/ProjectStuts/ProjectStatus";
import ActiveProject from "@/components/ActiveProjects/ActiveProject";
import TransactionTable from "@/components/TranscationTable/TranscationTable";
import ActivityTimeline from "@/components/TimeLine/ActiveTimeline";
import {ThemeProvider} from "@/components/ThemeProvider/ThemeProvider";

function Home() {
  const transactions = [
    { cardType: "VISA", cardNumber: "4230", status: "Sent", date: "17 Mar 2024", statusVerified: "Verified", amount: 1678 },
    { cardType: "MasterCard", cardNumber: "5578", status: "Sent", date: "12 Feb 2024", statusVerified: "Rejected", amount: -839 },
    { cardType: "ATM", cardNumber: "4567", status: "Sent", date: "28 Feb 2024", statusVerified: "Verified", amount: 435 },
    { cardType: "VISA", cardNumber: "5699", status: "Sent", date: "08 Jan 2024", statusVerified: "Pending", amount: 2345 },
    { cardType: "VISA", cardNumber: "2451", status: "Sent", date: "19 Oct 2024", statusVerified: "Rejected", amount: 1758 },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useTheme();


  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);

  }
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
        </div>
        <div className={styles.content}>
          <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
          <div className="container">
            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} md={12}>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ minWidth: "100%", height: 220, paddingBottom: "25px", flexDirection: { xs: "column" } }} className="orderCard">
                      <CardContent style={{ padding: "16px 20px" }}>
                        <h4 style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)", fontSize: "1.25rem", fontWeight: "500" }}>
                          Order
                        </h4>
                        <Typography sx={{ mb: 1.5 }} style={{ color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : "rgb( 47 43 61 / 0.55)", fontSize: "0.937rem", fontWeight: "400" }}>
                          Last week
                        </Typography>
                        <OrderChart theme={theme.palette.mode} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ minWidth: "100%", height: 220, paddingBottom: "25px" }} className="gradient">
                      <CardContent style={{ padding: "0px" }}>
                        <h4 style={{ color: theme.palette.mode === 'dark' ? theme.palette.text.primary : "rgb( 47 43 61 / 0.9)", fontSize: "1.25rem", fontWeight: "500", paddingTop: "16px", paddingLeft: "20px", paddingRight: "20px" }}>
                          Sales
                        </h4>
                        <Typography sx={{ mb: 1.5 }} style={{ color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : "rgb(47 43 61 / 0.55)", fontSize: "0.937rem", fontWeight: "400", padding: "0px 20px" }}>
                          Last Year
                        </Typography>
                        <SalesChart themeMode={theme.palette.mode} />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ minWidth: "100%", height: 220, paddingBottom: "25px" }}>
                      <CardContent style={{ padding: "16px 20px" }}>
                        <Box
                          sx={{
                            backgroundColor: "#FFE5E5",
                            width: "40px",
                            height: "40px",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 2,
                          }}
                        >
                          <FaRegCreditCard color="#FF4560" size={20} />
                        </Box>
                        <Typography variant="h6" component="div" gutterBottom fontFamily='"Public Sans", sans-serif '>
                          Total Profit
                        </Typography>
                        <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb( 47 43 61 / 0.4)'}} gutterBottom>
                          Last Week
                        </Typography>
                        <Typography variant="h6" component="div" fontWeight="300" fontFamily='"Public Sans", sans-serif ' fontSize="1rem" marginBottom="0px">
                          1.28k
                        </Typography>
                        <Typography
                          variant="body2"
                          color="error"
                          sx={{
                            backgroundColor: "rgb( 255 76 81 / 0.16)s",
                            display: "inline-block",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            marginTop: 1,
                            fontWeight: "500",
                          }}
                        >
                          -12.2%
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <Card sx={{ minWidth: "100%", height: 220 }} className="gradient">
                      <CardContent style={{ padding: "16px 20px" }}>
                        <Box
                          sx={{
                            backgroundColor: "rgb( 40 199 111 / 0.16)",
                            width: 40,
                            height: 40,
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 2,
                          }}
                        >
                          <FaDollarSign color="#28C76F" size={20} />
                        </Box>
                        <Typography variant="h6" component="div" gutterBottom fontFamily='"Public Sans", sans-serif '>
                          Total Sales
                        </Typography>
                        <Typography variant="body2" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb( 47 43 61 / 0.4)' }} gutterBottom>
                          Last Week
                        </Typography>
                        <Typography variant="h6" component="div" fontWeight="300" fontFamily='"Public Sans", sans-serif ' fontSize="1rem">
                          24.67k
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#28C76F"
                          sx={{
                            backgroundColor: "rgb( 40 199 111 / 0.16)",
                            display: "inline-block",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            marginTop: 1,
                            fontWeight: "500",
                          }}
                        >
                          +24.67%
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={8} lg={4}>
                    <Card sx={{ minWidth: "100%", height: 220, paddingBottom: "25px" }}>
                      <RevenueGrowthCard themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={12} lg={8}>
                    <Card sx={{ width: "100%", height: "auto" }}>
                      <EarningsChart themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ width: "100%", height: "auto" }}>
                      <SalesRadarChart themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ width: "100%", height: "auto" }}>
                      <SalesCountries themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ width: "100%", height: "auto" }}>
                      <ProjectStatus themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ width: "100%", height: "auto" }}>
                      <ActiveProject themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Card sx={{ width: "100%", height: "auto" }}>
                      <TransactionTable transactions={transactions} themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Card sx={{ width: "100%", height: "auto" }}>
                      <ActivityTimeline themeMode={theme.palette.mode} />
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}
export default function ThemedHome() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}