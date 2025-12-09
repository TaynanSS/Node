import type { Request, Response } from "express";

import { Product } from '../models/Product.ts';

export const home = (req: Request, res: Response)=>{
    let age: number = 90;
    let showOld: boolean = false

    if(age > 50) {
        showOld = true;
    } 

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);
    
    res.render('pages/home', {
        name: 'Taynan',
        lastName: 'Silva',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [
            'Alguma coisa muito legal',
            'Outra frase qualquer'
        ]
    });
};