let num = [1, 7, 3, 5, 4, 6, 2]
num[7] = 8
num.push(9)

console.log(num[5])
console.log(`O nosso array é o ${num}!`)
console.log(`O comprimento  do nosso array é de ${num.length} posições!`)
num.sort()
console.log(`O nosso array em ordem crescente é ${num}!`)
num.sort().reverse()
console.log(`O nosso array em ordem decrescente é ${num}!`)

let pos = num.indexOf(4)
if(pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor 4 esta na posição ${pos}!`)
}

