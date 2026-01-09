import { useEffect, useState } from "react";
import { buscarUsuarios } from "../services/api";
import "./ListaApi.css";



function ListaApi() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregar() {
            try {
                setLoading(true);
                setErro(false);

                const dados = await buscarUsuarios();
                setUsuarios(dados);
            } catch (error) {
                setErro(true);
            } finally {
                setLoading(false);
            }
        }

        carregar();
    }, []);

    if(loading) {
        return <p className="loading">Carregando usuários...</p>
    }

    if (erro) {
        return <p className="erro">Erro ao carregar usuários.</p>
    }

    return (
        <div className="lista-api">
            <h2>Usuários da API</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.name} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaApi;