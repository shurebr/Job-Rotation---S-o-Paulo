//exercicio 05

// string a ser invertida
let str = "Hello, world!";

// converte a string em um array de caracteres
let charArray = str.split("");

// inverte o array de caracteres
let reversedArray = [];
for (let i = charArray.length - 1; i >= 0; i--) {
  reversedArray.push(charArray[i]);
}

// converte o array de caracteres de volta para uma string
let reversedStr = reversedArray.join("");

console.log(reversedStr); // !dlrow ,olleH