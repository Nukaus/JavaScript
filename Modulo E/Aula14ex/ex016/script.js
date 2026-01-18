var contar = window.document.getElementById('contar')
contar.addEventListener('click', clicar)

var res = window.document.getElementById('res')

function clicar(){
    res.innerHTML = ''
    let inicio = window.document.querySelector('input#inicio')
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.querySelector('input#passo')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML += `Impossível contar`
    }else{
        res.innerHTML ='Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
        if(i < f){
            while(i <= f){
                res.innerHTML += `${i} \u{1F449}`   
                i += p
            }
        }else{
            while(i >= f){
                res.innerHTML += `${i} \u{1F449}`
                i -= p
            }
        }
    res.innerHTML += ` \u{1F3C1}`
    }  
}     
    