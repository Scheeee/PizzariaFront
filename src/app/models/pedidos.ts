import { Atendente } from "./atendente";
import { Clientes } from "./clientes";
import { Pizzas } from "./pizzas";
import { Produtos } from "./produtos";

export class Pedidos {

    id!: number;
    atendente!: Atendente;
    cliente!: Clientes;
    pizzas: Pizzas[] = [];
    produtos: Produtos[] = [];
    entrega!: boolean;
    detalhes!: string;
    dinheiro!: boolean;
    cadastrado!: Date;
    finalizado!: Date;
    valorTotal!: number;
    status!: string;

}
