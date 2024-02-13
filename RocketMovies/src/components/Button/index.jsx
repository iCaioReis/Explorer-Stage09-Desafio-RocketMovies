import { Container } from "./styles.cjs"

export function Button ({ icon: Icon, invertedColors ,title,...rest }){
    return(
        <Container 
        {...rest}

        disabled = {invertedColors}
        >
            { Icon && <Icon size={20}/>}
            { title }
        </Container>
    );
};