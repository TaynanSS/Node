import express, { type Request, type Response } from 'express';

import mainRoutes from './routes/index.js';
import painelRoutes from './routes/painel.js';

const server = express();

server.use(mainRoutes);
server.use('/painel', painelRoutes)

server.listen(80);''