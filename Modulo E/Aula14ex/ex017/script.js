function gerar(){
    let tab = window.document.getElementById('seltab')
    let valor = window.document.getElementById('valor')
    if(valor.value.length == 0){
        res.innerHTML = 'Por favor digite um número!'
    }else{
        let v = Number(valor.value)
        tab.innerHTML = ''

        for(c = 1; c <= 10; c ++){
            let item = document.createElement('option')
            item.text = `${v} x ${c} = ${v*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}