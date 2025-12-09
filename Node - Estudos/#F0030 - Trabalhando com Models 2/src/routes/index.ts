import { Router } from 'express';

import * as HomeController from '../controllers/homeController.ts';
import * as InfoController from '../controllers/infoController.ts';
import * as UserController from '../controllers/userController.ts';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nomeForm);
router.post('/nome-resultado', UserController.nomeAction);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;