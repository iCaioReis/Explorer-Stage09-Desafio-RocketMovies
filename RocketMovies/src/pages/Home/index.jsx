import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Home (){
    return(
        <Container>
            <Header></Header>
            <main>
                <h1>Meus Filmes</h1>
                <Button title={"aa"}/>
            </main>
            
        </Container> 
    );
};