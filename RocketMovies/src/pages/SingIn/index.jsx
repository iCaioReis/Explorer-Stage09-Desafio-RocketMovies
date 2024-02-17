import { Link } from "react-router-dom";
import { FiMail, FiLock} from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, BackGround } from "./styles";

export function SingIn(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Faça seu login</h2>

                <Input icon={FiMail} placeholder={"E-mail"}/>
                <Input icon={FiLock} placeholder={"Senha"} type="password"/>

                <Button title={"Entrar"}/>

                <Link to="/register">Criar conta</Link>
            </Form>
            <BackGround/>
        </Container>
    );

}