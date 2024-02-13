import { FiArrowLeft} from "react-icons/fi";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

export function CreateMovie() {
    return(
        <Container>
            <Header/>

        <Form>
            <a href=""> <FiArrowLeft/> Voltar</a>
            <h1>Novo filme</h1>

            <div className="flex-row">
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>
            
            <TextArea placeholder="Observações" className="comments"/>

            <h2>Marcadores</h2>

            <div>

            </div>

            <div className="flex-row">
                <Button title={"Excluir filme"} invertedColors/>
                <Button title={"Salvar alterações"}/>
            </div>





        </Form>

        </Container>
    );
};