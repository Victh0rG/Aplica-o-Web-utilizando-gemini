import conectarAoBanco from "../dbConfig.js";

// Estabelece uma conexão com o banco de dados utilizando a string de conexão definida em uma variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para buscar todos os posts da coleção "posts" no banco de dados
export async function getTodosPosts() {
    // Obtém o banco de dados "instabytes" a partir da conexão
    const db = conexao.db("instabytes");
    
    // Seleciona a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
  
    // Retorna todos os documentos da coleção em formato de array
    return colecao.find().toArray();
}

// Função para criar um novo post na coleção "posts" no banco de dados
export async function criarPost(novoPost) {
    // Obtém o banco de dados "instabytes" a partir da conexão
    const db = conexao.db("instabytes");
    
    // Seleciona a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
  
    // Insere o novo post na coleção e retorna o resultado da operação
    return colecao.insertOne(novoPost);
}
