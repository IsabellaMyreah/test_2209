const { usuario getUser } = require('../funcoes');

test("Verifica se a função retorna nome, idade e email", () => {
    expect(usuario('isabella', 17, 'isabella@isabella.com')).toBe('isabella 17 isabella@isabella.com');
});

test('Verifica se a função retorna nome, idade e email', () => {
    const usuario = {
        nome: 'isabella',
        idade: 17,
        email: 'isabella@isabella.com',
    };

    expect(getUser ('isabella', 17, 'isabella@isabella.com')).toEqual(usuario);
});

