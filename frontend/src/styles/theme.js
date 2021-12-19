import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: { body: 'Lato' },
    fontWeights: {
        light:  300,
        normal: 400,
        bold:   700,
    },
    shadows: {
        sm: '0px 3px 6px rgba(0, 0, 0, 0.0)',
        md: '0px 4px 4px rgba(0, 0, 0, 0.0)',
    },
    colors: { 
        white:  { 500: '#ffffff', 600: '#ffffff' },
        black:  { 500: '#090909', 600: '#000000' },
        gray:   { 500: '#BDBDBD', 600: '#5E5E5E' },
        silver: { 500: '#EEEDF2', 600: '#B2B1B5' },
        red:    { 500: '#ED1847', 600: '#AA1233' },
        violet: { 500: '#9A8CE5', 600: '#4D4672' },
        purple: { 500: '#56489D', 600: '#403675' },
        green:  { 500: '#00B5AD', 600: '#266264' },
    }
});

export default theme;