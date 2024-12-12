"use client"
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Link from 'next/link';
import './sidebar.css';
import { RiHomeSmile2Line } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Collapse } from '@mui/material';
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { TbLayout } from "react-icons/tb";
interface sidebar {
    themeMode: 'light' | 'dark';
    isOpen: boolean;
    onClose: () => void;

}


const Sidebar: React.FC<sidebar> = ({ isOpen, onClose, themeMode }) => {
    const [isCollapsedbar, setIsCollapsedbar] = useState(false);
    const [isDash, setisDash] = useState(false);
    const [isEcom, setisEcom] = useState(false);
    const [isAcadmy, setisAcadmy] = useState(false);
    const [isLogistics, setisLogistics] = useState(false);
    const [isInvoice, setIsInvoice] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isRole, setIsRole] = useState(false);
    const [isPages, setIsPages] = useState(false);


    const handleDashboard = () => {
        setisDash(prev => !prev);
    }
    const handleInvoice = () => {
        setIsInvoice(prev => !prev);
    }
    const handleUser = () => {
        setIsUser(prev => !prev);
    }
    const handleEcommerce = () => {
        setisEcom(prev => !prev);
    }
    const handleAcadmy = () => {
        setisAcadmy(prev => !prev);
    }
    const handleLogistics = () => {
        setisLogistics(prev => !prev);
    }
    const handleRoles = () => {
        setIsRole(prev => !prev);
    }
    const handlePages = () => {
        setIsPages(prev => !prev)
    }

    const toggleSidebarCollapseHandler = () => {
        setIsCollapsedbar((prev) => !prev);
    }

    const getTextColor = (): string => themeMode === 'dark' ? '#E7E3FC99' : '#3635359c';
    const getTextColorMain = (): string => themeMode === 'dark' ? '#E7E3FC99' : 'inherit';

    return (
        <div className={`sidebar_wrapper ${isOpen ? 'open' : ''} ${themeMode}`}>
            <button className='button d-none d-md-block ' onClick={toggleSidebarCollapseHandler}>
                <MdKeyboardArrowLeft className='mb-2' />
            </button>
            <aside className="sidebar shadow-lg" data-collapse={isCollapsedbar}>
                <div className='d-md-none close-button' onClick={onClose}>
                    <IoMdClose size={24} />
                </div>
                <div className='d-flex sidebar_top'> 
                    <Image src={Logo} alt="logo" width={80} className='sidebar_logo' />
                </div>
                <ul className='sidebar_list' onClick={handleDashboard}>
                    <li className='sidebar_item'>
                        <Link href="/" className='sidebar_link'>
                            <span className="sidebar_icon" style={{ color: getTextColorMain() }}>
                                <RiHomeSmile2Line />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>Dashboard</span>
                            {
                                isDash ? <MdKeyboardArrowDown className='fs-2' style={{ color: getTextColorMain() }} /> : <MdOutlineNavigateNext className='fs-2 text-end ' style={{ color: getTextColor() }} />
                            }
                        </Link>
                        <Collapse in={isDash} timeout="auto" unmountOnExit style={{ color: getTextColor() }}>
                            <ul className="sidebar_sublist ms-3">
                                <li className="sidebar_subitem">
                                    <Link href="/Crm" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>CRM</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/analytics" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname " style={{ color: getTextColor() }}>Analytics</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/ecommerce" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>eCommerce</span>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                </ul>
                <ul>
                    <p className='text-secondary p-2 mb-0'>Apps & Pages</p>
                    <li className='sidebar_item' onClick={handleEcommerce}>
                        <Link href="/" className='sidebar_link'>
                            <span className="sidebar_icon ">
                                <BsCart3 style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>eCommerce</span>
                            {
                                isEcom ? <MdKeyboardArrowDown className='fs-2 ecom' style={{ color: getTextColorMain() }} /> : <MdOutlineNavigateNext className='fs-2 text-end ecom' style={{ color: getTextColor() }} />
                            }
                        </Link>
                        <Collapse in={isEcom} timeout="auto" unmountOnExit>
                            <ul className="sidebar_sublist ms-3">
                                <li className="sidebar_subitem">
                                    <Link href="/crm" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname " style={{ color: getTextColor() }}>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/analytics" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname " style={{ color: getTextColor() }}>Referrals</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/ecommerce" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname " style={{ color: getTextColor() }}>Settings</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/ecommerce" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname " style={{ color: getTextColor() }}>Products</span>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                   
                    <li className='sidebar_item'>
                        <Link href="/Email" className='sidebar_link'>
                            <span className="sidebar_icon cal">
                                <MdOutlineEmail style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>Email</span>
                        </Link>
                    </li>
                    <li className='sidebar_item'>
                        <Link href="/Chat" className='sidebar_link'>
                            <span className="sidebar_icon cal">
                                <IoChatbubbleOutline style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>Chat</span>
                        </Link>
                    </li>
                    <li className='sidebar_item'>
                        <Link href="/" className='sidebar_link'>
                            <span className="sidebar_icon cal">
                                <CiCalendarDate style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>Calendar</span>
                        </Link>
                    </li>
                  
                    <li className='sidebar_item' onClick={handleInvoice}>
                        <Link href="/Invoice" className='sidebar_link'>
                            <span className="sidebar_icon ">
                                <MdOutlineDescription style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>invoice</span>
                            {
                                isInvoice ? <MdKeyboardArrowDown className='fs-2 inv' style={{ color: getTextColorMain() }} /> : <MdOutlineNavigateNext className='fs-2 text-end inv' style={{ color: getTextColor() }} />
                            }
                        </Link>
                        <Collapse in={isInvoice} timeout="auto" unmountOnExit>
                            <ul className="sidebar_sublist ms-3">
                                <li className="sidebar_subitem">
                                    <Link href="/Invoice" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>List</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/analytics" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>Preview</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/ecommerce" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>Edit</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/Invoice/Add" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>Add</span>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li className='sidebar_item' onClick={handleUser}>
                        <Link href="/User" className='sidebar_link'>
                            <span className="sidebar_icon">
                                <LuUser style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>User</span>
                            {
                                isUser ? <MdKeyboardArrowDown className='fs-2 user' style={{ color: getTextColorMain() }} /> : <MdOutlineNavigateNext className='fs-2 text-end user' style={{ color: getTextColor() }} />
                            }
                        </Link>
                        <Collapse in={isUser} timeout="auto" unmountOnExit>
                            <ul className="sidebar_sublist ms-3">
                                <li className="sidebar_subitem">
                                    <Link href="/User" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>List</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/view" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname text-secondary" style={{ color: getTextColor() }}>view</span>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li className='sidebar_item' onClick={handleRoles}>
                        <Link href="/" className='sidebar_link'>
                            <span className="sidebar_icon ">
                                <MdLockOutline style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>Roles & Permissions</span>
                            {
                                isRole ? <MdKeyboardArrowDown className='fs-2 acdmy' style={{ color: getTextColorMain() }} /> : <MdOutlineNavigateNext className='fs-2 text-end acdmy' style={{ color: getTextColor() }} />
                            }
                        </Link>
                        <Collapse in={isRole} timeout="auto" unmountOnExit>
                            <ul className="sidebar_sublist ms-3">
                                <li className="sidebar_subitem">
                                    <Link href="/crm" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>Roles</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/analytics" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>Permissions</span>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li className='sidebar_item' onClick={handlePages}>
                        <div className='sidebar_link'>
                            <span className="sidebar_icon ">
                                <MdOutlineInsertDriveFile style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>Pages</span>
                            {
                                isPages ? <MdKeyboardArrowDown className='fs-2 acdmy' style={{ color: getTextColorMain() }} /> : <MdOutlineNavigateNext className='fs-2 text-end acdmy' style={{ color: getTextColor() }} />
                            }
                        </div>
                        <Collapse in={isPages} timeout="auto" unmountOnExit>
                            <ul className="sidebar_sublist ms-3">
                                <li className="sidebar_subitem">
                                    <Link href="/UserProfile" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>User Profile</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/Setting" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>Account Settings</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/Faq" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>FAQ</span>
                                    </Link>
                                </li>
                                <li className="sidebar_subitem">
                                    <Link href="/analytics" className="sidebar_sublink">
                                        <span className="sidebar_subicon">
                                            <FaRegCircle style={{ color: getTextColor() }} />
                                        </span>
                                        <span className="sidebar_subname" style={{ color: getTextColor() }}>Pricing</span>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                </ul>
                <ul>
                    <p className='text-secondary p-2 mb-0'>FORMS & TABLES</p>
                    <li className='sidebar_item'>
                        <Link href="/FormLayout" className='sidebar_link'>
                            <span className="sidebar_icon ">
                                <TbLayout style={{ color: getTextColorMain() }} />
                            </span>
                            <span className='sidebar_name' style={{ color: getTextColorMain() }}>Forms Layouts</span>

                        </Link>

                    </li>
                </ul>
            </aside>
            <style>{`
            .sidebar{
            background-color: ${themeMode === 'dark' ? '#2B2C40' : '#fff'};
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            }
            `}
            </style>
        </div>
    )
}
export default Sidebar