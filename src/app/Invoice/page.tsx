"use client";
import React, { useState, useMemo } from 'react';
import '../globals.css';
import '../page.module.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../page.module.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useTheme } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { TbFileInvoice } from 'react-icons/tb';
import { IoMdDoneAll } from 'react-icons/io'
import { TbCircleOff } from 'react-icons/tb';
import { TbSend2 } from "react-icons/tb";
import { TbChartPie2 } from "react-icons/tb";
import { PiWarningCircleLight } from "react-icons/pi";
import { IconButton } from '@mui/material';
import { ThemeProvider, ColorModeContext } from "@/components/ThemeProvider/ThemeProvider";
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage, Margin } from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    TextField,
    Button,
    Select,
    MenuItem,
    Checkbox,
    Avatar
} from '@mui/material';
import { FiTrash2, FiEye, FiMoreVertical } from "react-icons/fi";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";
import Link from 'next/link';

interface Invoice {
    id: string;
    status: string;
    client: string;
    email: string;
    total: number;
    issuedDate: string;
    balance: number | string;

}

const invoices: Invoice[] = [
    { id: "#4987", status: "paid", client: "Jordan Stevenson", email: "don85@johnson.com", total: 3428, issuedDate: "13 Jul 2024", balance: 724 },
    { id: "#4988", status: "download", client: "Stephanie Burns", email: "brenda49@taylor.info", total: 5219, issuedDate: "17 Jul 2024", balance: "Paid" },
    { id: "#4989", status: "paid", client: "Tony Herrera", email: "smithtiffany@powers.com", total: 3719, issuedDate: "19 Jul 2024", balance: "Paid" },
    { id: "#4990", status: "sent", client: "Kevin Patton", email: "mejiageorge@lee-perez.com", total: 4749, issuedDate: "06 Jul 2024", balance: "Paid" },
    { id: "#4991", status: "draft", client: "Mrs. Julie Donovan MD", email: "brandon07@pierce.com", total: 4056, issuedDate: "08 Jul 2024", balance: 815 },
    { id: "#4992", status: "paid", client: "Amanda Phillips", email: "guerrerobrandy@beasley-harper.com", total: 2771, issuedDate: "26 Jul 2024", balance: "Paid" },
    { id: "#4993", status: "draft", client: "Christina Collier", email: "williamshenry@moon-smith.com", total: 2713, issuedDate: "17 Jul 2024", balance: 407 },
    { id: "#4994", status: "paid", client: "David Flores", email: "margaretharvey@russell-murray.com", total: 4309, issuedDate: "11 Jul 2024", balance: -205 },
    { id: "#4995", status: "download", client: "Valerie Perez", email: "dianarodriguez@villegas.com", total: 3367, issuedDate: "26 Jul 2024", balance: "Paid" },
    { id: "#4996", status: "download", client: "Susan Dickerson", email: "bwilson@norris-brock.com", total: 4776, issuedDate: "15 Jul 2024", balance: 305 },
    { id: "#4997", status: "partialpayment", client: "Kelly Smith", email: "markcampbell@bell.info", total: 3789, issuedDate: "27 Jul 2024", balance: 666 },
    { id: "#4998", status: "partialpayment", client: "Jamie Jones", email: "mary61@rosario.com", total: 5200, issuedDate: "31 Jul 2024", balance: "Paid" },
    { id: "#4999", status: "paid", client: "Ruben Garcia", email: "sean22@cook.com", total: 4558, issuedDate: "14 Jul 2024", balance: "Paid" },
    { id: "#5000", status: "paid", client: "Ryan Meyer", email: "mccoymatthew@lopez-jenkins.net", total: 3503, issuedDate: "21 Jul 2024", balance: "Paid" },
    { id: "#5001", status: "partialpayment", client: "Valerie Valdez", email: "novakshannon@mccarty-murillo.com", total: 5285, issuedDate: "30 Jul 2024", balance: -202 },
    { id: "#5002", status: "download", client: "Melissa Wheeler", email: "smithrachel@davis-rose.net", total: 3668, issuedDate: "21 Jul 2024", balance: 731 },
    { id: "#5003", status: "sent", client: "Alan Jimenez", email: "scott96@mejia.net", total: 4372, issuedDate: "30 Jul 2024", balance: -344 },
    { id: "#5004", status: "partialpayment", client: "Jennifer Morris", email: "cramirez@ross-bass.biz", total: 3198, issuedDate: "27 Jul 2024", balance: -253 },
    { id: "#5005", status: "pastdue", client: "Timothy Stevenson", email: "arielberg@wolfe-smith.com", total: 5293, issuedDate: "30 Jul 2024", balance: "Paid" },
    { id: "#5006", status: "download", client: "Erik Hayden", email: "yrobinson@nichols.com", total: 5612, issuedDate: "10 Jul 2024", balance: 883 },
    { id: "#5007", status: "sent", client: "Katherine Kennedy", email: "tatejennifer@allen.net", total: 2230, issuedDate: "01 Jul 2024", balance: "Paid" },
    { id: "#5008", status: "partialpayment", client: "Monica Fuller", email: "gdurham@lee.com", total: 2032, issuedDate: "22 Jul 2024", balance: "Paid" },
    { id: "#5009", status: "paid", client: "Stacey Carter", email: "jenny96@lawrence-thompson.com", total: 3128, issuedDate: "30 Jul 2024", balance: "Paid" },
    { id: "#5010", status: "download", client: "Chad Davis", email: "jgutierrez@jackson.com", total: 2060, issuedDate: "06 Jul 2024", balance: "Paid" },
    { id: "#5011", status: "draft", client: "Chris Reyes", email: "hunter14@jones.com", total: 4077, issuedDate: "01 Jul 2024", balance: "Paid" },
    { id: "#5012", status: "partialpayment", client: "Laurie Summers", email: "pricetodd@johnson-jenkins.com", total: 2872, issuedDate: "30 Jul 2024", balance: "Paid" },
    { id: "#5013", status: "draft", client: "Lindsay Wilson", email: "perrydavid@chapman-rogers.com", total: 3740, issuedDate: "05 Jul 2024", balance: "Paid" },
    { id: "#5014", status: "download", client: "Jenna Castro", email: "leahgriffin@carpenter.com", total: 3623, issuedDate: "01 Jul 2024", balance: "Paid" },
    { id: "#5015", status: "draft", client: "Wendy Weber", email: "esparzadaniel@allen.com", total: 2477, issuedDate: "16 Jul 2024", balance: "Paid" },
    { id: "#5016", status: "paid", client: "April Yates", email: "todd34@owens-morgan.com", total: 3094, issuedDate: "24 Jul 2024", balance: 951 },
    { id: "#5017", status: "partialpayment", client: "Daniel Marshall PhD", email: "roydavid@bailey.com", total: 3102, issuedDate: "24 Jul 2024", balance: -153 },
    { id: "#5018", status: "draft", client: "Randy Rich", email: "baldwinjoel@washington.com", total: 2483, issuedDate: "29 Jul 2024", balance: "Paid" },
    { id: "#5019", status: "partialpayment", client: "Mrs. Jodi Chapman", email: "psmith@morris.info", total: 2825, issuedDate: "07 Jul 2024", balance: -459 },
    { id: "#5020", status: "pastdue", client: "Steven Myers", email: "lori06@morse.com", total: 2029, issuedDate: "10 Jul 2024", balance: "Paid" },
    { id: "#5021", status: "sent", client: "Charles Alexander", email: "zpearson@miller.com", total: 3208, issuedDate: "02 Jul 2024", balance: "Paid" },
    { id: "#5022", status: "sent", client: "Alan Jimenez", email: "scott96@mejia.net", total: 3077, issuedDate: "02 Jul 2024", balance: "Paid" },
    { id: "#5023", status: "draft", client: "Heidi Walton", email: "carrietorres@acosta.com", total: 5578, issuedDate: "23 Jul 2024", balance: "Paid" },
    { id: "#5024", status: "partialpayment", client: "Christopher Allen", email: "zjohnson@nichols-powers.com", total: 2787, issuedDate: "28 Jul 2024", balance: "Paid" },
    { id: "#5025", status: "download", client: "Joseph Oliver", email: "kayla09@thomas.com", total: 5591, issuedDate: "21 Jul 2024", balance: "Paid" },
    { id: "#5026", status: "draft", client: "Megan Roberts", email: "melvindavis@allen.info", total: 2783, issuedDate: "24 Jul 2024", balance: "Paid" },
    { id: "#5027", status: "sent", client: "Mary Garcia", email: "gjordan@fernandez-coleman.com", total: 2719, issuedDate: "13 Jul 2024", balance: "Paid" },
    { id: "#5028", status: "paid", client: "Crystal Mays", email: "robertscott@garcia.com", total: 3325, issuedDate: "18 Jul 2024", balance: 361 },
    { id: "#5029", status: "paid", client: "Nicholas Tanner", email: "desiree61@kelly.com", total: 3851, issuedDate: "29 Jul 2024", balance: "Paid" },
    { id: "#5030", status: "draft", client: "Mr. Justin Richardson", email: "jeffrey25@martinez-hodge.com", total: 5565, issuedDate: "07 Jul 2024", balance: "Paid" },
    { id: "#5031", status: "partialpayment", client: "Jennifer Summers", email: "john77@anderson.net", total: 3313, issuedDate: "21 Jul 2024", balance: "Paid" },
    { id: "#5032", status: "pastdue", client: "Richard Payne", email: "ywagner@jones.com", total: 5189, issuedDate: "31 Jul 2024", balance: "Paid" },
    { id: "#5033", status: "partialpayment", client: "Lori Wells", email: "calvin07@joseph-edwards.org", total: 2869, issuedDate: "12 Jul 2024", balance: "Paid" },
    { id: "#5034", status: "paid", client: "Tammy Sanchez", email: "eric47@george-castillo.com", total: 4836, issuedDate: "10 Jul 2024", balance: "Paid" },
    { id: "#5035", status: "draft", client: "Dana Carey", email: "jamesjoel@chapman.net", total: 4263, issuedDate: "20 Jul 2024", balance: 762 },
    // { id: "#5036", status: "paid", client: "Andrew Burns", email: "pwillis@cross.org", total: 3171, issuedDate: "19 Jul 2024", balance: -205 },
];

function List() {
    // const List: React.FC = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('all');

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredInvoices = useMemo(() => {
        return invoices.filter(invoice =>
            invoice.client.toLowerCase().includes(search.toLowerCase()) &&
            (status === 'all' || invoice.status === status)
        );
    }, [search, status]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const theme = useTheme();

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'paid':
                return <IoCheckmark style={{
                    color: theme.palette.mode === 'dark' ? '#28C76F' : 'green',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(40, 199, 111, 0.16)' : '#e6f9f0', borderRadius: '50%', padding: '5px', width: '30px', height: '30px'
                }} />;
            case 'download':
                return <IoIosArrowRoundDown style={{ color: '#00BAD1', backgroundColor: 'rgb( 0 186 209 / 0.16)', borderRadius: '50%', padding: '3px', width: '30px', height: '30px' }} />;
            case 'sent':
                return <TbSend2 style={{ color: '#808390', backgroundColor: 'rgb( 128 131 144 / 0.16)', borderRadius: '50%', padding: '5px', width: '30px', height: '30px' }} />
            case 'draft':
                return <MdOutlineEmail style={{ color: '#7367F0', backgroundColor: 'rgb( 115 103 240 / 0.16)', borderRadius: '50%', padding: '6px', width: '30px', height: '30px' }} />;
            case 'partialpayment':
                return <TbChartPie2 style={{ color: '#FF9F43', backgroundColor: 'rgb( 255 159 67 / 0.16)', borderRadius: '50%', padding: '6px', width: '30px', height: '30px' }} />;
            case 'pastdue':
                return <PiWarningCircleLight style={{ color: 'ff4c51', backgroundColor: 'rgb( 255 76 81 / 0.16)', borderRadius: '50%', padding: '6px', width: '30px', height: '30px' }} />;
            default:
                return null;
        }
    };

    function TablePaginationActions(props: { count: any; page: any; rowsPerPage: any; onPageChange: any; }) {
        const { count, page, rowsPerPage, onPageChange } = props;

        const handleFirstPageButtonClick = (event: any) => {
            onPageChange(event, 0);
        };

        const handleBackButtonClick = (event: any) => {
            onPageChange(event, page - 1);
        };

        const handleNextButtonClick = (event: any) => {
            onPageChange(event, page + 1);
        };

        const handleLastPageButtonClick = (event: any) => {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };

        return (
            <div className="pagination-actions">
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    <FirstPage />
                </IconButton>
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="previous page"
                >
                    <KeyboardArrowLeft />
                </IconButton>
                {[...Array(Math.ceil(count / rowsPerPage)).keys()].map((pageNum) => (
                    <IconButton
                        key={pageNum}
                        onClick={(event) => onPageChange(event, pageNum)}
                        className={page === pageNum ? 'active' : ''}
                        aria-label={`page ${pageNum + 1}`}
                    >
                        {pageNum + 1}
                    </IconButton>
                ))}
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    <KeyboardArrowRight />
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    <LastPage />
                </IconButton>
            </div>
        );
    }
    return (
        <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
                </div>
                <div className={styles.content}>
                    <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                    <div className='container'>
                        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                            <Card sx={{
                                boxShadow: 3,
                                bgcolor: theme.palette.mode === 'dark' ? '#2F3349' : '#FFF',
                                color: theme.palette.mode === 'dark' ? '#E7E3FC' : 'inherit'
                            }}>
                                <CardContent>
                                    <Grid container spacing={2} display={'flex'}>
                                        <Grid item xs={12} md={3}>
                                            <div className='d-flex align-items-center justify-content-between lists' style={{ borderRight: '1px solid #ddd', paddingRight: '18px' }}>
                                                <div className='column-flex'>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.9)'
                                                        }} className='title1'> 24 </Typography>
                                                    <Typography variant="h5" component="div" className='title2'
                                                        sx={{
                                                            color: theme.palette.mode === 'dark' ? 'rgb( 225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)'
                                                        }}
                                                    >
                                                        Clients
                                                    </Typography>
                                                </div>
                                                <FiUser className='icon' style={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? '#363847' : '#EEEDF0'
                                                }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <div className='d-flex align-items-center justify-content-between lists' style={{ borderRight: '1px solid #ddd', paddingRight: '18px' }}>
                                                <div className='column-flex'>
                                                    <Typography variant="body2" className='title1' sx={{
                                                        color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.9)'
                                                    }}>
                                                        165
                                                    </Typography>
                                                    <Typography variant="h5" component="div" className='title2' sx={{
                                                        color: theme.palette.mode === 'dark' ? 'rgb( 225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)'
                                                    }}>
                                                        Invoices
                                                    </Typography>
                                                </div>
                                                <TbFileInvoice className='icon' style={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? '#363847' : '#EEEDF0'
                                                }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <div className='d-flex align-items-center justify-content-between lists' style={{ borderRight: '1px solid #ddd', paddingRight: '18px' }}>
                                                <div className='column-flex'>
                                                    <Typography variant="body2"
                                                        sx={{
                                                            color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.9)'
                                                        }} className='title1'>
                                                        $2.46k
                                                    </Typography>
                                                    <Typography variant="h5" component="div" className='title2' sx={{
                                                        color: theme.palette.mode === 'dark' ? 'rgb( 225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)'
                                                    }}>
                                                        Paid
                                                    </Typography>
                                                </div>
                                                <IoMdDoneAll className='icon' style={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? '#363847' : '#EEEDF0'
                                                }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={3} className='last-child'>
                                            <div className='d-flex align-items-center justify-content-between lists'>
                                                <div className='column-flex'>
                                                    <Typography variant="body2"
                                                        sx={{
                                                            color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.9)'
                                                        }}
                                                        className='title1'>
                                                        $876
                                                    </Typography>
                                                    <Typography variant="h5" component="div" className='title2' sx={{
                                                        color: theme.palette.mode === 'dark' ? 'rgb( 225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)'
                                                    }}>
                                                        Unpaid
                                                    </Typography>
                                                </div>
                                                <TbCircleOff className='icon' style={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? '#363847' : '#EEEDF0'
                                                }}

                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Box sx={{ mt: 4 }} component="main">
                                <Card sx={{ boxShadow: 3 }}>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6}>
                                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2, mb: { xs: 2, md: 0 } }}>
                                                    <Typography className='tbl-row'>Show</Typography>
                                                    <Select
                                                        value={rowsPerPage}
                                                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
                                                        sx={{
                                                            width: { xs: '100%', sm: 100 },
                                                            height: 40,
                                                            color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'black',
                                                        }}
                                                    >
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={25}>25</MenuItem>
                                                        <MenuItem value={50}>50</MenuItem>
                                                    </Select>
                                                    <Link href="/Invoice/Add">
                                                        <Button variant="contained" color="primary" sx={{ width: { xs: '100%', sm: 'auto' }, height: 40 }}>
                                                            + Create Invoice
                                                        </Button>
                                                    </Link>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={10} md={6}>
                                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2 }}>
                                                    <TextField
                                                        placeholder="Search Invoice"
                                                        value={search}
                                                        onChange={(e) => setSearch(e.target.value)}
                                                        sx={{ width: '100%', maxWidth: 300, mb: { xs: 2, sm: 0 } }}
                                                    />
                                                    <Select
                                                        value={status}
                                                        onChange={(e) => setStatus(e.target.value)}
                                                        sx={{ width: '100%', maxWidth: 240 }}
                                                    >
                                                        <MenuItem value="all">All</MenuItem>
                                                        <MenuItem value="paid">Paid</MenuItem>
                                                        <MenuItem value="download">Download</MenuItem>
                                                        <MenuItem value="sent">Sent</MenuItem>
                                                        <MenuItem value="draft">Draft</MenuItem>
                                                        <MenuItem value="partialpayment">Partial Payment</MenuItem>
                                                    </Select>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <TableContainer sx={{ overflowX: 'auto' }}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell padding="checkbox">
                                                            <Checkbox />
                                                        </TableCell>
                                                        <TableCell>#</TableCell>
                                                        <TableCell>STATUS</TableCell>
                                                        <TableCell>CLIENT</TableCell>
                                                        <TableCell>TOTAL</TableCell>
                                                        <TableCell sx={{ display: { xs: 'table-cell', md: 'table-cell' } }}>ISSUED DATE</TableCell>
                                                        <TableCell sx={{ display: { xs: 'table-cell', md: 'table-cell' } }}>BALANCE</TableCell>
                                                        <TableCell>ACTION</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {filteredInvoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((invoice) => (
                                                        <TableRow key={invoice.id}>
                                                            <TableCell padding="checkbox">
                                                                <Checkbox />
                                                            </TableCell>
                                                            <TableCell className='idColor'>{invoice.id}</TableCell>
                                                            <TableCell>
                                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    {getStatusIcon(invoice.status)}
                                                                </Box>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Avatar sx={{ mr: 2, width: 32, height: 32, fontSize: '1.20rem' }}>{invoice.client.charAt(0)}</Avatar>
                                                                    <Box>
                                                                        <Typography className='clientname' sx={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgba(44, 40, 57, 0.9)' }}>{invoice.client}</Typography>
                                                                        <Typography variant="body2" color="textSecondary" className='clientemail' sx={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }} >{invoice.email}</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </TableCell>
                                                            <TableCell className='total' sx={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 0.7)' }}>${invoice.total}</TableCell>
                                                            <TableCell className='date' sx={{ color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgba(47,43,61 / 0.7)' }}>{invoice.issuedDate}</TableCell>
                                                            <TableCell>
                                                                {typeof invoice.balance === 'number'
                                                                    ? `$${invoice.balance}`
                                                                    : <span style={{ backgroundColor: 'rgb( 40 199 111 / 0.16)', color: '#28C76F', padding: '2px 8px', borderRadius: '4px', fontFamily: 'sans-serif' }}>{invoice.balance}</span>
                                                                }
                                                            </TableCell>
                                                            <TableCell>
                                                                <FiTrash2 style={{ marginRight: '8px', cursor: 'pointer', fontSize: '20px' }} className='deleteicon'/>
                                                                <FiEye style={{ marginRight: '8px', cursor: 'pointer', fontSize: '20px' }} className='eyeicon'/>
                                                                <FiMoreVertical style={{ cursor: 'pointer', fontSize: '20px' }} className='morevericalicon'/>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            component="div"
                                            count={filteredInvoices.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            ActionsComponent={TablePaginationActions}
                                            labelDisplayedRows={({ from, to, count }) => `Showing ${from} to ${to} of ${count} entries`}
                                            labelRowsPerPage=""
                                            rowsPerPageOptions={[]}
                                            sx={{
                                                '.MuiTablePagination-displayedRows': {
                                                    marginRight: 'auto',
                                                    order: 0,
                                                    color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'black',
                                                },
                                                '.MuiTablePagination-actions': {
                                                    order: 1,
                                                    color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'black',
                                                },
                                                '.css-1drgtl0-MuiButtonBase-root-MuiIconButton-root': {
                                                    color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'rgb(47 43 61 / 42%)',
                                                    width: '35px',
                                                    fontSize: '0.8125rem !important',
                                                    lineHeight: '1.53846',
                                                    fontWeight: '400',
                                                    height: '35px',
                                                    padding: '5px 5px',
                                                    margin: '0 2px',
                                                    backgroundColor: theme.palette.mode === 'dark' ? "rgb( 225 222 245 / 0.08)" : 'rgb(47 43 61 / 0.08)',
                                                },
                                                '.pagination-actions .MuiIconButton-root.active': {
                                                    backgroundColor: theme.palette.mode === 'dark' ? "rgb( 225 222 245 / 0.08)" : 'rgb(47 43 61 / 0.08)',
                                                },
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}
export default function ThemedList() {
    return (
        <ThemeProvider>
            <List />
        </ThemeProvider>
    );
}
