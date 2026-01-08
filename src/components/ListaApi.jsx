import { useEffect, useState } from "react";
import { buscarUsuarios } from "../services/api";


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
        return <p>Carregando usuários...</p>
    }

    if (erro) {
        return <p>Erro ao carregar usuários.</p>
    }

    return (
        <div>
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