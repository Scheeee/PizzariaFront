import { Total } from './total';

describe('Total', () => {
  it('should create an instance', () => {
    expect(new Total()).toBeTruthy();
  });

  it('teste total', () => {
    const total = new Total();

    total.pedidosCancelados= 0;
    total.pedidosCartao = 1;
    total.pedidosDinheiro = 0;
    total.pedidosDoDia = 1;
    total.pedidosEncerrados = 1;
    total.pedidosEntregues = 1
    total.pedidosRetirados = 0;
    total.totalValorPedidos = 1000;    

    expect(total.pedidosCancelados).toEqual(0);
    expect(total.pedidosCartao).toEqual(1);
    expect(total.pedidosDinheiro).toEqual(0);
    expect(total.pedidosDoDia).toEqual(1);
    expect(total.pedidosEncerrados).toEqual(1);
    expect(total.pedidosEntregues).toEqual(1);
    expect(total.pedidosRetirados).toEqual(0);
    expect(total.totalValorPedidos).toEqual(1000);
 
  });

});
