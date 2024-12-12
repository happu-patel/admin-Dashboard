import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import './orderchart.css';

const OrderChart = ({ theme }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const isDark = theme === 'dark';

        const chartOptions = {
            series: [{
                data: [88, 35, 25, 63, 90, 75, 100]
            }],
            chart: {
                type: 'bar',
                height: 70,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                },
                responsive: [{
                    breakpoint: 400,
                    options: {
                        chart: {
                            width: '80%'  // Adjust this value as needed
                        }
                    }
                }]
            },
            plotOptions: {
                bar: {
                    borderRadius: 3,
                    columnWidth: '30%',
                }
            },
            colors: ['#7063f7'],
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
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
            theme: {
                mode: isDark ? 'dark' : 'light'
            },
            background: isDark ? '#2B2C40' : '#fff',
            foreColor: isDark ? '#fff' : '#2B2C40'
        };

        const chart = new ApexCharts(chartRef.current, chartOptions);
        chart.render();

        // Cleanup
        return () => chart.destroy();
    }, [theme]);

    return (
        <div className="order-chart-container">
            <div className="order-chart">
                <div id="chart" ref={chartRef} />
                <div className="chart-footer" style={{ color: theme === 'dark' ? '#E7E3FC99' : '#333' }}>
                    <span className="total">124k</span>
                    <span className="growth">+12.6%</span>
                </div>
            </div>
            <style jsx>{`
                .order-chart-container {
                    width: 100%;
                    max-width: 300px;  // Adjust this value as needed
                    margin: 0 auto;
                }
                .order-chart {
                    width: 100%;
                    border-radius: 8px;
                }
                .chart-footer {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0px;
                }
                .total {
                    font-size: 24px;
                    font-weight: 400;
                }
                .growth {
                    color: #28C76F;
                    font-weight: 400;
                    padding: 8px 0px;
                    font-size: 0.9925rem;
                    line-height: 1.53846154;
                }
                @media (max-width: 400px) {
                    .order-chart-container {
                        max-width: 80%;  // Adjust this value as needed
                    }
                    .total {
                        font-size: 20px;
                    }
                    .growth {
                        font-size: 0.875rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default OrderChart;
