function inserir(){
    let num = window.document.getElementById('num')
    let selnum = window.document.getElementById('selnum')
    let valores = [1]
    if(num.value.length == 0){
        res.innerHTML = 'Você precisa digitar algum valor!'
    }else if(num.value < 1 || num.value > 100){
        res.innerHTML = 'Não é possivel adicionar esse valor!'
    }else if(valores.indexOf(num) == -1){
        res.innerHTML = 'O valor já foi inserido!'
    }else{
        valores.push(num)
    }

    for(let pos = 0; pos < valores.length; pos ++){
        console.log(valores[pos])
    }
}