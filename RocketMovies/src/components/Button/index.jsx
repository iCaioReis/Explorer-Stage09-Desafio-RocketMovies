import { Container } from "./styles.cjs"

export function Button ({ icon: Icon, title, ...rest }){
    return(
        <Container {...rest}>
            { Icon && <Icon size={20}/>}
            { title }
        </Container>
    );
};