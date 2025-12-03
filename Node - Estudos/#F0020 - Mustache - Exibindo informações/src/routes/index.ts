import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let user = {
        name: 'Taynan',
        age: 27
    };
    
    res.render('home', {
        user,  // posso fazer tanto dessa forma criando uma variável fora e puxando ela no render
        lastName: 'Silva' // quanto criar o objeto dentro do próprio render.
    })
})
router.get('/contato', (req: Request, res: Response)=>{

    res.send('Formulário de Contato');
})
router.get('/sobre', (req: Request, res: Response)=>{

    res.send('Página Sobre a empresa');
})



export default router;