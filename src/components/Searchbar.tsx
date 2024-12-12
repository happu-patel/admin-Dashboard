import React, { useState } from 'react';
import './searchbar.css';
import { IoIosGitMerge } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { LuClock3, LuUser, LuLayoutPanelLeft, LuClipboardList } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { FiFileText, FiSettings } from "react-icons/fi";
import { TbCalendarFilled, TbFileInfo, TbCurrencyDollar, TbChartPpf } from "react-icons/tb";
import { MdOutlineLock } from "react-icons/md";
import { RiQuestionLine } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa';

interface SearchItem {
    icon: React.ElementType;
    title: string;
    category: string;

}

interface SearchBarProps {
    themeMode: 'light' | 'dark';
}
const SearchBar: React.FC<SearchBarProps> = ({ themeMode }) => {
    const [show, setShow] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const searchItems: SearchItem[] = [
        { icon: IoAnalytics, title: 'Analytics', category: 'POPULAR SEARCHES' },
        { icon: LuClock3, title: 'CRM', category: 'POPULAR SEARCHES' },
        { icon: BsCart3, title: 'eCommerce', category: 'POPULAR SEARCHES' },
        { icon: FiFileText, title: 'User List', category: 'POPULAR SEARCHES' },
        { icon: TbCalendarFilled, title: 'Calendar', category: 'APPS' },
        { icon: TbFileInfo, title: 'Invoice List', category: 'APPS' },
        { icon: FiFileText, title: 'User List', category: 'APPS' },
        { icon: MdOutlineLock, title: 'Roles & Permissions', category: 'APPS' },
        { icon: LuUser, title: 'User Profile', category: 'PAGES' },
        { icon: FiSettings, title: 'Account Settings', category: 'PAGES' },
        { icon: TbCurrencyDollar, title: 'Pricing', category: 'PAGES' },
        { icon: RiQuestionLine, title: 'FAQ', category: 'PAGES' },
        { icon: LuLayoutPanelLeft, title: 'Form Layouts', category: 'FORMS & CHARTS' },
        { icon: LuClipboardList, title: 'Form Validation', category: 'FORMS & CHARTS' },
        { icon: IoIosGitMerge, title: 'Form Wizard', category: 'FORMS & CHARTS' },
        { icon: TbChartPpf, title: 'Apex Charts', category: 'FORMS & CHARTS' },
    ];

    const filteredItems = searchItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, SearchItem[]>);

    return (
        <>
            {/* <span onClick={handleShow}>
                <FaSearch />
            </span> */}
            <div>
                {show && (
                    <div className="modal d-block" tabIndex={-1} role="dialog" style={{
                        backgroundColor: themeMode === 'dark' ? 'rgba(23,25,37,.6)' : '',
                        color: themeMode === 'dark' ? '#E7E3FC99' : '#000000'
                    }}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header" style={{
                                    backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFF',
                                    color: themeMode === 'dark' ? '#E7E3FC99' : '#000000'
                                }}>
                                    <h5 className="modal-title">
                                        <div className="input-group" style={{
                                            backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFF',
                                            color: themeMode === 'dark' ? '#E7E3FC99' : '#000000'
                                        }}>
                                            <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFF', }}>
                                                <FaSearch className='fs-4' style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }} />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                aria-describedby="basic-addon1"
                                                style={{
                                                    backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFF',
                                                    color: themeMode === 'dark' ? '#E7E3FC99' : '#000000'
                                                }}
                                            />
                                        </div>
                                    </h5>
                                    <button type="button" className="btn-close" onClick={handleClose} aria-label="Close" style={{ color: themeMode === 'dark' ? '#E7E3FC99' : '#000000' }}></button>
                                </div>
                                <div className="modal-body" style={{
                                    backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFF',
                                    color: themeMode === 'dark' ? '#E7E3FC99' : '#000000'
                                }}>
                                    <div className="row">
                                        {Object.entries(groupedItems).map(([category, items]) => (
                                            <div key={category} className="col-lg-6 col-md-6 search_boy">
                                                <h6 className="mb-3" style={{ color: themeMode === 'dark' ? 'rgb( 225 222 245 / 0.4)' : 'rgb(125 125 125 / 45%)' }}>{category}</h6>
                                                <ul className="list-unstyled">
                                                    {items.map((item, index) => (
                                                        <li key={index} className="mb-2">
                                                            <a href="#" className="text-decoration-none " style={{ color: themeMode === 'dark' ? 'rgb(225 222 245 / 86%)' : '#000000' }}>
                                                                <item.icon className="me-2 icons" />
                                                                <span className="item-title">{item.title}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="modal-footer border-0" style={{
                                    backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFF',
                                    color: themeMode === 'dark' ? '#E7E3FC99' : '#000000'
                                }}>
                                    <small className="me-auto" style={{ color: themeMode === 'dark' ? '#E7EFC99' : '#000000' }}>Press ESC or click outside to close</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {show && <div className="modal-backdrop fade show" onClick={handleClose}></div>}
                <style>{`
    .btn-close{
      --bs-btn-close-color:${themeMode === 'dark' ? '#E7E3FC99' : '#8b8b8b'};
    }

`}
                </style>
            </div>
        </>
    );
};

export default SearchBar;