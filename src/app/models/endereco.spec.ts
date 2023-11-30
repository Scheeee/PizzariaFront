import { Clientes } from './clientes';
import { Endereco } from './endereco';

describe('Endereco', () => {
  it('should create an instance', () => {
    expect(new Endereco()).toBeTruthy();
  });

  it('teste endereço', () => {
    const cliente = new Clientes();
    const endereco = new Endereco();

    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    
    endereco.rua= 'rua';
    endereco.complemento = 'esquina';
    endereco.id = 1;
    endereco.numero = '123';
    endereco.cliente = cliente;

    expect(endereco.id).toEqual(1);
    expect(endereco.rua).toEqual('rua');
    expect(endereco.complemento).toEqual('esquina');
    expect(endereco.numero).toEqual('123');
    expect(endereco.cliente).toEqual(cliente);
  }
  );
});
