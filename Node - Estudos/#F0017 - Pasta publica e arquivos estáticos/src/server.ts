import express, { type Request, type Response } from 'express';
import path, { dirname } from 'path';
import url, { fileURLToPath } from 'url';

import mainRoutes from './routes/index.ts';
import painelRoutes from './routes/painel.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tive que fazer essa adaptação no código importando 'url' 'dirname' e criando essas duas const, pois estou usando ES Module ao invés de CommonJS

const server = express();


/* server.use(express.static('public'));    */

/* server.use('/static' ,express.static('public'))  --- Aqui irá definir um préfixo para acessar a rota public: localhost/static/css/style.css*/

// O que tiver dentro daqui se transforma em uma rota que dá acesso ao que está no arquivo. É bem parecido com sistema de rotas do NextJS
// Há um problema nesse tipo de execução acima. Ele vai buscar o public na pasta onde foi executado.
// Caso eu execute o comando ts-node de uma pasta diferente pelo Terminal, não irá funcionar.

// Para contornar o problema acima, devo especificar o caminho correto da pasta public

server.use(express.static( path.join(__dirname ,'../public') ))
// 1° parâmetro utilizado - __dirname : Irá especificar o diretório raiz do projeto, no caso server.ts
// 2° informar o diretório no qual quero especificar.









server.use(mainRoutes);
server.use('/painel', painelRoutes)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!')
})

server.listen(80);