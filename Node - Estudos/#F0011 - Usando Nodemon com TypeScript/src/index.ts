// instalei a biblioteca ts-node com comando : npm install -g ts-node
// Ela faz o processo de conversão para typescript e já executa o que está no src.

// nodemon src/index.ts 
// O comando acima irá rodar a biblioteca Nodemon, e ela automaticamente já mostra o resultado do comando

// adicionei o comando "start-dev" no package.json substituiu o comando "nodemon src/index.ts"
// basta executar o comando "npm run start-dev"

import validator from 'validator'


let name: string = 'pedro'

if(validator.isLowercase(name)) {
    console.log(`A string ${name} é toda minúscula.`)
} else {
    console.log(`A string ${name} NÃO é toda minúscula.`)
}

