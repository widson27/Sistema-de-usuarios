import { useState } from "react"
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaLocal from "./components/ListaLocal";
import ListaApi from "./components/ListaApi";

function App() {
  const [nomes, setNomes] = useState([]);

  function adicionarNome(novoNome) {
    setNomes([...nomes, novoNome]);
  }

  return (
    <div>
      <Header />
      <Formulario onAdicionar={adicionarNome} />
      <ListaLocal nomes={nomes} />
      <ListaApi />
    </div>
  )
}

export default App;
