import React, { useState } from 'react';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import './salescountries.css';
import UsaUrl from '../../images/usa.png';
import Brazil from '../../images/brazil.png';
import India from '../../images/india.png';
import Aus from '../../images/aus.png';
import France from '../../images/france.png';
import China from '../../images/china.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

interface SalesCountriesProps {
    themeMode: 'light' | 'dark';
}

const SalesCountries: React.FC<SalesCountriesProps> = ({ themeMode }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleMenuClick = (): void => {
        setShowMenu(!showMenu);
    };


    return (
        <div className={`main ${themeMode}`}>
            <div className='heading'>
                <h3 style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Sales by Countries</h3>
                <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Monthly Sales Overview</p>
                <div className='c_icon'>
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
            <div className='countries_info'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                        <Image src={UsaUrl} width={40} height={40} alt='usa' />
                        <div className='name ps-3'>
                            <h6 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>$8.45k</h6>
                            <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>United States</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-end'>
                        <RiArrowUpSLine className='up-icon' />
                        <div className='amount text-center'>
                            <p>25.8%</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex align-items-center'>
                        <Image src={Brazil} width={40} height={40} alt='usa' />
                        <div className='name ps-3'>
                            <h6 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>$7.78k</h6>
                            <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Brazil</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center'>
                        <RiArrowDownSLine className='icon_down' />
                        <div className='brazil_am text-center'>
                            <p>16.2%</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex align-items-center'>
                        <Image src={India} width={40} height={40} alt='usa' />
                        <div className='name ps-3'>
                            <h6 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>$7.78k</h6>
                            <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>India</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center'>
                        <RiArrowDownSLine className='up-icon' />
                        <div className='amount text-center'>
                            <p>12.3%</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex align-items-center'>
                        <Image src={Aus} width={41} height={41} alt='usa' />
                        <div className='name ps-3'>
                            <h6 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>$5.12k</h6>
                            <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Australia</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center'>
                        <RiArrowDownSLine className='icon_down' />
                        <div className='brazil_am text-center'>
                            <p>11.9%</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex align-items-center'>
                        <Image src={France} width={38} height={38} alt='usa' />
                        <div className='name ps-3'>
                            <h6 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>$4.45k</h6>
                            <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>France</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center'>
                        <RiArrowDownSLine className='up-icon' />
                        <div className='amount text-center'>
                            <p>16.2%</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex align-items-center'>
                        <Image src={China} width={40} height={40} alt='usa' />
                        <div className='name ps-3'>
                            <h6 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}>$3.90k</h6>
                            <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>China</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end  align-items-center'>
                        <RiArrowDownSLine className='up-icon' />
                        <div className='amount text-center'>
                            <p>14.8%</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .main.light {
          background-color: white;
        }
      
       heading h3{
            color : ${themeMode === 'dark' ? 'rgb(214 212 219 / 90%)' : 'rgb(47 43 61 / 0.9)'};
       }

        .c_icon .dropdown-menu {
       
          background-color: ${themeMode === 'dark' ? '#444444' : 'white'};
          color: ${themeMode === 'dark' ? '#FFFFFF' : '#000000'};
        }
       
            `}
            </style>
        </div>
    )
}

export default SalesCountries