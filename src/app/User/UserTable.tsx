import React, { useState, ChangeEvent } from 'react';
import {
    Box, Button, Checkbox, Divider, Grid, IconButton, MenuItem, Modal, Select, Table,
    TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField,
    Typography, Avatar, FormControl, InputLabel,
    useTheme,
    Menu
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TbEdit, TbDeviceDesktop, TbChartPie, TbCrown, TbDownload } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './user.css';
import { SelectChangeEvent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
interface User {
    id: number;
    name: string;
    username: string;
    role: string;
    plan: string;
    billing: string;
    status: string;
    avatar?: string;
}

const initialUsers: User[] = [
    { id: 1, name: "Galen Slixby", username: "gslixby0", role: "Editor", plan: "Enterprise", billing: "Auto Debit", status: "Inactive" },
    { id: 2, name: "Halsey Redmore", username: "hredmore1", role: "Author", plan: "Team", billing: "Auto Debit", status: "Pending" },
    { id: 3, name: "Marjory Sicely", username: "msicely2", role: "Maintainer", plan: "Enterprise", billing: "Auto Debit", status: "Active" },
    { id: 4, name: "Cyrill Risby", username: "crisby3", role: "Maintainer", plan: "Team", billing: "Manual Paypal", status: "Inactive" },
    { id: 5, name: "Maggy Hurran", username: "mhurran4", role: "Subscriber", plan: "Enterprise", billing: "Manual Cash", status: "Pending" },
    { id: 6, name: "Silvain Halstead", username: "shalstead5", role: "Author", plan: "Company", billing: "Manual Cash", status: "Active" },
    { id: 7, name: "Breena Gallemore", username: "bgallemore6", role: "Subscriber", plan: "Company", billing: "Auto Debit", status: "Pending" },
    { id: 8, name: "Kathryne Liger", username: "kliger7", role: "Author", plan: "Enterprise", billing: "Manual Paypal", status: "Pending" },
    { id: 9, name: "Franz Scotfurth", username: "fscotfurth8", role: "Subscriber", plan: "Team", billing: "Auto Debit", status: "Pending" },
    { id: 10, name: "Jillene Bellany", username: "jbellany9", role: "Maintainer", plan: "Company", billing: "Manual Cash", status: "Inactive" },
    { id: 11, name: "Jonah Wharlton", username: "jwharltona", role: "Subscriber", plan: "Team", billing: "Auto Debit", status: "Inactive" },
    { id: 12, name: "Seth Hallam", username: "shallamb", role: "Subscriber", plan: "Team", billing: "Manual Paypal", status: "Pending" },
    { id: 13, name: "Yoko Pottie", username: "ypottiec", role: "Subscriber", plan: "Basic", billing: "Manual Paypal", status: "Inactive" },
    { id: 14, name: "Maximilianus Krause", username: "mkraused", role: "Author", plan: "Team", billing: "Auto Debit", status: "Active" },
    { id: 15, name: "Zsazsa McCleverty", username: "zmcclevertye", role: "Maintainer", plan: "Enterprise", billing: "Auto Debit", status: "Active" },
    { id: 16, name: "Bentlee Emblin", username: "bemblinf", role: "Author", plan: "Company", billing: "Manual Cash", status: "Active" },
    { id: 17, name: "Brockie Myles", username: "bmylesg", role: "Maintainer", plan: "Basic", billing: "Auto Debit", status: "Active" },
    { id: 18, name: "Bertha Biner", username: "bbinerh", role: "Editor", plan: "Team", billing: "Manual Cash", status: "Active" },
    { id: 19, name: "Travus Bruntjen", username: "tbruntjeni", role: "Admin", plan: "Enterprise", billing: "Manual Cash", status: "Active" },
    { id: 20, name: "Wesley Burland", username: "wburlandj", role: "Editor", plan: "Team", billing: "Manual Paypal", status: "Inactive" },
    { id: 21, name: "Wesley Burland", username: "wburlandj", role: "Editor", plan: "Team", billing: "Manual Paypal", status: "Active" },

    // Add more users as needed
];

const roleIcons = {
    Editor: <TbEdit fontSize="large" style={{ color: '#00bcd4' }} />,
    Author: <TbDeviceDesktop fontSize="large" style={{ color: '#ff9800' }} />,
    Maintainer: <TbChartPie fontSize="large" style={{ color: '#4caf50' }} />,
    Subscriber: <LuUser fontSize="large" style={{ color: '#7367F0' }} />,
    Admin: <TbCrown fontSize="large" style={{ color: '#FF4C51' }} />
};


const UserTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('');
    const [planFilter, setPlanFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [newUser, setNewUser] = useState<Omit<User, 'id'>>({
        name: '',
        username: '',
        role: '',
        plan: '',
        billing: '',
        status: '',

    });
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuUserId, setMenuUserId] = useState<number | null>(null);



    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        filterUsers(term, roleFilter, planFilter, statusFilter);
    };

    const handleRoleFilter = (event: SelectChangeEvent<string>) => {
        const role = event.target.value;
        setRoleFilter(role);
        filterUsers(searchTerm, role, planFilter, statusFilter);
    };

    const handlePlanFilter = (event: SelectChangeEvent<string>) => {
        const plan = event.target.value;
        setPlanFilter(plan);
        filterUsers(searchTerm, roleFilter, plan, statusFilter);
    };

    const handleStatusFilter = (event: SelectChangeEvent<string>) => {
        const status = event.target.value;
        setStatusFilter(status);
        filterUsers(searchTerm, roleFilter, planFilter, status);
    };

    const filterUsers = (search: string, role: string, plan: string, status: string) => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) &&
            (role === 'all' || role === '' || user.role.toLowerCase() === role.toLowerCase()) &&
            (plan === 'all' || plan === '' || user.plan.toLowerCase() === plan.toLowerCase()) &&
            (status === 'all' || status === '' || user.status.toLowerCase() === status.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleOpenModal = () => setIsModalOpen(true);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
    };


    const handleSelectChange = (event: SelectChangeEvent) => {
        const { name, value } = event.target;
        setNewUser(prev => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleDeleteUser = (id: number) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
    };
    const handleAddUser = () => {
        const userToAdd = {
            ...newUser,
            id: users.length + 1, // Simple ID generation, consider using UUID in production
        };
        setUsers(prev => [...prev, userToAdd]);
        setFilteredUsers(prev => [...prev, userToAdd]);
        handleCloseModal();
    };

    // Handle pagination change
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const theme = useTheme();

    const paginatedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
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
    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, userId: number) => {
        setAnchorEl(event.currentTarget);
        setMenuUserId(userId);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuUserId(null);
    };

    const handleEditClick = () => {
        if (menuUserId !== null) {
            const userToEdit = users.find(user => user.id === menuUserId);
            if (userToEdit) {
                setEditingUser(userToEdit);
                setIsModalOpen(true);
            }
        }
        handleMenuClose();
    };

    const handleEditInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (editingUser) {
            setEditingUser({ ...editingUser, [name]: value });
        }
    };

    const handleEditSelectChange = (event: SelectChangeEvent) => {
        const { name, value } = event.target;
        if (editingUser) {
            setEditingUser({ ...editingUser, [name]: value });
        }
    };

    const handleEditSubmit = () => {
        if (editingUser) {
            const updatedUsers = users.map(user =>
                user.id === editingUser.id ? editingUser : user
            );
            setUsers(updatedUsers);
            setFilteredUsers(updatedUsers);
            setIsModalOpen(false);
            setEditingUser(null);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
        setNewUser({
            name: '',
            username: '',
            role: '',
            plan: '',
            billing: '',
            status: '',
        });
    };
    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
                {/* Filter Section with Grid */}
                <Grid item xs={12} sm={4}>
                    <Select
                        fullWidth
                        value={roleFilter}
                        onChange={handleRoleFilter}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>
                            Select Role
                        </MenuItem>
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="author">Author</MenuItem>
                        <MenuItem value="editor">Editor</MenuItem>
                        <MenuItem value="maintainer">Maintainer</MenuItem>
                        <MenuItem value="subscriber">Subscriber</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Select defaultValue="all" displayEmpty fullWidth value={planFilter} onChange={handlePlanFilter}>
                        <MenuItem value="" disabled>
                            Select Plan
                        </MenuItem>
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="enterprise">Enterprise</MenuItem>
                        <MenuItem value="team">Team</MenuItem>
                        <MenuItem value="company">Company</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Select defaultValue="all" displayEmpty fullWidth value={statusFilter} onChange={handleStatusFilter}>
                        <MenuItem value="" disabled>
                            Select Status
                        </MenuItem>
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <Divider />
            {/* Pagination and Actions */}
            <Grid item xs={12} className='paginationgrid'>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'stretch', sm: 'stretch' },
                    mb: 2,
                    gap: 2
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: { xs: 'row', sm: 'row' } }} >
                        <Select
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(Number(e.target.value))}
                            sx={{
                                minWidth: 70,
                                height: 40,
                                color: theme.palette.mode === 'dark' ? '#E7E3FC99' : 'inherit',
                            }}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>

                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: { sm: 'flex-end' }, flexDirection: { xs: 'row' } }}>
                        <TextField
                            placeholder="Search User"
                            variant="outlined"
                            size="small"
                            onChange={handleSearch}
                            sx={{
                                width: { xs: '100%', sm: 200 },
                                '& .MuiOutlinedInput-root': {
                                    height: 40,
                                }
                            }}
                        />
                        <Button
                            variant="outlined"
                            sx={{
                                color: 'primary.main',
                                borderColor: 'primary.main',
                                height: 40,
                                flexGrow: { xs: 1, sm: 0 },
                                width: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            EXPORT
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleOpenModal}
                            className='useraddbtn'
                            sx={{
                                height: 40,
                                flexGrow: { xs: 1, sm: 0 },
                                width: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            + Add New User
                        </Button>
                    </Box>
                </Box>
            </Grid>
            {/* Table */}
            <TableContainer sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox />
                            </TableCell>
                            <TableCell>USER</TableCell>
                            <TableCell>ROLE</TableCell>
                            <TableCell>PLAN</TableCell>
                            <TableCell>BILLING</TableCell>
                            <TableCell>STATUS</TableCell>
                            <TableCell>ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar sx={{ mr: 2, bgcolor: 'grey.300' }}>{user.name[0]}</Avatar>
                                        <Box sx={{ minWidth: 100 }}>
                                            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>{user.name}</Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{user.username}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {roleIcons[user.role as keyof typeof roleIcons]}
                                        <Typography variant="body2" sx={{ ml: 1, color: 'text.primary' }}>{user.role}</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>{user.plan}</TableCell>
                                <TableCell>{user.billing}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            backgroundColor:
                                                user.status === 'Active' ? 'success.main' :
                                                    user.status === 'Pending' ? 'warning.main' :
                                                        'error.main',
                                            color: 'white',
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {user.status}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleDeleteUser(user.id)}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small">
                                        <VisibilityIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small" onClick={(event) => handleMenuOpen(event, user.id)}>
                                        <MoreVertIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* Pagination Component */}
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={filteredUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                labelDisplayedRows={({ from, to, count }) => `Showing ${from} to ${to} of ${count} entries`}
                labelRowsPerPage=""
                sx={{
                    mt: 2,
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
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleEditClick}>
                    <TbEdit fontSize="small" style={{ marginRight: '8px' }} />
                    Edit
                </MenuItem>
                <MenuItem>
                    <TbDownload fontSize="small" style={{ marginRight: '8px' }} />Download
                </MenuItem>
            </Menu>
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="edit-user-modal"
                aria-describedby="modal-to-edit-user"
            >
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '400px',
                    height: '100%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    overflowY: 'auto',
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h6" component="h2">
                            {editingUser ? 'Edit User' : 'Add New User'}
                        </Typography>
                        <IconButton onClick={handleCloseModal} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <InputLabel>Full Name</InputLabel>
                    <TextField
                        fullWidth
                        name="name"
                        value={editingUser ? editingUser.name : newUser.name}
                        onChange={editingUser ? handleEditInputChange : handleInputChange}
                        sx={{ mb: 2 }}
                    />
                    <InputLabel>UserName</InputLabel>
                    <TextField
                        fullWidth
                        name="username"
                        value={editingUser ? editingUser.username : newUser.username}
                        onChange={editingUser ? handleEditInputChange : handleInputChange}
                        sx={{ mb: 2 }}
                    />
                    <InputLabel>Billing</InputLabel>
                    <Select
                        fullWidth
                        name="billing"
                        value={editingUser ? editingUser.billing : newUser.billing}
                        onChange={editingUser ? handleEditSelectChange : handleSelectChange}
                        sx={{ mb: 2 }}
                    >
                        <MenuItem value="Auto Debit">Auto Debit</MenuItem>
                        <MenuItem value="Manual Cash">Manual Cash</MenuItem>
                        <MenuItem value="Manual Paypal">Manual Paypal</MenuItem>
                    </Select>
                    <InputLabel>Select Role</InputLabel>
                    <Select
                        fullWidth
                        name="role"
                        value={editingUser ? editingUser.role : newUser.role}
                        onChange={editingUser ? handleEditSelectChange : handleSelectChange}
                        sx={{ mb: 2 }}
                    >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Author">Author</MenuItem>
                        <MenuItem value="Editor">Editor</MenuItem>
                        <MenuItem value="Maintainer">Maintainer</MenuItem>
                        <MenuItem value="Subscriber">Subscriber</MenuItem>
                    </Select>
                    <InputLabel>Select Plan</InputLabel>
                    <Select
                        fullWidth
                        name="plan"
                        value={editingUser ? editingUser.plan : newUser.plan}
                        onChange={editingUser ? handleEditSelectChange : handleSelectChange}
                        sx={{ mb: 2 }}
                    >
                        <MenuItem value="Basic">Basic</MenuItem>
                        <MenuItem value="Company">Company</MenuItem>
                        <MenuItem value="Enterprise">Enterprise</MenuItem>
                        <MenuItem value="Team">Team</MenuItem>
                    </Select>
                    <InputLabel>Select Status</InputLabel>
                    <Select
                        name="status"
                        value={editingUser ? editingUser.status : newUser.status}
                        onChange={editingUser ? handleEditSelectChange : handleSelectChange}
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                    <div className='d-flex gap-2'>
                        <Button
                            variant="contained"
                            onClick={editingUser ? handleEditSubmit : handleAddUser}
                            className='submitbtn'
                        >
                            {editingUser ? 'Update' : 'Submit'}
                        </Button>
                        <Button variant="contained" onClick={handleCloseModal} className='cancelbtn'>
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Modal>


        </Box >
    );
};

export default UserTable;
