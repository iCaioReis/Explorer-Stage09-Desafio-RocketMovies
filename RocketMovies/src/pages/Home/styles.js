import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
        grid-template-rows: 116px auto;
        grid-template-areas: 
        "header"
        "movies";

    > main {
        padding: 40px 123px;
        grid-area: movies;
        overflow-y: auto;

        header {
            grid-area: header;
            display: flex;
            justify-content: space-between;

            
            h1 {
                font-size: 32px;
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-weight: 400;
            }

            Button {
                width: 207px;
            }
        }
        
    }
`;

export const Movies = styled.div`
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    overflow-y: scroll;

`;

export const Movie = styled.div`
    padding: 32px;

    background-color:  ${({ theme }) => theme.COLORS.THEME_COLOR_500};

    border-radius: 16px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    > div h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    > p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: ${({ theme }) => theme.COLORS.GRAY_800};
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
    display: flex;
    gap: 8px;

    > span {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; ;
        color: ${({ theme }) => theme.COLORS.GRAY_500};

        padding: 5px 16px;

        border-radius: 8px;
    }
`;