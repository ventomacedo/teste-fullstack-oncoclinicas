import colors          from '../../styles/colors';
import styled          from 'styled-components';

export const Header = styled.header`
        width:       100%;

        background-color: ${ colors.green };
        color:            ${ colors.white };

        position: sticky;
        top: 0;  left: 0;

        z-index: 10;
    `;

export const Fixed = styled.section`
        width:     100%;
        padding: 15px 0;

        position: sticky;
        top: 0;  left: 0;

        border-bottom: 1px solid ${ colors.white };
    `;

export const Logo = styled.img`
    width:   200px;
    margin: 10px 0;
`;