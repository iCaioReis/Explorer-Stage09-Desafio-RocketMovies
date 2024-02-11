import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Form = styled.form`
    max-width: 1137px;
    height: 100vh;
    margin: 40px auto;

    > a {
            display: flex;
            align-items: center;
            gap: 8px;

            color: ${({ theme }) => theme.COLORS.THEME_COLOR};
        }
    
    > h1 {
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.THEME_COLOR};
    }
`;