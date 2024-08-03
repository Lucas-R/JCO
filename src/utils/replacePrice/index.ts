export function replacePrice(price: number) {
    return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}