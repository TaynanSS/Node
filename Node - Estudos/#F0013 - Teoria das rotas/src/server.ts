// Teste de rotas



import express, { type Request, type Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response)=>{
    res.send('Olá, Mundo');
});
server.get('/contato', (req: Request, res: Response)=>{
    res.send('Está é a página de contato.')
})

server.listen(80);