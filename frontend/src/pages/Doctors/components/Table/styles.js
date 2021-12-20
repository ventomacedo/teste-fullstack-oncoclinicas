import colors               from '../../../../styles/colors';
import styled               from 'styled-components';
import { CircularProgress } from '@chakra-ui/react'

export const Pagination = styled.ul`
        
        float: right; 
        
        margin:  25px 0;
        padding:      0;

        width: fit-content;
        display:      flex;

        flex-direction:    row;
        align-items:    center;

        li {
            background-color: ${ colors.violet };
            color:            ${ colors.white  };

            width:  30px;
            height: 30px;

            margin-right:   5px;
            border-radius: 100%;

            display:          flex;
            flex-direction: column;

            align-items:     center;
            justify-content: center;

            font-weight: 700;
            font-size:  1rem;

            transition: all .3s ease-in-out;

            cursor: pointer;

            &:last-child { margin-right: 0px; }
            &:hover  { background-color: ${ colors.purple }; }
            &.active { background-color: ${ colors.purple }; }
        }
    `;

export const Overflow = styled.ul`
        width:  100%;
        height: 100%;

        min-height 500px;

        position: relative;
        overflow-x:   auto;
    `;

export const Loading = styled(CircularProgress)`
        position:  absolute !important;
        top: 10%; left: 50%;

        .chakra-progress__indicator { stroke: ${ colors.green }; }
        transform: translateX(-50%);

        z-index: 6;
    `;