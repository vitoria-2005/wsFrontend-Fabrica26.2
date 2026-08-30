export async function chamarApi(role = 'todos') {
  try {

    const URL = role && role !== 'todos' 
      ? `https://overfast-api.tekrop.fr/heroes?role=${role}`
      : 'https://overfast-api.tekrop.fr/heroes';

    const resposta = await fetch(URL);
    if (!resposta.ok) {
      throw new Error(`${resposta.status} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    return dados;
    
  } catch (erro) {
    console.error(erro.message);
    return [];
  }
}
