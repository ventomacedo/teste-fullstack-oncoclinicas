import colors          from '../../styles/colors';
import styled          from 'styled-components';

export const Title = styled.section`
        width:   100%;
        padding: 25px 0 80px;
        
        background-color: ${ colors.green };
    `;

export const Button = styled.button`
        width:   200px;
        padding:  10px;
        
        background-color: ${ colors.green };
        border: 1px solid ${ colors.white };
        
        border-radius: 5px;
        font-weight:   700;
        font-size:  1.2rem;
        
        color:        ${ colors.white };
        transition: all .3s ease-in-out;
        
        &:hover {
            background-color: ${ colors.white };
            color:            ${ colors.green };
        }
    `;