import { FiArrowLeft} from "react-icons/fi";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function CreateMovie() {
    return(
        <Container>
            <Header/>

        <Form>
            <a href=""> <FiArrowLeft/> Voltar</a>
            <h1>Novo filme</h1>

            <div>
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>
            
            <Input placeholder="Observações"/>

            <h2>Marcadores</h2>

            <div>

            </div>

            <div>
                <Button title={"Excluir filme"}/>
                <Button title={"Salvar alterações"}/>
            </div>





        </Form>

        </Container>
    );
};