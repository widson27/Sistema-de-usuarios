import { useEffect, useState } from "react";

function ListaApi() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        buscarUsuarios();
    }, []);

    async function buscarUsuarios() {
        try {
            setLoading(true);
            setErro(false);

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Erro na requisição");
            }

            const dados = await response.json();
            setUsuarios(dados);
        } catch (error) {
            setErro(true);
        } finally {
            setLoading(false);
        }
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