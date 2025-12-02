import express, { type Request, type Response } from 'express';

import mainRoutes from './routes/index.ts';
import painelRoutes from './routes/painel.ts';

const server = express();

server.use(mainRoutes);
server.use('/painel', painelRoutes)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!')
})

server.listen(80);