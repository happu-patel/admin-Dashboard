"use client"
import React, { useState } from 'react';
import {
    CardContent,
    FormControl,
    TextField,
    Typography,
    Select,
    MenuItem,
    Button,
    SelectChangeEvent,
    Modal,
    Box,
    IconButton,
    InputLabel,
    Grid,
    Card,
    Divider,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../page.module.css';
import '../../page.module.css';
import '../../globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import './add.css';
import SendIcon from '@mui/icons-material/Send';
import Switch from '@mui/material/Switch';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material';
import Image from 'next/image';
import logo from '../../../images/Vuexy1.png';
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


function useThemeMode() {
    const theme = useTheme();
    return theme.palette.mode;
}


interface BillDetailsProps {
    details: {
        totalDue: string;
        bankName: string;
        country: string;
        iban: string;
        swiftCode: string;
    };
}

const BillDetails: React.FC<BillDetailsProps> = ({ details }) => {
    const theme = useTheme();

    return (
        <div className="bill">
            <p className="title_bill" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>Bill To:</p>
            <div className="heading" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>
                Total Due: <span className="detail1" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>{details.totalDue}</span>
            </div>
            <div className="heading" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>
                Bank name:<span className="detail2" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>{details.bankName}</span>
            </div>
            <div className="heading" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>
                Country:<span className="detail3" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>{details.country}</span>
            </div>
            <div className="heading" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>
                IBAN: <span className="detail4" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>{details.iban}</span>
            </div>
            <div className="heading" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>
                SWIFT code: <span className="detail5" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)' }}>{details.swiftCode}</span>
            </div>
        </div>
    );
};


interface ClientInfo {
    name: string;
    company: string;
    address: string;
    phone: string;
    email: string;
    country: string;
}

interface AddCustomerModalProps {
    open: boolean;
    handleClose: () => void;
    addNewCustomer: (customer: ClientInfo) => void;
}

type ClientData = {
    [key: string]: ClientInfo;
};

const clientData: ClientData = {
    'Jordan Stevenson': {
        name: 'Jordan Stevenson',
        company: 'Stevenson LLC',
        address: '12345 Main St, City, State, 12345',
        phone: '(123) 456-7890',
        email: 'jordan@stevenson.com',
        country: 'USA',
    },
    'Stephanie Burns': {
        name: 'Stephanie Burns',
        company: 'Mccann LLC and Sons',
        address: '04033 Wesley Wall Apt. 961',
        phone: '(226) 204-8287',
        email: 'brenda49@taylor.info',
        country: 'NY'
    },
    'Tony Herrera': {
        name: 'Tony Herrera',
        company: 'Herrera Co.',
        address: '789 Oak Rd, Town, State, 54321',
        phone: '(555) 123-4567',
        email: 'tony@herrera.com',
        country: 'USA'
    },
    'Kevin Patton': {
        name: 'Kevin Patton',
        company: 'Patton Industries',
        address: '456 Elm St, Village, State, 67890',
        phone: '(999) 888-7777',
        email: 'kevin@patton.com',
        country: 'USA'
    },
    'Mrs. Julie Donovan MD': {
        name: 'Mrs. Julie Donovan MD',
        company: 'Donovan Medical',
        address: '101 Health Ave, City, State, 11111',
        phone: '(444) 333-2222',
        email: 'julie@donovanmed.com',
        country: 'NY'
    },
};

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({
    open,
    handleClose,
    addNewCustomer,
}) => {
    const [newCustomer, setNewCustomer] = useState<ClientInfo>({
        name: '',
        company: '',
        address: '',
        phone: '',
        email: '',
        country: 'USA',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
    };

    const handleCountryChange = (event: SelectChangeEvent<string>) => {
        setNewCustomer({ ...newCustomer, country: event.target.value });
    };

    const handleSubmit = () => {
        addNewCustomer(newCustomer);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    height: '100%',
                    width: '400px',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">Add New Customer</Typography>
                    <IconButton onClick={handleClose} size="small">
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    name="name"
                    value={newCustomer.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Company"
                    name="company"
                    value={newCustomer.company}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    name="email"
                    value={newCustomer.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Address"
                    name="address"
                    value={newCustomer.address}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    required
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <Select
                        id="country"
                        value={newCustomer.country}
                        onChange={handleCountryChange}
                        fullWidth
                        variant="outlined"
                        required
                    >
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="Canada">Canada</MenuItem>
                        <MenuItem value="Mexico">Mexico</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Contact Number"
                    name="phone"
                    type='number'
                    value={newCustomer.phone}
                    onChange={handleChange}
                    required
                />
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ mr: 1, bgcolor: '#7367f0', '&:hover': { bgcolor: '#5e50ee' } }}
                    >
                        Add
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        sx={{ color: '#ff4c51', borderColor: '#ff4c51', '&:hover': { borderColor: '#ff4c51' } }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

interface Item {
    description: string;
    cost: number;
    hours: number;
    discount: number;
}

const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 34,
    height: 18,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#7367F0' : '#7367F0',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 15,
        height: 14,
    },
    '& .MuiSwitch-track': {
        borderRadius: 20 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

function Add() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const theme = useTheme();
    const [issueDate, setIssueDate] = useState<Dayjs | null>(null);
    const [dueDate, setDueDate] = useState<Dayjs | null>(null);
    const [invoiceTo, setInvoiceTo] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [billDetails, setBillDetails] = useState({
        totalDue: '$12,110.55',
        bankName: 'American Bank',
        country: 'United States',
        iban: 'ETD95476213874685',
        swiftCode: 'BR91905',
    });

    const [items, setItems] = useState<Item[]>([]);
    const [currentItem, setCurrentItem] = useState<Item>({ description: '', cost: 0, hours: 0, discount: 0 });

    const [salesperson, setSalesperson] = useState<string>("");
    const [thanksMessage, setThanksMessage] = useState<string>("");

    const calculateTotals = () => {
        const subtotal = 1800;
        const discountRate = 0.28; // 28%
        const discount = subtotal * discountRate;
        const discountedAmount = subtotal - discount;
        const taxRate = 0.21; // 21%
        const tax = discountedAmount * taxRate;
        const total = discountedAmount + tax;
        return { subtotal, discount, discountedAmount, tax, total, discountRate: discountRate * 100, taxRate: taxRate * 100 };
    };

    const { subtotal, discount, discountedAmount, tax, total } = calculateTotals();


    const [note, setNote] = useState<string>('It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!');

    const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    };



    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleInvoiceToChange = (event: SelectChangeEvent<string>) => {
        if (event.target.value === 'add_new') {
            setIsModalOpen(true);
        } else {
            setInvoiceTo(event.target.value);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const addNewCustomer = (newCustomer: ClientInfo) => {
        const updatedClientData = {
            ...clientData,
            [newCustomer.name]: newCustomer,
        };
        console.log('New client data:', updatedClientData);
    };

    const handleItemChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCurrentItem((prevItem) => ({
            ...prevItem,
            [name]: name === 'cost' || name === 'hours' || name === 'discount' ? parseFloat(value) : value,
        }));
    };

    const handleAddItem = () => {
        setItems([...items, { description: '', cost: 24, hours: 1, discount: 0 }]);
    };

    const handleRemoveItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const [paymentMethod, setPaymentMethod] = useState('Internet Banking');
    const [paymentTerms, setPaymentTerms] = useState(false);
    const [clientNotes, setClientNotes] = useState(false);
    const [paymentStub, setPaymentStub] = useState(false);

    const handlePaymentMethodChange = (event: SelectChangeEvent<string>) => {
        setPaymentMethod(event.target.value);
    };

    const themeMode = useThemeMode();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
                    </div>
                    <div className={styles.content}>
                        <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                        <div className="container">
                            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2} md={12} xs={12}>
                                        <Grid item xs={12} sm={12} md={8} lg={9}>
                                            <Card
                                                sx={{
                                                    boxShadow: 3,
                                                    bgcolor: theme.palette.mode === 'dark' ? '#2F3349' : '#FFF',
                                                    color: theme.palette.mode === 'dark' ? '#E7E3FC' : 'inherit',
                                                }}
                                            >
                                                <CardContent sx={{ padding: '35px 35px' }}>
                                                    <div className="invoice_content d-flex justify-content-between">
                                                        <div className='d-flex flex-column' style={{ padding: '10px 10px' }}>
                                                            <div className='d-flex align-items-center'>
                                                                <h4 style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)", fontSize: "1.25rem", fontWeight: "500", padding: "10px 10px", marginBottom: '0px' }}>
                                                                    <Image alt='logo' src={logo} width={50}></Image>
                                                                    <span>Vuexy</span>
                                                                </h4>
                                                            </div>
                                                            <div style={{ padding: '10px 23px' }} className='address'>
                                                                <Typography sx={{ marginTop: '0px', color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>Office 149, 450 South Brand Brooklyn</Typography>
                                                                <Typography sx={{ marginTop: '0px', color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>San Diego County, CA 91905, USA</Typography>
                                                                <Typography sx={{ marginTop: '0px', color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                                                            </div>

                                                        </div>
                                                        <div className='d-flex flex-column' style={{ padding: '18px 20px' }}>
                                                            <div className='d-flex align-items-center gap-4' style={{ padding: '5px 0px', flex: 'wrap' }}>
                                                                <h5 className='label' style={{ marginBottom: '0px', color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>Invoice</h5>
                                                                <FormControl>
                                                                    <TextField
                                                                        disabled
                                                                        id="outlined-disabled"
                                                                        defaultValue="# 4987"
                                                                        className='input_invoice'
                                                                    />
                                                                </FormControl>

                                                            </div>
                                                            <div className='d-flex align-items-center gap-3' style={{ padding: '5px 0px' }}>
                                                                <h5 className='dlabel' style={{ minInlineSize: '95px',marginTop:'0px' }}>Date issued:</h5>
                                                                <DatePicker
                                                                    value={issueDate}
                                                                    onChange={(newValue) => setIssueDate(newValue)}
                                                                    format="YYYY-MM-DD"
                                                                />
                                                            </div>
                                                            <div className='d-flex align-items-center gap-3' style={{ padding: '5px 0px' }}>
                                                                <Typography className='dlabel1' sx={{ marginTop: '0px' }} style={{ minInlineSize: '95px' }}>Date Due:</Typography>
                                                                <DatePicker
                                                                    value={dueDate}
                                                                    onChange={(newValue) => setDueDate(newValue)}
                                                                    format="YYYY-MM-DD"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Grid container spacing={2} sx={{ padding: '20px 0px' }}>
                                                        <Grid item xs={12} sm={6} md={6} gap={3}>
                                                            <div>
                                                                <h5 className="title_invoice" style={{
                                                                    fontFamily: "Public Sans, sans-serif",
                                                                    fontSize: '0.9375rem',
                                                                    lineHeight: '1.46667',
                                                                    fontWeight: 500,
                                                                    color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : 'rgb(47 43 61 / 0.9)'
                                                                }}>Invoice To:</h5>
                                                                <Select
                                                                    value={invoiceTo}
                                                                    onChange={handleInvoiceToChange}
                                                                    displayEmpty
                                                                    fullWidth
                                                                    className="select_invoice"
                                                                    required
                                                                >
                                                                    <MenuItem value="add_new">
                                                                        <Button
                                                                            fullWidth
                                                                            variant="contained"
                                                                            color="primary"
                                                                            onClick={() => setIsModalOpen(true)}
                                                                        >
                                                                            + Add New Customer
                                                                        </Button>
                                                                    </MenuItem>
                                                                    {Object.keys(clientData).map((client) => (
                                                                        <MenuItem key={client} value={client}>
                                                                            {client}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                                {invoiceTo && clientData[invoiceTo] && (
                                                                    <div style={{ marginTop: '10px' }}>
                                                                        <Typography>{clientData[invoiceTo].name}</Typography>
                                                                        <Typography>{clientData[invoiceTo].company}</Typography>
                                                                        <Typography>{clientData[invoiceTo].address}</Typography>
                                                                        <Typography>{clientData[invoiceTo].phone}</Typography>
                                                                        <Typography>{clientData[invoiceTo].email}</Typography>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6} md={6}>
                                                            <BillDetails details={billDetails} />
                                                        </Grid>
                                                    </Grid>
                                                    {items.map((item, index) => (
                                                        <Box key={index} sx={{ mb: 2 }}>
                                                            <Grid container spacing={2} alignItems="center" style={{
                                                                border: isSmallScreen ? 'none' : theme.palette.mode === 'dark' ? '1px solid #FFF' : '1px solid #000',
                                                            }}>
                                                                <Grid item xs={12} sm={4} md={4} lg={6}>
                                                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                                                        <InputLabel className='itemlabel'>Item</InputLabel>
                                                                        <IconButton
                                                                            onClick={() => handleRemoveItem(index)}
                                                                            sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}
                                                                        >
                                                                            <CloseIcon />
                                                                        </IconButton>
                                                                    </Box>
                                                                    <Select
                                                                        fullWidth
                                                                        name="description"
                                                                        value={item.description}
                                                                        onChange={(e) => {
                                                                            const newItems = [...items];
                                                                            newItems[index].description = e.target.value as string;
                                                                            setItems(newItems);
                                                                        }}
                                                                        displayEmpty
                                                                        className='input'
                                                                    >
                                                                        <MenuItem value="App Design">App Design</MenuItem>
                                                                        <MenuItem value="App Customization">App Customization</MenuItem>
                                                                        <MenuItem value="App Customization">ABC Template</MenuItem>
                                                                        <MenuItem value="App Customization">App Development</MenuItem>
                                                                        {/* Add more items as needed */}
                                                                    </Select>
                                                                    <TextField
                                                                        sx={{ marginTop: 2 }}
                                                                        fullWidth
                                                                        placeholder='Customization & Bug Fixes'
                                                                        type='text'
                                                                        rows={1}
                                                                        multiline
                                                                    >
                                                                    </TextField>
                                                                </Grid>
                                                                <Grid item xs={12} sm={3} md={3} lg={2}>
                                                                    <InputLabel className={` ${themeMode === 'dark' ? 'costlabel-dark' : 'costlabel'}`}>Cost</InputLabel>
                                                                    <TextField
                                                                        className='costinput'
                                                                        fullWidth
                                                                        name="cost"
                                                                        type="number"
                                                                        value={item.cost}
                                                                        onChange={(e) => {
                                                                            const newItems = [...items];
                                                                            newItems[index].cost = parseFloat(e.target.value);
                                                                            setItems(newItems);
                                                                        }}

                                                                    />
                                                                    <Typography variant="body1" sx={{ mt: 1, display: 'block' }}>
                                                                        Discount:
                                                                        <p>0% 0% 0%</p>
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={12} sm={2} md={2} lg={2}>
                                                                    <InputLabel className={` ${themeMode === 'dark' ? 'hourslabel-dark' : 'hourslabel'}`}>Hours</InputLabel>
                                                                    <TextField
                                                                        fullWidth
                                                                        name="hours"
                                                                        type="number"
                                                                        className='hours'
                                                                        value={item.hours}
                                                                        onChange={(e) => {
                                                                            const newItems = [...items];
                                                                            newItems[index].hours = parseFloat(e.target.value);
                                                                            setItems(newItems);
                                                                        }}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={2} md={2} lg={1}>
                                                                    <InputLabel className={`pricelabel ${themeMode === 'dark' ? 'pricelabel-dark' : ''}`}>Price</InputLabel>
                                                                    <Typography>${(item.cost * item.hours * ((100 - item.discount) / 100)).toFixed(2)}</Typography>
                                                                </Grid>
                                                                <Grid item xs={12} sm={1} md={1} lg={1} sx={{
                                                                    display: { xs: 'none', sm: 'flex', md: 'flex' },
                                                                    justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'flex-end' },
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <IconButton
                                                                        onClick={() => handleRemoveItem(index)}
                                                                        sx={{   
                                                                            display: 'flex',
                                                                            marginLeft: 'auto'
                                                                        }}
                                                                    >
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    ))}

                                                    <Box mt={2}>
                                                        <Button variant="contained" color="primary" onClick={handleAddItem}>
                                                            + Add Item
                                                        </Button>
                                                    </Box>
                                                    <Grid container spacing={2} sx={{ mt: 3 }}>
                                                        <Grid item xs={12} sm={6} md={6}>
                                                            <div className='d-flex column-flex gap-2'>
                                                                <p className='title_salesperson' style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>Salesperson:</p>
                                                                <TextField
                                                                    name="Salesperson"
                                                                    value={salesperson}
                                                                    onChange={(e) => setSalesperson(e.target.value)}
                                                                    variant="outlined"
                                                                    sx={{ mb: 2 }}
                                                                    placeholder='Tommy Shelby'
                                                                />
                                                            </div>
                                                            <TextField
                                                                className='Thankmsg'
                                                                value={thanksMessage}
                                                                onChange={(e) => setThanksMessage(e.target.value)}
                                                                variant="outlined"
                                                                placeholder='Thanks for your business'
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6} sm={6}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'flex-end',
                                                                '& > *': { mb: 1 }
                                                            }}>
                                                                <Typography variant="body1" sx={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'end' }}>
                                                                    <span className="title" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>Subtotal:</span>
                                                                    <span>$1800</span>
                                                                </Typography>
                                                                <Typography variant="body1" sx={{ display: 'flex', width: '100%', gap: 4, justifyContent: 'end' }}>
                                                                    <span className="title_dis" style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>Discount:</span>
                                                                    <span>$28</span>
                                                                </Typography>
                                                                <Typography variant="body1" sx={{ display: 'flex', width: '100%', gap: 4, justifyContent: 'end' }}>
                                                                    <span className='title_tax' style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>Tax:</span>
                                                                    <span>21%</span>
                                                                </Typography>
                                                                <Divider sx={{ width: '100%', my: 1 }} />
                                                                <Typography variant="body1" sx={{ display: 'flex', gap: 4, width: '100%', fontWeight: 'bold', justifyContent: 'end' }}>
                                                                    <span className='total' style={{ color: theme.palette.mode === 'dark' ? '#E7E3FCDE' : "rgb( 47 43 61 / 0.9)" }}>Total:</span>
                                                                    <span>${total.toFixed(2)}</span>
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2} sx={{ mt: 2 }}>
                                                        <Grid item xs={12}>
                                                            <Typography variant="body1">Note:</Typography>
                                                            <TextField
                                                                value={note}
                                                                onChange={handleNoteChange}
                                                                fullWidth
                                                                multiline
                                                                rows={2}
                                                                required
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} md={3} sx={{ padding: '16px 0px 0px 20px !important' }}>
                                            <Card>
                                                <CardContent sx={{ paddingBottom: '20px !important', padding: '20px' }}>
                                                    <Button
                                                        variant="contained"
                                                        fullWidth
                                                        startIcon={<SendIcon style={{ color: 'white' }} />}
                                                        sx={{
                                                            bgcolor: '#7367f0',
                                                            '&:hover': { bgcolor: '#5e50ee' },
                                                            mb: 2,
                                                            color: 'white'
                                                        }}
                                                    >
                                                        Send Invoice
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        fullWidth
                                                        sx={{ mb: 1, borderColor: 'divider', color: '#808390', backgroundColor: 'rgb(128 131 144 / 0.16)' }}
                                                    >
                                                        Preview
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        fullWidth
                                                        sx={{ color: 'text.primary', borderColor: 'divider' }}
                                                    >
                                                        Save
                                                    </Button>

                                                </CardContent>
                                            </Card>
                                            <Typography variant="subtitle2" sx={{ mb: 1 }} className='heading_accept'>
                                                Accept payments via
                                            </Typography>

                                            <Select
                                                value={paymentMethod}
                                                onChange={handlePaymentMethodChange}
                                                fullWidth
                                                sx={{ mb: 2 }}
                                            >
                                                <MenuItem value="Internet Banking">Internet Banking</MenuItem>
                                                <MenuItem value="Credit Card">Credit Card</MenuItem>
                                                <MenuItem value="Debit Card">Debit Card</MenuItem>
                                                <MenuItem value="PayPal">PayPal</MenuItem>
                                            </Select>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                                                <Typography sx={{ marginTop: '0px' }}>Payment Terms</Typography>
                                                <CustomSwitch />
                                            </Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                                                <Typography sx={{ marginTop: '0px' }}>Client Notes</Typography>
                                                <CustomSwitch />
                                            </Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                                                <Typography sx={{ marginTop: '0px' }}>Payment Stub</Typography>
                                                <CustomSwitch />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
            <AddCustomerModal open={isModalOpen} handleClose={handleCloseModal} addNewCustomer={addNewCustomer} />
        </LocalizationProvider>
    );
};

export default function ThemedAdd() {
    return (
        <ThemeProvider>
            <Add />
        </ThemeProvider>

    )
};