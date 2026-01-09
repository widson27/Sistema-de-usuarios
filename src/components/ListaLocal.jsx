import "./ListaLocal.css"

function ListaLocal({ nomes, onRemover }) {
  return (
    <ul className="lista-local">
      {nomes.map((nome, index) => (
        <li key={index}>
          {nome}
          <button onClick={() => onRemover(index)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaLocal;