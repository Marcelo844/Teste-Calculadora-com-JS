function somar(a, b) {
  if (a == null || b == null) return null;
  return a + b;
}

function subtrair(a, b) {
  if (a == null || b == null) return null;
  return a - b;
}

function multiplicar(a, b) {
  if (a == null || b == null) return null;
  return a * b;
}

function dividir(a, b) {
  if (a == null || b == null || b === 0) return null;
  return a / b;
}

function porcentagem(a, b){
    if (isNaN(a) || isNaN(b) || b === 0) return null;
    return (a / b) * 100;
}

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem };
