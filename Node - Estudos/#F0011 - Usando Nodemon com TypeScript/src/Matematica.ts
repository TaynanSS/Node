export function somar (x: number, y: number): number {
    return x + y;
}

export function subtrair (x: number, y: number): number {
    return x - y;
}

export function multiplicar (x: number, y: number): number {
    return x * y;
}

// Outra forma de exportar tudo.

export default {
    somar,
    subtrair,
    multiplicar
};