import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";
import { Link } from "react-router-dom";

export const Item = (props) => {
    //console.log(props.match.params.id);

    const [data, setData] = useState([]);//inicialização de array que recebe os dados

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getItens = async () => {//função que vai passar o get da api e trazer resposta no consoloe.log
        await axios.get(api + "/servico/" + id + "/pedidos")
            .then((response) => {
                console.log(response.data.item);
                setData(response.data.item);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API !!!'
                })
                //console.log("Erro: sem conexão com a API !!!")
            })
    }

    useEffect(() => { // chama a execução
        getItens();
    }, [id]);

    return (
        <div>
            <Container>
                <div>
                    <h1>Pedidos do serviço!</h1>
                </div>
                {status.type === 'error' ?
                    <Alert color="danger"> {status.message}
                    </Alert> : ""}
                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ServicoId}>
                                <td>{item.PedidoId}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center/">
                                    <Link to={"listar-pedido/"}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
        // <div>Listar serviços!</div>
    );
};