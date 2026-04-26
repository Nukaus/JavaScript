window.onload = function() {
    atualizarInterfaceHistorico();
};

let totalCliente = [];

// --- CONFIGURAÇÃO DA LOGO (Coloque seu Base64 aqui se tiver) ---
const logoBase64 = ""; 

function capturaDados() {
    return {
        cliente: document.getElementById('cliente'),
        modelo: document.getElementById('modelo'),
        servicos: document.getElementById('servicos'),
        servicospc: document.getElementById('servicospc'),
        risco: document.getElementById('risco'),
        peca: document.getElementById('peca'),
        entrega: document.getElementById('entrega'),
        telefone: document.getElementById('telefone'),
        
        tipoUrgencia: document.getElementById('tipo_urgencia').value,
        valorUrgencia: Number(document.getElementById('valor_urgencia').value) || 0,

        nomeVal: document.getElementById('cliente').value,
        modeloVal: document.getElementById('modelo').value,
        servId: Number(document.getElementById('servicos').value),
        servPcId: Number(document.getElementById('servicospc').value),
        riscId: Number(document.getElementById('risco').value),
        pecVal: Number(document.getElementById('peca').value) || 0,
        entrVal: Number(document.getElementById('entrega').value) || 0
    };
}

function calculoTotal(d) {
    let sMax = 0, sMin = 0;
    let label = "";

    if (d.servId !== 50) {
        switch(d.servId) {
            case 0: label = 'Troca de Tela Android'; sMax = 200; sMin = 120; break;
            case 1: label = 'Troca de bateria Android'; sMax = 120; sMin = 80; break;
            case 2: label = 'Troca de conector Android'; sMax = 150; sMin = 100; break;
            case 3: label = 'Troca de alto-falante Android'; sMax = 120; sMin = 80; break;
            case 4: label = 'Troca microfone Android'; sMax = 120; sMin = 80; break;
            case 5: label = 'Troca câmera Android'; sMax = 150; sMin = 100; break;
            case 6: label = 'Troca botão power/vol Android'; sMax = 150; sMin = 100; break;
            case 7: label = 'Sistema Android'; sMax = 120; sMin = 80; break;
            case 8: label = 'Tela iPhone 8/SE'; sMax = 150; sMin = 120; break;
            case 9: label = 'Tela iPhone X/XR/XS'; sMax = 200; sMin = 150; break;
            case 10: label = 'Tela iPhone 11'; sMax = 200; sMin = 150; break;
            case 11: label = 'Tela iPhone 12/13'; sMax = 250; sMin = 180; break;
            case 12: label = 'Tela iPhone 14+'; sMax = 300; sMin = 200; break;
            case 13: label = 'Bateria iPhone 7/8'; sMax = 130; sMin = 100; break;
            case 14: label = 'Bateria iPhone X+'; sMax = 180; sMin = 120; break;
            case 15: label = 'Tampa traseira iPhone (Trocada)'; sMax = 200; sMin = 150; break;
            case 16: label = 'Tampa traseira iPhone (Original)'; sMax = 400; sMin = 250; break;
            case 17: label = 'Carcaça Original X/XR/XS'; sMax = 500; sMin = 350; break;
            case 18: label = 'Carcaça Original 11'; sMax = 550; sMin = 400; break;
            case 19: label = 'Carcaça Original 12/13'; sMax = 700; sMin = 500; break;
            case 20: label = 'Carcaça Original 14+'; sMax = 850; sMin = 600; break;
            case 21: label = 'Carcaça Estilo 17 X/XR/XS'; sMax = 450; sMin = 300; break;
            case 22: label = 'Carcaça Estilo 17 11'; sMax = 500; sMin = 350; break;
            case 23: label = 'Carcaça Estilo 17 12/13'; sMax = 650; sMin = 450; break;
            case 24: label = 'Carcaça Estilo 17 14+'; sMax = 800; sMin = 550; break;
            case 25: label = 'Troca conector de carga iPhone 12/13'; sMax = 500; sMin = 350; break;
            case 26: label = 'Limpeza de placa básica'; sMax = 180; sMin = 130; break;
        }
    } else if (d.servPcId !== 50) {
        switch(d.servPcId) {
            case 27: label = 'Troca de tela notebook'; sMax = 200; sMin = 120; break;
            case 28: label = 'Troca de bateria notebook'; sMax = 150; sMin = 80; break;
        }
    }

    let maoDeObra = (d.riscId === 0) ? sMax : ((sMax + sMin) / 2);
    return { valor: maoDeObra + d.pecVal + d.entrVal, servNome: label };
}

function inserir() {
    let d = capturaDados();
    let res = document.getElementById('res');
    let nomeDiv = document.getElementById('nome');

    if (d.servId === 50 && d.servPcId === 50) {
        document.getElementById('erro').innerHTML = 'Escolha um serviço!';
        return;
    }

    let resultado = calculoTotal(d);
    totalCliente.push(resultado.valor);
    
    document.getElementById('erro').innerHTML = '';
    nomeDiv.innerHTML = `<strong><i class="bi bi-person-check"></i> ${d.nomeVal || 'Cliente'}</strong>`;
    
    let identificacaoAparelho = d.modeloVal ? `[${d.modeloVal}] ` : '';
    res.innerHTML += `<p>${identificacaoAparelho}${resultado.servNome}: <strong>R$ ${resultado.valor.toFixed(2)}</strong></p>`;
    
    d.peca.value = '';
}

function calcular() {
    let d = capturaDados();
    if (totalCliente.length === 0) inserir();
    
    let somaServicos = totalCliente.reduce((a, b) => a + b, 0);
    let taxa = 0;

    if (d.tipoUrgencia !== "0" && d.valorUrgencia > 0) {
        taxa = (d.tipoUrgencia === "fixo") ? d.valorUrgencia : (somaServicos * (d.valorUrgencia / 100));
    }

    let totalFinal = somaServicos + taxa;

    const resDiv = document.getElementById('res');
    const linhasAnteriores = resDiv.querySelectorAll('.linha-total');
    linhasAnteriores.forEach(l => l.remove());

    let htmlFinal = `<div class="linha-total"><br>`;
    if (taxa > 0) htmlFinal += `<p style="color:var(--danger); font-size:0.85rem;">+ Taxa de Urgência: R$ ${taxa.toFixed(2)}</p>`;
    htmlFinal += `<p style="color:var(--success); font-size:1.2rem"><strong>Total Final: R$ ${totalFinal.toFixed(2)}</strong></p></div>`;
    
    resDiv.innerHTML += htmlFinal;
    salvarNoHistorico(d.nomeVal, d.modeloVal, totalFinal);
}

// --- FUNÇÕES DE HISTÓRICO CORRIGIDAS ---
function salvarNoHistorico(nome, modelo, total) {
    let historico = JSON.parse(localStorage.getItem('orcamentos')) || [];
    const novoRegistro = {
        nome: nome || "Cliente não identificado",
        modelo: modelo || "Modelo não informado",
        total: parseFloat(total).toFixed(2),
        data: new Date().toLocaleString('pt-BR')
    };
    historico.unshift(novoRegistro);
    if (historico.length > 10) historico.pop();
    localStorage.setItem('orcamentos', JSON.stringify(historico));
    atualizarInterfaceHistorico();
}

function atualizarInterfaceHistorico() {
    let historico = JSON.parse(localStorage.getItem('orcamentos')) || [];
    let divLista = document.getElementById('historico-lista');
    if (!divLista) return;
    
    if (historico.length === 0) {
        divLista.innerHTML = '<p style="text-align: center; color: #64748b; font-size: 0.9rem;">Nenhum orçamento salvo.</p>';
        return;
    }

    divLista.innerHTML = '';
    historico.forEach(item => {
        divLista.innerHTML += `
            <div class="card-historico">
                <span class="data-hora">${item.data}</span>
                <strong>${item.nome}</strong><br>
                <span>${item.modelo}</span><br>
                <span style="color: var(--success); font-weight: bold;">R$ ${item.total}</span>
            </div>`;
    });
}

function limparHistorico() {
    if (confirm("Deseja apagar o histórico?")) {
        localStorage.removeItem('orcamentos');
        atualizarInterfaceHistorico();
    }
}

// --- OUTRAS FUNÇÕES ---
function toggleUrgencia() {
    const tipo = document.getElementById('tipo_urgencia').value;
    const campoValor = document.getElementById('valor_urgencia');
    campoValor.disabled = (tipo === "0");
    if (tipo === "0") campoValor.value = "";
}

function novo() {
    let d = capturaDados();
    d.cliente.value = ''; d.modelo.value = ''; d.peca.value = ''; d.entrega.value = ''; d.telefone.value = ''; d.servicos.value = '50'; d.servicospc.value = '50'
    document.getElementById('nome').innerHTML = ''; document.getElementById('res').innerHTML = '';
    totalCliente = [];
}

function enviarWhatsApp() {
    let d = capturaDados();
    let telefone = document.getElementById('telefone').value;
    let resConteudo = document.getElementById('res').innerText;
    if (!telefone) { alert("Insira o telefone!"); return; }
    let msg = `Olá ${d.nomeVal || 'cliente'}!%0ASegue orçamento para *${d.modeloVal}*:%0A${resConteudo.replace(/\n/g, '%0A')}`;
    window.open(`https://api.whatsapp.com/send?phone=55${telefone}&text=${msg}`, '_blank');
}

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const d = capturaDados();
    
    if (totalCliente.length === 0) {
        alert("Adicione serviços e calcule o total antes de gerar o PDF.");
        return;
    }

    const dataAtual = new Date().toLocaleString('pt-BR');
    const somaTotal = totalCliente.reduce((a, b) => a + b, 0);

    // --- CABEÇALHO ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(37, 99, 235); // Azul primário
    doc.text("ORÇAMENTO DE ASSISTÊNCIA TÉCNICA", 105, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text(`Gerado em: ${dataAtual}`, 105, 27, { align: "center" });

    // --- LINHA DIVISORA ---
    doc.setDrawColor(203, 213, 225);
    doc.line(10, 32, 200, 32);

    // --- DADOS DO CLIENTE ---
    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59);
    doc.text("DADOS DO CLIENTE E APARELHO", 10, 42);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Cliente: ${d.nomeVal || "Não informado"}`, 10, 50);
    doc.text(`Aparelho: ${d.modeloVal || "Não informado"}`, 10, 56);
    doc.text(`WhatsApp: ${document.getElementById('telefone').value || "Não informado"}`, 10, 62);

    // --- TABELA DE SERVIÇOS ---
    doc.setFont("helvetica", "bold");
    doc.text("DESCRIÇÃO DOS SERVIÇOS", 10, 75);
    doc.line(10, 77, 200, 77);
    
    doc.setFont("helvetica", "normal");
    let yPos = 85;
    
    // Pegando os serviços do elemento 'res'
    const linhas = document.querySelectorAll("#res p");
    linhas.forEach((linha) => {
        // Ignora a linha do total que já está no 'res' para tratar separado
        if(!linha.innerText.includes("Total:")) {
            doc.text(linha.innerText, 10, yPos);
            yPos += 8;
        }
    });

    // --- TOTAL ---
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.5);
    doc.line(10, yPos + 5, 200, yPos + 5);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(22, 163, 74); // Verde sucesso
    doc.text(`VALOR TOTAL: R$ ${somaTotal.toFixed(2)}`, 10, yPos + 15);

    // --- RODAPÉ / GARANTIA ---
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "italic");
    const termoGarantia = "Este orçamento é válido por 7 dias. Serviços possuem garantia legal de 90 dias conforme o CDC.";
    doc.text(termoGarantia, 105, 280, { align: "center" });

    // Salvar o arquivo
    const nomeArquivo = `Orcamento_${d.nomeVal.replace(/\s+/g, '_') || 'Cliente'}.pdf`;
    doc.save(nomeArquivo);
}