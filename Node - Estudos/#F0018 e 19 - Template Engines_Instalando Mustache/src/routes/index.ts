import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.render('home')
})
router.get('/contato', (req: Request, res: Response)=>{

    res.send('Formulário de Contato');
})
router.get('/sobre', (req: Request, res: Response)=>{

    res.send('Página Sobre a empresa');
})



export default router;