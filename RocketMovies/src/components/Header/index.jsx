import { Container } from "./styles";

import { Input } from "../Input";

export function Header (){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder={"aaa"}/>
            <div>
                <div>
                    <h2>Caio Reis</h2>
                    <a href="Sair"></a>
                </div>
                
                <img src="https://www.github.com/iCaioReis.png" alt="Foto do usuário" />
            </div>
            
        </Container>
    );
};