"use client"
import React, { useState, useRef ,useEffect } from 'react';
import { Box, useTheme, TextField, IconButton, Typography, Avatar, Drawer, Badge, Button, useMediaQuery, InputAdornment, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import '../globals.css';
import '../page.module.css';
import styles from '../page.module.css';
import './chat.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import avtar1 from '../../images/Avtar1.png';
import avtar2 from '../../images/avtar2.png';
import avtar3 from '../../images/avtar3.png';
import avtar4 from '../../images/avtare4.png';
import { Popper, ClickAwayListener } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import { MdDone, MdDoneAll } from "react-icons/md";
import { TbMessage2, TbPhone, TbVideo, TbSearch, TbDotsVertical } from "react-icons/tb";
import { Mic} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { StaticImageData } from 'next/image';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import MoreVertIcon from '@mui/icons-material/MoreVert';


interface Message {
    id: number;
    text: string;
    sender: 'user' | 'contact';
    timestamp: string;
    status: string;
}

interface Contact {
    id: number;
    name: string;
    lastMessage: string;
    date: string;
    unreadCount: number;
    position: string;
    avatar?: string | StaticImageData; // Allow StaticImageData type
    messages: Message[];
}
const initialContacts: Contact[] = [
    {
        id: 1,
        name: 'Felecia Rower',
        lastMessage: 'I will purchase it for sure. 👍',
        date: 'Oct 17',
        unreadCount: 1,
        position: 'Frontend Developer',
        avatar: avtar3,
        messages: [
            { id: 1, text: "Hi there! How can I help you today?", sender: 'contact', timestamp: '10:00 AM', status: 'seen' },
            { id: 2, text: "I'm interested in purchasing your product.", sender: 'user', timestamp: '10:05 AM', status: 'seen' },
            { id: 3, text: "That's great! Which product are you looking at?", sender: 'contact', timestamp: '10:07 AM', status: 'seen' },
            { id: 4, text: "I will purchase it for sure. 👍", sender: 'user', timestamp: '10:10 AM', status: 'seen' },
        ]
    },
    {
        id: 2,
        name: 'Adalberto Granzin',
        lastMessage: 'If it takes long you can mail me at...',
        date: 'Oct 16',
        unreadCount: 0,
        position: 'UI/UX Designer',
        avatar: avtar2,
        messages: [
            { id: 1, text: "Hello! Any updates on the project?", sender: 'contact', timestamp: '2:00 PM', status: 'seen' },
            { id: 2, text: "We're making good progress. Should be done soon.", sender: 'user', timestamp: '2:05 PM', status: 'seen' },
            { id: 3, text: "Great! If it takes long you can mail me at...", sender: 'contact', timestamp: '2:10 PM', status: 'delivered' },
            { id: 4, text: "If it takes long you can mail me at...", sender: 'user', timestamp: '2:12 PM', status: 'sent' },
        ]
    },
    {
        id: 3,
        name: 'Zenia Jacobs',
        lastMessage: 'Thank you, looking forward to it.',
        date: 'Dec 13',
        unreadCount: 0,
        position: 'Building surveyor',
        avatar: avtar4,
        messages: [
            { id: 1, text: "Hi! I received the package today.", sender: 'contact', timestamp: '11:00 AM', status: 'seen' },
            { id: 2, text: "That's wonderful! How do you like it?", sender: 'user', timestamp: '11:05 AM', status: 'seen' },
            { id: 3, text: "It's perfect! Thank you, looking forward to using it.", sender: 'contact', timestamp: '11:10 AM', status: 'sent' },
            { id: 4, text: "Thank you, looking forward to it.", sender: 'user', timestamp: '1:16 PM', status: 'seen' },

        ]
    },
    {
        id: 4,
        name: 'Miguel Guelff',
        lastMessage: 'Thank you, looking forward to it.',
        date: 'Dec 12',
        unreadCount: 0,
        position: 'Special educational needs teacher',
        avatar: undefined,
        messages: [
            { id: 1, text: "Hello, I would like to arrange a professional meeting.", sender: 'user', timestamp: '1:15 PM', status: 'seen' },
            { id: 2, text: "Sure, could you please provide more details about the meeting?", sender: 'contact', timestamp: '1:15 PM', status: 'sent' },
            { id: 3, text: "The meeting is about our next project plan..", sender: 'user', timestamp: '1:16 PM', status: 'seen' },
            { id: 4, text: "Okay, I will prepare the necessary documents for the meeting", sender: 'contact', timestamp: '1:15 PM', status: 'sent' },
            { id: 5, text: "Thank you, looking forward to it.", sender: 'user', timestamp: '1:16 PM', status: 'seen' },
        ]
    },
];


function Chat() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const theme = useTheme();
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const [message, setMessage] = useState('');
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const emojiButtonRef = useRef<HTMLButtonElement>(null);
    const [contacts, setContacts] = useState<Contact[]>(initialContacts); // Initial list of contacts
    const [unreadCount, setUnreadCount] = useState(
        initialContacts.reduce((total, contact) => total + contact.unreadCount, 0)
    );
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [openDropdown,setOpenDropdown] = useState (false);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElFirstMenu, setAnchorElFirstMenu] = useState<null | HTMLElement>(null); // State for first menu
    // Effect to scroll down whenever a new message is added
    useEffect(() => {
        scrollToBottom();
    }, [contacts]); // Replace contacts with the state that tracks messages if needed

    const isTablet = useMediaQuery('(max-width:991px)');
   
    // Toggle the drawer
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }; 
  
   
   const handleNotificationClick = (id: number) => {
    setContacts((prevContacts) => {
        const updatedContacts = prevContacts.map((contact) =>
            contact.id === id
                ? {
                    ...contact,
                    unreadCount: contact.unreadCount > 0 ? contact.unreadCount - 1 : 0, // Decrease unreadCount when clicked
                }
                : contact
        );

        // Return the updated contacts
        return updatedContacts;
    });
    };

  

    // Recalculate unreadCount dynamically when rendering
    const dynamicUnreadCount = contacts.reduce((total, contact) => total + contact.unreadCount, 0);


    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
    const handleSendMessage = () => {
        if (message.trim() && selectedContact) {
            const newMessage: Message = {
                id: selectedContact.messages.length + 1,
                text: message,
                sender: 'user',
                status: 'sent',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setSelectedContact({
                ...selectedContact,
                messages: [...selectedContact.messages, newMessage],
                lastMessage: message
            });
            const updatedSelectedContact = {
                ...selectedContact,
                messages: [...selectedContact.messages, newMessage],
                lastMessage: message
            };

            setSelectedContact(updatedSelectedContact);

            const updatedContacts = contacts.map(contact =>
                contact.id === selectedContact.id // Check by unique id for a precise match
                    ? updatedSelectedContact
                    : contact
            );
            setContacts(updatedContacts);
            setMessage(''); // Clear the input field
            scrollToBottom(); // Ensure the scroll is at the bottom
        }
    };
    const handleEmojiClick = (emojiObject: { emoji: string }) => {
        setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker((prev) => !prev);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            handleSendMessage(); // Send the message
        }
    };
    const handleOpenDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseDropdown = () => {
        setAnchorEl(null);
    };

    const handleSelectContact = (contact: Contact) => {
        setSelectedContact(contact);
        handleCloseDropdown(); // Close the dropdown
    };
    const handleInputClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // Open dropdown
        setOpenDropdown(true); // Ensure dropdown is open
    };

    const handleFirstMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElFirstMenu(event.currentTarget);
    };

    // Close first menu
    const handleFirstMenuClose = () => {
        setAnchorElFirstMenu(null);
    };

    return (
        <Box sx={{ bgcolor: 'background.default', color: 'text.primary', height: '100vh', display: 'flex' }} className="main">
            <div className={styles.sidebar}>
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
            </div>
            <div className={styles.content} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                <div className="container">
                    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Paper elevation={3}> 
                                <Box sx={{ display: 'flex', height: '500px', bgcolor: theme.palette.mode === 'dark' ? '#2F3349' : '#f5f5f5', flexDirection: { xs: 'column', sm: 'row' } }}>
                                    <Box sx={{ width: 350, bgcolor: theme.palette.mode === 'dark' ? '#2F3349' : 'white', borderRight: 1, borderColor: 'divider', display: { xs: 'none', sm: 'block' }, }}>
                                        {/* Search and Avatar Section */}
                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Badge
                                                overlap="circular"
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                variant="dot"
                                                color='success'
                                            >
                                                <Avatar src={avtar1.src} />
                                            </Badge>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                placeholder="Search Contacts"
                                                onClick={handleInputClick}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SearchIcon sx={{ color: 'action.active', mr: 1 }}/>
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton edge="end"
                                                                onClick={handleOpenDropdown} sx={{ color: 'action.active' }}>
                                                                <ArrowDropDownIcon />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                
                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                                            />
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleCloseDropdown}
                                            >
                                                {contacts.map((contact) => (
                                                    <MenuItem key={contact.id} onClick={() => handleSelectContact(contact)}>
                                                        <Avatar
                                                            src={typeof contact.avatar === 'object' ? contact.avatar.src : contact.avatar || undefined}
                                                            sx={{ width: 40, height: 40 }}
                                                            >
                                                            {!contact.avatar && contact.name.charAt(0)}
                                                        </Avatar>
                                                        {contact.name}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </Box>

                                        {/* Contacts List */}
                                        {contacts.map((contact) => (
                                            <Box
                                                key={contact.id}
                                                onClick={() => setSelectedContact(contact)}
                                                sx={{
                                                    p: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    marginLeft: '6px',
                                                    marginRight: '6px',
                                                    marginBottom: '5px',
                                                    borderRadius: '4px',
                                                    bgcolor: selectedContact?.id === contact.id ? '#7367F0' : 'transparent',
                                                    color: selectedContact?.id === contact.id ? '#fff' : 'text.primary',
                                                }}
                                            >
                                                <Badge
                                                    overlap="circular"
                                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                    variant="dot"
                                                    color={(() => {
                                                        switch (contact.position) {
                                                            case 'Admin':
                                                            case 'Special educational needs teacher':
                                                                return 'success'; // Green color for Admin
                                                            case 'Frontend Developer':
                                                                return 'secondary'; // Blue color for Manager
                                                            case 'UI/UX Designer':
                                                                return 'error'; // Grey color for User
                                                            case 'Building surveyor':
                                                                return 'warning';
                                                            default:
                                                                return 'default'; // Default badge color if no match
                                                        }
                                                    })()}
                                                >
                                                    <Avatar
                                                        src={typeof contact.avatar === 'object' ? contact.avatar.src : contact.avatar || undefined}
                                                        sx={{ width: 40, height: 40 }}
                                                    >
                                                        {!contact.avatar && contact.name.charAt(0)}
                                                    </Avatar>

                                                </Badge>
                                                <Box sx={{ ml: 2, overflow: 'hidden', flex: 1 }}>
                                                    <Typography variant="subtitle1" noWrap>{contact.name}</Typography>
                                                    <Typography variant="body2" noWrap>{contact.lastMessage}</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                    <Typography variant="caption">{contact.date}</Typography>
                                                    {contact.unreadCount > 0 && (
                                                        <Badge color="primary" badgeContent={contact.unreadCount} sx={{ mt: 1 }} onClick = {() => handleNotificationClick(contact.id)} />
                                                    )}
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                    {
                                        isTablet && (
                                            <>
                                                <Drawer
                                                    sx={{
                                                        width: 250,
                                                        flexShrink: 0,
                                                        '& .MuiDrawer-paper': {
                                                            width: 250,
                                                            boxSizing: 'border-box',
                                                        },
                                                    }}
                                                    variant="temporary"
                                                    open={isDrawerOpen} // The open state for the drawer
                                                    onClose={handleDrawerToggle}
                                                    anchor="left"
                                                    ModalProps={{
                                                        keepMounted: true, // Improve performance on mobile
                                                    }}
                                                >
                                                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                                            <Badge
                                                                overlap="circular"
                                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                                variant="dot"
                                                                color="success"
                                                            >
                                                                <Avatar src={avtar1.src} />
                                                            </Badge>
                                                            <TextField
                                                                fullWidth
                                                                variant="outlined"
                                                                placeholder="Search Contacts"
                                                                InputProps={{
                                                                    startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
                                                                }}
                                                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                                                            />
                                                        </Box>
                                                        {contacts.map((contact) => (
                                                            <Box
                                                                key={contact.id}
                                                                onClick={() => setSelectedContact(contact)}
                                                                sx={{
                                                                    p: 1,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    cursor: 'pointer',
                                                                    marginLeft: '6px',
                                                                    marginRight: '6px',
                                                                    marginBottom: '5px',
                                                                    borderRadius: '4px',
                                                                    bgcolor: selectedContact?.id === contact.id ? '#7367F0' : 'transparent',
                                                                    color: selectedContact?.id === contact.id ? '#fff' : 'text.primary',
                                                                }}
                                                            >
                                                                <Badge
                                                                    overlap="circular"
                                                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                                    variant="dot"
                                                                    color={(() => {
                                                                        switch (contact.position) {
                                                                            case 'Admin':
                                                                            case 'Special educational needs teacher':
                                                                                return 'success';
                                                                            case 'Frontend Developer':
                                                                                return 'secondary';
                                                                            case 'UI/UX Designer':
                                                                                return 'error';
                                                                            case 'Building surveyor':
                                                                                return 'warning';
                                                                            default:
                                                                                return 'default';
                                                                        }
                                                                    })()}
                                                                >
                                                                    <Avatar
                                                                        src={typeof contact.avatar === 'object' ? contact.avatar.src : contact.avatar || undefined}
                                                                        sx={{ width: 40, height: 40 }}
                                                                    >
                                                                        {!contact.avatar && contact.name.charAt(0)}
                                                                    </Avatar>
                                                                </Badge>
                                                                <Box sx={{ ml: 2, overflow: 'hidden', flex: 1 }}>
                                                                    <Typography variant="subtitle1" noWrap>{contact.name}</Typography>
                                                                    <Typography variant="body2" noWrap>{contact.lastMessage}</Typography>
                                                                </Box>
                                                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                                    <Typography variant="caption">{contact.date}</Typography>
                                                                    {contact.unreadCount > 0 && (
                                                                        <Badge color="primary" badgeContent={contact.unreadCount} sx={{ mt: 1 }} onClick={() => handleNotificationClick(contact.id)} />
                                                                    )}
                                                                </Box>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Drawer>
                                            </>
                                        )
                                    }
                                    {/* Chat Area */}
                                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', bgcolor: theme.palette.mode === 'dark' ? '#2F3349' : 'white' }}>
                                        {selectedContact ? (
                                            <>
                                                {/* Chat Header */}
                                                <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
                                                    <Badge
                                                        overlap="circular"
                                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                        variant="dot"
                                                        color={(() => {
                                                            switch (selectedContact.position) {
                                                                case 'Admin':
                                                                case 'Special educational needs teacher':
                                                                    return 'success'; // Green color for Admin
                                                                case 'Frontend Developer':
                                                                    return 'secondary'; // Blue color for Manager
                                                                case 'UI/UX Designer':
                                                                    return 'error'; // Grey color for User
                                                                case 'Building surveyor':
                                                                    return 'warning';
                                                                default:
                                                                    return 'default'; // Default badge color if no match
                                                            }
                                                        })()}
                                                    >
                                                        <IconButton onClick={handleDrawerToggle} sx={{display: {xs: 'block',sm:'none', md: 'none',lg:'none',xl:'none' }}}>
                                                            <MenuIcon />
                                                        </IconButton>
                                                        <Avatar src={typeof selectedContact.avatar === 'object' ? selectedContact.avatar.src : selectedContact.avatar} >
                                                            {!selectedContact.avatar && selectedContact.name.charAt(0)}
                                                        </Avatar>
                                                    </Badge>
                                                    <Box sx={{ ml: 2 }}>
                                                        <Typography variant="subtitle1">{selectedContact.name}</Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {selectedContact.position}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ ml: 'auto' }}>
                                                        <IconButton className='phone_icon'><TbPhone /></IconButton>
                                                        <IconButton className='phone_icon'><TbVideo /></IconButton>
                                                        <IconButton className='phone_icon'><TbSearch /></IconButton>
                                                        <IconButton><TbDotsVertical /></IconButton>
                                                    </Box>
                                                </Box>


                                                {/* Messages */}
                                                
                                                <Box sx={{ flex: 1, p: 2, bgcolor: theme.palette.mode === 'dark' ? '#202534' : '#F3F2F5', display: 'flex', flexDirection: 'column' }} height={400}>
                                                    {/* Chat Messages Area */}
                                                    <Box
                                                        className='chat_msg_area'
                                                    
                                                        sx={{ overflowY: 'auto', flex: 1, paddingBottom: 2 }}
                                                    >
                                                        {selectedContact.messages.map((msg) => (
                                                            <Box
                                                                key={msg.id}
                                                                sx={{
                                                                    display: 'flex',
                                                                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                                                    mb: 2,
                                                                }}
                                                            >
                                                                {msg.sender === 'contact' && (
                                                                    <Avatar
                                                                        src={typeof selectedContact.avatar === 'object' ? selectedContact.avatar.src : selectedContact.avatar}
                                                                        sx={{ width: 32, height: 32, mr: 1 }}
                                                                    />
                                                                )}
                                                                <Box>
                                                                    <Typography
                                                                        variant="body1"
                                                                        sx={(theme) => ({
                                                                            bgcolor: msg.sender === 'user'
                                                                                ? theme.palette.mode === 'dark' ? '#424242' : '#e3f2fd'
                                                                                : theme.palette.background.paper,
                                                                            p: 1,
                                                                            borderRadius: 2,
                                                                            maxWidth: '100%',
                                                                        })}
                                                                    >
                                                                        {msg.text}
                                                                    </Typography>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                                                                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                                                            {msg.timestamp}
                                                                        </Typography>
                                                                        {msg.sender === 'user' && (
                                                                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                                                                                {msg.status === 'sent' && (
                                                                                    <MdDone fontSize="small" style={{ color: 'gray' }} />
                                                                                )}
                                                                                {msg.status === 'delivered' && (
                                                                                    <MdDoneAll fontSize="small" style={{ color: 'gray' }} />
                                                                                )}
                                                                                {msg.status === 'seen' && (
                                                                                    <MdDoneAll fontSize="small" style={{ color: 'green' }} />
                                                                                )}
                                                                            </Box>
                                                                        )}
                                                                    </Box>
                                                                </Box>
                                                                {msg.sender === 'user' && (
                                                                    <Avatar src={avtar1.src} sx={{ width: 32, height: 32, ml: 1 }} />
                                                                )}
                                                            </Box>
                                                        ))}
                                                        <div ref={messagesEndRef} />
                                                    </Box>
                                                    {/* Input Area */}
                                                    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                                                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'background.paper', borderRadius: 2 }}>
                                                            <TextField
                                                                variant="outlined"
                                                                fullWidth
                                                                size="small"
                                                                placeholder="Type a message"
                                                                value={message}
                                                                onChange={(e) => setMessage(e.target.value)}
                                                                onKeyUp={(e) => {
                                                                    if (e.key === 'Enter') {
                                                                        e.preventDefault();
                                                                        handleSendMessage();
                                                                    }
                                                                }}
                                                                InputProps={{
                                                                    style: { border: 'none' },
                                                                    endAdornment: (
                                                                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                                                            {/* Only show emoji button if the menu is not active */}
                                                                            <IconButton onClick={toggleEmojiPicker} ref={emojiButtonRef} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                                                <InsertEmoticonIcon />
                                                                            </IconButton>
                                                                            <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                                                <Mic />
                                                                            </IconButton>
                                                                            <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                                                <AttachFileIcon />
                                                                            </IconButton>

                                                                            <Popper open={showEmojiPicker} anchorEl={emojiButtonRef.current} placement="top-start">
                                                                                <ClickAwayListener onClickAway={() => setShowEmojiPicker(false)}>
                                                                                    <Box sx={{ bgcolor: 'background.paper', boxShadow: 3, borderRadius: 1 }}>
                                                                                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                                                                                       
                                                                                    </Box>
                                                                                </ClickAwayListener>
                                                                            </Popper>
                                                                        </Box>
                                                                    ),
                                                                }}
                                                            />

                                                            

                                                            {/* First More Vert Button for mobile */}
                                                            <IconButton
                                                                sx={{ display: { xs: 'block', sm: 'none' } }} // Show only on mobile (xs)
                                                                onClick={handleFirstMenuClick}
                                                            >
                                                                <MoreVertIcon />
                                                            </IconButton>

                                                            {/* First Menu with emoji, mic, attach file */}
                                                            <Menu
                                                                className='iconmenu'
                                                                anchorEl={anchorElFirstMenu}
                                                                open={Boolean(anchorElFirstMenu)}
                                                                onClose={handleFirstMenuClose}
                                                                sx={{ display: { xs: 'block', sm: 'none' } }} // Mobile-specific
                                                            >
                                                                <MenuItem onClick={toggleEmojiPicker}>
                                                                    <InsertEmoticonIcon />
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <Mic />
                                                                </MenuItem>
                                                                <MenuItem>
                                                                    <AttachFileIcon />
                                                                </MenuItem>
                                                            </Menu>
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                endIcon={<SendIcon />}
                                                                onClick={handleSendMessage}
                                                                sx={{
                                                                    textTransform: 'none',
                                                                    borderRadius: 2,
                                                                }}
                                                            >
                                                                Send
                                                            </Button>
                                                        </Box>
                                                    </form>
                                                </Box>

                                            </>
                                        ) : (
                                            // Display when no contact is selected
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: theme.palette.mode === 'dark' ?'#202534' :'#F3F2F5' }}>
                                                <Box sx={{ width: 100, height: 100, borderRadius: '50%', bgcolor: 'rgb(115 103 240 / 0.16)', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                                                    <TbMessage2 style={{ width: '50px', height: '50px', color: '#7367F0' }} />
                                                </Box>
                                                <Typography variant="h6" color="text.secondary">Select a contact to start a conversation.</Typography>
                                                    <Button variant="contained" color="primary" sx={{ mt: 3 , display: { xs: 'block', md: 'none' }}} onClick={handleDrawerToggle}>
                                                        Select Contact
                                                    </Button>
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </div>
            </div>
        </Box >
    );
}

export default function ThemedChat() {
    return (
        <ThemeProvider>
            <Chat />
        </ThemeProvider>
    );
}



