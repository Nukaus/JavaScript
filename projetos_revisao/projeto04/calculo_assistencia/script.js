window.onload = function() {
    atualizarInterfaceHistorico();
};

window.idOrcamentoAtual = null;
let itensOrcamento = []; 

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

    if (d.servId !== "50") {
        switch(d.servId) {
            // --- IPHONE TELAS ---
            case 'ip_17pm_tela': label = 'Tela iPhone 17 Pro Max'; sMax = 1200; sMin = 800; break;
            case 'ip_17p_tela':  label = 'Tela iPhone 17 Pro'; sMax = 1000; sMin = 750; break;
            case 'ip_17_tela':   label = 'Tela iPhone 17/17 Plus'; sMax = 800; sMin = 600; break;
            case 'ip_16pm_tela': label = 'Tela iPhone 16 Pro Max'; sMax = 950; sMin = 700; break;
            case 'ip_16p_tela':  label = 'Tela iPhone 16 Pro'; sMax = 850; sMin = 650; break;
            case 'ip_16_tela':   label = 'Tela iPhone 16/16 Plus'; sMax = 700; sMin = 500; break;
            case 'ip_15pm_tela': label = 'Tela iPhone 15 Pro Max'; sMax = 800; sMin = 600; break;
            case 'ip_15p_tela':  label = 'Tela iPhone 15 Pro'; sMax = 700; sMin = 550; break;
            case 'ip_15_tela':   label = 'Tela iPhone 15/15 Plus'; sMax = 500; sMin = 400; break;
            case 'ip_14pm_tela': label = 'Tela iPhone 14 Pro Max'; sMax = 600; sMin = 450; break;
            case 'ip_14p_tela':  label = 'Tela iPhone 14 Pro'; sMax = 550; sMin = 400; break;
            case 'ip_14_tela':   label = 'Tela iPhone 14/14 Plus'; sMax = 400; sMin = 300; break;
            case 'ip_13_tela':   label = 'Tela iPhone 13/13 Pro'; sMax = 350; sMin = 250; break;
            case 'ip_12_tela':   label = 'Tela iPhone 12/12 Pro'; sMax = 300; sMin = 220; break;
            case 'ip_11pm_tela': label = 'Tela iPhone 11 Pro Max'; sMax = 280; sMin = 200; break;
            case 'ip_11_tela':   label = 'Tela iPhone 11'; sMax = 220; sMin = 160; break;
            case 'ip_xr_tela':   label = 'Tela iPhone XR'; sMax = 200; sMin = 150; break;
            case 'ip_x_tela':    label = 'Tela iPhone X/XS'; sMax = 200; sMin = 150; break;
            case 'ip_8_tela':    label = 'Tela iPhone 8/SE'; sMax = 150; sMin = 120; break;

            // --- IPHONE BATERIAS ---
            case 'ip_16_17_bat': label = 'Bateria iPhone 16/17'; sMax = 300; sMin = 200; break;
            case 'ip_14_15_bat': label = 'Bateria iPhone 14/15'; sMax = 250; sMin = 180; break;
            case 'ip_12_13_bat': label = 'Bateria iPhone 12/13'; sMax = 200; sMin = 150; break;
            case 'ip_11_bat':    label = 'Bateria iPhone 11 Series'; sMax = 180; sMin = 130; break;
            case 'ip_x_bat':     label = 'Bateria iPhone X/XR/XS'; sMax = 160; sMin = 120; break;
            case 'ip_8_bat':     label = 'Bateria iPhone 7/8/SE'; sMax = 120; sMin = 90; break;

            // --- IPHONE CARCAÇAS ---
            case 'ip_tampa_comum':     label = 'Tampa Traseira'; sMax = 350; sMin = 150; break;
            case 'ip_carcaca_completa':     label = 'Carcaça Completa'; sMax = 600; sMin = 250; break;

            // --- ANDROID ---
            case 'and_tela_premium': label = 'Tela Android (OLED)'; sMax = 350; sMin = 200; break;
            case 'and_tela_incell':  label = 'Tela Android (Simple)'; sMax = 180; sMin = 120; break;
            case 'and_bat':          label = 'Bateria Android'; sMax = 150; sMin = 100; break; // ADICIONADO
            case 'and_conector':     label = 'Conector de Carga Android'; sMax = 150; sMin = 100; break;
            case 'and_software':     label = 'Software/Desbloqueio'; sMax = 200; sMin = 120; break; // ADICIONADO

            // --- OUTROS ---
            case 'desoxidacao':      label = 'Desoxidação / Limpeza'; sMax = 250; sMin = 150; break;
            case 'conector_iphone':  label = 'Conector iPhone'; sMax = 180; sMin = 130; break;
            case 'camera_reparo':    label = 'Reparo de Câmeras'; sMax = 300; sMin = 150; break; // ADICIONADO
            case 'camera_reparo':    label = 'Reparo de Câmeras'; sMax = 220; sMin = 100; break; // ADICIONADO
        }
    } else if (d.servPcId !== "50") {
        switch(d.servPcId) {
            case 'nb_tela_14':  label = 'Tela Notebook 14"'; sMax = 250; sMin = 180; break;
            case 'nb_tela_15':  label = 'Tela Notebook 15.6"'; sMax = 280; sMin = 200; break;
            case 'nb_ssd':      label = 'SSD + Sistema'; sMax = 200; sMin = 150; break;
            case 'nb_ram':      label = 'Upgrade RAM'; sMax = 120; sMin = 80; break;
            case 'nb_bat':      label = 'Troca Bateria NB'; sMax = 130; sMin = 90; break;
            case 'nb_limpeza':  label = 'Limpeza + Pasta'; sMax = 180; sMin = 120; break;
        }
    }

    let maoDeObraBase = (d.riscId === 0) ? sMax : ((sMax + sMin) / 2);
    
    return {
        maoDeObraBase: maoDeObraBase,
        servNome: label
    };
}

function inserir() {
    const dados = capturaDados();
    if (dados.servId === "50" && dados.servPcId === "50") {
        document.getElementById('erro').innerText = "Selecione um serviço primeiro!";
        return;
    }
    const infoServico = calculoTotal(dados);
    let maoDeObraReal = infoServico.maoDeObraBase;
    let temDesconto = false;
    if (itensOrcamento.length > 0) {
        maoDeObraReal = infoServico.maoDeObraBase * 0.5;
        temDesconto = true;
    }
    const valorFinalItem = maoDeObraReal + dados.pecVal;
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
    if (itensOrcamento.length === 0) {
        alert("Insira pelo menos um serviço!");
        return;
    }
    
    let somaServicos = itensOrcamento.reduce((acc, item) => acc + item.valor, 0);
    let taxa = 0;

    if (d.tipoUrgencia !== "0" && d.valorUrgencia > 0) {
        taxa = (d.tipoUrgencia === "fixo") ? d.valorUrgencia : (somaServicos * (d.valorUrgencia / 100));
    }

    let totalFinal = somaServicos + taxa + d.entrVal;

    const resDiv = document.getElementById('res');
    const existentes = resDiv.querySelectorAll('.linha-total');
    existentes.forEach(el => el.remove());

    let htmlFinal = `<div class="linha-total" style="margin-top:10px; border-top:2px solid #2563eb; padding-top:10px;">`;
    if (taxa > 0) htmlFinal += `<p style="color:var(--danger); font-size:0.85rem;">+ Taxa Urgência: R$ ${taxa.toFixed(2)}</p>`;
    if (d.entrVal > 0) htmlFinal += `<p style="color:var(--text-main); font-size:0.85rem;">+ Entrega: R$ ${d.entrVal.toFixed(2)}</p>`;
    htmlFinal += `<p style="color:var(--success); font-size:1.2rem"><strong>Total Final: R$ ${totalFinal.toFixed(2)}</strong></p></div>`;
    
    resDiv.innerHTML += htmlFinal;
    salvarNoHistorico(d.nomeVal, d.modeloVal, totalFinal);
}

function salvarNoHistorico(nome, modelo, total) {
    let d = capturaDados();
    let historico = JSON.parse(localStorage.getItem('orcamentos')) || [];
    const dataAtual = new Date().toLocaleString('pt-BR');
    
    const indexExistente = historico.findIndex(item => item.id === window.idOrcamentoAtual);
 
    const registro = {
        id: window.idOrcamentoAtual || Date.now(),
        nome: nome || "Cliente não identificado",
        modelo: modelo || "Modelo não informado",
        telefone: d.telefone.value,
        entrega: d.entrVal,
        total: parseFloat(total).toFixed(2),
        data: window.idOrcamentoAtual ? (historico[indexExistente]?.data || dataAtual) : dataAtual,
        servicosLista: [...itensOrcamento]
    };
 
    if (indexExistente !== -1) {
        historico[indexExistente] = registro;
    } else {
        historico.unshift(registro);
    }
 
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
    historico.forEach((item, index) => {
        divLista.innerHTML += `
            <div class="card-historico" onclick="recuperarOrcamento(${index})" style="cursor: pointer; margin-bottom: 8px; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <span style="font-size: 0.7rem; color: #94a3b8;">${item.data}</span><br>
                <strong>${item.nome}</strong> - <span>${item.modelo}</span><br>
                <span style="color: #16a34a; font-weight: bold;">R$ ${item.total}</span>
            </div>`;
    });
}

function recuperarOrcamento(index) {
    let historico = JSON.parse(localStorage.getItem('orcamentos')) || [];
    let orc = historico[index];
    if (!orc) return;
 
    novo(); 
    window.idOrcamentoAtual = orc.id;
 
    document.getElementById('cliente').value = orc.nome;
    document.getElementById('modelo').value = orc.modelo;
    document.getElementById('telefone').value = orc.telefone || "";
    document.getElementById('entrega').value = orc.entrega || 0;
 
    if (orc.servicosLista) {
        itensOrcamento = [...orc.servicosLista];
        atualizarResumoVisual();
        
        let somaServicos = itensOrcamento.reduce((acc, item) => acc + item.valor, 0);
        let totalFinal = somaServicos + Number(orc.entrega || 0);
        
        const resDiv = document.getElementById('res');
        resDiv.innerHTML += `<div class="linha-total" style="margin-top:10px; border-top:2px solid #2563eb; padding-top:10px;">
                                <p style="color:var(--success); font-size:1.2rem"><strong>Total Final: R$ ${totalFinal.toFixed(2)}</strong></p>
                             </div>`;
        document.getElementById('nome').innerHTML = `Soma Serviços: R$ ${somaServicos.toFixed(2)}`;
    }
}

function atualizarResumoVisual() {
    let html = "";
    let totalParcial = 0;
    itensOrcamento.forEach((item) => {
        totalParcial += item.valor;
        html += `<p style="font-size: 0.85rem; border-bottom: 1px solid #eee; padding: 5px 0;">
                    ${item.desconto ? '⭐ ' : ''}<strong>${item.descricao}:</strong> R$ ${item.valor.toFixed(2)}
                    ${item.desconto ? '<br><span style="color: green; font-size:0.75rem;">(Combo: -50% Mão de Obra)</span>' : ''}
                 </p>`;
    });
    document.getElementById('res').innerHTML = html;
    document.getElementById('nome').innerHTML = `Soma Serviços: R$ ${totalParcial.toFixed(2)}`;
}

function novo() {
    window.idOrcamentoAtual = null;
    itensOrcamento = [];
    document.getElementById('cliente').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('peca').value = '';
    document.getElementById('entrega').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('servicos').value = '50';
    document.getElementById('servicospc').value = '50';
    document.getElementById('nome').innerHTML = '';
    document.getElementById('res').innerHTML = '';
    document.getElementById('erro').innerText = "";
}

function limparHistorico() {
    if (confirm("Deseja apagar o histórico?")) {
        localStorage.removeItem('orcamentos');
        atualizarInterfaceHistorico();
    }
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
    
    if (itensOrcamento.length === 0) {
        alert("Adicione serviços antes de gerar o PDF.");
        return;
    }
 
    const dataAtual = new Date().toLocaleString('pt-BR');
    let somaItens = itensOrcamento.reduce((acc, item) => acc + item.valor, 0);
    let totalFinal = somaItens + d.entrVal;
 
    // --- CONFIGURAÇÃO DE CORES E ESTILO ---
    const azulPrimario = [37, 99, 235]; // #2563eb
    const cinzaEscuro = [30, 41, 59];
    const cinzaClaro = [241, 245, 249];
 
    // --- CABEÇALHO ---
    // Retângulo azul no topo
    doc.setFillColor(azulPrimario[0], azulPrimario[1], azulPrimario[2]);
    doc.rect(0, 0, 210, 40, 'F');
 
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("DIGITAL UNIVERSE", 10, 20);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Assistência Técnica Especializada", 10, 26);
    doc.text("Celulares | Computadores | Notebooks", 10, 31);
 
    doc.setFontSize(9);
    doc.text(`Data: ${dataAtual}`, 195, 20, { align: "right" });
    doc.text("Betim - MG", 195, 26, { align: "right" });
 
    // --- INFORMAÇÕES DO CLIENTE ---
    doc.setTextColor(cinzaEscuro[0], cinzaEscuro[1], cinzaEscuro[2]);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("ORÇAMENTO DE SERVIÇO", 10, 50);
 
    // Box cinza para os dados
    doc.setFillColor(cinzaClaro[0], cinzaClaro[1], cinzaClaro[2]);
    doc.roundedRect(10, 55, 190, 25, 3, 3, 'F');
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("CLIENTE:", 15, 62);
    doc.text("APARELHO:", 15, 69);
    doc.text("CONTATO:", 15, 76);
 
    doc.setFont("helvetica", "normal");
    doc.text(d.nomeVal || "Não informado", 45, 62);
    doc.text(d.modeloVal || "Não informado", 45, 69);
    doc.text(document.getElementById('telefone').value || "Não informado", 45, 76);
 
    // --- TABELA DE SERVIÇOS ---
    let y = 95;
    doc.setFont("helvetica", "bold");
    doc.setFillColor(azulPrimario[0], azulPrimario[1], azulPrimario[2]);
    doc.setTextColor(255, 255, 255);
    
    // Cabeçalho da Tabela
    doc.rect(10, y, 190, 8, 'F');
    doc.text("DESCRIÇÃO DO SERVIÇO", 15, y + 5.5);
    doc.text("VALOR", 195, y + 5.5, { align: "right" });
 
    doc.setTextColor(cinzaEscuro[0], cinzaEscuro[1], cinzaEscuro[2]);
    doc.setFont("helvetica", "normal");
    
    y += 15;
    itensOrcamento.forEach((item, index) => {
        // Linha zebrada (opcional, para facilitar leitura)
        if (index % 2 === 0) {
            doc.setFillColor(250, 250, 250);
            doc.rect(10, y - 5, 190, 8, 'F');
        }
        
        doc.text(item.descricao, 15, y);
        doc.text(`R$ ${item.valor.toFixed(2)}`, 195, y, { align: "right" });
        
        if (item.desconto) {
            y += 4;
            doc.setFontSize(8);
            doc.setTextColor(22, 163, 74); // Verde
            doc.text("  * Desconto de combo aplicado na mão de obra", 15, y);
            doc.setTextColor(cinzaEscuro[0], cinzaEscuro[1], cinzaEscuro[2]);
            doc.setFontSize(10);
        }
        
        y += 8;
        
        // Se a página estiver acabando, você pode adicionar uma lógica de nova página aqui
    });
 
    // --- TOTAIS ---
    y += 5;
    doc.line(10, y, 200, y);
    y += 10;
 
    if (d.entrVal > 0) {
        doc.setFont("helvetica", "normal");
        doc.text("Taxa de Entrega/Busca:", 140, y);
        doc.text(`R$ ${d.entrVal.toFixed(2)}`, 195, y, { align: "right" });
        y += 7;
    }
 
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(azulPrimario[0], azulPrimario[1], azulPrimario[2]);
    doc.text("VALOR TOTAL:", 120, y + 5);
    doc.text(`R$ ${totalFinal.toFixed(2)}`, 195, y + 5, { align: "right" });
 
    // --- RODAPÉ E GARANTIA ---
    y = 265;
    doc.setDrawColor(200, 200, 200);
    doc.line(10, y, 200, y);
    
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "italic");
    const garantia = "Garantia legal de 90 dias sobre o serviço realizado. Orçamento válido por 5 dias.";
    doc.text(garantia, 105, y + 7, { align: "center" });
    
    doc.setFont("helvetica", "bold");
    doc.text("Obrigado pela confiança!", 105, y + 12, { align: "center" });
 
    // Salvar o arquivo
    const nomeArquivo = `Orcamento_${(d.nomeVal || "Cliente").replace(/\s+/g, '_')}.pdf`;
    doc.save(nomeArquivo);
}
