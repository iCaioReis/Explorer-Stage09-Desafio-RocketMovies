import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    > main {
        padding: 40px 124px;
        overflow-y: auto;

        #title {
            display: flex;
            margin-top: 150px;
        }

        a {
            display: flex;
            align-items: center;
            gap: 10px;
            color:  ${({ theme }) => theme.COLORS.THEME_COLOR};
        }

        h1 {
            font-size: 36px;
            color:  ${({ theme }) => theme.COLORS.GRAY_600};
        }

        p {
            font-size: 16px;
            color:  ${({ theme }) => theme.COLORS.GRAY_600};
            text-align: justify;
        }
    }
`;

export const Stars = styled.div`
    display: flex;
    justify-content: start;

    > svg {
        color:  ${({ theme }) => theme.COLORS.THEME_COLOR};
    }
`;

export const Tags = styled.div`
    margin-top: 48px;
    margin-bottom: 40px;

    display: flex;
    gap: 8px;

    > span {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; ;
        color: ${({ theme }) => theme.COLORS.GRAY_500};

        padding: 5px 16px;

        border-radius: 8px;
    }
`;