import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    > main {
        padding: 40px 124px;
        
        
        svg {
            color:  ${({ theme }) => theme.COLORS.THEME_COLOR};
            width: 20px;
            height: 20px;
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

        .title {
            display: flex;
            align-items: center;

            margin-top: 24px;
        }

        .author {
            display: flex;
            align-items: center;
            gap: 8px;

            margin-top: 24px;

            img {
                width: 16px;
                height: 16px;

                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};;
            }

            span {
                color:  ${({ theme }) => theme.COLORS.GRAY_600};
            }
        }
    }
`;

export const Stars = styled.div`
    display: flex;
    justify-content: start;
    gap: 10px;

    padding-left: 20px;
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