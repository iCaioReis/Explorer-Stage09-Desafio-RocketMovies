import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: ${({ theme }) => theme.COLORS.THEME_COLOR};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 8px;
`;