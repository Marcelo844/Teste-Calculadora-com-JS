const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve retornar null ao dividir por zero', () => {
  expect(dividir(10, 0)).toBeNull();
});

test('deve calcular a porcentagem corretamente', () => {
  expect(porcentagem(10, 100)).toBe(10);  
});

test('deve somar números negativos', () => {
    expect(somar(-5, -3)).toBe(-8);
});

test('deve subtrair números negativos', () =>{
    expect(subtrair(-3, -7)).toBe(4);
});

test('deve multiplicar números negativos', () => {
    expect(multiplicar(-5, -5)).toBe(25);
});

test('deve dividir números negativos', () => {
    expect(dividir(-5, -5)).toBe(1);
});

test('calcular porcentagem negativa', () => {
     expect(porcentagem(-10, -100)).toBe(10);
});