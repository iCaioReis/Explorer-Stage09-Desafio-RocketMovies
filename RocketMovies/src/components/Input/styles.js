import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    padding: 16px 24px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 10px;

    > input {
        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        color:  ${({ theme }) => theme.COLORS.GRAY_600};
        font-size: 14px;

        border: none;

        &::placeholder {
            ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }
`;