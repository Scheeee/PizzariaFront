import { Clientes } from './clientes';

describe('Clientes', () => {
  it('should create an instance', () => {
    expect(new Clientes()).toBeTruthy();
  });
  it('teste cliente', () => {
    const cliente = new Clientes();
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';

    expect(cliente.id).toEqual(1);
    expect(cliente.nome).toEqual('ana');
    expect(cliente.telefone).toEqual('45-9999-4533');
    
  });

});
