// ============================================================
// DIGITAL UNIVERSE
// SISTEMA DE ORÇAMENTOS
// ============================================================

// ============================================================
// ESTADO
// ============================================================

let itensOrcamento = [];
let orcamentoAtualId = null;

const STORAGE_KEY =
    'digitalUniverse_orcamentos_v1';

const NUMERO_KEY =
    'digitalUniverse_proximoNumero_v1';


// ============================================================
// INICIALIZAÇÃO
// ============================================================

window.onload = function () {

    iniciarCascadingDropdowns();

    document
        .getElementById('urgencia')
        .addEventListener('change', recalcularValoresEAtualizar);

    document
        .getElementById('entrega')
        .addEventListener('input', recalcularValoresEAtualizar);

    renderizarOrcamentosSalvos();

    recalcularValoresEAtualizar();
};


// ============================================================
// DROPDOWNS
// ============================================================

function iniciarCascadingDropdowns() {

    const tipo =
        document.getElementById('tipoAparelho');

    const marca =
        document.getElementById('marcaAparelho');

    const modelo =
        document.getElementById('modeloAparelho');

    const servico =
        document.getElementById('servicoAparelho');


    function resetar(elemento, texto) {

        elemento.innerHTML =
            `<option value="">${texto}</option>`;

        elemento.disabled = true;
    }


    if (typeof baseDadosServicos === 'undefined') {

        mostrarStatus(
            'Erro: dados.js não foi carregado.',
            true
        );

        return;
    }


    Object.keys(baseDadosServicos)
        .forEach(nomeTipo => {

            tipo.add(
                new Option(
                    nomeTipo,
                    nomeTipo
                )
            );

        });


    tipo.addEventListener('change', function () {

        resetar(
            marca,
            'Selecione a Marca...'
        );

        resetar(
            modelo,
            'Selecione o Modelo...'
        );

        resetar(
            servico,
            'Selecione o Serviço...'
        );


        if (!this.value) return;


        marca.disabled = false;


        Object.keys(
            baseDadosServicos[this.value]
        ).forEach(nomeMarca => {

            marca.add(
                new Option(
                    nomeMarca,
                    nomeMarca
                )
            );

        });

    });


    marca.addEventListener('change', function () {

        resetar(
            modelo,
            'Selecione o Modelo...'
        );

        resetar(
            servico,
            'Selecione o Serviço...'
        );


        if (!this.value) return;


        modelo.disabled = false;


        Object.keys(
            baseDadosServicos[
                tipo.value
            ][
                this.value
            ]
        ).forEach(nomeModelo => {

            modelo.add(
                new Option(
                    nomeModelo,
                    nomeModelo
                )
            );

        });

    });


    modelo.addEventListener('change', function () {

        resetar(
            servico,
            'Selecione o Serviço...'
        );


        if (!this.value) return;


        servico.disabled = false;


        const servicos =
            baseDadosServicos[
                tipo.value
            ][
                marca.value
            ][
                this.value
            ];


        Object.entries(servicos)
            .forEach(([id, config]) => {

                servico.add(
                    new Option(
                        config.nome,
                        id
                    )
                );

            });

    });
}


// ============================================================
// PREÇO DA PEÇA
// ============================================================

function calcularMargemPeca(valorCusto) {

    if (!valorCusto || valorCusto <= 0)
        return 0;

    if (valorCusto <= 150)
        return valorCusto * 1.50;

    if (valorCusto <= 400)
        return valorCusto * 1.40;

    return valorCusto * 1.30;
}


// ============================================================
// DESCONTO COMBO
// ============================================================

function obterDescontoCombo(posicao) {

    if (posicao === 1)
        return 0;

    if (posicao === 2)
        return 0.20;

    return 0.30;
}


// ============================================================
// INSERIR
// ============================================================

function inserir() {

    const tipo =
        document.getElementById('tipoAparelho').value;

    const marca =
        document.getElementById('marcaAparelho').value;

    const modelo =
        document.getElementById('modeloAparelho').value;

    const servicoId =
        document.getElementById('servicoAparelho').value;

    const risco =
        Number(
            document.getElementById('risco').value
        );

    const custoPeca =
        Number(
            document.getElementById('peca').value
        ) || 0;

    const erro =
        document.getElementById('erro');


    if (!tipo || !marca || !modelo || !servicoId) {

        erro.innerText =
            'Por favor, selecione as 4 opções do aparelho e serviço.';

        return;
    }


    if (
        itensOrcamento.some(
            item =>
                item.servicoId === servicoId
        )
    ) {

        erro.innerText =
            'Este serviço já foi adicionado ao orçamento atual.';

        return;
    }


    const config =
        baseDadosServicos[
            tipo
        ][
            marca
        ][
            modelo
        ][
            servicoId
        ];


    if (!config) {

        erro.innerText =
            'Serviço não encontrado na base de dados.';

        return;
    }


    const maoDeObraBase =
        risco === 0
            ? Number(config.sMax)
            : (
                Number(config.sMax) +
                Number(config.sMin)
            ) / 2;


    const valorPecaFinal =
        calcularMargemPeca(custoPeca);


    itensOrcamento.push({

        id:
            Date.now() +
            Math.random(),

        servicoId,

        tipo,

        marca,

        modelo,

        nomeServico:
            config.nome,

        descricao:
            `${tipo} ${marca} ${modelo} - ${config.nome}`,

        risco,

        maoDeObraBase,

        valorPecaFinal,

        custoPecaOriginal:
            custoPeca,

        valorFinalItem:
            0,

        teveDesconto:
            false,

        textoDesconto:
            ''

    });


    document.getElementById('peca').value = '';

    erro.innerText = '';

    recalcularValoresEAtualizar();
}


// ============================================================
// REMOVER
// ============================================================

function remover(id) {

    itensOrcamento =
        itensOrcamento.filter(
            item =>
                item.id !== id
        );

    recalcularValoresEAtualizar();
}


// ============================================================
// RECÁLCULO
// ============================================================

function recalcularValoresEAtualizar() {

    const urgencia =
        document.getElementById('urgencia')
            .checked;

    const entrega =
        Number(
            document.getElementById('entrega')
                .value
        ) || 0;


    let totalServicos = 0;


    itensOrcamento.forEach(
        (item, index) => {

            const desconto =
                obterDescontoCombo(
                    index + 1
                );


            let maoDeObra =
                Number(
                    item.maoDeObraBase
                ) *
                (1 - desconto);


            if (urgencia) {

                maoDeObra *= 1.20;

            }


            item.valorFinalItem =
                maoDeObra +
                Number(
                    item.valorPecaFinal || 0
                );


            item.teveDesconto =
                desconto > 0;


            item.textoDesconto =
                desconto > 0
                    ? `(Combo: -${desconto * 100}% M.O.)`
                    : '';


            totalServicos +=
                item.valorFinalItem;

        }
    );


    const total =
        totalServicos +
        entrega;


    atualizarResumoVisual(
        totalServicos,
        entrega,
        total
    );
}


// ============================================================
// VISUAL DO ORÇAMENTO
// ============================================================

function atualizarResumoVisual(
    totalServicos,
    entrega,
    total
) {

    const lista =
        document.getElementById(
            'listaOrcamento'
        );

    const valor =
        document.getElementById(
            'valorTotal'
        );


    lista.innerHTML = '';


    if (itensOrcamento.length === 0) {

        lista.innerHTML = `
            <li class="vazio">
                Nenhum serviço adicionado ao orçamento.
            </li>
        `;
    }


    itensOrcamento.forEach(
        item => {

            const li =
                document.createElement('li');

            li.className =
                'item-orcamento';


            const badge =
                item.teveDesconto
                    ? `
                        <span class="badge-desconto">
                            ${item.textoDesconto}
                        </span>
                    `
                    : '';


            const peca =
                item.valorPecaFinal > 0
                    ? `
                        | Peça:
                        R$ ${formatarMoeda(
                            item.valorPecaFinal
                        )}
                    `
                    : '';


            li.innerHTML = `

                <div class="item-detalhes">

                    <span class="item-nome">

                        ${escapeHtml(
                            item.descricao
                        )}

                        ${badge}

                    </span>

                    <span class="item-valores">

                        Total:
                        R$ ${formatarMoeda(
                            item.valorFinalItem
                        )}

                        ${peca}

                    </span>

                </div>

                <button
                    class="btn btn-danger btn-small"
                    onclick="remover(${item.id})">

                    <i class="bi bi-trash"></i>

                    Remover

                </button>

            `;


            lista.appendChild(li);

        }
    );


    if (entrega > 0) {

        const li =
            document.createElement('li');

        li.className =
            'item-orcamento';


        li.innerHTML = `

            <div class="item-detalhes">

                <span class="item-nome">

                    <i class="bi bi-truck"></i>

                    Taxa de Entrega

                </span>

                <span class="item-valores">

                    R$ ${formatarMoeda(
                        entrega
                    )}

                </span>

            </div>

        `;


        lista.appendChild(li);
    }


    valor.innerText =
        formatarMoeda(total);
}


// ============================================================
// CAPTURA DOS DADOS
// ============================================================

function capturaDados() {

    const nomeVal =
        document.getElementById('nome')
            .value.trim();

    const telefoneVal =
        document.getElementById('telefone')
            .value.trim();

    const tipoVal =
        document.getElementById('tipoAparelho')
            .value;

    const marcaVal =
        document.getElementById('marcaAparelho')
            .value;

    const modeloVal =
        document.getElementById('modeloAparelho')
            .value;

    const entrVal =
        Number(
            document.getElementById('entrega')
                .value
        ) || 0;

    const urgenciaVal =
        document.getElementById('urgencia')
            .checked;


    const totalServicos =
        itensOrcamento.reduce(
            (soma, item) =>
                soma +
                Number(
                    item.valorFinalItem || 0
                ),
            0
        );


    return {

        nomeVal,

        telefoneVal,

        tipoVal,

        marcaVal,

        modeloVal,

        entrVal,

        urgenciaVal,

        totalServicos,

        totalFinal:
            totalServicos +
            entrVal

    };
}


// ============================================================
// NOVO ORÇAMENTO
// ============================================================

function novoOrcamento() {

    if (
        itensOrcamento.length > 0 ||
        orcamentoAtualId !== null
    ) {

        const confirmar =
            confirm(
                'Deseja iniciar um novo orçamento?\n\n' +
                'As alterações não salvas serão descartadas.'
            );


        if (!confirmar)
            return;
    }


    limparFormularioCompleto();

    mostrarStatus(
        'Novo orçamento iniciado.'
    );
}


function limparFormularioCompleto() {

    itensOrcamento = [];

    orcamentoAtualId = null;


    document.getElementById('nome').value = '';

    document.getElementById('telefone').value = '';

    document.getElementById('peca').value = '';

    document.getElementById('entrega').value = '0';

    document.getElementById('urgencia').checked = false;

    document.getElementById('risco').value = '0';

    document.getElementById('erro').innerText = '';


    const tipo =
        document.getElementById('tipoAparelho');

    const marca =
        document.getElementById('marcaAparelho');

    const modelo =
        document.getElementById('modeloAparelho');

    const servico =
        document.getElementById('servicoAparelho');


    tipo.value = '';


    marca.innerHTML =
        '<option value="">Selecione a Marca...</option>';

    marca.disabled = true;


    modelo.innerHTML =
        '<option value="">Selecione o Modelo...</option>';

    modelo.disabled = true;


    servico.innerHTML =
        '<option value="">Selecione o Serviço...</option>';

    servico.disabled = true;


    recalcularValoresEAtualizar();
}


// ============================================================
// LOCAL STORAGE
// ============================================================

function obterOrcamentosSalvos() {

    try {

        const dados =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (!dados)
            return [];


        const lista =
            JSON.parse(dados);


        return Array.isArray(lista)
            ? lista
            : [];

    } catch (erro) {

        console.error(
            'Erro ao ler orçamentos:',
            erro
        );

        return [];
    }
}


function gravarOrcamentosSalvos(lista) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(lista)
        );

        return true;

    } catch (erro) {

        console.error(
            'Erro ao salvar:',
            erro
        );

        mostrarStatus(
            'Não foi possível salvar o orçamento.',
            true
        );

        return false;
    }
}


// ============================================================
// NUMERAÇÃO
// ============================================================

function obterProximoNumero() {

    let numero =
        Number(
            localStorage.getItem(
                NUMERO_KEY
            )
        );


    if (!numero || numero < 1)
        numero = 1;


    localStorage.setItem(
        NUMERO_KEY,
        String(numero + 1)
    );


    return String(numero)
        .padStart(4, '0');
}


// ============================================================
// SALVAR
// ============================================================

function salvarOrcamento() {

    if (itensOrcamento.length === 0) {

        alert(
            'Adicione pelo menos um serviço antes de salvar.'
        );

        return;
    }


    const d =
        capturaDados();


    const lista =
        obterOrcamentosSalvos();


    const agora =
        new Date()
            .toISOString();


    let existente = null;


    if (orcamentoAtualId !== null) {

        existente =
            lista.find(
                item =>
                    item.id ===
                    orcamentoAtualId
            );
    }


    const registro = {

        id:
            orcamentoAtualId ||
            gerarIdUnico(),

        numero:
            existente
                ? existente.numero
                : obterProximoNumero(),

        criadoEm:
            existente
                ? existente.criadoEm
                : agora,

        atualizadoEm:
            agora,

        cliente: {

            nome:
                d.nomeVal,

            telefone:
                d.telefoneVal

        },

        aparelho: {

            tipo:
                d.tipoVal,

            marca:
                d.marcaVal,

            modelo:
                d.modeloVal

        },

        itens:
            JSON.parse(
                JSON.stringify(
                    itensOrcamento
                )
            ),

        entrega:
            d.entrVal,

        urgencia:
            d.urgenciaVal,

        totalServicos:
            d.totalServicos,

        totalFinal:
            d.totalFinal

    };


    if (existente) {

        const index =
            lista.findIndex(
                item =>
                    item.id ===
                    orcamentoAtualId
            );


        lista[index] =
            registro;

    } else {

        lista.unshift(
            registro
        );

        orcamentoAtualId =
            registro.id;
    }


    if (
        gravarOrcamentosSalvos(
            lista
        )
    ) {

        renderizarOrcamentosSalvos();

        mostrarStatus(
            `Orçamento nº ${registro.numero} salvo com sucesso.`
        );
    }
}


// ============================================================
// LISTA DE ORÇAMENTOS SALVOS
// ============================================================

function renderizarOrcamentosSalvos() {

    const container =
        document.getElementById(
            'listaOrcamentosSalvos'
        );


    const busca =
        (
            document.getElementById(
                'buscaOrcamentos'
            )?.value || ''
        )
        .toLowerCase()
        .trim();


    const lista =
        obterOrcamentosSalvos();


    const filtrados =
        lista.filter(
            orcamento => {

                const texto = [

                    orcamento.numero,

                    orcamento.cliente?.nome,

                    orcamento.cliente?.telefone,

                    orcamento.aparelho?.tipo,

                    orcamento.aparelho?.marca,

                    orcamento.aparelho?.modelo

                ]
                .join(' ')
                .toLowerCase();


                return texto.includes(
                    busca
                );
            }
        );


    container.innerHTML = '';


    if (filtrados.length === 0) {

        container.innerHTML = `

            <div class="vazio">

                ${
                    lista.length === 0
                        ? 'Nenhum orçamento salvo ainda.'
                        : 'Nenhum orçamento encontrado.'
                }

            </div>

        `;

        return;
    }


    filtrados.forEach(
        orcamento => {

            const div =
                document.createElement(
                    'div'
                );


            div.className =
                'orcamento-salvo';


            const aparelho = [

                orcamento.aparelho?.tipo,

                orcamento.aparelho?.marca,

                orcamento.aparelho?.modelo

            ]
            .filter(Boolean)
            .join(' ');


            div.innerHTML = `

                <div class="orcamento-info">

                    <div class="orcamento-numero">

                        #${escapeHtml(
                            orcamento.numero
                        )}

                    </div>


                    <div>

                        <div class="orcamento-cliente">

                            ${escapeHtml(
                                orcamento.cliente?.nome ||
                                'Cliente não informado'
                            )}

                        </div>


                        <div class="orcamento-meta">

                            ${escapeHtml(
                                orcamento.cliente?.telefone ||
                                'Sem telefone'
                            )}

                        </div>

                    </div>


                    <div>

                        <div>

                            ${escapeHtml(
                                aparelho ||
                                'Aparelho não informado'
                            )}

                        </div>


                        <div class="orcamento-meta">

                            ${formatarData(
                                orcamento.atualizadoEm
                            )}

                        </div>

                    </div>


                    <div class="orcamento-total">

                        R$
                        ${formatarMoeda(
                            orcamento.totalFinal
                        )}

                    </div>

                </div>


                <div class="orcamento-acoes">

                    <button
                        class="btn btn-dark btn-small"
                        onclick="abrirOrcamento('${orcamento.id}')">

                        <i class="bi bi-pencil-square"></i>

                        Abrir

                    </button>


                    <button
                        class="btn btn-danger btn-small"
                        onclick="gerarPDFSalvo('${orcamento.id}')">

                        <i class="bi bi-file-pdf"></i>

                        PDF

                    </button>


                    <button
                        class="btn btn-success btn-small"
                        onclick="enviarWhatsAppSalvo('${orcamento.id}')">

                        <i class="bi bi-whatsapp"></i>

                        WhatsApp

                    </button>


                    <button
                        class="btn btn-secondary btn-small"
                        onclick="excluirOrcamento('${orcamento.id}')">

                        <i class="bi bi-trash"></i>

                        Excluir

                    </button>

                </div>

            `;


            container.appendChild(div);
        }
    );
}


// ============================================================
// ABRIR ORÇAMENTO
// ============================================================

function abrirOrcamento(id) {

    const lista =
        obterOrcamentosSalvos();


    const orcamento =
        lista.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!orcamento) {

        alert(
            'Orçamento não encontrado.'
        );

        return;
    }


    orcamentoAtualId =
        orcamento.id;


    document.getElementById('nome').value =
        orcamento.cliente?.nome || '';


    document.getElementById('telefone').value =
        orcamento.cliente?.telefone || '';


    document.getElementById('entrega').value =
        Number(
            orcamento.entrega || 0
        );


    document.getElementById('urgencia').checked =
        Boolean(
            orcamento.urgencia
        );


    itensOrcamento =
        JSON.parse(
            JSON.stringify(
                orcamento.itens || []
            )
        );


    carregarAparelho(
        orcamento.aparelho?.tipo || '',
        orcamento.aparelho?.marca || '',
        orcamento.aparelho?.modelo || ''
    );


    recalcularValoresEAtualizar();


    mostrarStatus(
        `Orçamento nº ${orcamento.numero} carregado.`
    );


    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });
}


// ============================================================
// CARREGAR APARELHO
// ============================================================

function carregarAparelho(
    tipo,
    marca,
    modelo
) {

    const elTipo =
        document.getElementById(
            'tipoAparelho'
        );

    const elMarca =
        document.getElementById(
            'marcaAparelho'
        );

    const elModelo =
        document.getElementById(
            'modeloAparelho'
        );

    const elServico =
        document.getElementById(
            'servicoAparelho'
        );


    if (!tipo ||
        !baseDadosServicos[tipo])
        return;


    elTipo.value =
        tipo;


    elMarca.innerHTML =
        '<option value="">Selecione a Marca...</option>';


    Object.keys(
        baseDadosServicos[tipo]
    ).forEach(
        nomeMarca => {

            elMarca.add(
                new Option(
                    nomeMarca,
                    nomeMarca
                )
            );

        }
    );


    elMarca.disabled = false;

    elMarca.value =
        marca;


    if (
        !baseDadosServicos[tipo][marca]
    )
        return;


    elModelo.innerHTML =
        '<option value="">Selecione o Modelo...</option>';


    Object.keys(
        baseDadosServicos[tipo][marca]
    ).forEach(
        nomeModelo => {

            elModelo.add(
                new Option(
                    nomeModelo,
                    nomeModelo
                )
            );

        }
    );


    elModelo.disabled = false;

    elModelo.value =
        modelo;


    if (
        !baseDadosServicos[tipo][marca][modelo]
    )
        return;


    elServico.innerHTML =
        '<option value="">Selecione o Serviço...</option>';


    const servicos =
        baseDadosServicos[
            tipo
        ][
            marca
        ][
            modelo
        ];


    Object.entries(servicos)
        .forEach(
            ([id, config]) => {

                elServico.add(
                    new Option(
                        config.nome,
                        id
                    )
                );

            }
        );


    elServico.disabled = false;
}


// ============================================================
// EXCLUIR
// ============================================================

function excluirOrcamento(id) {

    const lista =
        obterOrcamentosSalvos();


    const orcamento =
        lista.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!orcamento)
        return;


    const confirmar =
        confirm(
            `Excluir o orçamento nº ${orcamento.numero}?\n\n` +
            'Essa ação não poderá ser desfeita.'
        );


    if (!confirmar)
        return;


    const novaLista =
        lista.filter(
            item =>
                String(item.id) !==
                String(id)
        );


    if (
        gravarOrcamentosSalvos(
            novaLista
        )
    ) {

        if (
            String(orcamentoAtualId) ===
            String(id)
        ) {

            limparFormularioCompleto();
        }


        renderizarOrcamentosSalvos();


        mostrarStatus(
            `Orçamento nº ${orcamento.numero} excluído.`
        );
    }
}


// ============================================================
// PDF
// ============================================================

function gerarPDF() {

    if (itensOrcamento.length === 0) {

        alert(
            'Adicione pelo menos um serviço para gerar o PDF.'
        );

        return;
    }


    const d =
        capturaDados();


    gerarPDFComDados({

        ...d,

        numero:
            obterNumeroAtual(),

        itens:
            itensOrcamento

    });
}


function gerarPDFSalvo(id) {

    const lista =
        obterOrcamentosSalvos();


    const orcamento =
        lista.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!orcamento) {

        alert(
            'Orçamento não encontrado.'
        );

        return;
    }


    gerarPDFComDados({

        nomeVal:
            orcamento.cliente?.nome || '',

        telefoneVal:
            orcamento.cliente?.telefone || '',

        tipoVal:
            orcamento.aparelho?.tipo || '',

        marcaVal:
            orcamento.aparelho?.marca || '',

        modeloVal:
            orcamento.aparelho?.modelo || '',

        entrVal:
            Number(
                orcamento.entrega || 0
            ),

        urgenciaVal:
            Boolean(
                orcamento.urgencia
            ),

        numero:
            orcamento.numero,

        itens:
            orcamento.itens || []

    });
}


// ============================================================
// GERAÇÃO DO PDF
// ============================================================

function gerarPDFComDados(d) {

    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        alert(
            'A biblioteca PDF não foi carregada.'
        );

        return;
    }


    const { jsPDF } =
        window.jspdf;


    const doc =
        new jsPDF();


    const azul =
        [37, 99, 235];

    const cinza =
        [30, 41, 59];

    const claro =
        [241, 245, 249];


    const totalServicos =
        (d.itens || [])
        .reduce(
            (soma, item) =>
                soma +
                Number(
                    item.valorFinalItem || 0
                ),
            0
        );


    const entrega =
        Number(
            d.entrVal || 0
        );


    const total =
        totalServicos +
        entrega;


    // CABEÇALHO

    doc.setFillColor(...azul);

    doc.rect(
        0,
        0,
        210,
        38,
        'F'
    );


    doc.setTextColor(
        255,
        255,
        255
    );


    doc.setFontSize(20);

    doc.setFont(
        undefined,
        'bold'
    );


    doc.text(
        'DIGITAL UNIVERSE',
        15,
        14
    );


    doc.setFontSize(10);

    doc.setFont(
        undefined,
        'normal'
    );


    doc.text(
        'Assistência Técnica Especializada',
        15,
        21
    );


    doc.text(
        'Celulares | Computadores | Notebooks',
        15,
        27
    );


    doc.text(
        'Betim - MG',
        15,
        33
    );


    doc.setFontSize(9);


    doc.text(
        `Orçamento Nº ${d.numero || '---'}`,
        145,
        16
    );


    doc.text(
        new Date()
            .toLocaleString('pt-BR'),
        145,
        22
    );


    let y = 48;


    // CLIENTE

    doc.setFillColor(
        ...claro
    );


    doc.roundedRect(
        12,
        y - 5,
        186,
        32,
        3,
        3,
        'F'
    );


    doc.setTextColor(
        ...cinza
    );


    doc.setFontSize(10);

    doc.setFont(
        undefined,
        'bold'
    );


    doc.text(
        'CLIENTE',
        17,
        y + 3
    );


    doc.setFont(
        undefined,
        'normal'
    );


    doc.text(
        limitarTexto(
            d.nomeVal ||
            'Não informado',
            70
        ),
        17,
        y + 10
    );


    doc.setFont(
        undefined,
        'bold'
    );


    doc.text(
        'CONTATO',
        105,
        y + 3
    );


    doc.setFont(
        undefined,
        'normal'
    );


    doc.text(
        limitarTexto(
            d.telefoneVal ||
            'Não informado',
            55
        ),
        105,
        y + 10
    );


    doc.setFont(
        undefined,
        'bold'
    );


    doc.text(
        'APARELHO',
        17,
        y + 20
    );


    doc.setFont(
        undefined,
        'normal'
    );


    doc.text(
        limitarTexto(
            [
                d.tipoVal,
                d.marcaVal,
                d.modeloVal
            ]
            .filter(Boolean)
            .join(' ') ||
            'Não informado',
            95
        ),
        17,
        y + 26
    );


    y += 38;


    // TABELA

    const linhas =
        (d.itens || [])
        .map(
            (item, index) => {

                const mao =
                    calcularMaoDeObra(
                        item,
                        index,
                        d.urgenciaVal
                    );


                return [

                    index + 1,

                    item.descricao ||
                    item.nomeServico ||
                    'Serviço',

                    `R$ ${formatarMoeda(mao)}`,

                    Number(
                        item.valorPecaFinal || 0
                    ) > 0
                        ? `R$ ${formatarMoeda(
                            item.valorPecaFinal
                        )}`
                        : '-',

                    `R$ ${formatarMoeda(
                        item.valorFinalItem
                    )}`

                ];
            }
        );


    if (
        typeof doc.autoTable ===
        'function'
    ) {

        doc.autoTable({

            startY: y,

            head: [[
                '#',
                'Serviço',
                'Mão de Obra',
                'Peça',
                'Total'
            ]],

            body: linhas,

            theme: 'grid',

            headStyles: {

                fillColor:
                    azul,

                textColor:
                    255,

                fontStyle:
                    'bold'

            },

            styles: {

                fontSize:
                    8.5,

                cellPadding:
                    3,

                textColor:
                    cinza

            },

            margin: {

                left:
                    12,

                right:
                    12

            }

        });


        y =
            doc.lastAutoTable.finalY +
            10;

    }


    // TOTAL

    if (y > 245) {

        doc.addPage();

        y = 20;
    }


    doc.setFillColor(
        ...claro
    );


    doc.roundedRect(
        118,
        y,
        80,
        32,
        3,
        3,
        'F'
    );


    doc.setTextColor(
        ...cinza
    );


    doc.setFontSize(9);

    doc.setFont(
        undefined,
        'normal'
    );


    doc.text(
        'Subtotal serviços:',
        123,
        y + 8
    );


    doc.text(
        `R$ ${formatarMoeda(
            totalServicos
        )}`,
        193,
        y + 8,
        {
            align:
                'right'
        }
    );


    doc.text(
        'Entrega:',
        123,
        y + 16
    );


    doc.text(
        `R$ ${formatarMoeda(
            entrega
        )}`,
        193,
        y + 16,
        {
            align:
                'right'
        }
    );


    doc.setFontSize(12);

    doc.setFont(
        undefined,
        'bold'
    );


    doc.text(
        'TOTAL:',
        123,
        y + 26
    );


    doc.text(
        `R$ ${formatarMoeda(
            total
        )}`,
        193,
        y + 26,
        {
            align:
                'right'
        }
    );


    const altura =
        doc.internal.pageSize
            .getHeight();


    doc.setDrawColor(
        ...azul
    );


    doc.line(
        15,
        altura - 28,
        195,
        altura - 28
    );


    doc.setFontSize(8);

    doc.setFont(
        undefined,
        'normal'
    );


    doc.text(
        'Garantia legal de 90 dias sobre o serviço realizado.',
        15,
        altura - 20
    );


    doc.text(
        'Orçamento válido por 5 dias.',
        15,
        altura - 15
    );


    doc.text(
        'Obrigado pela confiança!',
        195,
        altura - 15,
        {
            align:
                'right'
        }
    );


    const nomeArquivo =
        sanitizarNomeArquivo(
            d.nomeVal ||
            'Cliente'
        );


    doc.save(
        `Orcamento_${d.numero || 'novo'}_${nomeArquivo}.pdf`
    );
}


// ============================================================
// WHATSAPP
// ============================================================

function enviarWhatsApp() {

    if (itensOrcamento.length === 0) {

        alert(
            'Adicione pelo menos um serviço para enviar.'
        );

        return;
    }


    const d =
        capturaDados();


    enviarWhatsAppComDados({

        ...d,

        numero:
            obterNumeroAtual(),

        itens:
            itensOrcamento

    });
}


function enviarWhatsAppSalvo(id) {

    const lista =
        obterOrcamentosSalvos();


    const orcamento =
        lista.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!orcamento) {

        alert(
            'Orçamento não encontrado.'
        );

        return;
    }


    enviarWhatsAppComDados({

        nomeVal:
            orcamento.cliente?.nome || '',

        telefoneVal:
            orcamento.cliente?.telefone || '',

        tipoVal:
            orcamento.aparelho?.tipo || '',

        marcaVal:
            orcamento.aparelho?.marca || '',

        modeloVal:
            orcamento.aparelho?.modelo || '',

        entrVal:
            Number(
                orcamento.entrega || 0
            ),

        urgenciaVal:
            Boolean(
                orcamento.urgencia
            ),

        numero:
            orcamento.numero,

        itens:
            orcamento.itens || []

    });
}


function enviarWhatsAppComDados(d) {

    let mensagem = '';


    mensagem +=
        '*DIGITAL UNIVERSE*\n';

    mensagem +=
        `*ORÇAMENTO Nº ${d.numero || '---'}*\n\n`;


    if (d.nomeVal) {

        mensagem +=
            `*Cliente:* ${d.nomeVal}\n`;
    }


    if (d.telefoneVal) {

        mensagem +=
            `*Contato:* ${d.telefoneVal}\n`;
    }


    const aparelho = [

        d.tipoVal,
        d.marcaVal,
        d.modeloVal

    ]
    .filter(Boolean)
    .join(' ');


    if (aparelho) {

        mensagem +=
            `*Aparelho:* ${aparelho}\n`;
    }


    mensagem +=
        '\n*SERVIÇOS:*\n';


    let total =
        0;


    d.itens.forEach(
        (item, index) => {

            mensagem +=
                `\n${index + 1}. ${item.descricao}\n`;


            const mao =
                calcularMaoDeObra(
                    item,
                    index,
                    d.urgenciaVal
                );


            mensagem +=
                `   Mão de obra: R$ ${formatarMoeda(mao)}\n`;


            if (
                Number(
                    item.valorPecaFinal || 0
                ) > 0
            ) {

                mensagem +=
                    `   Peça: R$ ${formatarMoeda(
                        item.valorPecaFinal
                    )}\n`;
            }


            mensagem +=
                `   Total: R$ ${formatarMoeda(
                    item.valorFinalItem
                )}\n`;


            total +=
                Number(
                    item.valorFinalItem || 0
                );
        }
    );


    const entrega =
        Number(
            d.entrVal || 0
        );


    total +=
        entrega;


    if (entrega > 0) {

        mensagem +=
            `\n*Taxa de entrega:* R$ ${formatarMoeda(
                entrega
            )}\n`;
    }


    if (d.urgenciaVal) {

        mensagem +=
            '*Taxa de urgência:* +20% na mão de obra\n';
    }


    mensagem +=
        `\n*TOTAL: R$ ${formatarMoeda(total)}*\n\n`;


    mensagem +=
        'Orçamento válido por 5 dias.\n';


    mensagem +=
        'Garantia legal de 90 dias sobre o serviço realizado.\n\n';


    mensagem +=
        'Obrigado pela confiança!';


    const texto =
        encodeURIComponent(
            mensagem
        );


    const telefone =
        normalizarTelefone(
            d.telefoneVal
        );


    const url =
        telefone
            ? `https://wa.me/${telefone}?text=${texto}`
            : `https://wa.me/?text=${texto}`;


    window.open(
        url,
        '_blank'
    );
}


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function calcularMaoDeObra(
    item,
    index,
    urgencia
) {

    const desconto =
        obterDescontoCombo(
            index + 1
        );


    let valor =
        Number(
            item.maoDeObraBase || 0
        ) *
        (1 - desconto);


    if (urgencia)
        valor *= 1.20;


    return valor;
}


function obterNumeroAtual() {

    if (
        orcamentoAtualId !== null
    ) {

        const lista =
            obterOrcamentosSalvos();


        const atual =
            lista.find(
                item =>
                    item.id ===
                    orcamentoAtualId
            );


        if (atual)
            return atual.numero;
    }


    return 'NOVO';
}


function normalizarTelefone(telefone) {

    let numero =
        String(
            telefone || ''
        )
        .replace(
            /\D/g,
            ''
        );


    if (!numero)
        return '';


    if (
        numero.startsWith('55')
    )
        return numero;


    if (
        numero.length === 10 ||
        numero.length === 11
    )
        return '55' + numero;


    return numero;
}


function gerarIdUnico() {

    return (
        Date.now().toString(36) +
        Math.random()
            .toString(36)
            .substring(2, 9)
    );
}


function formatarMoeda(valor) {

    return Number(
        valor || 0
    )
    .toFixed(2)
    .replace(
        '.',
        ','
    );
}


function formatarData(data) {

    if (!data)
        return '';


    const d =
        new Date(data);


    if (
        Number.isNaN(
            d.getTime()
        )
    )
        return '';


    return d.toLocaleString(
        'pt-BR'
    );
}


function sanitizarNomeArquivo(nome) {

    return String(
        nome || 'Cliente'
    )
    .normalize('NFD')
    .replace(
        /[\u0300-\u036f]/g,
        ''
    )
    .replace(
        /[^a-zA-Z0-9_-]+/g,
        '_'
    )
    .replace(
        /^_+|_+$/g,
        ''
    )
    .substring(
        0,
        50
    ) || 'Cliente';
}


function limitarTexto(
    texto,
    tamanho
) {

    texto =
        String(
            texto || ''
        );


    if (
        texto.length <= tamanho
    )
        return texto;


    return (
        texto.substring(
            0,
            tamanho - 3
        ) +
        '...'
    );
}


function escapeHtml(texto) {

    return String(
        texto ?? ''
    )
    .replace(
        /&/g,
        '&amp;'
    )
    .replace(
        /</g,
        '&lt;'
    )
    .replace(
        />/g,
        '&gt;'
    )
    .replace(
        /"/g,
        '&quot;'
    )
    .replace(
        /'/g,
        '&#039;'
    );
}


function mostrarStatus(
    mensagem,
    erro = false
) {

    const status =
        document.getElementById(
            'status'
        );


    if (!status)
        return;


    status.textContent =
        mensagem;


    status.className =
        erro
            ? 'status erro'
            : 'status ok';


    clearTimeout(
        window.statusTimer
    );


    window.statusTimer =
        setTimeout(
            () => {

                status.className =
                    'status';

                status.textContent =
                    '';

            },
            4000
        );
}