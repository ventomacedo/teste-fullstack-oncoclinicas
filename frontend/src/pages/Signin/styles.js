import colors          from '../../styles/colors';
import backgroundImg   from '../../assets/images/signin-background.jpg';
import styled          from 'styled-components';

export const Main = styled.div`
        height:        100vh;
        display:        flex;
        align-items: stretch;
    `;

export const Aside = styled.div`
    flex:    7;
    padding: 100px 80px;

    background-image:    url(${ backgroundImg });
    background-repeat:   no-repeat;
    background-size:     cover;
    background-position: center;
`;

export const Content = styled.div`
    width: 40%;
    background-color: ${colors.white};
    color:            ${colors.black};
    font-size:        1rem;

    flex:     8;
    padding:  0 100px;
    
    display:        flex;
    flex-direction: column;
    
    align-items:     center;
    justify-content: center;
`;

export const Form = styled.form`
        width:    70%;
        display: flex;

        flex-direction:  column;
        align-items:     center;
        justify-content: center;
        margin:       30px auto;
    `;

export const Logo = styled.img`
        width:       100%;
        margin: 25px auto;

        min-width:  250px;
        max-width:  400px;
    `;

export const Error = styled.small`
        width:    100%;
        padding: 5px 0;

        font-weight: 300;
        font-size: .9rem;

        color: ${ colors.red };
    `;