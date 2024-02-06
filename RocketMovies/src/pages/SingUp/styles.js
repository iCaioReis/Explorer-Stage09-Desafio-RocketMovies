import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`;

export const Form = styled.form`
    padding: 0 164px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme}) => theme.COLORS.THEME_COLOR};
    }

    >span {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme}) => theme.COLORS.GRAY_700};
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        color: ${({ theme}) => theme.COLORS.GRAY_600};

        margin: 48px 0;
    }

    > div {
        margin-bottom: 8px;
    }

    > button {
        margin-top: 16px;
    }
    
    > a {
        margin: 42px auto 0;
        color: ${({ theme}) => theme.COLORS.THEME_COLOR};
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const BackGround = styled.form`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    filter: opacity(0.4);
`;