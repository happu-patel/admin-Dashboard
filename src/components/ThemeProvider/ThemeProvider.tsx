import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme, PaletteMode } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<PaletteMode>(() => {
        const savedMode = localStorage.getItem('themeMode');
        return (savedMode as PaletteMode) || 'light';
    });

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => {
                const newMode = prevMode === 'light' ? 'dark' : 'light';
                localStorage.setItem('themeMode', newMode);
                return newMode;
            });
        },
    }), []);

    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode,
                ...(mode === 'dark' ? {
                    background: {
                        default: '#282A42',
                        paper: '#343549',
                    },
                    text: {
                        primary: '#E7E3FCDE',
                        secondary: '#E7E3FC99',
                    },
                } : {
                    background: {
                        default: '#F8F7FA !important',
                        paper: '#FFFFFF !important',
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
