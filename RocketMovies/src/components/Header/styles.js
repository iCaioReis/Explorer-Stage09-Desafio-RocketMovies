import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 116px;
    padding: 24px 123px;

    display: flex;
    align-items: center;
    gap: 64px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

    > h1 {
        color: ${({ theme }) => theme.COLORS.THEME_COLOR};
        font-size: 24px;
        font-weight: 700;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 64px;
        height: 64px;

        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

    > div {
        flex-direction: column;
        text-align: end;
        display: flex;
        
        margin-right: 9px;

        strong {
            color: ${({ theme }) => theme.COLORS.GRAY_600};
            white-space: nowrap;
            font-size: 14px;
            
        }

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_900};
            font-size: 14px;
        }
    }
   
`;