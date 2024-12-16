import { MongoClient } from 'mongodb';

// Função responsável por conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        // Cria uma instância do cliente do MongoDB
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        
        // Tenta estabelecer a conexão com o banco de dados
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');
        
        // Retorna o cliente conectado para ser utilizado em outras operações
        return mongoClient;
    } catch (erro) {
        // Caso ocorra um erro, ele é logado e o processo é finalizado
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}
