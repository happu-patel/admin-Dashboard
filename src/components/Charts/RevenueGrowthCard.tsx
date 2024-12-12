'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface RevenueGrowthCardProps {
    themeMode: string;
}

const RevenueGrowthCard: React.FC<RevenueGrowthCardProps> = ({ themeMode }) => {
    const chartRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();

    useEffect(() => {
        if (!chartRef.current) return;

        const chartOptions: ApexCharts.ApexOptions = {
            series: [{
                name: 'Revenue',
                data: [30, 40, 45, 80, 60, 50, 30]
            }],
            chart: {
                type: 'bar',
                height: 170,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '60%',
                    borderRadius: 3,
                    distributed: true
                }
            },
            colors: ['#E0F7EA', '#E0F7EA', '#E0F7EA', '#00E396', '#E0F7EA', '#E0F7EA', '#E0F7EA'],
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: true,
                    style: {
                        colors: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#999',
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            legend: {
                show: false
            },
        };

        const chart = new ApexCharts(chartRef.current, chartOptions);
        chart.render();

        // Cleanup
        return () => chart.destroy();
    }, [theme.palette.mode]);

    return (
        <div className="revenue-growth-card container">
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <h2 style={{ color: theme.palette.mode === 'dark' ? theme.palette.text.primary : "rgb(47 43 61 / 0.9)" }}>Revenue Growth</h2>
                    <p className="subtitle" style={{ color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : "#888" }}>Weekly Report</p>
                    <div className="revenue-info">
                        <h3 style={{ color: theme.palette.mode === 'dark' ? theme.palette.text.primary : "rgb(47 43 61 / 0.9)" }}>$4,673</h3>
                        <p className="growth-percentage" style={{ backgroundColor: theme.palette.mode === 'dark' ? '#37474F' : "#E0F7EA", color: theme.palette.mode === 'dark' ? theme.palette.success.main : "#00E396" }}>+15.2%</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className="chart-container" ref={chartRef}></div>
                </div>
            </div>

            <style jsx>{`
                .revenue-growth-card {
                    padding: 20px;
                    height: 220px;
                    display: flex;
                }
                .col-lg-6 {
                    height: fit-content;
                }
                .col-md-6{
                    height:fit-content;
                }
                .row{
                width:100%;
                }
                h2 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: bold;
                    font-family: "Public Sans", sans-serif;
                }
                .subtitle {
                    margin: 5px 0 15px 0;
                    font-family: "Public Sans", sans-serif;
                }
                .revenue-info {
                    padding-top: 35px;
                    font-family: "Public Sans", sans-serif;
                }
                h3 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 400;
                }
                .growth-percentage {
                    width: 61px;
                    padding: 2px 5px;
                    border-radius: 6px;
                    font-size: 14px;
                    margin-left: 2px;
                    margin-top: 10px;
                    font-family: "Public Sans", sans-serif;
                }
                .chart-container {
                    margin-top: 10px;
                    height: 170px;
                }
                @media(max-width:1199px){
                 .row{
                  flex-direction:column;
                  width:65% !important;
                  }

                .col-sm-6{
                    width:50%;
                }
                }
                @media(max-width:991px){
                .row{
                  flex-direction:column;
                  width:60%;
                  }

                .col-sm-6{
                    width:50%;
                }

                }
                @media(max-width:768px){
                  .container{
                  width:100% !important;
                  }
                 
                }
                @media(max-width:567px){
                .row{
                  flex-direction:column;
                  width:100% !important;
                  }

                .col-sm-6{
                    width:50%;
                }
                }
                @media(max-width:400px){
                .row{
                  flex-direction:column;
                  width:100% !important;
                  }
                }
            `}</style>
        </div>
    );
};

export default RevenueGrowthCard;

