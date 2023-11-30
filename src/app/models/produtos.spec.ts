import { Produtos } from './produtos';

describe('Produtos', () => {
  it('should create an instance', () => {
    expect(new Produtos()).toBeTruthy();
  });
  it('teste produto', () => {
    const produto = new Produtos();

    produto.id = 1;
    produto.detalhes = 'obs';
    produto.nome = 'coca';
    produto.valorUnit = 10;


    expect(produto.id).toEqual(1);
    expect(produto.detalhes).toEqual('obs');
    expect(produto.nome).toEqual('coca');
    expect(produto.valorUnit).toEqual(10);
    
  });
});
