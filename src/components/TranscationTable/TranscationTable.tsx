import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import visaLogo from '../../images/visa.png';
import mastercardLogo from '../../images/mastercard.png';
import amexLogo from '../../images/american-express.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface Transaction {
    cardType: string;
    cardNumber: string;
    status: string;
    statusVerified: string;
    date: string;
    amount: number;
}

interface TransactionTableProps {
    transactions: Transaction[];
    themeMode: 'light' | 'dark';
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions, themeMode }) => {
    const getCardLogo = (cardType: string): StaticImageData => {
        switch (cardType.toLowerCase()) {
            case 'visa':
                return visaLogo;
            case 'mastercard':
                return mastercardLogo;
            case 'atm':
                return amexLogo;
            default:
                return visaLogo; // Default logo
        }
    };

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleMenuClick = (): void => {
        setShowMenu(!showMenu);
    };

    const styles: { [key: string]: React.CSSProperties } = {
        tableContainer: {
            fontFamily: 'Public Sans, sans-serif',
        },
        tableHeading: {
            position: 'relative',
            color: themeMode === 'dark' ? '#E7E3FC99' : '#4a5568',
        },
        heading: {
            fontWeight: 500,
            fontSize: '1.125rem',
            lineHeight: 1.5556,
            padding: '20px 20px',
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.9)',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            color: themeMode === 'dark' ? '#E7E3FC99' : '#4a5568',
        },
        th: {
            textAlign: 'left',
            borderBottom: '1px solid rgb( 47 43 61 / 0.12)',
            borderTop: '1px solid rgb( 47 43 61 / 0.12)',
            padding: '12px 20px',
            fontWeight: 500,
            lineHeight: '1.5rem',
            fontSize: '.8125rem',
            letterSpacing: '.2px',
            color: themeMode === 'dark' ? '#E7E3FC99' : '#4a5568',
        },
        td: {
            padding: '12px 16px',
        },
        cardInfo: {
            display: 'flex',
            columnGap: '20px',
            alignItems: 'center',
        },
        cardImg: {
            backgroundColor: 'rgb( 47 43 61 / 0.06)',
            borderRadius: '5px',
            width: '40px',
            height: '30px',
            fontSize: '0.9375rem',
            lineHeight: 1.2,
        },
        cardLogo: {
            width: '30px',
            marginTop: '4px',
            marginLeft: '4px',
            height: '20px',
            marginRight: '12px',
        },
        cardNumber: {
            fontWeight: 400,
            fontSize: '0.9375rem',
            lineHeight: 1.46667,
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.9)',
        },
        cardType: {
            fontWeight: 400,
            lineHeight: 1.53846154,
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.4)',
            fontSize: '0.8125rem',
        },
        sent: {
            fontWeight: 400,
            fontSize: '0.9375rem',
            lineHeight: 1.46667,
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.9)',
        },
        date: {
            fontWeight: 400,
            lineHeight: 1.53846154,
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.4)',
            fontSize: '0.8125rem',
        },
        status: {
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.8125rem',
            fontWeight: 500,
        },
        verified: {
            backgroundColor: '#c6f6d5',
            color: '#2f855a',
        },
        rejected: {
            backgroundColor: '#fed7d7',
            color: '#c53030',
        },
        pending: {
            backgroundColor: '#e2e8f0',
            color: '#4a5568',
        },
        trend: {
            fontWeight: 400,
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.9)',
        },
        positive: {
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.9)',
        },
        negative: {
            color: themeMode === 'dark' ? '#E7E3FC99' : 'rgb( 47 43 61 / 0.9)',
        },
    };

    return (
        <div style={styles.tableContainer}>
            <div style={styles.tableHeading}>
                <h2 style={styles.heading}>Last Transaction</h2>
                <div className='c_icon p-3'>
                    <FontAwesomeIcon icon={faEllipsisV} onClick={handleMenuClick} />
                    {showMenu && (
                        <ul className="dropdown-menu show-menu" style={{ backgroundColor: themeMode === 'dark' ? '#2F3349' : '#FFFF' }}>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Week</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Month</a></li>
                            <li><a href="#" style={{ color: themeMode === 'dark' ? '#E7E3Fc99' : '#333' }}>Last Year</a></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="table-responsive">
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>CARD</th>
                            <th style={styles.th}>DATE</th>
                            <th style={styles.th}>STATUS</th>
                            <th style={styles.th}>TREND</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td style={styles.td}>
                                    <div style={styles.cardInfo}>
                                        <div style={styles.cardImg}>
                                            <Image
                                                src={getCardLogo(transaction.cardType)}
                                                alt={transaction.cardType}
                                                width={30}
                                                height={20}
                                                style={styles.cardLogo}
                                            />
                                        </div>
                                        <div>
                                            <div style={styles.cardNumber}>*{transaction.cardNumber}</div>
                                            <div style={styles.cardType}>{transaction.cardType}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={styles.td}>
                                    <div style={styles.sent}>{transaction.status}</div>
                                    <div style={styles.date}>{transaction.date}</div>
                                </td>
                                <td style={styles.td}>
                                    <span style={{
                                        ...styles.status,
                                        ...(transaction.statusVerified === 'Verified' ? styles.verified :
                                            transaction.statusVerified === 'Rejected' ? styles.rejected :
                                                styles.pending)
                                    }}>
                                        {transaction.statusVerified}
                                    </span>
                                </td>
                                <td style={{
                                    ...styles.td,
                                    ...styles.trend,
                                    color: transaction.amount > 0 ? styles.positive.color : styles.negative.color
                                }}>
                                    {transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .table-responsive {
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                    table {
                        min-width: 650px;
                    }
                }
            `}</style>
        </div>
    );
};

export default TransactionTable;
