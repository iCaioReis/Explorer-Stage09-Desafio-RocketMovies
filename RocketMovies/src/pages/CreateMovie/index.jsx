import { Link } from "react-router-dom";
import { FiArrowLeft} from "react-icons/fi";

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";

export function CreateMovie() {
    return(
        <Container>
            <Header/>

        <Form>
            <Link to={"/"}> <FiArrowLeft/> Voltar</Link>
            <h1>Novo filme</h1>

            <div className="flex-row">
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>
            
            <TextArea placeholder="Observações" className="comments"/>

            <h2>Marcadores</h2>

            <div className="markers">
                <NoteItem value={ "teste "} />
                <NoteItem value="" isNew placeholder={"Novo marcador"} />
            </div>

            <div className="flex-row">
                <Button title={"Excluir filme"} invertedColors/>
                <Button title={"Salvar alterações"}/>
            </div>





        </Form>

        </Container>
    );
};