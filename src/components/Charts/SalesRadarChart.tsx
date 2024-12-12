"use client";
import { useRef, useEffect, useState } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

type ChartCanvasElement = HTMLCanvasElement & {
    chart?: Chart;
};
interface RadarChart {
    themeMode: 'light' | 'dark';
}

const RadarChart: React.FC<RadarChart> = ({ themeMode }) => {
    const chartRef = useRef<ChartCanvasElement>(null);
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext("2d");

            if (context) {
                const newChart = new Chart(context, {
                    type: 'radar',
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            {
                                label: "Sales",
                                data: [90, 60, 70, 90, 75, 80],
                                backgroundColor: "rgba(99, 102, 241, 0.5)",
                                borderColor: "rgb(99, 102, 241)",
                                borderWidth: 2,
                                pointBackgroundColor: "rgb(99, 102, 241)",
                            },
                            {
                                label: "Visits",
                                data: [65, 90, 85, 80, 70, 60],
                                backgroundColor: "rgba(14, 165, 233, 0.5)",
                                borderColor: "rgb(14, 165, 233)",
                                borderWidth: 2,
                                pointBackgroundColor: "rgb(14, 165, 233)",
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            r: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    display: false
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                            title: {
                                display: false,
                                text: 'Sales',
                                font: {
                                    size: 16,
                                    weight: '400',
                                },
                                align: 'start' // Align the title to the left
                            },
                            subtitle: {
                                display: false,
                                text: 'Last 6 Months',
                                font: {
                                    size: 14,
                                },
                                align: 'start' // Align the subtitle to the left
                            }
                        },
                    },
                });
                chartRef.current.chart = newChart;
            }
        }
    }, []);

    return (
        <div>
            <div className="chart-header">
                <div className="chart-title">
                    <h4>Sales</h4>
                    <p>Last 6 Months</p>
                </div>
                <div className='s_icon'>
                    <FontAwesomeIcon icon={faEllipsisV} onClick={handleMenuClick} />
                    {showMenu && (
                        <ul className="dropdown-menu show-menu" style={{ backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFFF' }}>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Week</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Month</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Year</a></li>
                        </ul>
                    )}
                </div>
            </div>
            <canvas ref={chartRef} className="canvas" />
            <style jsx>{`
            .canvas{
                height:430px !important;
                width:260px !important;
                position: relative;
                top:-15px;
                margin:auto;
                
            }
                .chart-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                    padding:15px 15px;
                }
                .chart-title {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .chart-title h2{
                
                 font-family: "Public Sans", sans-serif;
                }
                .s_icon {
                    position: relative;
                    cursor: pointer;
                    top: -20px;
                    right: 0px;
                }
                .dropdown-menu {
                    position: absolute;
                    top: 20px;
                    right: 0;
                    background: white;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    list-style: none;
                    padding: 10px;
                    border-radius: 5px;
                    display: none;
                }
                .dropdown-menu.show-menu {
                    display: block;
                }
                .dropdown-menu li {
                    list-style: none;
                    padding-left: 12px;
                    text-align: left;
                    margin-bottom: 10px;
                }
                .dropdown-menu li a {
                    text-decoration: none;
                    color: black;
                }

            `}</style>
            <style jsx global>{`
            @media (max-width: 400px) {
                .canvas {
                    height: 354px !important;
                    width: 261px !important;
                }
            }
        `}</style>
        </div>
    );
}

export default RadarChart