import express from 'express';

import mainRoutes from './routes/index.ts';
import painelRoutes from './routes/painel.ts';

const server = express();

server.use('/', mainRoutes);
server.use('/painel', painelRoutes)

server.listen(80);