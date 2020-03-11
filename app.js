//Crie uma função recursiva para descobrir o menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo.
//Quando encontrá-lo, imprima-o na tela.

const menorNumeroInteiro = (curr, divisores) => {
  return divisores.every(divisor => curr % divisor === 0) ? curr : menorNumeroInteiro(++curr, divisores)
}

const divisores = [2, 3, 10]
const menorNumero = menorNumeroInteiro(1, divisores)

console.log(`O menor número divisível por [${divisores}] é ${menorNumero}`)
