import conectarAoBanco from "../dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("instabytes");
    const colecao = db.collection("posts");
  
    return colecao.find().toArray();
  }
  
export async function criarPost(novoPost) {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  
  return colecao.insertOne(novoPost);

} 