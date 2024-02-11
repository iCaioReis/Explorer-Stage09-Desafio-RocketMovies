import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Perfil () {
    return(
        <Container>
            <header>
                <a href="/"><FiArrowLeft/>Voltar</a>
            </header>

            <form>
                <div>
                    <img src="" alt="" />
                    <button><FiCamera/></button>
                </div>

                <Input placeholder="Nome" icon={FiUser}/>
                <Input placeholder="E-mail" icon={FiMail}/>
                <Input placeholder="Senha atual" icon={FiLock}/>
                <Input placeholder="Nova senha" icon={FiLock}/>
                <Button title={"Salvar"}/>

            </form>
        </Container>
    );
}