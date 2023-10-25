import { Pedidos } from "./pedidos";
import { Sabor } from "./sabor";

export class Pizzas {

    id!: number;
    tamanho!: string;
    pedidos: Pedidos[]= [];
    sabores: Sabor[] = [];
    valorUnit!: number;
}
