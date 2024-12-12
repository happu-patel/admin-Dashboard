import React, { useState } from 'react';
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import './activeproject.css';
import Laravel from '../../images/Laravel.png';
import Figma from '../../images/Figma.png';
import VusJs from '../../images/Vue.png';
import ReactLogo from '../../images/React.png';
import Bootstrap from '../../images/Bootstrap.png';
import Sketch from '../../images/Sketch.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { LinearProgress } from '@mui/material';


interface ActiveProject {
    themeMode: 'light' | 'dark';
}
const ActiveProject: React.FC<ActiveProject> = ({ themeMode }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleMenuClick = (): void => {
        setShowMenu(!showMenu);
    };


    return (
        <div className={`main ${themeMode} p-3`}>
            <div className='heading d-flex justify-content-between align-items-start'>
                <div>
                    <h3 style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Active Projects</h3>
                    <p style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Average 72% completed</p>
                </div>
                <div className='c_icon position-relative'>
                    <FontAwesomeIcon icon={faEllipsisV} onClick={handleMenuClick} />
                    {showMenu && (
                        <ul className="dropdown-menu show-menu position-absolute end-0" style={{ backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFFF' }}>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Week</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Month</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Year</a></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className='project_info d-flex flex-column row-gap-3'>
                <div className='item-center d-flex align-items-center column-gap-4'>
                    <Image src={Laravel} alt='laravel' width={32} height={32} />
                    <div className='d-flex flex-wrap justify-content-between column-gap-5 col_gap'>
                        <div className='flex-column'>
                            <h4 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Laravel</h4>
                            <p className='mb-1' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>eCommerce</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center column-gap-3 laravellinear'>
                            <LinearProgress variant='determinate' value={54} sx={{ width: '100px', height: '10px', borderRadius: '5px' }} color='error' />
                            <h5 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>{54}%</h5>
                        </div>
                    </div>
                </div>
                <div className='item-center d-flex align-items-center column-gap-4'>
                    <Image src={Figma} alt='figma' width={32} height={32} />
                    <div className='d-flex flex-wrap justify-content-between column-gap-5 col_gap'>
                        <div className='flex-column'>
                            <h4 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Figma</h4>
                            <p className='mb-1' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>App UI Kit</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center column-gap-3 figmalinear' style={{ paddingLeft: '27px' }}>
                            <LinearProgress variant='determinate' value={85} sx={{ width: '100px', height: '10px', borderRadius: '5px' }} />
                            <h5 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>{85}%</h5>
                        </div>
                    </div>
                </div>
                <div className='item-center d-flex align-items-center column-gap-4'>
                    <Image src={VusJs} alt='vusjs' width={32} height={32} />
                    <div className='d-flex flex-wrap justify-content-between column-gap-5 col_gap'>
                        <div className='flex-column'>
                            <h4 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>VusJs</h4>
                            <p className='mb-1' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Calendar App</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center column-gap-3 vuejslinear' style={{ paddingLeft: '6px' }} >
                            <LinearProgress variant='determinate' value={64} sx={{ width: '100px', height: '10px', borderRadius: '5px' }} color='success' />
                            <h5 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>{64}%</h5>
                        </div>
                    </div>
                </div>
                <div className='item-center d-flex align-items-center column-gap-4'>
                    <Image src={ReactLogo} alt='react' width={32} height={32} />
                    <div className='d-flex flex-wrap justify-content-between column-gap-5 col_gap'>
                        <div className='flex-column'>
                            <h4 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>React</h4>
                            <p className='mb-1' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Dashboard</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center column-gap-3 reactlinear' style={{ paddingLeft: '24px' }}>
                            <LinearProgress variant='determinate' value={40} sx={{ width: '100px', height: '10px', borderRadius: '5px' }} color='info' />
                            <h5 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>{40}%</h5>
                        </div>
                    </div>
                </div>
                <div className='item-center d-flex align-items-center column-gap-4'>
                    <Image src={Bootstrap} alt='bootstrap' width={32} height={32} />
                    <div className='d-flex flex-wrap justify-content-between column-gap-5 col_gap'>
                        <div className='flex-column'>
                            <h4 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Bootstrap</h4>
                            <p className='mb-1' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Website</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center column-gap-3 bootstrapliner' style={{ paddingLeft: '22px' }}>
                            <LinearProgress variant='determinate' value={17} sx={{ width: '100px', height: '10px', borderRadius: '5px' }} />
                            <h5 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>{17}%</h5>
                        </div>
                    </div>
                </div>
                <div className='item-center d-flex align-items-center column-gap-4'>
                    <Image src={Sketch} alt='bootstrap' width={32} height={32} />
                    <div className='d-flex flex-wrap justify-content-between column-gap-5 col_gap'>
                        <div className='flex-column'>
                            <h4 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Sketch</h4>
                            <p className='mb-1' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>Website Design</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center column-gap-3 sketchliner' style={{ paddingLeft: '1px' }}>
                            <LinearProgress variant='determinate' value={30} sx={{ width: '100px', height: '10px', borderRadius: '5px' }} color='warning' />
                            <h5 className='mb-0' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#888888' }}>{30}%</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveProject;