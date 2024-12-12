import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { TbCurrencyDollar } from 'react-icons/tb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


interface ProjectStatus {
    themeMode: string;
}

const ProjectStatus: React.FC<ProjectStatus> = ({ themeMode }) => {
    const [showMenu, setShowMenu] = useState(false);

    const theme = useTheme();
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const option: ApexOptions = {
        chart: {
            type: 'area',
            height: 198,
            toolbar: { show: false },
            sparkline: { enabled: true },
        },
        stroke: {
            curve: 'straight',
            width: 4,
        },
        colors: ['#FFA500'],
        fill: {
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [10, 80, 100],
            },
        },
        xaxis: {
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: false },
    };

    const chartSeries = [{
        name: 'Earnings',
        data: [5, 5, 25, 25, 15, 15, 6, 6, 15, 15, 30, 30, 15, 15, 35, 35],
    }];

    return (
        <div className="project-status-card p-4">
            <h2>Project Status</h2>
            <div className='f_icon'>
                <FontAwesomeIcon icon={faEllipsisV} onClick={handleMenuClick} />
                {showMenu && (
                    <ul className="dropdown-menu show-menu" style={{ backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFFF' }}>
                        <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Share</a></li>
                        <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Refresh</a></li>
                        <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Update</a></li>
                    </ul>
                )}
            </div>
            <div className="earnings d-flex column-gap-3 align-items-center">
                <div className="col-lg-2 col-md-2">
                    <span className="dollar-sign">
                        <TbCurrencyDollar />
                    </span>
                </div>
                <div className='price col-lg-6 col-md-5'>
                    <span className="amount">$4,3742</span><br></br>
                    <span className='earning-text'>Your Earnings</span>
                </div>
                <div className="col-lg-4 col-md-5 percentage_txt">
                    <span className="percentage">+10.2%</span>
                </div>
            </div>
            <div className="chart-container">
                <ReactApexChart options={option} series={chartSeries} type="area" height={198} />
            </div>
            <div className="stats flex-column row-gap-3">
                <div className="stat-item flex-row gap-5 justify-content-between">
                    <span className="label">Donates</span>
                    <div className='d-flex gap-3'>
                        <span className="value">$756.26</span>
                        <span className="change negative">-139.34</span>
                    </div>
                </div>
                <div className="stat-item flex-row gap-5 justify-content-between">
                    <span className="label">Podcasts</span>
                    <div className="d-flex gap-3">
                        <span className="value">$2,207.03</span>
                        <span className="change positive">+576.24</span>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .project-status-card {
                    padding: 20px;
                    position: relative;
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "rgb(47 43 61 / 0.9)"};
                }
                h2 {
                    font-family: "Public Sans", sans-serif;
                    font-weight: 500;
                    font-size: 1.125rem;
                    line-height: 1.5556;
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "rgb(47 43 61 / 0.9)"};
                }
                .dollar-sign {
                    color: #FFA500;
                    background-color: rgb(255 159 67 / .16);
                    padding: 0px 7px;
                    padding-bottom: 4px;
                    text-align: center;
                    border-radius: 5px;
                    font-size: 24px;
                }
                .amount {
                    font-size: 0.9375rem;
                    font-weight: 500;
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "rgb(47 43 61 / 0.9)"};
                    line-height: 1.46667;
                    font-family: "Public Sans", sans-serif;
                }
                .earning-text {
                    font-weight: 400;
                    font-size: 0.8125rem;
                    line-height: 1.53846154;
                    font-family: "Public Sans", sans-serif;
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "rgb(47 43 61 / 0.7)"};
                }
                .percentage {
                    color: #4CAF50;
                    font-size: 0.9375rem;
                    font-weight: 500;
                    padding-left: 32px;
                    line-height: 1.46667;
                    font-family: "Public Sans", sans-serif;
                }
                .chart-container {
                    height: auto;
                    padding-top: 32px;
                    padding-bottom: 32px;
                }
               .stats {
                display: flex;
                justify-content: space-between;
                }
                .stat-item {
                display: flex;
                flex-direction: column;
                }
            
           
                .label {
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "rgb(47 43 61 / 0.9)"};
                    font-size: 0.9375rem;
                    font-weight: 500;
                    line-height: 1.46667;
                    font-family: "Public Sans", sans-serif;
                }
                .value {
                    font-weight: 400;
                    font-size: 0.9375rem;
                    line-height: 1.46667;
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "rgb(47 43 61 / 0.7)"};
                    font-family: "Public Sans", sans-serif;
                }
                .change {
                    font-family: "Public Sans", sans-serif;
                }
                .change.positive {
                    font-weight: 400;
                    color: #4CAF50;
                    font-size: 0.9375rem;
                    line-height: 1.46667;
                }
                .change.negative {
                    font-weight: 400;
                    color: #FF4C51;
                    font-size: 0.9375rem;
                    line-height: 1.46667;
                }
                .f_icon {
                    position: absolute;
                    top: 19px;
                    right: 24px;
                    cursor: pointer;
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "#333"};
                }
                .f_icon:hover {
                    color: ${theme.palette.mode === 'dark' ? '#E7E3FC99' : "#999"};
                }
                .dropdown-menu {
                    --bs-dropdown-min-width: 7rem;
                    position: absolute;
                    top: 30px;
                    right: 0;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 10px;
                    display: none;
                    z-index: 1;
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
                    color: #333;
                    text-decoration: none;
                }
                .dropdown-menu li a:hover {
                    color: #666;
                }
                @media(max-width:768px) {
                    .col-md-9 {
                        text-align: end !important;
                    }
                }
                 @media(max-width:567px){
                    
                 }   
            `}</style>
        </div>
    );
};

export default ProjectStatus;
