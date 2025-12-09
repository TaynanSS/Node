import express, { type Request, type Response } from 'express';
import path, { dirname } from 'path';
import url, { fileURLToPath } from 'url';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

import mainRoutes from './routes/index.ts';
import painelRoutes from './routes/painel.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config(); // Assim torna acessível o uso das variáveis de ambiente.

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views')) // Como a pasta "views" já está dentro da src, não precisa volta a pasta usando "../"
server.engine('mustache', mustache());

server.use(express.static( path.join(__dirname ,'../public')));

server.use(express.urlencoded({extended: true})); // Habilita que pegue, via POST, os dados do corpo da requisição e ajuste os dados para serem acessíveis dentro da rota.

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!')
})

server.listen(process.env.PORT);