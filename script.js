//exercicio 1

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    console.log(vetor[i]);
  }
}

// exercicio 2
let vetor = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let soma = 0;

for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

console.log(soma);

// exercicio 3

let perfeitos = [];
let num = 2;

while (perfeitos.length < 4) {
  let soma = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      soma += i;
    }
  }
  if (soma === num) {
    perfeitos.push(num);
  }
  num++;
}

console.log(perfeitos);

// exercicio 4

let lista = [5, 8, 12, 3, 7, 10, 15, 18, 20, 25];

let numeroUsuario = prompt("Digite um número:");

if (lista.includes(Number(numeroUsuario))) {
  console.log("O número está na lista.");
} else {
  console.log("O número não está na lista.");
}

// exercicio 5

let nomes = [];
for (let i = 0; i < 5; i++) {
  nomes.push(prompt("Digite um nome:"));
}

console.log("Nomes na ordem em que foram digitados:");
console.log(nomes.join(", "));

console.log("Nomes na ordem inversa:");
console.log(nomes.reverse().join(", "));
