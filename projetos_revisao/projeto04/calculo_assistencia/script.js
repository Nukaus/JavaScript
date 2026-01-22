function capturaDados(){
    let cliente =  window.document.getElementById('cliente')
    let servicos = window.document.getElementById('servicos')
    let risco = window.document.getElementById('risco')
    let peca = window.document.getElementById('peca')
    let entrega = window.document.getElementById('entrega') 

    return {
        nomeCliente: cliente.value,
        entrega,
        peca,
        serv: Number(servicos.value), 
        risc: Number(risco.value), 
        pec: Number(peca.value) || 0, 
        entr: Number(entrega.value) || 0
    }
}

function calculoTotal(dados){

    var servMax = 0
    var servMin = 0

    switch(dados.serv){
        case 0:
            dados.serv = 'Troca de Tela Android'
            servMax = 200
            servMin= 120
            break
        case 1:
            dados.serv = 'Troca de bateria Android'
            servMax = 120
            servMin= 80
            break
        case 2:
            dados.serv = 'Troca de conector de carga Android'
            servMax = 150
            servMin= 100
            break
        case 3:
            dados.serv = 'Troca de alto-falante Android'
            servMax = 120
            servMin= 80
            break
        case 4:
            dados.serv = 'Troca microfone Android'
            servMax = 120
            servMin= 80
            break
        case 5:
            dados.serv = 'Troca câmera Android'
            servMax = 150
            servMin= 100
            break
        case 6:
            dados.serv = 'Troca de botão power/volume Android'
            servMax = 150
            servMin= 100
            break
        case 7:
            dados.serv = 'Atualização/Reistalação sistema Android'
            servMax = 120
            servMin= 80
            break
        case 8:
            dados.serv = 'Troca de Tela Iphone 8/SE'
            servMax = 150
            servMin= 120
            break
        case 9:
            dados.serv = 'Troca de Tela Iphone X/XR/XS'
            servMax = 200
            servMin= 150
            break
        case 10:
            dados.serv = 'Troca de Tela Iphone 11'
            servMax = 200
            servMin= 150
            break
        case 11:
            dados.serv = 'Troca de Tela Iphone 12/13'
            servMax = 250
            servMin= 180
            break
        case 12:
            dados.serv = 'Troca de Tela Iphone 14+'
            servMax = 300
            servMin= 200
            break
        case 13:
            dados.serv = 'Troca de bateria Iphone 7/8'
            servMax = 130
            servMin= 100
            break
        case 14:
            dados.serv = 'Troca de bateria Iphone X+'
            servMax = 180
            servMin= 120
            break
        case 15:
            dados.serv = 'Troca tampa traseira Iphone(Já trocada)'
            servMax = 200
            servMin= 150
            break
        case 16:
            dados.serv = 'Troca tampa traseira Iphone(Original)'
            servMax = 400
            servMin= 250
            break
    }

    if(dados.risc == 0){
        return servMax + dados.pec + dados.entr
    }else{
        return ((servMax + servMin) / 2) + dados.pec + dados.entr
    }
}

let totalCliente = []

function inserir(){
    let dados = capturaDados()
    let total = calculoTotal(dados)
    totalCliente.push(total)
    dados.peca.value = ''
    dados.entrega.value = ''

    nome.innerHTML = `${dados.nomeCliente}`
    res.innerHTML += `<p>${dados.serv}: R$ ${total.toFixed(2)}</p>`
}

function calcular(){
    if(totalCliente.length > 0){
        let somaTotal = 0
        for(let valor of totalCliente){
            somaTotal += valor
        }
        nome.innerHTML = `${dados.nomeCliente}`
        res.innerHTML += `<p>Valor total:R$ ${somaTotal.toFixed(2)}</p>`
    }else{
        let dados = capturaDados()
        let total = calculoTotal(dados)
        dados.peca.value = ''
        dados.entrega.value = ''
        nome.innerHTML = `${dados.nomeCliente}`
        res.innerHTML += `<p>Valor total: R$ ${total.toFixed(2)}</p>`
    }
}

function novo(){
    nome.innerHTML = ''
    res.innerHTML = ''
    totalCliente = []
}