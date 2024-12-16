import { getTodosPosts, criarPost } from "../models/postsModels.js";

// Função que lida com a requisição para listar todos os posts
export async function listarPosts(req, res) {
    // Chama a função para buscar todos os posts no banco de dados
    const posts = await getTodosPosts();
    
    // Retorna a lista de posts como uma resposta JSON com o status HTTP 200 (OK)
    res.status(200).json(posts);
}

// Função que lida com a criação de um novo post
export async function postarNovoPOst(req, res) {
    // Obtém os dados do novo post a partir do corpo da requisição
    const novoPost = req.body;

    try {
        // Chama a função para salvar o novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        
        // Retorna os dados do post criado como uma resposta JSON com o status HTTP 200 (OK)
        res.status(200).json(postCriado);
    } catch (error) {
        // Caso ocorra um erro, loga a mensagem no console e responde com um status HTTP 500 (Erro Interno)
        console.error(error.message);
        res.status(500).json({ "Error": "Falha na requisição" });
    } finally {
        // Fecha a conexão com o cliente do banco de dados para liberar recursos
        await client.close();
    }
}
