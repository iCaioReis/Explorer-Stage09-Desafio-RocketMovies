import { Container } from "./styles.cjs"

export function Button ({ title, ...rest }){
    return(
        <Container {...rest}>
            { title }
        </Container>
    );
};