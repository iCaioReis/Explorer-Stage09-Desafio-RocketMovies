import { Input } from "../Input";

import { Container, Profile} from "./styles";

export function Header (){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder={"Pesquisar pelo título"}/>
            <Profile>
                <div>
                    <strong>Caio Reis</strong>
                    <a href="/">Sair</a>
                </div>
                
                <img src="https://www.github.com/iCaioReis.png" alt="Foto do usuário" />
            </Profile>
            
        </Container>
    );
};