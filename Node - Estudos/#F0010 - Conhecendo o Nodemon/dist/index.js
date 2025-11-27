// import * as Matematica from ""./Matematica.js";"
import validator from 'validator';
let name = 'taynan';
if (validator.isLowercase(name)) {
    console.log(`A string ${name} é toda minúscula.`);
}
else {
    console.log(`A string ${name} NÃO é toda minúscula.`);
}
//# sourceMappingURL=index.js.map