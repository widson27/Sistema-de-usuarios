import { useState } from "react";

function Formulario({ onAdicionar }) {
    const [nome, setNome] = useState("");

    function handleSubmit() {
        if (nome === "") {
            alert("O nome não pode estar vazio")
            return;
        }

        onAdicionar(nome);
        setNome("");
    }

    return (
        <div>
            <input
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <button onClick={handleSubmit} >Adicionar</button>
        </div>
    )
}

export default Formulario;
