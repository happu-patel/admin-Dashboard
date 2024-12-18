"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Chart, ChartType, ChartOptions, ChartTypeRegistry } from 'chart.js/auto';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbChartBar, TbCurrencyDollar } from "react-icons/tb";
import { PiClockBold } from "react-icons/pi";
import { FaRegPlusSquare } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './style.css';

type ChartDataType = 'orders' | 'sales' | 'profit' | 'income';

interface EarningsChartProps {
    themeMode: 'light' | 'dark';
}

const EarningsChart: React.FC<EarningsChartProps> = ({ themeMode }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const [chartType, setChartType] = useState<ChartDataType>('profit');
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const chartData: Record<ChartDataType, number[]> = {
        orders: [28, 10, 46, 38, 15, 30, 35, 28, 8],
        sales: [35, 25, 15, 40, 42, 25, 48, 8, 30],
        profit: [10, 22, 27, 33, 42, 32, 27, 22, 8],
        income: [5, 9, 12, 18, 20, 25, 30, 36, 48]
    };

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        let chart: Chart | null = null;

        const updateChart = () => {
            if (chart) {
                chart.destroy();
            }

            const maxIndex = chartData[chartType].indexOf(Math.max(...chartData[chartType]));

            const chartOptions: ChartOptions<'bar'> = {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: 10,
                                family: 'Arial', // Add font family if needed
                                weight: 'normal', // Add font weight if needed
                            },
                                color: themeMode === 'dark' ? '#E7E3FC99' : '#000000',
                            
                        },
                    },
                    y: {
                        beginAtZero: true,
                        max: 50,
                        ticks: {
                            stepSize: 10,
                            callback: function (value) {
                                return '$' + value + 'k';
                            },
                            font: {
                                size: 10,
                                family: 'Arial', // Add font family if needed
                                weight: 'normal', // Add font weight if needed
                            },
                                color: themeMode === 'dark' ? '#E7E3FC99' : '#000000',
                        },
                        grid: {
                            display: false,
                        },
                    },
                }

            };

            chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    datasets: [{
                        data: chartData[chartType],
                        backgroundColor: (context) => {
                            const index = context.dataIndex;
                            return index === maxIndex ? '#6b61d4' : (themeMode === 'dark' ? '#E7E3FC99' : '#eae8fd');
                        },
                        borderRadius: 6,
                        barThickness: 'flex',
                    }]
                },
                options: chartOptions
            });
        };

        updateChart();

        const resizeObserver = new ResizeObserver(() => {
            updateChart();
        });
        resizeObserver.observe(chartRef.current);

        return () => {
            if (chart) {
                chart.destroy();
            }
            resizeObserver.disconnect();
        };
    }, [chartType, themeMode]);


    return (
        <div className={`earning-reports ${themeMode}`}>
            <div className='titles'>
                <div>
                    <h2 style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>Earning Reports</h2>
                    <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Yearly Earnings Overview</p>
                </div>
                <div className='f_icon'>
                    <FontAwesomeIcon icon={faEllipsisV} onClick={handleMenuClick} />
                    {showMenu && (
                        <ul className={`dropdown-menu ${showMenu ? 'show-menu' : ''}`} style={{ backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFFF' }}>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Week</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Month</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Year</a></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="chart-buttons" style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>
                <button onClick={() => setChartType('orders')} className={chartType === 'orders' ? 'active' : ''}>
                    <AiOutlineShoppingCart className="icon" />
                    Orders
                </button>
                <button onClick={() => setChartType('sales')} className={chartType === 'sales' ? 'active' : ''}>
                    <TbChartBar className="icon" />
                    Sales
                </button>
                <button onClick={() => setChartType('profit')} className={chartType === 'profit' ? 'active' : ''}>
                    <TbCurrencyDollar className="icon" />
                    Profit
                </button>
                <button onClick={() => setChartType('income')} className={chartType === 'income' ? 'active' : ''}>
                    <PiClockBold className="icon" />
                    Income
                </button>
                <button>
                    <FaRegPlusSquare className='icon' />
                </button>
            </div>
            <div className="chart-container">
                <canvas ref={chartRef} style={{ fontWeight: 'bolder' }}></canvas>
            </div>
            <style jsx>{`
                .earning-reports {
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .titles {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 20px;
                }
                
                .chart-buttons button{
                border:1px dashed ${themeMode === 'dark' ? 'rgb( 225 222 245 / 0.12)' : '#3333'};
                color:${themeMode === 'dark' ? "#E7E3FC99" : "#333"}
                }

                .chart-buttons button.active {
                    border: 1px solid${themeMode === 'dark' ? ' #7a74ee ' : '#7a74ee'};
                }
                .icon { 
                background-color:${themeMode === 'dark' ? '#2B2C40' : '#333'};
                color:${themeMode === 'dark' ? "#E7E3FC99" : "#333"}
                }


                .chart-container {
                    height: 300px;
                }
                @media (max-width: 768px) {
                    .earning-reports {
                        padding: 15px;
                    }
                   
                    
                    .chart-buttons button span {
                        display: none;
                    }
                    .chart-buttons .icon {
                        margin-right: 0;
                    }
                    .chart-container {
                        height: 200px;
                    }
                }
            `}</style>
        </div>
    );
};

export default EarningsChart;
