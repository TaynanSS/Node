
import express, { type Request, type Response } from 'express';

const server = express();


// Possui dois parâmetros, sendo o primeiro a rota onde nesse exemplo é "/"
// O segundo é uma função, um callback. 
server.get('/', (req: Request, res: Response)=>{
    res.send('Olá, Mundo');
});

//___________________Rota Estática__________________________________

// Exemplo fazendo uma função apenas para a homepage.
const HomePage = (req: Request, res: Response)=>{
    res.send('Olá Mundo.')
}

server.get('/', HomePage)
//_____________________________________________________



//___________________Rota Dinâmica__________________________________

server.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug = req.params.slug;

    res.send(`Noticia: ${slug}`)
})

//_____________________________________________________



//__________________Rotas com mais de um valor dinâmico___________________________________

server.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    let { origem, destino } = req.params;

    res.send(`Procurando voos de ${origem?.toUpperCase()} até ${destino?.toUpperCase()}`)
})

//_____________________________________________________



// GET, POST, PUT, DELETE
// GET : Acessar uma página.
// POST : Quando for para mandar algo internamente.


server.listen(80);''