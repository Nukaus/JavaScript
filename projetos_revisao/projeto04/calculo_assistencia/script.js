// ==========================================
// 1. ESTADO GLOBAL DA APLICAÇÃO
// ==========================================

let itensOrcamento = [];


// ==========================================
// 2. INICIALIZAÇÃO
// ==========================================

window.onload = function () {

    iniciarCascadingDropdowns();

    const urgencia = document.getElementById('urgencia');

    if (urgencia) {
        urgencia.addEventListener('change', () => {
            recalcularValoresEAtualizar();
        });
    }

};


// ==========================================
// 3. DROPDOWNS EM CASCATA
// ==========================================

function iniciarCascadingDropdowns() {

    const elTipo = document.getElementById('tipoAparelho');
    const elMarca = document.getElementById('marcaAparelho');
    const elModelo = document.getElementById('modeloAparelho');
    const elServico = document.getElementById('servicoAparelho');


    const resetarSelect = (elemento, texto) => {

        elemento.innerHTML = `<option value="">${texto}</option>`;
        elemento.disabled = true;

    };


    // Preenche os tipos usando dados.js

    Object.keys(baseDadosServicos).forEach(tipo => {

        elTipo.add(
            new Option(tipo, tipo)
        );

    });


    // ------------------------------------------
    // TIPO
    // ------------------------------------------

    elTipo.addEventListener('change', function () {

        resetarSelect(
            elMarca,
            "Selecione a Marca..."
        );

        resetarSelect(
            elModelo,
            "Selecione o Modelo..."
        );

        resetarSelect(
            elServico,
            "Selecione o Serviço..."
        );


        if (this.value) {

            elMarca.disabled = false;

            Object.keys(
                baseDadosServicos[this.value]
            ).forEach(marca => {

                elMarca.add(
                    new Option(marca, marca)
                );

            });

        }

    });


    // ------------------------------------------
    // MARCA
    // ------------------------------------------

    elMarca.addEventListener('change', function () {

        resetarSelect(
            elModelo,
            "Selecione o Modelo..."
        );

        resetarSelect(
            elServico,
            "Selecione o Serviço..."
        );


        if (this.value) {

            elModelo.disabled = false;

            Object.keys(
                baseDadosServicos[
                    elTipo.value
                ][this.value]
            ).forEach(modelo => {

                elModelo.add(
                    new Option(modelo, modelo)
                );

            });

        }

    });


    // ------------------------------------------
    // MODELO
    // ------------------------------------------

    elModelo.addEventListener('change', function () {

        resetarSelect(
            elServico,
            "Selecione o Serviço..."
        );


        if (this.value) {

            elServico.disabled = false;

            const servicos =
                baseDadosServicos[
                    elTipo.value
                ][
                    elMarca.value
                ][
                    this.value
                ];


            Object.entries(servicos).forEach(
                ([id, config]) => {

                    elServico.add(
                        new Option(
                            config.nome,
                            id
                        )
                    );

                }
            );

        }

    });

}


// ==========================================
// 4. CÁLCULO DA MARGEM DA PEÇA
// ==========================================

function calcularMargemPeca(valorCusto) {

    if (!valorCusto || valorCusto <= 0) {
        return 0;
    }


    // Até 150 = +50%
    if (valorCusto <= 150.00) {
        return valorCusto * 1.50;
    }


    // Até 400 = +40%
    if (valorCusto <= 400.00) {
        return valorCusto * 1.40;
    }


    // Acima de 400 = +30%
    return valorCusto * 1.30;

}


// ==========================================
// 5. DESCONTO DE COMBO
// ==========================================

function obterDescontoCombo(posicaoItem) {

    // 1º serviço = 0%
    if (posicaoItem === 1) {
        return 0.00;
    }


    // 2º serviço = 20%
    if (posicaoItem === 2) {
        return 0.20;
    }


    // 3º em diante = 30%
    return 0.30;

}


// ==========================================
// 6. CAPTURAR DADOS DO CLIENTE
// ==========================================

function capturaDados() {

    const nomeElemento =
        document.getElementById('nome');

    const telefoneElemento =
        document.getElementById('telefone');

    const tipoElemento =
        document.getElementById('tipoAparelho');

    const marcaElemento =
        document.getElementById('marcaAparelho');

    const modeloElemento =
        document.getElementById('modeloAparelho');

    const entregaElemento =
        document.getElementById('entrega');


    const nomeVal =
        nomeElemento
            ? nomeElemento.value.trim()
            : '';


    const telefoneVal =
        telefoneElemento
            ? telefoneElemento.value.trim()
            : '';


    const tipoVal =
        tipoElemento
            ? tipoElemento.value
            : '';


    const marcaVal =
        marcaElemento
            ? marcaElemento.value
            : '';


    const modeloVal =
        modeloElemento
            ? modeloElemento.value
            : '';


    const entrVal =
        entregaElemento
            ? Number(entregaElemento.value) || 0
            : 0;


    return {

        nomeVal,
        telefoneVal,

        tipoVal,
        marcaVal,
        modeloVal,

        entrVal

    };

}


// ==========================================
// 7. INSERIR SERVIÇO
// ==========================================

function inserir() {

    const tipo =
        document.getElementById(
            'tipoAparelho'
        ).value;


    const marca =
        document.getElementById(
            'marcaAparelho'
        ).value;


    const modelo =
        document.getElementById(
            'modeloAparelho'
        ).value;


    const servicoId =
        document.getElementById(
            'servicoAparelho'
        ).value;


    const risco =
        Number(
            document.getElementById(
                'risco'
            ).value
        );


    const custoPeca =
        Number(
            document.getElementById(
                'peca'
            ).value
        ) || 0;


    const elErro =
        document.getElementById('erro');


    // ------------------------------------------
    // Validação
    // ------------------------------------------

    if (
        !tipo ||
        !marca ||
        !modelo ||
        !servicoId
    ) {

        elErro.innerText =
            "Por favor, selecione as 4 opções do aparelho e serviço.";

        return;

    }


    // ------------------------------------------
    // Verifica duplicidade
    // ------------------------------------------

    if (
        itensOrcamento.some(
            item => item.servicoId === servicoId
        )
    ) {

        elErro.innerText =
            "Este serviço já foi adicionado ao orçamento atual.";

        return;

    }


    // ------------------------------------------
    // Busca configuração
    // ------------------------------------------

    const configServico =
        baseDadosServicos[
            tipo
        ][
            marca
        ][
            modelo
        ][
            servicoId
        ];


    // ------------------------------------------
    // Mão de obra
    // ------------------------------------------

    const maoDeObraBase =
        (risco === 0)

            ? configServico.sMax

            : (
                (
                    configServico.sMax +
                    configServico.sMin
                ) / 2
            );


    // ------------------------------------------
    // Peça
    // ------------------------------------------

    const valorPecaFinal =
        calcularMargemPeca(
            custoPeca
        );


    // ------------------------------------------
    // Adiciona item
    // ------------------------------------------

    itensOrcamento.push({

        id: Date.now(),

        servicoId: servicoId,

        descricao:
            `${tipo} ${marca} ${modelo} - ${configServico.nome}`,

        maoDeObraBase:
            maoDeObraBase,

        valorPecaFinal:
            valorPecaFinal,

        custoPecaOriginal:
            custoPeca,

        valorFinalItem:
            0

    });


    // Limpa campo da peça

    document.getElementById(
        'peca'
    ).value = '';


    elErro.innerText = '';


    recalcularValoresEAtualizar();

}


// ==========================================
// 8. REMOVER ITEM
// ==========================================

function remover(id) {

    itensOrcamento =
        itensOrcamento.filter(
            item => item.id !== id
        );


    recalcularValoresEAtualizar();

}


// ==========================================
// 9. RECALCULAR VALORES
// ==========================================

function recalcularValoresEAtualizar() {

    const isUrgencia =
        document.getElementById(
            'urgencia'
        ).checked;


    let totalGeral = 0;


    itensOrcamento.forEach(
        (item, index) => {

            const numeroServico =
                index + 1;


            const descontoPercentual =
                obterDescontoCombo(
                    numeroServico
                );


            // ----------------------------------
            // Mão de obra
            // ----------------------------------

            let maoDeObra =
                item.maoDeObraBase *
                (
                    1 -
                    descontoPercentual
                );


            // ----------------------------------
            // Urgência
            // ----------------------------------

            if (isUrgencia) {

                maoDeObra =
                    maoDeObra * 1.20;

            }


            // ----------------------------------
            // Total do item
            // ----------------------------------

            item.valorFinalItem =
                maoDeObra +
                item.valorPecaFinal;


            item.teveDesconto =
                descontoPercentual > 0;


            item.textoDesconto =
                item.teveDesconto

                    ? `(Combo: -${descontoPercentual * 100}% M.O.)`

                    : '';


            totalGeral +=
                item.valorFinalItem;

        }
    );


    atualizarResumoVisual(
        totalGeral
    );

}


// ==========================================
// 10. ATUALIZAR INTERFACE
// ==========================================

function atualizarResumoVisual(
    totalGeral
) {

    const listaHtml =
        document.getElementById(
            'listaOrcamento'
        );


    const labelTotal =
        document.getElementById(
            'valorTotal'
        );


    listaHtml.innerHTML = '';


    itensOrcamento.forEach(
        item => {

            const li =
                document.createElement('li');


            const badge =
                item.teveDesconto

                    ? `<span class="badge-desconto">${item.textoDesconto}</span>`

                    : '';


            const textoPeca =
                item.valorPecaFinal > 0

                    ? ` | Peça: R$ ${item.valorPecaFinal.toFixed(2)}`

                    : '';


            li.innerHTML = `

                <div class="item-detalhes">

                    <span class="item-nome">
                        ${item.descricao}
                        ${badge}
                    </span>

                    <span class="item-valores">
                        Total:
                        R$ ${item.valorFinalItem.toFixed(2)}
                        ${textoPeca}
                    </span>

                </div>

                <button
                    class="btn btn-danger"
                    onclick="remover(${item.id})"
                >

                    <i class="bi bi-trash"></i>
                    Remover

                </button>

            `;


            listaHtml.appendChild(li);

        }
    );


    labelTotal.innerText =
        totalGeral.toFixed(2);

}


// ==========================================
// 11. GERAR PDF
// ==========================================

function gerarPDF() {

    // ------------------------------------------
    // Verifica se há serviços
    // ------------------------------------------

    if (itensOrcamento.length === 0) {

        alert(
            "Adicione serviços antes de gerar o PDF."
        );

        return;

    }


    // ------------------------------------------
    // Verifica jsPDF
    // ------------------------------------------

    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        alert(
            "A biblioteca de PDF não foi carregada. Verifique sua conexão com a internet e tente novamente."
        );

        return;

    }


    const { jsPDF } =
        window.jspdf;


    const doc =
        new jsPDF();


    // ------------------------------------------
    // Captura dados
    // ------------------------------------------

    const d =
        capturaDados();


    // ------------------------------------------
    // Data atual
    // ------------------------------------------

    const dataAtual =
        new Date().toLocaleString(
            'pt-BR'
        );


    // ------------------------------------------
    // Soma dos serviços
    // ------------------------------------------

    const somaItens =
        itensOrcamento.reduce(
            (acc, item) =>
                acc + item.valorFinalItem,
            0
        );


    // ------------------------------------------
    // Total final
    // ------------------------------------------

    const totalFinal =
        somaItens +
        d.entrVal;


    // ================================================================
    // CONFIGURAÇÃO DE CORES
    // ================================================================

    const azulPrimario =
        [37, 99, 235];


    const cinzaEscuro =
        [30, 41, 59];


    const cinzaClaro =
        [241, 245, 249];


    // ================================================================
    // CABEÇALHO
    // ================================================================

    doc.setFillColor(
        azulPrimario[0],
        azulPrimario[1],
        azulPrimario[2]
    );


    doc.rect(
        0,
        0,
        210,
        40,
        'F'
    );


    // Texto branco

    doc.setTextColor(
        255,
        255,
        255
    );


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(22);


    doc.text(
        "DIGITAL UNIVERSE",
        10,
        20
    );


    doc.setFontSize(10);


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.text(
        "Assistência Técnica Especializada",
        10,
        26
    );


    doc.text(
        "Celulares | Computadores | Notebooks",
        10,
        31
    );


    // Data

    doc.setFontSize(9);


    doc.text(
        `Data: ${dataAtual}`,
        195,
        20,
        {
            align: "right"
        }
    );


    doc.text(
        "Betim - MG",
        195,
        26,
        {
            align: "right"
        }
    );


    // ================================================================
    // INFORMAÇÕES DO CLIENTE
    // ================================================================

    doc.setTextColor(
        cinzaEscuro[0],
        cinzaEscuro[1],
        cinzaEscuro[2]
    );


    doc.setFontSize(12);


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.text(
        "ORÇAMENTO DE SERVIÇO",
        10,
        50
    );


    // Caixa

    doc.setFillColor(
        cinzaClaro[0],
        cinzaClaro[1],
        cinzaClaro[2]
    );


    doc.roundedRect(
        10,
        55,
        190,
        32,
        3,
        3,
        'F'
    );


    doc.setFontSize(10);


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.text(
        "CLIENTE:",
        15,
        63
    );


    doc.text(
        "APARELHO:",
        15,
        71
    );


    doc.text(
        "CONTATO:",
        15,
        79
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.text(
        d.nomeVal ||
        "Não informado",
        45,
        63
    );


    const aparelho =
        [
            d.tipoVal,
            d.marcaVal,
            d.modeloVal
        ]
        .filter(Boolean)
        .join(" ");


    doc.text(
        aparelho ||
        "Não informado",
        45,
        71
    );


    doc.text(
        d.telefoneVal ||
        "Não informado",
        45,
        79
    );


    // ================================================================
    // TABELA DE SERVIÇOS
    // ================================================================

    let y = 100;


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFillColor(
        azulPrimario[0],
        azulPrimario[1],
        azulPrimario[2]
    );


    doc.setTextColor(
        255,
        255,
        255
    );


    doc.rect(
        10,
        y,
        190,
        8,
        'F'
    );


    doc.text(
        "DESCRIÇÃO DO SERVIÇO",
        15,
        y + 5.5
    );


    doc.text(
        "VALOR",
        195,
        y + 5.5,
        {
            align: "right"
        }
    );


    doc.setTextColor(
        cinzaEscuro[0],
        cinzaEscuro[1],
        cinzaEscuro[2]
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    y += 15;


    // ================================================================
    // ITENS
    // ================================================================

    itensOrcamento.forEach(
        (item, index) => {

            // --------------------------------------
            // Verifica espaço na página
            // --------------------------------------

            if (y > 245) {

                doc.addPage();

                y = 20;

            }


            // --------------------------------------
            // Fundo alternado
            // --------------------------------------

            if (index % 2 === 0) {

                doc.setFillColor(
                    250,
                    250,
                    250
                );


                doc.rect(
                    10,
                    y - 5,
                    190,
                    8,
                    'F'
                );

            }


            // --------------------------------------
            // Descrição
            // --------------------------------------

            doc.setFont(
                "helvetica",
                "normal"
            );


            doc.setFontSize(9);


            let descricao =
                item.descricao;


            // Limita descrição para não
            // invadir a coluna de valor

            if (descricao.length > 72) {

                descricao =
                    descricao.substring(
                        0,
                        69
                    ) + "...";

            }


            doc.text(
                descricao,
                15,
                y
            );


            // --------------------------------------
            // Valor
            // --------------------------------------

            doc.text(
                `R$ ${item.valorFinalItem.toFixed(2)}`,
                195,
                y,
                {
                    align: "right"
                }
            );


            // --------------------------------------
            // Peça / desconto
            // --------------------------------------

            let detalhes = [];


            if (item.valorPecaFinal > 0) {

                detalhes.push(
                    `Peça: R$ ${item.valorPecaFinal.toFixed(2)}`
                );

            }


            if (item.teveDesconto) {

                detalhes.push(
                    item.textoDesconto
                );

            }


            if (detalhes.length > 0) {

                y += 4;


                doc.setFontSize(7);


                doc.setTextColor(
                    100,
                    116,
                    139
                );


                doc.text(
                    detalhes.join(" | "),
                    15,
                    y
                );


                doc.setTextColor(
                    cinzaEscuro[0],
                    cinzaEscuro[1],
                    cinzaEscuro[2]
                );

            }


            y += 8;

        }
    );


    // ================================================================
    // TOTAIS
    // ================================================================

    y += 5;


    // Linha

    doc.setDrawColor(
        200,
        200,
        200
    );


    doc.line(
        10,
        y,
        200,
        y
    );


    y += 10;


    // ------------------------------------------
    // Taxa de entrega
    // ------------------------------------------

    if (d.entrVal > 0) {

        doc.setFontSize(10);


        doc.setFont(
            "helvetica",
            "normal"
        );


        doc.setTextColor(
            cinzaEscuro[0],
            cinzaEscuro[1],
            cinzaEscuro[2]
        );


        doc.text(
            "Taxa de Entrega/Busca:",
            140,
            y
        );


        doc.text(
            `R$ ${d.entrVal.toFixed(2)}`,
            195,
            y,
            {
                align: "right"
            }
        );


        y += 7;

    }


    // ------------------------------------------
    // Total
    // ------------------------------------------

    doc.setFontSize(14);


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setTextColor(
        azulPrimario[0],
        azulPrimario[1],
        azulPrimario[2]
    );


    doc.text(
        "VALOR TOTAL:",
        120,
        y + 5
    );


    doc.text(
        `R$ ${totalFinal.toFixed(2)}`,
        195,
        y + 5,
        {
            align: "right"
        }
    );


    // ================================================================
    // RODAPÉ
    // ================================================================

    const alturaPagina =
        doc.internal.pageSize.getHeight();


    const yRodape =
        alturaPagina - 27;


    doc.setDrawColor(
        200,
        200,
        200
    );


    doc.line(
        10,
        yRodape,
        200,
        yRodape
    );


    doc.setFontSize(8);


    doc.setTextColor(
        100,
        116,
        139
    );


    doc.setFont(
        "helvetica",
        "italic"
    );


    const garantia =
        "Garantia legal de 90 dias sobre o serviço realizado. Orçamento válido por 5 dias.";


    doc.text(
        garantia,
        105,
        yRodape + 7,
        {
            align: "center"
        }
    );


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.text(
        "Obrigado pela confiança!",
        105,
        yRodape + 12,
        {
            align: "center"
        }
    );


    // ================================================================
    // SALVAR PDF
    // ================================================================

    let nomeArquivo =
        d.nomeVal ||
        "Cliente";


    nomeArquivo =
        nomeArquivo
            .replace(/[\\/:*?"<>|]/g, '')
            .replace(/\s+/g, '_');


    if (!nomeArquivo) {
        nomeArquivo = "Cliente";
    }


    doc.save(
        `Orcamento_${nomeArquivo}.pdf`
    );

}


// ==========================================
// 12. ENVIAR WHATSAPP
// ==========================================

function enviarWhatsApp() {

    // ------------------------------------------
    // Verifica serviços
    // ------------------------------------------

    if (itensOrcamento.length === 0) {

        alert(
            "Adicione pelo menos um serviço para enviar."
        );

        return;

    }


    // ------------------------------------------
    // Captura dados
    // ------------------------------------------

    const d =
        capturaDados();


    // ------------------------------------------
    // Soma
    // ------------------------------------------

    let somaItens = 0;


    itensOrcamento.forEach(
        item => {

            somaItens +=
                item.valorFinalItem;

        }
    );


    const totalFinal =
        somaItens +
        d.entrVal;


    // ------------------------------------------
    // Monta mensagem
    // ------------------------------------------

    let mensagem =
        "*DIGITAL UNIVERSE*\n";

    mensagem +=
        "*ORÇAMENTO DE SERVIÇO*\n\n";


    // ------------------------------------------
    // Cliente
    // ------------------------------------------

    mensagem +=
        `*Cliente:* ${d.nomeVal || "Não informado"}\n`;


    mensagem +=
        `*Telefone:* ${d.telefoneVal || "Não informado"}\n`;


    // ------------------------------------------
    // Aparelho
    // ------------------------------------------

    const aparelho =
        [
            d.tipoVal,
            d.marcaVal,
            d.modeloVal
        ]
        .filter(Boolean)
        .join(" ");


    mensagem +=
        `*Aparelho:* ${aparelho || "Não informado"}\n\n`;


    mensagem +=
        "*SERVIÇOS:*\n\n";


    // ------------------------------------------
    // Itens
    // ------------------------------------------

    itensOrcamento.forEach(
        item => {

            mensagem +=
                `• ${item.descricao}\n`;

            mensagem +=
                `  Valor: R$ ${item.valorFinalItem.toFixed(2)}\n`;


            if (item.valorPecaFinal > 0) {

                mensagem +=
                    `  Peça: R$ ${item.valorPecaFinal.toFixed(2)}\n`;

            }


            if (item.teveDesconto) {

                mensagem +=
                    `  ${item.textoDesconto}\n`;

            }


            mensagem += "\n";

        }
    );


    // ------------------------------------------
    // Entrega
    // ------------------------------------------

    if (d.entrVal > 0) {

        mensagem +=
            `*Taxa de Entrega/Busca:* R$ ${d.entrVal.toFixed(2)}\n`;

    }


    // ------------------------------------------
    // Total
    // ------------------------------------------

    mensagem +=
        `\n*VALOR TOTAL: R$ ${totalFinal.toFixed(2)}*\n\n`;


    mensagem +=
        "Orçamento válido por 5 dias.";


    // ------------------------------------------
    // Codifica mensagem
    // ------------------------------------------

    const textoCodificado =
        encodeURIComponent(
            mensagem
        );


    // ------------------------------------------
    // Número do WhatsApp
    // ------------------------------------------

    let telefone =
        d.telefoneVal
            ? d.telefoneVal.replace(
                /\D/g,
                ''
            )
            : '';


    /*
     * Se o número tiver 10 ou 11 dígitos,
     * adiciona o código do Brasil (55).
     */

    if (
        telefone.length === 10 ||
        telefone.length === 11
    ) {

        telefone =
            '55' +
            telefone;

    }


    // ------------------------------------------
    // URL
    // ------------------------------------------

    let url;


    if (telefone) {

        url =
            `https://wa.me/${telefone}?text=${textoCodificado}`;

    } else {

        url =
            `https://wa.me/?text=${textoCodificado}`;

    }


    // ------------------------------------------
    // Abre WhatsApp
    // ------------------------------------------

    window.open(
        url,
        '_blank'
    );

}