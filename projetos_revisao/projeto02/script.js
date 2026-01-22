function verificar(){
    let peso = window.document.getElementById('peso')
    let tipo = window.document.getElementsByName('tipo')
    let res = window.document.getElementById('res')
    let img = window.document.getElementById('imagem')
    

    let pes = Number(peso.value)

    if(peso.value.length == 0){
        window.alert('Erro')
    }else{
        if(pes > 23 && tipo[1].checked || pes > 32 && tipo[0].checked){
            res.innerHTML = '<p>Excesso de bagagem ALERTA VERMELHO</p>'
            img.src = 'imagens/excesso.jpg'
        }else{
            res.innerHTML = 'Mala despachada! boa viagem'
            img.src = 'imagens/ok.jpg'
        }
    }

    
}