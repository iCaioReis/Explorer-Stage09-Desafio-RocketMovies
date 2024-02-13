import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    padding: 16px 19px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    resize: none;

    border: none;
    border-radius: 10px;

    color:  ${({ theme }) => theme.COLORS.GRAY_600};
    font-size: 14px;
`;