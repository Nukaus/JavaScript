let notas = [8.5, 7.0, 9.0, 6.0]
let soma = 0
for(let p = 0; p < notas.length; p ++){
    soma += notas[p]
}
total = soma
media = soma
media /= notas.length

console.log(`A soma total das notas é ${total} e a média é ${media} `)