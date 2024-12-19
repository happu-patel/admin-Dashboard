// components/ThemeProvider/ThemeProvider.tsx
import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a context to handle theme mode toggling
<<<<<<< HEAD
export const ColorModeContext = createContext({ toggleColorMode: () => { } });
=======
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
>>>>>>> 64667907b21f308229f6b4382280ad0f75331f40

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // Ensure this code only runs in the browser (client-side)
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark';
            if (savedMode === 'light' || savedMode === 'dark') {
<<<<<<< HEAD
                setMode(savedMode);
=======
                setMode(savedMode);  // Set the mode based on localStorage
>>>>>>> 64667907b21f308229f6b4382280ad0f75331f40
            }
        }
    }, []); // Only run on mount

    useEffect(() => {
        // Ensure this code only runs in the browser (client-side)
        if (typeof window !== 'undefined') {
            localStorage.setItem('themeMode', mode);  // Save mode to localStorage when it changes
        }
    }, [mode]);  // Run whenever mode changes

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
<<<<<<< HEAD
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
=======
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));  // Toggle between modes
>>>>>>> 64667907b21f308229f6b4382280ad0f75331f40
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'dark'
                        ? {
<<<<<<< HEAD
                            background: {
                                default: '#282A42',
                                paper: '#343549',
                            },
                            text: {
                                primary: '#E7E3FCDE',
                                secondary: '#E7E3FC99',
                            },
                        }
                        : {
                            background: {
                                default: '#F8F7FA',
                                paper: '#FFFFFF',
                            },
                            text: {
                                primary: '#000000DE',
                                secondary: '#00000099',
                            },
                        }),
=======
                              background: {
                                  default: '#282A42',
                                  paper: '#343549',
                              },
                              text: {
                                  primary: '#E7E3FCDE',
                                  secondary: '#E7E3FC99',
                              },
                          }
                        : {
                              background: {
                                  default: '#F8F7FA',
                                  paper: '#FFFFFF',
                              },
                              text: {
                                  primary: '#000000DE',
                                  secondary: '#00000099',
                              },
                          }),
>>>>>>> 64667907b21f308229f6b4382280ad0f75331f40
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeProvider;
