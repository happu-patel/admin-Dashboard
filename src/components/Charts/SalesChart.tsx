"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';
import './saleschart.css'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SalesChartProps {
    themeMode: string;
}

const SalesChart: React.FC<SalesChartProps> = ({ themeMode }) => {
    const theme = useTheme();

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'area',
            sparkline: {
                enabled: true
            },
            width: '100%',
            height: 70,
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 90, 100]
            }
        },
        colors: ['#00E396'],
        tooltip: {
            enabled: false
        },
        dataLabels: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        xaxis: {
            labels: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        grid: {
            show: false
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    };

    const series: ApexAxisChartSeries = [{
        name: 'Sales',
        data: [80, 70, 85, 78]
    }];

    return (
        <>
            <div className="chart-container">
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    height={70}
                    width={'100%'}
                />
            </div>
            <div className="sales-value">
                <span className="value" style={{ color: theme.palette.mode === 'dark' ? theme.palette.text.primary : "rgb( 47 43 61 / 0.9)" }}>
                    175k
                </span>
                <span className="percentage" style={{ color: theme.palette.mode === 'dark' ? theme.palette.error.main : "#FF4560" }}>
                    -16.2%
                </span>

                <style jsx>{`
                    .sales-value {
                        margin-top: 5px;
                    }
                    .value {
                        padding-top: 10px;
                        padding-left: 20px;
                        padding-right: 20px;
                        font-size: 24px;
                        font-weight: 400;
                    }
                    .percentage {
                        margin-left: 10px;
                        font-size: 16px;
                    }
                    .chart-container {
                        width: 100%;
                    }
                `}</style>
            </div>
        </>
    );
};

export default SalesChart;

