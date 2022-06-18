import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: { '500': '#47585B' },
        highlight: { '500': '#FFBA08' },
        info: { '500': '#999999' }
    },
    fonts: {
        heading: `'Poppins', 'sans-serif'`,
        body: `'Poppins', 'sans-serif'`
    },
    styles: {
        global: {
            body: {
                color: 'white'
            }
        }
    }
});
