import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

interface OrderChartProps {
    theme: 'dark' | 'light';
}

const OrderChart: React.FC<OrderChartProps> = ({ theme }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const isDark = theme === 'dark';

        const chartOptions = {
            series: [
                {
                    data: [88, 35, 25, 63, 90, 75, 100],
                },
            ],
            chart: {
                type: 'bar',
                height: 70,
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
                responsive: [
                    {
                        breakpoint: 400,
                        options: {
                            chart: {
                                width: '80%', // Adjust width for smaller screens
                            },
                        },
                    },
                ],
            },
            plotOptions: {
                bar: {
                    borderRadius: 3,
                    columnWidth: '30%',
                },
            },
            colors: ['#7063f7'],
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },
            grid: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            theme: {
                mode: isDark ? 'dark' : 'light',
            },
            background: isDark ? '#2B2C40' : '#fff',
            foreColor: isDark ? '#fff' : '#2B2C40',
        };

        const chart = new ApexCharts(chartRef.current, chartOptions);
        chart.render();

        return () => chart.destroy();
    }, [theme]);

    return (
        <div
            className="order-chart-container"
            style={{
                backgroundColor: theme === 'dark' ? '#2B2C40' : '#fff',
                color: theme === 'dark' ? '#fff' : '#000',
                borderRadius: '8px',
                padding: '10px',
            }}
        >
            <div className="order-chart">
                <div id="chart" ref={chartRef} aria-label="Order statistics chart" />
                <div
                    className="chart-footer"
                    style={{
                        color: theme === 'dark' ? '#E7E3FC99' : '#333',
                    }}
                >
                    <span className="total">124k</span>
                    <span className="growth">+12.6%</span>
                </div>
            </div>
            <style jsx>{`
                .order-chart-container {
                    width: 100%;
                    max-width: 300px;
                    margin: 0 auto;
                }
                .order-chart {
                    width: 100%;
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
                    font-size: 0.9925rem;
                    line-height: 1.53846154;
                }
                @media (max-width: 400px) {
                    .order-chart-container {
                        max-width: 80%;
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
