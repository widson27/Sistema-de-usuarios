import { useState } from "react"
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaLocal from "./components/ListaLocal";
import ListaApi from "./components/ListaApi";
import "./App.css";


function App() {
  const [nomes, setNomes] = useState([]);

  function adicionarNome(novoNome) {
    setNomes([...nomes, novoNome]);
  }

  function removerNome(index) {
    const novaLista = nomes.filter((_, i) => i !== index);
    setNomes(novaLista);
  }

  return (
    <div className="app-container">
      <Header />
      <Formulario onAdicionar={adicionarNome} />
      <ListaLocal nomes={nomes} onRemover={removerNome} />
      <ListaApi />
    </div>
  )
}

export default App;
