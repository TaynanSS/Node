import type { Request, Response } from "express";

export const nomeForm = (req: Request, res: Response)=>{
    res.render('pages/nome', );
};

export const nomeAction = (req: Request, res: Response) => {
    let nome: string = req.body.nome as string;
    let idade: string = req.body.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    })
};

export const idadeForm = (req: Request, res: Response)=>{
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

