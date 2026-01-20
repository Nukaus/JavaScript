function verificar(){
    let estacao = window.document.getElementById('estacao')
    let img = window.document.getElementById('imagem')
    let res = window.document.getElementById('res')
    let hoje = new Date()
    let mesAtual = hoje.getMonth() + 1

    let mesEscolhido = Number(estacao.value)

    if(mesEscolhido == 0){
        window.alert('Você não selecionou um mês, usaremos o mês atual!')
        mesEscolhido = mesAtual
        estacao.value = mesAtual
    }
    
    let nomeMes = ''

    switch (mesEscolhido) {
        case 1: 
            nomeMes = 'Janeiro'; 
            break
        case 2: 
            nomeMes = 'Fevereiro'; 
            break
        case 3: 
            nomeMes = 'Março'; 
            break
        case 4: 
            nomeMes = 'Abril'; 
            break
        case 5: 
            nomeMes = 'Maio'; 
            break
        case 6: 
            nomeMes = 'Junho'; 
            break
        case 7: 
            nomeMes = 'Julho'; 
            break
        case 8: 
            nomeMes = 'Agosto'; 
            break
        case 9: 
            nomeMes = 'Setembro'; 
            break
        case 10: 
            nomeMes = 'Outubro'; 
            break
        case 11: 
            nomeMes = 'Novembro'; 
            reak
        case 12: 
            nomeMes = 'Dezembro'; 
            break
    }

    if(mesEscolhido == 12 || mesEscolhido == 1 || mesEscolhido == 2){
        document.body.style.background = 'yellow'
        img.src = 'imagens/verao.jpg'
        res.innerHTML = `<p>Estamos no mês de <strong>${nomeMes}</strong>, a estação é <strong>Verão</strong></p>`
    }else if (mesEscolhido == 3 || mesEscolhido == 4 || mesEscolhido == 5){
        document.body.style.background = 'orange'
        img.src = 'imagens/outono.jpg'
        res.innerHTML = `Estamos no mês de <strong>${nomeMes}</strong>, a estação é <strong>Outono</strong>`
    }else if (mesEscolhido == 6 || mesEscolhido == 7 || mesEscolhido == 8){
        document.body.style.background = 'blue'
        img.src = 'imagens/inverno.jpg'
        res.innerHTML = `Estamos no mês de <strong>${nomeMes}</strong>, a estação é <strong>Inverno</strong>`
    }else if (mesEscolhido == 9 || mesEscolhido == 10 || mesEscolhido == 11){
        document.body.style.background = 'green'
        img.src = 'imagens/primavera.jpg'
        res.innerHTML = `Estamos no mês de <strong>${nomeMes}</strong>, a estação é <strong>Primavera</strong>`
    }
}