// Como não estou usando BD ainda, irei criar uma variável com os objetos.

type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto Z', price: 20}
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    }
}