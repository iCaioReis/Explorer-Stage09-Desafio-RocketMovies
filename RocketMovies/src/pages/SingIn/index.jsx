import { Container, Form, BackGround } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock} from "react-icons/fi"

export function SingIn(){
    return (
        <Container>
            <Form>

            
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Faça seu login</h2>

                <Input icon={FiMail} placeholder={"E-mail"}/>
                <Input icon={FiLock} placeholder={"Senha"}/>

                <Button title={"Entrar"}/>

                <a href="/">Criar conta</a>
            </Form>
            <BackGround/>
        </Container>
    );

}