let totalCliente = []
function calculoTotal(){
    let servicos = window.document.getElementById('servicos')
    let risco = window.document.getElementById('risco')
    let peca = window.document.getElementById('peca')
    let entrega = window.document.getElementById('entrega')
    let res = window.document.getElementById('res')


    let serv = Number(servicos.value)
    let risc = Number(risco.value)
    let pec = Number(peca.value)
    let entr = Number(entrega.value)

    if(entrega.value == '' ){
        entr = 0
        entrega.value = 0
    }
    if(peca.value == ''){
        pec = 0
        peca.value = 0
    }
    var servMax = ''
    var servMin = ''
    switch(serv){
        case 0:
            servMax = 200
            servMin= 120
            break
        case 1:
            servMax = 120
            servMin= 80
            break
        case 2:
            servMax = 150
            servMin= 100
            break
        case 3:
            servMax = 120
            servMin= 80
            break
        case 4:
            servMax = 120
            servMin= 80
            break
        case 5:
            servMax = 150
            servMin= 100
            break
        case 6:
            servMax = 150
            servMin= 100
            break
        case 7:
            servMax = 120
            servMin= 80
            break
        case 8:
            servMax = 150
            servMin= 120
            break
        case 9:
            servMax = 200
            servMin= 150
            break
        case 10:
            servMax = 200
            servMin= 150
            break
        case 11:
            servMax = 250
            servMin= 180
            break
        case 12:
            servMax = 300
            servMin= 200
            break
        case 13:
            servMax = 130
            servMin= 100
            break
        case 14:
            servMax = 180
            servMin= 120
            break
        case 15:
            servMax = 200
            servMin= 150
            break
        case 16:
            servMax = 400
            servMin= 250
            break
    }

    var total = ''

    if(risc == 0){
    total = servMax + pec + entr
    }else{
        total = ((servMax + servMin) / 2) + pec + entr
    }

    entrega.value = ''
    peca.value = ''

    return total
}

function inserir(){
    let dados = calculoTotal()
    totalCliente.push(dados)
    window.alert(`O valor ${totalCliente} foi adicionado`)

}

function calcular(){
    let somaTotal = 0
    if(totalCliente.length != 0){
        for(c in totalCliente){
            somaTotal += totalCliente[c]
        }
        window.alert(somaTotal)
    }else{
        let dados = calculoTotal()
        window.alert(dados)
    }
}

function novo(){
    totalCliente = []
}