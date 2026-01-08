function ListaLocal({ nomes, onRemover }) {
  return (
    <ul>
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