function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO Verifique os dados e tente novamente')
    }else{
        var fgen = window.document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fgen[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 5){
                img.setAttribute('src', 'imagens/bebe_homem.png')
            }else if (idade < 13){
                // criança
                img.setAttribute('src', 'imagens/crianca_homem.png')
            }else if (idade < 25){
                 // jovem
                 img.setAttribute('src', 'imagens/jovem_homem.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'imagens/adulto_homem.png')
            }else{
                 // idoso
                 img.setAttribute('src', 'imagens/homem_idoso.png')
            }
        }else if (fgen[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 5){
                // bebe
                img.setAttribute('src', 'imagens/bebe_mulher.png')
            }else if (idade < 13){
                // criança
                img.setAttribute('src', 'imagens/crianca_mulher.png')
            }else if (idade < 25){
                // jovem
                img.setAttribute('src', 'imagens/mulher_jovem.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            }else{
                // idoso
                img.setAttribute('src', 'imagens/idosa_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}