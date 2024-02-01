import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        padding: 40px 123px;

        div {
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

`;

export const Movie = styled.div`
    padding: 32px;

    background-color:  ${({ theme }) => theme.COLORS.THEME_COLOR_500};

    border-radius: 16px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
    
`;