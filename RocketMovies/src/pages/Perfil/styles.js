import styled from "styled-components";

export const Container = styled.div `
    display: grid;
    grid-template-rows: 144px auto;
    grid-template-areas:
    "header"
    "content";

    width: 100%;
    height: 100vh;
`;