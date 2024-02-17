import { Link } from "react-router-dom";
import { FiUser ,FiMail, FiLock, FiArrowLeft} from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, BackGround } from "./styles";

export function SingUp(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Crie sua conta</h2>

                <Input icon={FiUser} placeholder={"Nome"}/>
                <Input icon={FiMail} placeholder={"E-mail"}/>
                <Input icon={FiLock} placeholder={"Senha"} type="password"/>

                <Button title={"Cadastrar"}/>

                <Link to="/"> <FiArrowLeft/> Voltar para login</Link>
            </Form>
            <BackGround/>
        </Container>
    );

}