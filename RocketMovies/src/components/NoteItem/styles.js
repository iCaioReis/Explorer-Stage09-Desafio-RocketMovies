import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_600};
    color: ${({ theme}) => theme.COLORS.THEME_COLOR};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_900}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;

        svg {
        color: ${({ theme}) => theme.COLORS.THEME_COLOR};
        
        width: 22px;
        height: 22px;
        }
    }

    > input {
        height: 56px;

        padding: 12px;

        color: ${({ theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme}) => theme.COLORS.GRAY_900};
        }
    }
`;