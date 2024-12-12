"use client";
import React, { useState } from "react";
import "../globals.css";
import styles from "../page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./faq.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {
    Box,
    useTheme,
    Theme,
    Grid,
    Tab,
    Tabs,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Chip,
} from "@mui/material";
import faqHeaderImage from "@/images/faq-header.png";
import { TbSearch, TbCreditCard, TbBriefcase, TbRefresh, TbCube, TbSettings, TbPhone, TbMail } from "react-icons/tb";
import Image from "next/image";
import faq1 from "@/images/faq 1.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

function Faq(): JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [tabValue, setTabValue] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);
    const [searchResults, setSearchResults] = useState<{ tabIndex: number, faqIndex: number }[]>([]);
    const theme: Theme = useTheme();


    const toggleSidebar = (): void => setIsSidebarOpen((prev) => !prev);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.trim() === '') {
            setSearchResults([]);
            setExpandedAccordion(false);
            return;
        }

        const results: { tabIndex: number, faqIndex: number }[] = [];

        faqData.forEach((category, tabIndex) => {
            category.faqs.forEach((faq, faqIndex) => {
                if (faq.question.toLowerCase().includes(term) ||
                    faq.answer.toLowerCase().includes(term)) {
                    results.push({ tabIndex, faqIndex });
                }
            });
        });

        setSearchResults(results);

        if (results.length > 0) {
            setTabValue(results[0].tabIndex);
            setExpandedAccordion(`panel${results[0].faqIndex}`);
        } else {
            setExpandedAccordion(false);
        }
    };

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    const faqData = [
        {
            label: "Payment",
            subtitle: "Get help with payment",
            icon: <TbCreditCard />,
            faqs: [
                {
                    question: "When is payment taken for my order?",
                    answer:
                        "Payment is taken during the checkout process when you pay for your order. The order number that appears on the confirmation screen indicates payment has been successfully processed.",
                },
                {
                    question: "How do i pay for my order?",
                    answer:
                        " We accept Visa®, MasterCard®, American Express®, and PayPal®.Our servers encrypt all information submitted to them, so you can be confident that your credit card information will be kept safe and secure."
                },
                {
                    question: "What should i do if i'm having trouble placing an order?",
                    answer:
                        "For any technical difficulties you are experiencing with our website, please contact us at our support portal, or you can call us toll-free at 1-000-000-000, or email us at order@companymail.com",
                },
                {
                    question: "Which license do i need for an end product that is only accessible to paying users?",
                    answer:
                        "If you have paying users or you are developing any SaaS products then you need an Extended License. For each products, you need a license. You can get free lifetime updates as well.",
                },
                {
                    question: "Does my subscription automatically renew?",
                    answer:
                        "No, This is not subscription based item.Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps.",
                },
            ],
        },
        {
            label: "Delivery",
            subtitle: "Get help with delivery",
            icon: <TbBriefcase />,
            faqs: [
                {
                    question: "How would you ship my order?",
                    answer:
                        "For large products, we deliver your product via a third party logistics company offering you the “room of choice” scheduled delivery service. For small products, we offer free parcel delivery.",
                },
                {
                    question: "What is the delivery cost of my order?",
                    answer: "The cost of scheduled delivery is $69 or $99 per order, depending on the destination postal code. The parcel delivery is free.",
                },
                {
                    question: "What to do if my product arrives damaged?",
                    answer: "We will promptly replace any product that is damaged in transit. Just contact our support team, to notify us of the situation within 48 hours of product arrival.",
                },
            ],
        },
        {
            label: "Cancellation & Return",
            subtitle: "Get help with cancellation & return",
            icon: <TbRefresh />,
            faqs: [
                {
                    question: "Can I cancel my order?",
                    answer:
                        "Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund. Parcel delivery orders cannot be cancelled, however a free return label can be provided upon request.",
                },
                {
                    question: "Can I return my product?",
                    answer: "You can return your product within 15 days of delivery, by contacting our support team, All merchandise returned must be in the original packaging with all original items.",
                },
                {
                    question: "Where can I view status of return?",
                    answer: "Locate the item from Your Orders. Select Return/Refund status",
                },
            ],
        },
        {
            label: "My Orders",
            subtitle: "Order details",
            icon: <TbCube />,
            faqs: [
                {
                    question: "Has my order been successful?",
                    answer:
                        "All successful order transactions will receive an order confirmation email once the order has been processed. If you have not received your order confirmation email within 24 hours, check your junk email or spam folder. Alternatively, log in to your account to check your order summary. If you do not have a account, you can contact our Customer Care Team on 1-000-000-000.",
                },
                {
                    question: "My Promotion Code is not working, what can I do?",
                    answer:
                        "If you are having issues with a promotion code, please contact us at 1 000 000 000 for assistance.",
                },
                {
                    question: "How do I track my Orders?",
                    answer:
                        "If you have an account just sign into your account from here and select “My Orders”. If you have a a guest account track your order from here using the order number and the email address.",
                },
            ],
        },
        {
            label: "Product & Services",
            subtitle: "Get help with product & services",
            icon: <TbSettings />,
            faqs: [
                {
                    question: "Will I be notified once my order has shipped?",
                    answer:
                        "Yes, We will send you an email once your order has been shipped. This email will contain tracking and order information.",
                },
                {
                    question: "Where can I find warranty information?",
                    answer:
                        "We are committed to quality products. For information on warranty period and warranty services, visit our Warranty section here.",
                },
                {
                    question: "How can I purchase additional warranty coverage?",
                    answer:
                        "For the peace of your mind, we offer extended warranty plans that add additional year(s) of protection to the standard manufacturer’s warranty provided by us. To purchase or find out more about the extended warranty program, visit Extended Warranty section here.",
                },
            ],
        },
    ];
   
    return (
        <Box
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
            }}
        >
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
                        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    backgroundImage: `url(${faqHeaderImage.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    width: "100%",
                                    height: "310px",
                                    padding: 5,
                                    borderRadius: "8px",
                                    color: "text.primary",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <h1 className="heading">Hello, how can we help?</h1>
                                <p className="subtitle">
                                    or choose a category to quickly find the help you need
                                </p>
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        maxWidth: "600px",
                                        mt: 2,
                                    }}
                                >
                                    <input
                                        type="text"
                                        placeholder="search articles..."
                                        value={searchTerm}
                                        onChange={handleSearch}
                                        style={{
                                            width: "100%",
                                            padding: "7.25px 27px",
                                            borderRadius: "6px",
                                            border: "1px solid #ccc",
                                            outline: "none",
                                        }}
                                    />
                                    <TbSearch
                                        style={{
                                            position: "absolute",
                                            left: "8px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            color: "#000",
                                        }}
                                        className="searchicon"
                                    />
                                </Box>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={5} md={4} lg={3} className="d-flex flex-column align-items-center gap-4">
                                    <Tabs
                                        orientation="vertical"
                                        value={tabValue}
                                        onChange={handleTabChange}
                                        aria-label="FAQ Tabs"
                                        sx={{ borderRight: 1, borderColor: "divider" }}
                                    >
                                        {faqData.map((tab, index) => (
                                            <Tab
                                                key={index}
                                                label={tab.label}
                                                icon={tab.icon}
                                                iconPosition="start"
                                            />
                                        ))}
                                    </Tabs>
                                    <Box sx={{ mt: 2 }}>
                                        <Image
                                            src={faq1}
                                            alt="Picture of the FAQ"
                                            width={200}
                                            height={200}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={7} md={8} lg={9}>
    <Box sx={{ p: 2 }}>
        {searchTerm && searchResults.length === 0 ? (
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                No results found for "{searchTerm}".
            </Typography>
        ) : (
            <>
                <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'rgb(115 103 240 / 0.16) !important',
                            color: '#7367F0 !important',
                            padding: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2
                        }}
                    >
                        {faqData[tabValue]?.icon}
                    </Box>
                    <Box>
                        <Box component="span" sx={{ display: 'block', fontWeight: 'bold' }}>
                            {faqData[tabValue]?.label}
                        </Box>
                        <Box component="p" sx={{ mt: 0, mb: 0, color: 'text.secondary' }}>
                            {faqData[tabValue]?.subtitle}
                        </Box>
                    </Box>
                </Typography>

                {faqData[tabValue].faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        expanded={expandedAccordion === `panel${index}`}
                        onChange={handleAccordionChange(`panel${index}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </>
        )}
    </Box>
</Grid>

                                <Grid item xs={12}>
                                    <div className="d-flex justify-content-center flex-column text-center gap-2 align-items-center">
                                        <Chip label="Question" color="primary" size="small" />
                                        <Typography variant="h4">You still have a question?</Typography>
                                        <Typography variant="body1" sx={{ color: 'rgb(47 43 61 / 0.7)' }}>If you cannot find a question in our FAQ, you can always contact us. We will answer you shortly!</Typography>
                                    </div>
                                    <Grid container spacing={2} sx={{ mt: 4 }}>
                                        <Grid item xs={12} sm={6} paddingBottom={5}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    padding: "16px",
                                                    backgroundColor: "#f8f8fa", // Use your preferred background color
                                                    borderRadius: "8px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#ecebff',
                                                        padding: "16px",
                                                        borderRadius: "8px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        marginBottom: "16px",
                                                    }}
                                                >
                                                    <TbPhone size={32} color="#7367F0" />
                                                </Box>
                                                <Typography variant="h6">+ (810) 2548 2568</Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    We are always happy to help!
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} paddingBottom={5}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    padding: "16px",
                                                    backgroundColor: "#f8f8fa",
                                                    borderRadius: "8px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#ecebff',
                                                        padding: "16px",
                                                        borderRadius: "8px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        marginBottom: "16px",
                                                    }}
                                                >
                                                    <TbMail size={32} color="#7367F0" />
                                                </Box>
                                                <Typography variant="h6">hello@help.com</Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Best way to get an answer faster!
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default function ThemeFaq() {
    return (
        <ThemeProvider>
            <Faq />
        </ThemeProvider>
    )
}
