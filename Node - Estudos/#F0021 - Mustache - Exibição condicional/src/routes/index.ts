import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let age: number = 90;
    let showOld: boolean = false
    if(age > 50) {
        showOld = true;
    } 
    
    res.render('home', {
        name: 'Taynan',
        lastName: 'Silva',
       // showWelcome: false
       showOld
    })
})
router.get('/contato', (req: Request, res: Response)=>{

    res.send('Formulário de Contato');
})
router.get('/sobre', (req: Request, res: Response)=>{

    res.send('Página Sobre a empresa');
})



export default router;