// _app.tsx or your main file
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const DynamicThemeProvider = dynamic(() => import('@/components/ThemeProvider/ThemeProvider'), {
    ssr: false, // Disable SSR
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <DynamicThemeProvider>
            <Component {...pageProps} />
        </DynamicThemeProvider>
    );
};

export default MyApp;
