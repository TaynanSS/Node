import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{

    res.send('Página Inicial do Painel');
})
router.get('/noticias', (req: Request, res: Response)=>{

    res.send('Lista de Noticias cadastradas');
})

export default router;