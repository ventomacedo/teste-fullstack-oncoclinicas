
import colors   from '../../styles/colors';
import styled   from 'styled-components';

export const NavLink = styled.span`
        width:   100%;
        display: flex;

        padding: 15px 0;
        margin:       0;

        font-weight: 700;
        font-size:   1.2rem;

        color: ${ colors.black };
        transition: all .3s ease-in-out;

        cursor: pointer;
        
        > svg {
            margin-right: 5px;
            fill:         ${ colors.black };
            transition:   all .3s ease-in-out;
        }
        &:hover {
            color: ${ colors.green };
            > svg { fill: ${ colors.green }; }
        }
        &.active {
            color: ${ colors.green };
            > svg { fill: ${ colors.green }; }
        }
    `;