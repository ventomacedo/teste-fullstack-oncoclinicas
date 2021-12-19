import colors                from './colors';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html { 
        box-sizing: 'border-box'
        * {
            box-sizing: inheit;
            outline:    none !important;

            &::before {
                box-sizing: inheit;
                outline:    none !important
            };
            &::after {
                box-sizing: inheit;
                outline:    none !important
            }
        };
        body {
            width:     100vw;
            max-width: 100vw;
            
            margin:   0;
            padding:  0;

            font-family: Lato; san-serif;
            font-weight: 400;
            font-size:   16;
            
            color: ${colors.black};
            line-height:    1.2rem;
            letter-spacing: normal;

            overflow-x: hidden;
            overflow-y: visible;

            position:         relative;
            text-rendering":  optimizeLegibility;
            
            -webkit-text-size-adjust: none;
            -webkit-font-smoothing:   subpixel-antialiased;
            -moz-osx-font-smoothing:  colorBasescale;

            input { border: 1px solid ${ colors.silver }}
        }
    }`;