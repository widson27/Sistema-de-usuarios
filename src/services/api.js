export async function buscarUsuarios() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  return response.json();
}