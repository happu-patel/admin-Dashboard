import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a context to handle theme mode toggling
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark';
            if (savedMode === 'light' || savedMode === 'dark') {
                setMode(savedMode);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('themeMode', mode);
        }
    }, [mode]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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
