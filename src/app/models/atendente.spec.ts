import { Atendente } from './atendente';

describe('Atendente', () => {
  it('should create', () => {
    expect(new Atendente()).toBeTruthy();
  });
  it('should create an instance', () => {
    const atendente = new Atendente();
    expect(atendente).toBeTruthy();
    expect(atendente.id).toBeUndefined();
    expect(atendente.username).toBeUndefined();
    expect(atendente.password).toBeUndefined();
    expect(atendente.role).toBeUndefined();
    expect(atendente.token).toBeUndefined();
  });

  it('teste atendente', () => {
    const atendente = new Atendente();
    atendente.id = 1;
    atendente.username = 'testuser';
    atendente.password = 'testpassword';
    atendente.role = 'USER';
    atendente.token = 'testtoken';

    expect(atendente.id).toEqual(1);
    expect(atendente.username).toEqual('testuser');
    expect(atendente.password).toEqual('testpassword');
    expect(atendente.role).toEqual('USER');
    expect(atendente.token).toEqual('testtoken');
  });
});

