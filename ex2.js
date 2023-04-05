    //Exercicio 02

function fibonacci(numero) {
  let a = 0, b = 1, temp;
  
  while (b <= numero) {
    if (b === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci!`;
    }
    temp = a;
    a = b;
    b += temp;
  }
  
  return `O número ${numero} não pertence à sequência de Fibonacci!`;
}

// Exemplo de uso:
console.log(fibonacci(8)); // retorna "O número 8 pertence à sequência de Fibonacci!"
console.log(fibonacci(15)); // retorna "O número 15 não pertence à sequência de Fibonacci!"
