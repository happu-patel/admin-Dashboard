import * as React from 'react';
import { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Card, CardHeader, colors, Switch } from '@mui/material';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { TbListDetails } from "react-icons/tb";
import { BiSolidFilePdf } from "react-icons/bi";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AvatarGroup from '@mui/material/AvatarGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface BasicTimeline {
    themeMode: 'light' | 'dark';
}

const BasicTimeline: React.FC<BasicTimeline> = ({ themeMode }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getTextColor = (): string => themeMode === 'dark' ? '#E7E3FC99' : '#888888';



    return (
        <>
            <Card className={`${themeMode}`}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: themeMode === 'dark' ? '#333 !important' : '#fff !important', color: themeMode === 'dark' ? '#fff' : '#000' }} >
                            <TbListDetails />
                        </Avatar>
                    }
                    action={
                        <>

                            <IconButton
                                aria-label="settings"
                                onClick={handleClick}
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                style={{ color: getTextColor() }}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </>
                    }
                    title={<Typography style={{ color: getTextColor() }}>Activity Timeline</Typography>}
                />
                <CardContent className='timeline_card'>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="secondary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='contentoftimeline'>
                                <div className='d-flex justify-content-between pb-1 block'>
                                    <Typography variant="h6" component="p" className='first' style={{ color: getTextColor() }}>
                                        12 Invoices have been paid
                                    </Typography>
                                    <Typography variant="caption" display="block" style={{ marginTop: '5px', color: getTextColor() }} className='invoice_min'>12 min ago</Typography>
                                </div>
                                <Typography className='invoices_subtitle pb-2' style={{ color: getTextColor() }}>
                                    Invoices have been paid to the company
                                </Typography>
                                <div className='pdf_part d-flex align-items-center'>
                                    <BiSolidFilePdf style={{ color: '#d00606', fontSize: '20px' }} />
                                    <Typography variant="subtitle1" component="span" style={{ marginLeft: '5px', color: getTextColor() }}>invoices.pdf</Typography>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='contentoftimeline'>
                                <div className='d-flex justify-content-between pb-1'>
                                    <Typography variant="h6" component="p" className='first' style={{ color: getTextColor() }}>
                                        Client Meeting
                                    </Typography>
                                    <Typography variant="caption" display="block" style={{ marginTop: '5px', color: getTextColor() }} className='invoice_min'>45 min ago</Typography>
                                </div>
                                <Typography className='invoices_subtitle pb-2' style={{ color: getTextColor() }}>
                                    Project meeting with john @10:15am
                                </Typography>
                                <div className='d-flex align-items-center'>
                                    <Avatar className='is-8 bs-8' style={{ height: "30px", width: "30px" }}>
                                        <PersonIcon />
                                    </Avatar>
                                    <div className='flex-warp d-flex flex-column'>
                                        <Typography variant="subtitle1" component="p" style={{ marginLeft: '5px', color: getTextColor() }} className='client'>Lester McCarthy (Client)</Typography>
                                        <Typography variant="caption" display="block" style={{ marginLeft: '5px', color: getTextColor() }} className='client'>CEO of Pixinvent</Typography>
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='contentoftimeline'>
                                <div className='d-flex justify-content-between pb-1 block'>
                                    <Typography variant="h6" component="p" className='first' style={{ color: getTextColor() }}>
                                        Create a new project for client
                                    </Typography>
                                    <Typography variant="caption" display="block" style={{ marginTop: '5px', color: getTextColor() }} className='invoice_min'>2 Day Ago</Typography>
                                </div>
                                <Typography className='invoices_subtitle pb-2' style={{ color: getTextColor() }}>
                                    6 team members in a project
                                </Typography>
                                <AvatarGroup max={4} className='pull-up'>
                                    <Avatar>  <PersonIcon /> </Avatar>
                                    <Avatar>  <PersonIcon /> </Avatar>
                                    <Avatar>  <PersonIcon /> </Avatar>
                                    <Avatar>  <PersonIcon /> </Avatar>
                                    <Avatar>  <PersonIcon /> </Avatar>
                                    <Avatar>  <PersonIcon /> </Avatar>
                                </AvatarGroup>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </CardContent>
            </Card>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                className='basicmenu'
            >
                <MenuItem onClick={handleClose}>Share timeline</MenuItem>
                <MenuItem onClick={handleClose}>Suggest edits</MenuItem>
                <MenuItem onClick={handleClose}>Report bug</MenuItem>
            </Menu>
            <style>{`
                .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-1n604h7-MuiPaper-root-MuiPopover-paper-MuiMenu-paper{
                left:${themeMode === 'dark' ? '1320px !important' : '1311px'}
            }
                .css-q3fhd4-MuiAvatar-root{
                color:${themeMode === 'dark' ? '#fff' : '#000 !important'}
                }

                .css-ak0gdj-MuiAvatar-root{
                background-coloe:${themeMode === 'dark' ? '#333' : '#fff'}
                }
                `}

            </style>
        </>
    );
};

export default BasicTimeline;