const URL = "https://overfast-api.tekrop.fr/heroes";

export async function chamarApi() {
  try {
    const resposta = await fetch(URL);
    if (!resposta.ok) {
      throw new Error(`${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error(erro.message);
  }
}