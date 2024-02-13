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
        color: ${({ theme }) => theme.COLORS.GRAY_600};

        margin-top: 40px;
    }

    > .flex-row {
        display: flex;
        gap: 40px;

        margin-top: 40px;
    }

    > .comments {
        margin-top: 40px;
    }
`;