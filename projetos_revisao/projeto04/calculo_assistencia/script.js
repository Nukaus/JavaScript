window.onload = function() {
    atualizarInterfaceHistorico();
};

let totalCliente = [];
let itensOrcamento = []; // Lista para guardar os serviços antes de finalizar

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
        servId: document.getElementById('servicos').value,
        servPcId: document.getElementById('servicospc').value,
        riscId: Number(document.getElementById('risco').value),
        pecVal: Number(document.getElementById('peca').value) || 0,
        entrVal: Number(document.getElementById('entrega').value) || 0
    };
}

function calculoTotal(d) {
    let sMax = 0, sMin = 0;
    let label = "";

    // Lógica para Celulares (usando os novos IDs de texto)
    if (d.servId !== "50") {
        switch(d.servId) {
            // --- IPHONE 17 ---
            case 'ip_17pm_tela': label = 'Tela iPhone 17 Pro Max'; sMax = 1200; sMin = 800; break;
            case 'ip_17p_tela':  label = 'Tela iPhone 17 Pro'; sMax = 1000; sMin = 750; break;
            case 'ip_17_tela':   label = 'Tela iPhone 17/17 Plus'; sMax = 800; sMin = 600; break;
            
            // --- IPHONE 16 ---
            case 'ip_16pm_tela': label = 'Tela iPhone 16 Pro Max'; sMax = 950; sMin = 700; break;
            case 'ip_16p_tela':  label = 'Tela iPhone 16 Pro'; sMax = 850; sMin = 650; break;
            case 'ip_16_tela':   label = 'Tela iPhone 16/16 Plus'; sMax = 700; sMin = 500; break;

            // --- IPHONE 15 ---
            case 'ip_15pm_tela': label = 'Tela iPhone 15 Pro Max'; sMax = 800; sMin = 600; break;
            case 'ip_15p_tela':  label = 'Tela iPhone 15 Pro'; sMax = 700; sMin = 550; break;
            case 'ip_15_tela':   label = 'Tela iPhone 15/15 Plus'; sMax = 500; sMin = 400; break;

            // --- IPHONE 14 ---
            case 'ip_14pm_tela': label = 'Tela iPhone 14 Pro Max'; sMax = 600; sMin = 450; break;
            case 'ip_14p_tela':  label = 'Tela iPhone 14 Pro'; sMax = 550; sMin = 400; break;
            case 'ip_14_tela':   label = 'Tela iPhone 14/14 Plus'; sMax = 400; sMin = 300; break;

            // --- IPHONE ANTIGOS ---
            case 'ip_13_tela':   label = 'Tela iPhone 13/13 Pro'; sMax = 350; sMin = 250; break;
            case 'ip_12_tela':   label = 'Tela iPhone 12/12 Pro'; sMax = 300; sMin = 220; break;
            case 'ip_11pm_tela': label = 'Tela iPhone 11 Pro Max'; sMax = 280; sMin = 200; break;
            case 'ip_11_tela':   label = 'Tela iPhone 11'; sMax = 220; sMin = 160; break;
            case 'ip_xr_tela':   label = 'Tela iPhone XR'; sMax = 200; sMin = 150; break;
            case 'ip_x_tela':    label = 'Tela iPhone X/XS'; sMax = 200; sMin = 150; break;
            case 'ip_8_tela':    label = 'Tela iPhone 8/SE'; sMax = 150; sMin = 120; break;

            // --- BATERIAS IPHONE ---
            case 'ip_16_17_bat': label = 'Bateria iPhone 16/17'; sMax = 300; sMin = 200; break;
            case 'ip_14_15_bat': label = 'Bateria iPhone 14/15'; sMax = 250; sMin = 180; break;
            case 'ip_12_13_bat': label = 'Bateria iPhone 12/13'; sMax = 200; sMin = 150; break;
            case 'ip_11_bat':    label = 'Bateria iPhone 11 Series'; sMax = 180; sMin = 130; break;
            case 'ip_x_bat':     label = 'Bateria iPhone X/XR/XS'; sMax = 160; sMin = 120; break;
            case 'ip_8_bat':     label = 'Bateria iPhone 7/8/SE'; sMax = 120; sMin = 90; break;

            // --- ANDROID E OUTROS ---
            case 'and_tela_premium': label = 'Tela Android (OLED)'; sMax = 350; sMin = 200; break;
            case 'and_tela_incell':  label = 'Tela Android (Simple)'; sMax = 180; sMin = 120; break;
            case 'and_conector':     label = 'Conector de Carga'; sMax = 150; sMin = 100; break;
            case 'desoxidacao':      label = 'Desoxidação / Limpeza'; sMax = 250; sMin = 150; break;
            case 'conector_iphone':  label = 'Conector iPhone'; sMax = 180; sMin = 130; break;
        }
    } 
    // Lógica para Informática
    else if (d.servPcId !== "50") {
        switch(d.servPcId) {
            case 'nb_tela_14':  label = 'Tela Notebook 14"'; sMax = 250; sMin = 180; break;
            case 'nb_tela_15':  label = 'Tela Notebook 15.6"'; sMax = 280; sMin = 200; break;
            case 'nb_ssd':      label = 'SSD + Sistema'; sMax = 200; sMin = 150; break;
            case 'nb_ram':      label = 'Upgrade de Memória RAM'; sMax = 120; sMin = 80; break;
            case 'nb_bat':      label = 'Troca de Bateria Interna'; sMax = 130; sMin = 90; break;
            case 'nb_limpeza':  label = 'Limpeza + Pasta Térmica'; sMax = 180; sMin = 120; break;
        }
    }

       let maoDeObraBase = (d.riscId === 0) ? sMax : ((sMax + sMin) / 2);
    
    return {
        maoDeObraBase: maoDeObraBase,
        servNome: label
    };
}
}

function inserir() {
    const dados = capturaDados();
    
    if (dados.servId === "50" && dados.servPcId === "50") {
        document.getElementById('erro').innerText = "Selecione um serviço primeiro!";
        return;
    }
 
    const infoServico = calculoTotal(dados);
    
    // REGRA DE OURO: Se já houver itens na lista, aplica 50% de desconto na Mão de Obra
    let maoDeObraReal = infoServico.maoDeObraBase;
    let temDesconto = false;
 
    if (itensOrcamento.length > 0) {
        maoDeObraReal = infoServico.maoDeObraBase * 0.5; // 50% de desconto
        temDesconto = true;
    }
 
    const valorFinalItem = maoDeObraReal + dados.pecVal;
 
    // Adiciona ao carrinho
    itensOrcamento.push({
        descricao: infoServico.servNome,
        valor: valorFinalItem,
        desconto: temDesconto
    });
 
    atualizarResumoVisual();
    document.getElementById('erro').innerText = "";
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

function atualizarResumoVisual() {
    let html = "";
    let totalGeral = 0;
    const entrega = Number(document.getElementById('entrega').value) || 0;
 
    itensOrcamento.forEach((item, index) => {
        totalGeral += item.valor;
        html += `<p style="font-size: 0.85rem; border-bottom: 1px solid #eee; padding: 5px 0;">
                    ${item.desconto ? '⭐ ' : ''}<strong>${item.descricao}:</strong>
                    R$ ${item.valor.toFixed(2)}
                    ${item.desconto ? '<span style="color: green;">(-50% M.O.)</span>' : ''}
                 </p>`;
    });
 
    totalGeral += entrega;
 
    document.getElementById('res').innerHTML = html;
    document.getElementById('nome').innerHTML = `Total: R$ ${totalGeral.toFixed(2)}`;
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
    itensOrcamento = [];
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
