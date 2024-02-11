import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 144px auto;
    grid-template-areas:
    "header"
    "content";

    width: 100%;
    height: 100vh;

    > header {
        display: flex;
        align-items: center;

        background-color: ${({ theme }) => theme.COLORS.THEME_COLOR_500};
        
        padding: 0 146px;

        a {
            display: flex;
            align-items: center;
            gap: 8px;

            color: ${({ theme }) => theme.COLORS.THEME_COLOR};
        }
    }
`;

export const Form = styled.form`
        max-width: 340px;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        gap: 8px;

        > div:nth-child(4){
            margin-top: 16px;
        }

        > button {
            margin-top: 16px;
        }
`;

export const Avatar = styled.div`
        position: relative;
        margin: -93px auto 32px;

        width: 186px;
        height: 186px;

       > img {
            width: 186px;
            height: 186px;
        
            border-radius: 50%;
        }

        > label {

            width: 48px;
            height: 48px;

            background-color: ${({ theme }) => theme.COLORS.THEME_COLOR};
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            right: 7px;
            bottom: 7px;

            cursor: pointer;

            input {
                display: none;
            }

            svg {
                width: 20px;
                height: 20px;

                color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            }
        }
`;