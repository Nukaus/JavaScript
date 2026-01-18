
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var titulo = window.document.getElementsByTagName('h1')[0]
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        // Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FDF3B7'
        titulo.style.color = 'black'
        
    }else if(hora >= 12 && hora < 18){
        // Boa Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#AC8A45'
    }else{
        // Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#14192D'
    }

}