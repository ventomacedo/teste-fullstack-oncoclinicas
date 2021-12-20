
import styled from 'styled-components';

export const Page = styled.div`
        position: relative;
    `;

export const Filter = styled.div`
        display: flex;
        
        align-items:     center;
        justify-content: space-between;

        @media (min-width:   0px) { flex-direction: column; }
        @media (min-width: 600px) { flex-direction:    row; > div { max-width: 73% !important; }}
    `;