"use client"
import React, { useState, useEffect } from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, Divider, Typography, IconButton, InputBase, Avatar, Button, Badge, Paper, Checkbox, Tooltip, Chip, CircularProgress, Menu, MenuItem, Drawer,Backdrop } from '@mui/material'
import { styled } from '@mui/material/styles'
import '../globals.css'
import styles from '../page.module.css'
import { useTheme } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";
import MenuIcon from '@mui/icons-material/Menu';
import {
    Search as SearchIcon,
    MoreVert as MoreVertIcon,
    Close as CloseIcon,
    Folder,
    MarkAsUnread,
} from '@mui/icons-material'
import {
    TbRefresh as RefreshIcon,
    TbMail as InboxIcon,
    TbSend as SendIcon,
    TbEdit as DraftsIcon,
    TbStar as StarIcon,
    TbTrash as TrashIcon,
    TbTag as LabelIcon,
} from "react-icons/tb";
import { HiOutlineMailOpen as UnreadIcon, HiOutlineMail as ReadIcon } from "react-icons/hi";
import { BiErrorAlt as SpamIcon, } from "react-icons/bi";
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider'
import './style.css'
import ComposeDialog from './ComposeDialog'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const EmailItemWrapper = styled(ListItem)<{ isRead: boolean }>(({ theme, isRead }) => ({
    position: 'relative',
    backgroundColor: isRead ? theme.palette.action.hover : theme.palette.background.paper,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const LabelChip = styled(Chip)(({ theme }) => ({
    marginRight: theme.spacing(0.5),
    height: 20,
    '& .MuiChip-label': {
        padding: '0 6px',
        fontSize: '0.75rem',
    },
    '& .MuiChip-icon': {
        marginLeft: '6px',
    },
}));
const EmailActions = styled(Box)(({ theme }) => ({
    display: 'none',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(0.5),
    gap: theme.spacing(0.5),
}));

interface EmailItemProps {
    senderEmail: string;
    id: number;
    sender: string;
    subject: string;
    time: string;
    isStarred: boolean;
    color: string;
    labels?: string[];
    content: string;
    onClick: (email: EmailItemProps) => void;
    onToggleStar: (id: number) => void;
    onToggleSelect: (id: number) => void;
    onMoveToTrash: (id: number) => void;
    onMoveToSpam: (id: number) => void;
    onMoveToDraft: (id: number) => void;
    onMarkAsUnread: (id: number) => void;
    selected: boolean;
    isRead: boolean;
    onToggleReadStatus: (id: number) => void;
}

const getLabelColor = (label: string) => {
    switch (label) {
        case 'Private':
            return 'error.main';
        case 'Company':
            return 'primary.main';
        case 'Important':
            return 'warning.main';
        case 'Personal':
            return 'success.main';
        default:
            return 'grey.500'; // Fallback color
    }
};

const EmailItem: React.FC<EmailItemProps> = ({
    id,
    sender,
    senderEmail,
    subject,
    time,
    isStarred,
    color,
    labels = [],
    content,
    onClick,
    onToggleStar,
    onToggleSelect,
    onMoveToTrash,
    onMoveToSpam,
    onMoveToDraft,
    onMarkAsUnread,
    selected,
    isRead,
    onToggleReadStatus
}) => {
    const labelColor = getLabelColor(labels);
    return (

        <EmailItemWrapper
            button
            isRead={isRead}
            onClick={(e) => {
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
                    onClick({ id, sender, subject, time, isStarred, color, content, labels, isRead, senderEmail });
                }
            }}
            sx={{ py: 1 }}
        >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={selected}
                    onChange={() => onToggleSelect(id)}
                />
            </ListItemIcon>
            <ListItemIcon>
                <IconButton
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleStar(id);
                    }}
                >
                    <StarIcon
                        style={{ color: isStarred ? "#ff9800" : "#9e9e9e" }}
                    />
                </IconButton>
            </ListItemIcon>
            <ListItemIcon>
                <Avatar sx={{ bgcolor: color }}>
                    {sender ? sender[0] : '?'}
                </Avatar>
            </ListItemIcon>
            <ListItemText
                primary={
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <Box display="flex" flexDirection="row" alignItems="center">
                            <Typography variant="body1" component="span" sx={{ paddingRight: "20px" }}>
                                {sender}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {subject}
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="flex-end" alignItems="center">
                            {Array.isArray(labels) && labels.map((label, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        bgcolor: getLabelColor(label),
                                        marginLeft: index > 0 ? '5px' : '0',
                                    }}
                                />
                            ))}
                            <Typography variant="body2" color="text.secondary" noWrap sx={{ marginLeft: '10px' }}>
                                {time}
                            </Typography>
                        </Box>
                    </Box>
                }
            />


            <EmailActions className="actions">
                <Tooltip title={isRead ? "Mark as Unread" : "Mark as Read"}>
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleReadStatus(id);
                        }}
                    >
                        {isRead ? <ReadIcon /> : <UnreadIcon />}
                    </IconButton>
                </Tooltip>
                <Tooltip title="Move to Trash">
                    <IconButton color="error" onClick={(e) => {
                        e.stopPropagation();
                        onMoveToTrash(id);
                    }}>
                        <TrashIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Move to Spam">
                    <IconButton color="warning" onClick={(e) => {
                        e.stopPropagation();
                        onMoveToSpam(id);
                    }}>
                        <SpamIcon />
                    </IconButton>
                </Tooltip>
            </EmailActions>
        </EmailItemWrapper>
    );
}
type Email = {
    id: number;
    sender: string;
    subject: string;
    time: string;
    isStarred: boolean;
    color: string;
    content: string;
    folder: 'inbox' | 'sent' | 'trash' | 'spam' | 'starred' | 'draft';
    isRead: boolean;
    isSpam: boolean;
    labels: string[];
    senderEmail: string;
};

function Email() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
    const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
    const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
    const [selectedFolder, setSelectedFolder] = useState<'inbox' | 'sent' | 'trash' | 'spam' | 'starred' | 'draft'>('inbox');
    const [unreadCount, setUnreadCount] = useState(0);
    const [isComposeOpen, setIsComposeOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [emailLabels, setEmailLabels] = React.useState<{ [key: number]: string[] }>({}); // State for email labels
    const [unreadCountSpam, setUnreadCountSpam] = useState(0);
    const [emails, setEmails] = useState([
        {
            id: 1,
            sender: "Hettie Mcerlean",
            subject: "Your order has been delivered",
            time: "02:05 PM",
            isStarred: true,
            color: "#3f51b5",
            content: "Dear valued customer,\n\nWe are pleased to inform you that your recent order has been successfully delivered. We hope that you are satisfied with your purchase and that it meets your expectations.\n\nIf you have any questions or concerns about your order, please don't hesitate to contact our customer service team.\n\nThank you for choosing our company for your shopping needs.\n\nBest regards,\nHettie Mcerlean\nCustomer Service Representative",
            folder: 'inbox',
            isRead: false,
            labels: ['Private', 'Important'],
            senderEmail: "herrile@gmail.com"
        },
        {
            id: 2,
            sender: "Bobbie Posyner",
            subject: "Your opinion matters to us. Tell us how you feel!",
            time: "05:25 PM",
            isStarred: false,
            color: "#f44336",
            content: "Dear Customer,\n\nWe hope this email finds you well. At our company, we constantly strive to improve our services and products to better serve you.\n\nWe would greatly appreciate it if you could take a few minutes to share your thoughts about your recent experience with us. Your feedback is invaluable and helps us understand what we're doing well and where we can improve.\n\nPlease click on the link below to complete a short survey:\n\n[Survey Link]\n\nThank you for your time and for being a valued customer.\n\nBest regards,\nBobbie Posyner\nCustomer Feedback Team",
            folder: 'draft',
            isRead: false,
            labels: ['Company'],
            senderEmail: "bobbie@gmail.com"
        },
        {
            id: 3,
            sender: "Normand Bartles",
            subject: "Earth Hour",
            time: "08:36 AM",
            isStarred: false,
            color: "#4caf50",
            content: "Dear Environmentally Conscious Individual,\n\nWe're reaching out to remind you about Earth Hour, the global movement for the environment, happening this Saturday at 8:30 PM your local time.\n\nEarth Hour is a worldwide grassroots movement uniting people to take action on environmental issues and protect our planet. Organized by WWF, Earth Hour engages millions of people in more than 180 countries and territories to switch off their lights for one hour as a symbol of commitment to the planet.\n\nHow you can participate:\n1. Switch off your lights for one hour at 8:30 PM your local time.\n2. Spread the word to your friends and family.\n3. Take actions beyond the hour to reduce your environmental impact.\n\nTogether, let's create a brighter future for our planet.\n\nBest regards,\nNormand Bartles\nEarth Hour Team",
            folder: 'draft',
            isRead: true,
            labels: ['Personal'],
            senderEmail: "normand.bar@example.com"
        },
        {
            id: 4,
            sender: "Robin Genn",
            subject: "Happy Teacher's Day!",
            time: "07:21 AM",
            isStarred: false,
            color: "#9c27b0",
            content: "Dear Esteemed Teacher,\n\nHappy Teacher's Day!\n\nOn this special occasion, we want to take a moment to express our heartfelt gratitude for your unwavering dedication, passion, and hard work in shaping the minds of future generations.\n\nYour role in society is invaluable. You not only impart knowledge but also inspire, motivate, and nurture your students to become responsible citizens and lifelong learners.\n\nYour patience, creativity, and enthusiasm in the classroom do not go unnoticed. You have the power to change lives, and for that, we are eternally grateful.\n\nThank you for everything you do. May your day be filled with joy, appreciation, and the knowledge that you are making a significant difference in the world.\n\nWith sincere appreciation,\nRobin Genn\nSchool Administration",
            folder: 'inbox',
            isRead: false,
            labels: ['Personal'],
            senderEmail: "robin.gen@example.com"
        },
        {
            id: 5,
            sender: "Emmalynn Ramelot",
            subject: "Newly Improved Product",
            time: "07:55 PM",
            isStarred: true,
            color: "#ff9800",
            content: "Dear Valued Customer,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nAfter months of research, development, and testing, we've enhanced our products to provide you with an even better experience. Our team has worked tirelessly to incorporate customer feedback and the latest technological advancements into this new line.\n\nKey improvements include:\n1. Enhanced durability\n2. Improved user interface\n3. New features [List specific features]\n4. Better energy efficiency\n\nAs a loyal customer, we're offering you an exclusive preview and the opportunity to be among the first to experience these improvements.\n\nVisit our website to learn more about the new features and to place your order.\n\nThank you for your continued support.\n\nBest regards,\nEmmalynn Ramelot\nProduct Development Team",
            folder: 'draft',
            isRead: true,
            labels: ['Company']
        },
        {
            id: 6,
            sender: "Tommy Sicilia",
            subject: "How to Succeed with Your Shopify Store",
            time: "07:55 PM",
            isStarred: false,
            color: "#d62b5c",
            content: "Hi John,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nShopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!\n\nCan I Start My Own ECommerce Business Without Knowing How To Code?\n\nThe One Thing All Shopify Entrepreneurs Have in Common\n\n Regrads,\n\nTommy Sicilia",
            folder: 'inbox',
            isRead: true,
            labels: ['Important']
        },
        {
            id: 7,
            sender: "Waldemar Mannering",
            subject: "Refer friends. Get rewards.",
            time: "07:55 PM",
            isStarred: true,
            color: "#ff9800",
            content: "Hi John,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nShopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!\n\nCan I Start My Own ECommerce Business Without Knowing How To Code?\n\nThe One Thing All Shopify Entrepreneurs Have in Common\n\n Regrads,\n\nTommy Sicilia",
            folder: 'inbox',
            isRead: true,
            labels: ['Company']
        },
        {
            id: 8,
            sender: "Tommy Sicilia",
            subject: "How to Succeed with Your Shopify Store",
            time: "07:55 PM",
            isStarred: true,
            color: "#ff9800",
            content: "Hi John,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nShopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!\n\nCan I Start My Own ECommerce Business Without Knowing How To Code?\n\nThe One Thing All Shopify Entrepreneurs Have in Common\n\n Regrads,\n\nTommy Sicilia",
            folder: 'draft',
            isRead: true,
            labels: ['Private']
        },
        {
            id: 9,
            sender: "Eugenie Finessy",
            subject: "BOOK LOVER'S DAY",
            time: "07:55 PM",
            isStarred: true,
            color: "#ff9800",
            content: "Hi John,\n\nMay you are blessed with more and more books. Happy National Book Lover’s Day to you.\n\n Regrads,\n\nEugenie Finessy",
            folder: 'sent',
            isRead: true,
            labels: ['Personal']
        },
        {
            id: 10,
            sender: "Chase Prando",
            subject: "Course Update",
            time: "07:55 PM",
            isStarred: false,
            color: "#ff9800",
            content: "Hi John,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nShopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!\n\nCan I Start My Own ECommerce Business Without Knowing How To Code?\n\nThe One Thing All Shopify Entrepreneurs Have in Common\n\n Regrads,\n\nTommy Sicilia",
            folder: 'sent',
            isRead: true,
            labels: ['Important']
        },
        {
            id: 11,
            sender: "Chase Prando",
            subject: "Course Update",
            time: "07:55 PM",
            isStarred: false,
            color: "#ff9800",
            content: "Hi John,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nShopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!\n\nCan I Start My Own ECommerce Business Without Knowing How To Code?\n\nThe One Thing All Shopify Entrepreneurs Have in Common\n\n Regrads,\n\nTommy Sicilia",
            folder: 'spam',
            isRead: true,
            labels: ['Personal']
        },
        {
            id: 12,
            sender: "Hettie Mcerlean",
            subject: "Your order has been delivered",
            time: "06:55 PM",
            isStarred: true,
            color: "#6d84d4",
            content: "Hi John,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nShopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!\n\nCan I Start My Own ECommerce Business Without Knowing How To Code?\n\nThe One Thing All Shopify Entrepreneurs Have in Common\n\n Regrads,\n\nTommy Sicilia",
            folder: 'spam',
            isRead: true,
            labels: ['Personal']
        },
        {
            id: 13,
            sender: "Bobbie Posvner",
            subject: "Your opinion matters to us. Tell us how you feel!",
            time: "02:55 PM",
            isStarred: false,
            color: "#6d84d4",
            content: "Hi John,\n\nWe are thrilled to announce the launch of our newly improved product line!\n\nShopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!\n\nCan I Start My Own ECommerce Business Without Knowing How To Code?\n\nThe One Thing All Shopify Entrepreneurs Have in Common\n\n Regrads,\n\nTommy Sicilia",
            folder: 'spam',
            isRead: false,
            labels: ['Company']
        },
        {
            id: 14,
            sender: "Tressa Gass",
            subject: "Please find attached the latest Company Report",
            time: "01:25 PM",
            isStarred: true,
            color: "#6d84d4",
            content: "Hello John,,\n\nI hope you are doing well.\n\nI am sending over a company report for company. It is a PDF file.\n\nPlease let me know if you want to schedule a call or any other questions.\n\nRegrads,\n\nTressa Gass",
            folder: 'inbox',
            isRead: false,
            labels: ['Company', 'Private']
        },
    ]);

    // Calculate unread count for spam
    const calculateUnreadCountSpam = () => {
        return emails.filter(email => email.folder === 'spam' && !email.isRead).length;
    };
    useEffect(() => {
        setUnreadCountSpam(calculateUnreadCountSpam());
    })
    useEffect(() => {
        const count = emails.filter((email) => email.folder === 'inbox' && !email.isRead).length;
        setUnreadCount(count);
    }, [emails]);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleSelectAllEmails = (event: { target: { checked: any } }) => {
        if (event.target.checked) {
            // Select all emails
            setSelectedEmails(emails.map((email) => email.id));
        } else {
            // Deselect all emails
            setSelectedEmails([]);
        }
    };
    const handleEmailClick = (email: Email) => {
        setSelectedEmail(email);
        setSelectedLabels(email.labels); // Initialize selected labels with email's default labels
    };

    const handleCloseEmail = () => {
        setSelectedEmail(null);
    };

    const handleToggleStar = (id: number) => {
        setEmails((prevEmails) =>
            prevEmails.map((email) =>
                email.id === id
                    ? {
                        ...email,
                        isStarred: !email.isStarred,
                        folder: !email.isStarred ? 'starred' : (email.folder === 'starred' ? 'inbox' : email.folder)
                    }
                    : email
            )
        );
    };


    const handleLabelToggle = (label: string) => {
        if (selectedLabels.includes(label)) {
            setSelectedLabels(selectedLabels.filter((l) => l !== label));
        } else {
            setSelectedLabels([...selectedLabels, label]);
        }
    };


    const handleToggleSelect = (emailId: number) => {
        setSelectedEmails((prevSelected) =>
            prevSelected.includes(emailId)
                ? prevSelected.filter((id) => id !== emailId)
                : [...prevSelected, emailId]
        );
    };

    const handleComposeClick = () => {
        setIsComposeOpen(true);
    };

    const handleComposeClose = () => {
        setIsComposeOpen(false);
    };
    // const handleToggleReadStatus = (emailId: number | null) => {
    //     setEmails((prevEmails) => {
    //         const updatedEmails = emailId === null
    //             ? prevEmails.map((email) => ({ ...email, isRead: true })) // Mark all as read
    //             : prevEmails.map((email) =>
    //                 email.id === emailId ? { ...email, isRead: !email.isRead } : email
    //             );

    //         return updatedEmails;
    //     });
    // };
    const handleToggleReadStatus = (emailId: number) => {
        setEmails((prevEmails) => {
            const updatedEmails = prevEmails.map((email) =>
                email.id === emailId ? { ...email, isRead: !email.isRead } : email
            );

            // Update unread count
            const newUnreadCount = updatedEmails.filter(
                (email) => email.folder === 'inbox' && !email.isRead
            ).length;
            setUnreadCount(newUnreadCount);

            return updatedEmails;
        });
    };
    const handleMoveToTrash = (id: number) => {
        setEmails((prevEmails) =>
            prevEmails.map((email) =>
                email.id === id ? { ...email, folder: 'trash' } : email
            )
        );
    };

    const handleMoveToSpam = (emailId: number) => {
        setEmails((prevEmails) =>
            prevEmails.map((email) =>
                email.id === emailId ? { ...email, folder: 'spam' } : email
            )
        );

        setSelectedEmails([]); // Clear selections after moving to spam
    };

    const handleMoveToDraft = (id: number) => {
        setEmails((prevEmails) =>
            prevEmails.map((email) =>
                email.id === id ? { ...email, folder: 'draft' } : email
            )
        );
    };

    const handleFolderClick = (folder: 'inbox' | 'sent' | 'trash' | 'spam' | 'starred' | 'draft') => {
        setSelectedFolder(folder);
    };


    const filteredEmails = emails.filter((email) => {
        if (selectedFolder === 'starred') {
            return email.isStarred;
        }
        if (selectedLabel) {
            return email.folder === selectedFolder && email.labels.includes(selectedLabel);
        }

        return email.folder === selectedFolder;
    });

    const theme = useTheme();

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    }

    const handleMarkAllAsRead = () => {
        if (unreadCount === 0) {
            // All emails are read, so mark all as unread
            setEmails((prevEmails) =>
                prevEmails.map((email) => ({
                    ...email,
                    isRead: false
                }))
            );
            setUnreadCount(emails.length); // Update unread count to total number of emails
        } else {
            // Mark all as read
            setEmails((prevEmails) =>
                prevEmails.map((email) => ({
                    ...email,
                    isRead: true
                }))
            );
            setUnreadCount(0); // Update unread count to 0
        }
    };
    const handleMarkAllAsUnread = () => {
        setEmails((prevEmails) =>
            prevEmails.map((email) => ({
                ...email,
                isRead: false
            }))
        );
    };
    const handleDeleteEmails = () => {
        const updatedEmails = emails.filter((email) => !selectedEmails.includes(email.id));
        setEmails(updatedEmails);
        setSelectedEmails([]);

        // Update unread count
        const count = updatedEmails.filter((email) => email.folder === 'inbox' && !email.isRead).length;
        setUnreadCount(count);
    };
    const handleMovingSpam = () => {
        setEmails((prevEmails) =>
            prevEmails.map((email) =>
                selectedEmails.includes(email.id) ? { ...email, folder: 'spam' } : email
            )
        );
        // Update the count for spam
        setUnreadCountSpam(calculateUnreadCountSpam());
        setSelectedEmails([]); // Clear selected emails after moving them
    };

    const handleMoveSpam = () => {
        if (selectedEmail) {
            setEmails((prevEmails) =>
                prevEmails.map((email) =>
                    email.id === selectedEmail.id
                        ? { ...email, folder: 'spam' }
                        : email
                )
            );
            setSelectedEmail(null); // Close the email view
            setSelectedFolder('inbox'); // Optionally, switch back to inbox view
        } else {
            // Handle bulk move to spam for selected emails in the list view
            setEmails((prevEmails) =>
                prevEmails.map((email) =>
                    selectedEmails.includes(email.id)
                        ? { ...email, folder: 'spam' }
                        : email
                )
            );
            setSelectedEmails([]); // Clear selection
        }
    };



    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Close the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle label selection
    const handleLabelsClick = (label: string) => {
        const emailId = selectedEmail?.id;
        if (!emailId) return;

        setEmailLabels((prev) => {
            const currentLabels = prev[emailId] || [];
            const newLabels = currentLabels.includes(label)
                ? currentLabels.filter((l) => l !== label)
                : [...currentLabels, label];

            return {
                ...prev,
                [emailId]: newLabels,
            };
        });

        setSelectedLabels((prev) => {
            return prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label];
        });

        handleClose();
    };

    const handleDeleteEmail = () => {
        // Perform delete logic here, e.g., make an API call or update the state
        // Example: Remove the selected email from the email list state

        setEmails((prevEmails) => prevEmails.filter((email) => email.id !== selectedEmail.id));

        // Clear the selected email after deletion
        setSelectedEmail(null);
    };
    const handleToggleAllReadStatus = () => {
        if (selectedEmail) {
            setEmails(prevEmails => prevEmails.map(email =>
                email.id === selectedEmail.id
                    ? { ...email, isRead: !email.isRead }
                    : email
            ));

            setUnreadCount(prevCount =>
                selectedEmail.isRead ? prevCount + 1 : prevCount - 1
            );

            setSelectedEmail(prevEmail =>
                prevEmail ? { ...prevEmail, isRead: !prevEmail.isRead } : null
            );
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const searchedEmails = emails.filter((email) => {
        const searchTerm = searchQuery.toLowerCase();
        return (
            email.sender.toLowerCase().includes(searchTerm) ||
            email.subject.toLowerCase().includes(searchTerm) ||
            email.content.toLowerCase().includes(searchTerm)
        );
    });

    const displayEmails = searchQuery ? searchedEmails : filteredEmails;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event?: React.KeyboardEvent | React.MouseEvent) => {
        if (event?.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    useEffect(() => {
        // Event handler for closing the drawer on outside click
        const handleOutsideClick = (event: MouseEvent) => {
            // Check if the click is outside the drawer
            if (isDrawerOpen) {
                setIsDrawerOpen(false);
            }
        };

        // Event handler for closing the drawer on pressing 'Tab'
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isDrawerOpen && (event.key === 'Tab' || event.key === 'Escape')) {
                setIsDrawerOpen(false);
            }
        };

        // Attach the event listeners
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyDown);

        // Clean up the event listeners on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isDrawerOpen]);

    return (
        <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onClose={toggleSidebar}
                        themeMode={theme.palette.mode}
                    />
                </div>
                <div className={styles.content}>
                    <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                    <div className="container mt-0">
                        <Box component="main" className='maindiv' sx={{
                            flexGrow: 1, p: 2, display: 'flex',
                            height: '100%', // To ensure it matches the parent container height
                            position: 'relative', // To position the drawer relative to this content area
                            overflow: 'hidden', // Prevents drawer from exceeding content area
                        }}>
                            <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
                                <Box sx={{ p: 2 }}>
                                    {/* Backdrop for open sidebar back opacity and background-color */}
                                    <Backdrop
                                        sx={{
                                            zIndex: (theme) => theme.zIndex.drawer - 2, // Ensure backdrop appears below the drawer but above other content
                                            color: '#fff',
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity and color
                                        }}
                                        open={isDrawerOpen} // Backdrop is visible only when the drawer is open
                                        onClick={toggleDrawer(false)} // Clicking the backdrop will close the drawer
                                    />
                                    {/* Drawer for Mobile View */}
                                    <Drawer
                                        anchor="left"
                                        variant="persistent"
                                        open={isDrawerOpen}
                                        onClose={toggleDrawer(false)}
                                        sx={{
                                            display: { xs: 'block', sm: 'block', md: 'none' },
                                            '& .MuiDrawer-paper': {
                                                width: 215,
                                                height: '100%', // Matches the height of the main content area
                                                boxShadow: 1,
                                                position: 'absolute', // Position the drawer absolutely within the main content area
                                                left: 0,
                                                top: 0,
                                                zIndex: 12,

                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{ width: 250 }}
                                            role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}
                                        >
                                            {/* Sidebar Content */}
                                            <Box sx={{ p: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    sx={{ mb: 2, bgcolor: '#7986cb', color: 'white' }}
                                                    onClick={handleComposeClick}
                                                >
                                                    Compose
                                                </Button>
                                                {isComposeOpen && <ComposeDialog onClose={handleComposeClose} open={isComposeOpen} />}
                                            </Box>
                                            <List>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('inbox')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <InboxIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Inbox" />
                                                    <StyledBadge badgeContent={4} color="primary" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('sent')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Sent" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('draft')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <DraftsIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Draft" />
                                                    <StyledBadge badgeContent={4} color="error" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('starred')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <StarIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Starred" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('spam')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <SpamIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Spam" />
                                                    <StyledBadge badgeContent={2} color="error" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('trash')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <TrashIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Trash" />
                                                </ListItem>
                                            </List>
                                            <Divider />
                                            <List>
                                                <ListItem>
                                                    <ListItemText primary="Labels" sx={{ color: 'text.secondary' }} />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'error.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Private" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Company" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'warning.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Important" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'success.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Personal" />
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Drawer>

                                    {/* Sidebar Content for Desktop View */}
                                    <Box sx={{ display: { xs: 'none', sm: 'none',md:'block' } }}>
                                        <Box sx={{ width: 250 }}>
                                            {/* The rest of your sidebar content */}
                                            <Box sx={{ p: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    sx={{ mb: 2, bgcolor: '#7986cb', color: 'white' }}
                                                    onClick={handleComposeClick}
                                                >
                                                    Compose
                                                </Button>
                                                {isComposeOpen && <ComposeDialog onClose={handleComposeClose} open={isComposeOpen} />}
                                            </Box>
                                            <List>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('inbox')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <InboxIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Inbox" />
                                                    <StyledBadge badgeContent={4} color="primary" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('sent')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Sent" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('draft')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <DraftsIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Draft" />
                                                    <StyledBadge badgeContent={4} color="error" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('starred')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <StarIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Starred" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('spam')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <SpamIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Spam" />
                                                    <StyledBadge badgeContent={2} color="error" />
                                                </ListItem>
                                                <ListItem button sx={{ paddingLeft: 1, paddingRight: 1 }} onClick={() => handleFolderClick('trash')}>
                                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                                        <TrashIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Trash" />
                                                </ListItem>
                                            </List>
                                            <Divider />
                                            <List>
                                                <ListItem>
                                                    <ListItemText primary="Labels" sx={{ color: 'text.secondary' }} />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'error.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Private" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Company" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'warning.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Important" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon sx={{ paddingLeft: '10px' }}>
                                                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'success.main' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Personal" />
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
                                    {/* Search bar row */}
                                    {!selectedEmail && (
                                        <>
                                            {/* Search bar */}
                                            <Box
                                                sx={{
                                                    flexGrow: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    bgcolor: 'background.paper',
                                                    p: '2px 4px',
                                                    borderBottom: '1px solid #00000021',
                                                }}
                                            >
                                                <IconButton
                                                    color="inherit"
                                                    aria-label="open drawer"
                                                    edge="start"
                                                    onClick={toggleDrawer(true)}
                                                    sx={{ display: { xs: 'block', sm: 'block',md:'none',lg:'none'} }}
                                                >
                                                    <MenuIcon />
                                                </IconButton>
                                                <IconButton type="button" aria-label="search">
                                                    <SearchIcon />
                                                </IconButton>
                                                <InputBase
                                                    sx={{ ml: 1, flex: 1 }}
                                                    placeholder="Search mail"
                                                    inputProps={{ 'aria-label': 'search mail' }}
                                                    onChange={handleSearchChange}
                                                    value={searchQuery}
                                                />
                                            </Box>

                                            {/* Checkbox and action icons row */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    mb: 2,
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {/* Select All Checkbox */}
                                                    <Checkbox
                                                        indeterminate={selectedEmails.length > 0 && selectedEmails.length < emails.length}
                                                        checked={selectedEmails.length === emails.length}
                                                        onChange={handleSelectAllEmails}
                                                        sx={{
                                                            '& .MuiSvgIcon-root': {
                                                                borderRadius: 20,
                                                            },
                                                        }}
                                                    />
                                                    {selectedEmails.length > 0 && (
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 1,
                                                                justifyContent: 'flex-start',
                                                            }}
                                                        >
                                                            <IconButton onClick={handleDeleteEmails}>
                                                                <TrashIcon />
                                                            </IconButton>
                                                            {unreadCount > 0 && (
                                                                <IconButton onClick={handleMarkAllAsRead} color={unreadCount === 0 ? 'primary' : 'default'}>
                                                                    <UnreadIcon />
                                                                </IconButton>
                                                            )}

                                                            {/* Show UnreadIcon only when all emails are read */}
                                                            {unreadCount === 0 && (
                                                                <IconButton onClick={handleMarkAllAsUnread} color={unreadCount === emails.length ? 'secondary' : 'default'}>
                                                                    <ReadIcon />
                                                                </IconButton>
                                                            )}
                                                            <IconButton onClick={handleMovingSpam}>
                                                                <SpamIcon />
                                                            </IconButton>
                                                            <div>
                                                                <IconButton onClick={handleClick}>
                                                                    <LabelIcon />
                                                                </IconButton>
                                                                <Menu
                                                                    anchorEl={anchorEl}
                                                                    open={Boolean(anchorEl)}
                                                                    onClose={handleClose}
                                                                >
                                                                    <MenuItem onClick={() => handleLabelsClick('Private')}>
                                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                            <Box
                                                                                sx={{
                                                                                    width: 8,
                                                                                    height: 8,
                                                                                    borderRadius: '50%',
                                                                                    bgcolor: 'red',
                                                                                }}
                                                                            />
                                                                            <Typography>Private</Typography>
                                                                        </Box>
                                                                    </MenuItem>
                                                                    <MenuItem onClick={() => handleLabelsClick('Company')}>
                                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                            <Box
                                                                                sx={{
                                                                                    width: 8,
                                                                                    height: 8,
                                                                                    borderRadius: '50%',
                                                                                    bgcolor: '#7367F0',
                                                                                }}
                                                                            />
                                                                            <Typography>Company</Typography>
                                                                        </Box>
                                                                    </MenuItem>
                                                                    <MenuItem onClick={() => handleLabelsClick('Important')}>
                                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                            <Box
                                                                                sx={{
                                                                                    width: 8,
                                                                                    height: 8,
                                                                                    borderRadius: '50%',
                                                                                    bgcolor: '#FF9F43',
                                                                                }}
                                                                            />
                                                                            <Typography>Important</Typography>
                                                                        </Box>
                                                                    </MenuItem>
                                                                    <MenuItem onClick={() => handleLabelsClick('Personal')}>
                                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                            <Box
                                                                                sx={{
                                                                                    width: 8,
                                                                                    height: 8,
                                                                                    borderRadius: '50%',
                                                                                    bgcolor: '#28C76F',
                                                                                }}
                                                                            />
                                                                            <Typography>Personal</Typography>
                                                                        </Box>
                                                                    </MenuItem>
                                                                </Menu>
                                                            </div>
                                                        </Box>
                                                    )}
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                                    <IconButton
                                                        onClick={handleRefresh}
                                                        disabled={isRefreshing}
                                                        sx={{
                                                            position: 'relative',
                                                            zIndex: 1, // Ensure the button stays on top
                                                        }}
                                                    >
                                                        <RefreshIcon />
                                                    </IconButton>
                                                    {isRefreshing && (
                                                        <CircularProgress
                                                            size={24}
                                                            sx={{
                                                                position: 'absolute',
                                                                left: '50%',
                                                                top: '50%',
                                                                marginTop: '-12px', // Half the size to center vertically
                                                                marginLeft: '-12px', // Half the size to center horizontally
                                                                color: 'white', // Set the color to white
                                                            }}
                                                        />
                                                    )}
                                                    <IconButton>
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </>
                                    )}

                                    {/* Display either the selected email or the list of emails */}
                                    {selectedEmail ? (
                                        <>
                                            <Paper sx={{ p: 2, mb: 2 }}>
                                                {/* Header: Back button, Subject, Labels */}
                                                <Box sx={{ display: 'flex', mb: 2, flexDirection: 'column' }}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on larger screens
                                                            padding: 2,
                                                        }}
                                                    >
                                                        {/* Left Section: Back Icon and Subject */}
                                                        <Box
                                                            className="d-flex selectedEmailTitle"
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                width: { xs: '100%', sm: 'auto' }, // Full width on mobile
                                                                justifyContent: { xs: 'space-between', sm: 'flex-start' }, // Space between on mobile
                                                                mb: { xs: 2, sm: 0 }, // Margin bottom on mobile for spacing
                                                            }}
                                                        >
                                                            {/* Back Button */}
                                                            <IconButton onClick={handleCloseEmail} sx={{ mr: 1 }}>
                                                                <ArrowBackIcon />
                                                            </IconButton>

                                                            {/* Subject */}
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    mr: 2,
                                                                    flexGrow: { xs: 1, sm: 0 }, // Let the subject grow on mobile
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    whiteSpace: 'nowrap',
                                                                }}
                                                            >
                                                                {selectedEmail.subject}
                                                            </Typography>
                                                        </Box>

                                                        {/* Labels */}
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Wrap chips on mobile
                                                                justifyContent: { xs: 'flex-start', sm: 'flex-end' }, // Left align on mobile, right align on larger screens
                                                                width: { xs: '100%', sm: 'auto' }, // Full width on mobile
                                                            }}
                                                        >
                                                            {selectedLabels.map((label) => (
                                                                <Chip
                                                                    key={label}
                                                                    label={label}
                                                                    sx={{
                                                                        bgcolor:
                                                                            label === 'Private'
                                                                                ? 'red'
                                                                                : label === 'Company'
                                                                                    ? '#7367F0'
                                                                                    : label === 'Important'
                                                                                        ? '#FF9F43'
                                                                                        : label === 'Personal'
                                                                                            ? '#28C76F'
                                                                                            : 'grey',
                                                                        color: 'white',
                                                                        fontSize: '0.75rem',
                                                                        height: 24,
                                                                        marginRight: 1,
                                                                        mb: { xs: 1, sm: 0 }, // Margin bottom on mobile for spacing
                                                                    }}
                                                                />
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                    <Divider />
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                        }}
                                                    >
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                            <IconButton onClick={handleDeleteEmail}>
                                                                <TrashIcon />
                                                            </IconButton>

                                                            {/* Show UnreadIcon only when all emails are read */}
                                                            <IconButton onClick={handleToggleAllReadStatus}>
                                                                {selectedEmail && selectedEmail.isRead ? <UnreadIcon /> : <ReadIcon />}
                                                            </IconButton>
                                                            <IconButton onClick={handleMoveSpam}>
                                                                <SpamIcon />
                                                            </IconButton>
                                                            <IconButton onClick={handleClick}>
                                                                <LabelIcon />
                                                            </IconButton>
                                                            <Menu
                                                                anchorEl={anchorEl}
                                                                open={Boolean(anchorEl)}
                                                                onClose={handleClose}
                                                            >
                                                                <MenuItem onClick={() => handleLabelsClick('Private')}>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                        <Box
                                                                            sx={{
                                                                                width: 8,
                                                                                height: 8,
                                                                                borderRadius: '50%',
                                                                                bgcolor: 'red',
                                                                            }}
                                                                        />
                                                                        <Typography>Private</Typography>
                                                                    </Box>
                                                                </MenuItem>
                                                                <MenuItem onClick={() => handleLabelsClick('Company')}>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                        <Box
                                                                            sx={{
                                                                                width: 8,
                                                                                height: 8,
                                                                                borderRadius: '50%',
                                                                                bgcolor: '#7367F0',
                                                                            }}
                                                                        />
                                                                        <Typography>Company</Typography>
                                                                    </Box>
                                                                </MenuItem>
                                                                <MenuItem onClick={() => handleLabelsClick('Important')}>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                        <Box
                                                                            sx={{
                                                                                width: 8,
                                                                                height: 8,
                                                                                borderRadius: '50%',
                                                                                bgcolor: '#FF9F43',
                                                                            }}
                                                                        />
                                                                        <Typography>Important</Typography>
                                                                    </Box>
                                                                </MenuItem>
                                                                <MenuItem onClick={() => handleLabelsClick('Personal')}>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                        <Box
                                                                            sx={{
                                                                                width: 8,
                                                                                height: 8,
                                                                                borderRadius: '50%',
                                                                                bgcolor: '#28C76F',
                                                                            }}
                                                                        />
                                                                        <Typography>Personal</Typography>
                                                                    </Box>
                                                                </MenuItem>
                                                            </Menu>
                                                        </Box>
                                                        <Box sx={{ display: 'flex' }}>
                                                            <IconButton>
                                                                <StarIcon />
                                                            </IconButton>
                                                            <IconButton>
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Paper>
                                            <div
                                                className="email_contain"
                                                style={{
                                                    opacity: isRefreshing ? 0.5 : 1, // Reduce opacity when refreshing
                                                    pointerEvents: isRefreshing ? 'none' : 'auto', // Disable interactions when refreshing
                                                }}
                                            >
                                                <div className="d-flex flex-column gap-4 email_padding">
                                                    <Paper sx={{ p: 2, mb: 2 }} className="paperclass">
                                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                                                                {selectedEmail.sender.charAt(0)}
                                                            </Avatar>
                                                            <Box>
                                                                <Typography variant="subtitle1">{selectedEmail.sender}</Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    {selectedEmail.senderEmail}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                        {/* Email Content */}
                                                        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', mt: 2 }}>
                                                            {selectedEmail.content}
                                                        </Typography>
                                                    </Paper>
                                                </div>
                                            </div>
                                        </>
                                    ) : displayEmails.length > 0 ? ( // Check if there are emails
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                '&::after': isRefreshing
                                                    ? {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                                                        zIndex: 2, // Above the list but below the loading spinner
                                                    }
                                                    : {},
                                            }}
                                        >
                                            <List
                                                sx={{
                                                    opacity: isRefreshing ? 0.5 : 1, // Apply reduced opacity to the email list when refreshing
                                                    pointerEvents: isRefreshing ? 'none' : 'auto', // Disable interactions when refreshing
                                                }}
                                            >
                                                {displayEmails.map((email) => (
                                                    <React.Fragment key={email.id}>
                                                        <EmailItem
                                                            key={email.id}
                                                            id={email.id}
                                                            sender={email.sender}
                                                            subject={email.subject}
                                                            labels={email.labels}
                                                            time={email.time}
                                                            isStarred={email.isStarred}
                                                            color={email.color}
                                                            content={email.content}
                                                            onClick={() => handleEmailClick(email)}
                                                            onToggleStar={handleToggleStar}
                                                            onToggleSelect={() => handleToggleSelect(email.id)}
                                                            onMoveToTrash={handleMoveToTrash}
                                                            onMoveToSpam={handleMoveToSpam}
                                                            onMoveToDraft={handleMoveToDraft}
                                                            onToggleReadStatus={handleToggleReadStatus}
                                                            selected={selectedEmails.includes(email.id)}
                                                            isRead={email.isRead}
                                                            senderEmail={email.senderEmail || ''}
                                                            onMarkAsUnread={(id) => console.log('Mark as unread', id)} // Placeholder for mark as unread functionality
                                                        />
                                                        <Divider />
                                                    </React.Fragment>
                                                ))}
                                            </List>
                                            {isRefreshing && (
                                                <CircularProgress
                                                    size={40}
                                                    sx={{
                                                        position: 'absolute',
                                                        left: '50%',
                                                        top: '50%',
                                                        marginTop: '-20px',
                                                        marginLeft: '-20px',
                                                        color: 'white',
                                                        zIndex: 3, // Ensure it's above the overlay
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    ) : (
                                        // Show this message when no emails are found
                                        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                                            No emails found.
                                        </Typography>
                                    )}
                                </Box>

                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </Box >
    )
}

export default Email;


function setAnchorEl(currentTarget: EventTarget & HTMLElement) {
    throw new Error('Function not implemented.')
}

