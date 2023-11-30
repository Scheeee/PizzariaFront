import { Sabor } from './sabor';

describe('Sabor', () => {
  it('should create an instance', () => {
    expect(new Sabor()).toBeTruthy();
  });
  it('teste sabor', () => {
    const sabor = new Sabor();
    sabor.id = 1;
    sabor.nome = 'calabresa';
    sabor.ingredientes = 'calabresa, queijo';

    expect(sabor.id).toEqual(1);
    expect(sabor.nome).toEqual('calabresa');
    expect(sabor.ingredientes).toEqual('calabresa, queijo');
  });


  
});
