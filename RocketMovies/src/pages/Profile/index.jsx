import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile () {
    return(
        <Container>
            <header>
                <a href="/"><FiArrowLeft/>Voltar</a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/iCaioReis.png" alt="Imagem do usuário"/>
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
            </Avatar>
                
                <Input placeholder="Nome" icon={FiUser}/>
                <Input placeholder="E-mail" icon={FiMail}/>
                <Input placeholder="Senha atual" icon={FiLock}/>
                <Input placeholder="Nova senha" icon={FiLock}/>
                <Button title={"Salvar"}/>

            </Form>
        </Container>
    );
}