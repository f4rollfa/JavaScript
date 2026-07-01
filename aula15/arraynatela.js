let valores = [2, 1, 5, 6, 4, 9];
valores.sort()
valores.indexOf(4)
/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}!`);
}*/

for(let pos in valores)
    console.log(valores[pos])

