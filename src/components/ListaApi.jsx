import { useEffect, useState } from "react";

function ListaApi() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        buscarUsuarios();
    }, []);

    async function buscarUsuarios() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const dados = await response.json();
            setUsuarios(dados);
        } catch (error) {
            console.log("Erro ao buscar usuários", error);
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