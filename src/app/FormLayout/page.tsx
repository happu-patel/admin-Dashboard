"use client";
import React, { useState } from "react";
import {
    Box,
    useTheme,
    Grid,
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
    InputLabel,
    MenuItem,
    Tab,
    Tabs,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    Stack,
    Checkbox,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import styles from "../page.module.css";
import "../globals.css";
import './style.css';
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { LuUser, LuEye, LuEyeOff } from "react-icons/lu";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: Number;
    message: string;
    country: string;
    firstName: string;
    lastName: string;
    phoneNumber: Number;
    birthDate: Date;
    language: string;
    username: string;
    twitter: string;
    instagram: string;
    google: string;
    linkedin: string;
    quora: string;
    facebook: string;
    address: string;
    fullName: string;
    landmark: string;
    city: string;
    zipCode: number;
    addressType: string;
    rememberMe: boolean;

}

function BasicForm() {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Box sx={{ bgcolor: "background.paper", p: 2, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.mode === 'dark' ? '#e7e3fce0' : 'rgb(47 43 61 / 0.9)', }}>
                Basic
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Name</InputLabel>
                <Controller
                    control={control}
                    name="name"
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            placeholder="John Doe"
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ""}
                        />
                    )}
                />
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Email</InputLabel>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            placeholder="johndoe@gmail.com"
                            helperText="You can use letters, numbers & periods"
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : "You can use letters, numbers & periods"}
                        />
                    )}
                />
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Password</InputLabel>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            {showPassword ? <LuEye /> : <LuEyeOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : "Use 8 or more characters with a mix of letters, numbers & symbols"}
                        />
                    )}
                />
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Confirm Password</InputLabel>
                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Confirm Password is required",
                        validate: (value) => value === control.getValues("password") || "Passwords do not match",
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type={showConfirmPassword ? "text" : "password"}
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                                            {showConfirmPassword ? <LuEye /> : <LuEyeOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : "Make sure to type the same password as above"}
                        />
                    )}
                />
                <div className="d-flex justify-content-between basicformbtn">
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Get Started!
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Already have an account? <Button color="primary">Log In</Button>
                    </Typography>
                </div>
            </form>
        </Box>
    );
}

function IconForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: "background.paper", p: 2, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)' }}>
            <Typography variant="h6" gutterBottom>
                Basic with Icons
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Name</InputLabel>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            placeholder="John Doe"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LuUser />
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ""}
                        />
                    )}
                />
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Email</InputLabel>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            placeholder="johndoe@gmail.com"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MdOutlineMail />
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ""}
                        />
                    )}
                />
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Phone No.</InputLabel>
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Phone is required",
                        pattern: {
                            value: /^\d{3}-\d{3}-\d{4}$/,
                            message: "Invalid phone number",
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            placeholder="123-456-7890"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <TbPhone />
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.phone}
                            helperText={errors.phone ? errors.phone.message : ""}
                        />
                    )}
                />
                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Message</InputLabel>
                <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            multiline
                            rows={3}
                            placeholder="Bio..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MdOutlineMessage className="msgicon" />
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.message}
                            helperText={errors.message ? errors.message.message : ""}
                        />
                    )}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

function MultiColumnForm() {
    const { control, handleSubmit, reset } = useForm<FormData>();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: "background.paper", p: 3, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)' }}>
            <Typography variant="h6" gutterBottom >
                Multi Column with Form Separator
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2, color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }} >
                    1. Account Details
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Username</InputLabel>
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Username is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Email</InputLabel>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Password</InputLabel>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Password is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth

                                    type={showPassword ? "text" : "password"}
                                    error={!!error}
                                    helperText={error?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <LuEye /> : <LuEyeOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Confirm Password</InputLabel>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === control.getValues("password") || "Passwords do not match"
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    type={showConfirmPassword ? "text" : "password"}
                                    error={!!error}
                                    helperText={error?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    edge="end"
                                                >
                                                    {showConfirmPassword ? <LuEye /> : <LuEyeOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Typography variant="subtitle2" gutterBottom sx={{ mt: 3, color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.7)' : 'rgb(47 43 61 / 0.7)' }}>
                    2. Personal Info
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>First Name</InputLabel>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            rules={{ required: "First Name is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Last Name</InputLabel>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Last Name is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Country</InputLabel>
                        <Controller
                            name="country"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Country is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    select
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                >
                                    <MenuItem value="usa">USA</MenuItem>
                                    <MenuItem value="uk">UK</MenuItem>
                                    <MenuItem value="canada">Canada</MenuItem>
                                </TextField>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Language</InputLabel>
                        <Controller
                            name="language"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Language is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    select
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                >
                                    <MenuItem value="english">English</MenuItem>
                                    <MenuItem value="french">French</MenuItem>
                                    <MenuItem value="spanish">Spanish</MenuItem>
                                </TextField>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Birth Date</InputLabel>
                        <Controller
                            name="birthDate"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Birth Date is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Phone Number</InputLabel>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Phone Number is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 3 }}>
                    <Button type="submit" variant="contained" color="primary" sx={{ marginRight: "15px" }}>
                        Submit
                    </Button>
                    <Button type="button" variant="outlined" onClick={() => reset()}>
                        Reset
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

function FormWithTabs() {
    const [value, setValue] = useState(0);
    const { control, handleSubmit } = useForm<FormData>();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const theme = useTheme();

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Box sx={{ bgcolor: "background.paper", p: 2, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)' }}>
            <Tabs value={value} onChange={handleChange} aria-label="form tabs">
                <Tab label="Personal Info" />
                <Tab label="Account Details" />
                <Tab label="Social Links" />
            </Tabs>

            <form onSubmit={handleSubmit(onSubmit)}>
                {value === 0 && (
                    <Box p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>First Name</InputLabel>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "First Name is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Last Name</InputLabel>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Last Name is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Country</InputLabel>
                                <Controller
                                    name="country"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Country is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            select
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        >
                                            <MenuItem value="usa">USA</MenuItem>
                                            <MenuItem value="uk">UK</MenuItem>
                                            <MenuItem value="canada">Canada</MenuItem>
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Language</InputLabel>
                                <Controller
                                    name="language"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Language is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            select
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        >
                                            <MenuItem value="english">English</MenuItem>
                                            <MenuItem value="french">French</MenuItem>
                                            <MenuItem value="spanish">Spanish</MenuItem>
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Birth Date</InputLabel>
                                <Controller
                                    name="birthDate"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Birth Date is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Phone Number</InputLabel>
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Phone Number is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )}
                {value === 1 && (
                    <Box p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Username</InputLabel>
                                <Controller
                                    name="username"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Username is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Email</InputLabel>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    )}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Password</InputLabel>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: "Password is required" }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            type={showPassword ? "text" : "password"}
                                            error={!!error}
                                            helperText={error?.message}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <LuEyeOff /> : <LuEye />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Confirm Password</InputLabel>
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Confirm Password is required",
                                        validate: (value) =>
                                            value === control.getValues("password") || "Passwords do not match"
                                    }}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            type={showConfirmPassword ? "text" : "password"}
                                            error={!!error}
                                            helperText={error?.message}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                            edge="end"
                                                        >
                                                            {showConfirmPassword ? <LuEyeOff /> : <LuEye />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )}
                {value === 2 && (
                    <Box p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Twitter</InputLabel>
                                <Controller
                                    name="twitter"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            placeholder="https://twitter.com/johndoe"
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Facebook</InputLabel>
                                <Controller
                                    name="facebook"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            placeholder="https://facebook.com/johndoe"
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Google+</InputLabel>
                                <Controller
                                    name="google"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            placeholder="https://plus.google.com/johndoe"
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>LinkedIn</InputLabel>
                                <Controller
                                    name="linkedin"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            placeholder="https://linkedin.com/johndoe"
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Instagram</InputLabel>
                                <Controller
                                    name="instagram"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            placeholder="https://instagram.com/johndoe"
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel sx={{ color: theme.palette.mode === 'dark' ? 'rgb(225 222 245 / 0.9)' : 'rgb(47 43 61 / 0.7)' }}>Quora</InputLabel>
                                <Controller
                                    name="quora"
                                    control={control}
                                    defaultValue=""
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            error={!!error}
                                            placeholder="https://quora.com/johndoe"
                                            helperText={error?.message}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )}

                <Box p={2} display="flex">
                    <Button type="submit" variant="contained" color="primary" sx={{ marginRight: "15px" }}>
                        Submit
                    </Button>
                    <Button type="button" variant="outlined">
                        Reset
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

function CollapsibleForm() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [paymentMethod, setPaymentMethod] = useState('credit-debit-atm');

    const handlePaymentMethodChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPaymentMethod(event.target.value);
    }

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Delivery Address */}
            <Accordion sx={{
                bgcolor: "background.paper", p: 1, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)', marginBottom: '10px', '&::before': {
                    display: 'none',
                },
            }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Delivery Address</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Full Name</InputLabel>
                            <Controller
                                name="fullName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Full Name is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.fullName}
                                        helperText={errors.fullName?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Phone No.</InputLabel>
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Phone number is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <InputLabel>Address</InputLabel>
                            <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Address is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        rows={3}
                                        error={!!errors.address}
                                        helperText={errors.address?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>ZIP Code</InputLabel>
                            <Controller
                                name="zipCode"
                                control={control}
                                defaultValue=""
                                rules={{ required: "ZIP Code is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.zipCode}
                                        helperText={errors.zipCode?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>City</InputLabel>
                            <Controller
                                name="city"
                                control={control}
                                defaultValue=""
                                rules={{ required: "City is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.city}
                                        helperText={errors.city?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>LandMark</InputLabel>
                            <Controller
                                name="landmark"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        margin="normal"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Country</InputLabel>
                            <Controller
                                name="country"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Country is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.country}
                                        helperText={errors.country?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                Address Type
                            </Typography>
                            <Controller
                                name="addressType"
                                control={control}
                                defaultValue="home"
                                render={({ field }) => (
                                    <RadioGroup {...field}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <FormControlLabel
                                                    value="home"
                                                    control={<Radio />}
                                                    label="Home (All day delivery)"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControlLabel
                                                    value="office"
                                                    control={<Radio />}
                                                    label="Office (Delivery between 10 AM - 5 PM)"
                                                />
                                            </Grid>
                                        </Grid>
                                    </RadioGroup>
                                )}
                            />
                        </Grid>


                    </Grid>
                </AccordionDetails>
            </Accordion>

            {/* Delivery Options */}
            <Accordion sx={{
                bgcolor: "background.paper", p: 1, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)', marginBottom: '10px', '&::before': {
                    display: 'none',
                },
            }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Delivery Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset" sx={{ width: '100%' }}>
                        <RadioGroup name="deliveryOptions">
                            <FormControlLabel
                                value="standard"
                                control={<Radio />}
                                label={
                                    <Box sx={{
                                        display: 'flex', flexDirection: 'column', width: '100%', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '8px', mb: 2,
                                    }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                            <Typography>Standard 3-5 Days</Typography>
                                            <Typography variant="body2" align="right">Free</Typography>
                                        </Box>
                                        <Typography variant="body2" color="textSecondary">
                                            Friday, 15 Nov - Monday, 18 Nov
                                        </Typography>
                                    </Box>
                                }
                            />
                            <FormControlLabel
                                value="express"
                                control={<Radio />}
                                label={
                                    <Box sx={{
                                        display: 'flex', flexDirection: 'column', width: '100%', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '8px', mb: 2,
                                    }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                            <Typography>Express</Typography>
                                            <Typography variant="body2" align="right">$5.00</Typography>
                                        </Box>
                                        <Typography variant="body2" color="textSecondary">
                                            Friday, 15 Nov - Sunday, 17 Nov
                                        </Typography>
                                    </Box>
                                }
                            />
                            <FormControlLabel
                                value="overnight"
                                control={<Radio />}
                                label={
                                    <Box sx={{
                                        display: 'flex', flexDirection: 'column', width: '100%', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '8px', mb: 2,
                                    }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                            <Typography>Overnight</Typography>
                                            <Typography variant="body2" align="right">$10.00</Typography>
                                        </Box>
                                        <Typography variant="body2" color="textSecondary">
                                            Friday, 15 Nov - Saturday, 16 Nov
                                        </Typography>
                                    </Box>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            {/* Payment Method */}
            <Accordion sx={{
                bgcolor: "background.paper", p: 1, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)', marginBottom: '10px', '&::before': {
                    display: 'none',
                },
            }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Payment Method</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <RadioGroup
                                        aria-label="payment-method"
                                        name="payment-method"
                                        value={paymentMethod}
                                        onChange={handlePaymentMethodChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value="credit-debit-atm"
                                            control={<Radio />}
                                            label="Credit/Debit/ATM Card"
                                        />
                                        <FormControlLabel
                                            value="cash-on-delivery"
                                            control={<Radio />}
                                            label="Cash on Delivery"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            {paymentMethod === 'credit-debit-atm' && (
                                <>
                                    <Grid item xs={12} sm={12} className="cardnumber">
                                        <InputLabel>Card Number</InputLabel>
                                        <TextField
                                            name="card-number"
                                            variant="outlined"
                                            fullWidth
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} className="nameofcard">
                                        <InputLabel>Name</InputLabel>
                                        <TextField
                                            name="name"
                                            variant="outlined"
                                            fullWidth
                                            placeholder="John Doe"
                                        />
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={4} className="expirydate">
                                            <InputLabel>Expiry Date</InputLabel>
                                            <TextField
                                                name="expiry-date"
                                                variant="outlined"
                                                placeholder="MM/YY"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4} className="cvvnumber">
                                            <InputLabel>CVV Code</InputLabel>
                                            <TextField
                                                name="cvv-code"
                                                variant="outlined"
                                                type="number"
                                                fullWidth
                                                placeholder="123"
                                            />
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                            <Box mt={2} >
                                <Button variant="contained" color="primary" type="submit" sx={{ marginRight: "15px" }}>
                                    Place Order
                                </Button>
                                <Button variant="outlined" type="reset">
                                    Reset
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </AccordionDetails>
            </Accordion>
        </form >

    );
}
function SignInForm() {
    const { control, handleSubmit } = useForm<FormData>();
    const [showPassword, setShowPassword] = React.useState(false);

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: "background.paper", padding: 5, borderRadius: 2, boxShadow: '0px 3px 12px rgb(47 43 61 / 0.14)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.mode === 'dark' ? '#e7e3fce0' : 'rgb(47 43 61 / 0.9)', }}>
                Form Alignment
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 400,
                    mx: 'auto',
                    p: 2,
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" component="h1" gutterBottom>
                    Sign In
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Username is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <><InputLabel>UserName</InputLabel><TextField
                                {...field}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                error={!!error}
                                helperText={error?.message} /></>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Password is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <InputLabel>Password</InputLabel>
                                <TextField
                                    {...field}
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    error={!!error}
                                    helperText={error?.message}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <LuEye /> : <LuEyeOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </>
                        )}
                    />
                    <Controller
                        name="rememberMe"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <FormControlLabel
                                control={<Checkbox {...field} color="primary" />}
                                label="Remember me"
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log In
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

function FormLayout() {
    const theme = useTheme();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <Box sx={{ bgcolor: "background.default", color: "text.primary" }} >
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} themeMode={theme.palette.mode} />
                </div>
                <div className={styles.content}>
                    <Header toggleSidebar={toggleSidebar} themeMode={theme.palette.mode} />
                    <div className="container">
                        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={3} sx={{ padding: '14px' }}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <BasicForm />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <IconForm />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <MultiColumnForm />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Typography variant="h6" gutterBottom sx={{ paddingBottom: "10px" }}>Form with Tabs</Typography>
                                        <FormWithTabs />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <Typography variant="h6" gutterBottom sx={{ paddingBottom: "10px" }}>Collapsible Sections</Typography>
                                        <CollapsibleForm />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <SignInForm />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
}
export default function ThemeForm() {
    return (
        <ThemeProvider>
            <FormLayout />
        </ThemeProvider>
    )
}
