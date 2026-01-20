let valores = []

function inserir(){
    res.innerHTML = '' 
    let num = window.document.getElementById('num')
    let selnum = window.document.getElementById('selnum')
    let n1 = Number(num.value)
    let encontrou = valores.indexOf(n1)
    if(num.value.length == 0){
        window.alert('Você precisa digitar algum valor!') 
    }else if(num.value < 1 || num.value > 100){
        window.alert('Não é possivel adicionar esse valor!')
    }else if( encontrou != -1){
        window.alert('Valor já adicionado')
    }else{
        selnum.innerHTML = ''
        valores.push(n1)

        for(let pos = 0; pos < valores.length; pos ++){
            let item = document.createElement('option')
            item.text = `O valor ${valores[pos]} foi adicionado`
            selnum.appendChild(item)
        }
    }
}

function analisar(){
    res.innerHTML = ''
    let comprimento = valores.length
    res.innerHTML += `Total de números cadastrados: ${comprimento} <br>`

    function maiorMenor(valores){
        let maior = valores[0]
        let menor = valores[0]
        for(let c = 0; c < valores.length; c++){
            let valor = valores[c]
            if( valor > maior){
                maior = valor
            }else if(valor < menor) {
                menor = valor
            }
        }
        return{maior, menor}
    }

    function soma(valores){
        let s = 0
        for(let c= 0; c < valores.length; c++){
            s += valores[c]
        }
        return s
    }
    let resultado = maiorMenor(valores)
    let somatorio = soma(valores)
    res.innerHTML += `O maior valor: ${resultado.maior} <br>`
    res.innerHTML += `O menor valor: ${resultado.menor} <br>`
    res.innerHTML += `A soma de todos valores é: ${somatorio} <br>`
    res.innerHTML += `A média dos valores é: ${somatorio/comprimento} <br>`
    
    
}
    
