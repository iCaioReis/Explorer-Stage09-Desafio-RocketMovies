import { Input } from "../Input";

import { Link } from "react-router-dom";
import { Container, Profile} from "./styles";

export function Header (){
    return(
        <Container>
            <Link to={"/"}><h1>RocketMovies</h1></Link>
            <Input placeholder={"Pesquisar pelo título"}/>
            <Profile>
                <div>
                    <Link to={"/profile"}><strong>Caio Reis</strong></Link>
                    <a href="/">Sair</a>
                </div>
                
                <Link to={"/profile"}><img src="https://www.github.com/iCaioReis.png" alt="Foto do usuário" /></Link>
            </Profile>
            
        </Container>
    );
};