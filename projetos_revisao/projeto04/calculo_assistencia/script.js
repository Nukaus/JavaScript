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

            // ============================================================
            // IPHONE - TELAS POR MODELO
            // ============================================================

            case 'ip_17pm_tela':
                label = 'Troca de Tela iPhone 17 Pro Max';
                sMax = 350; sMin = 250;
                break;

            case 'ip_17p_tela':
                label = 'Troca de Tela iPhone 17 Pro';
                sMax = 320; sMin = 230;
                break;

            case 'ip_17_tela':
                label = 'Troca de Tela iPhone 17';
                sMax = 280; sMin = 200;
                break;

            case 'ip_17_air_tela':
                label = 'Troca de Tela iPhone Air';
                sMax = 320; sMin = 230;
                break;

            case 'ip_17e_tela':
                label = 'Troca de Tela iPhone 17e';
                sMax = 250; sMin = 180;
                break;

            case 'ip_16pm_tela':
                label = 'Troca de Tela iPhone 16 Pro Max';
                sMax = 300; sMin = 220;
                break;

            case 'ip_16p_tela':
                label = 'Troca de Tela iPhone 16 Pro';
                sMax = 280; sMin = 200;
                break;

            case 'ip_16_tela':
                label = 'Troca de Tela iPhone 16/16 Plus';
                sMax = 250; sMin = 180;
                break;

            case 'ip_16e_tela':
                label = 'Troca de Tela iPhone 16e';
                sMax = 230; sMin = 170;
                break;

            case 'ip_15pm_tela':
                label = 'Troca de Tela iPhone 15 Pro Max';
                sMax = 280; sMin = 200;
                break;

            case 'ip_15p_tela':
                label = 'Troca de Tela iPhone 15 Pro';
                sMax = 260; sMin = 190;
                break;

            case 'ip_15_tela':
                label = 'Troca de Tela iPhone 15/15 Plus';
                sMax = 230; sMin = 170;
                break;

            case 'ip_14pm_tela':
                label = 'Troca de Tela iPhone 14 Pro Max';
                sMax = 260; sMin = 190;
                break;

            case 'ip_14p_tela':
                label = 'Troca de Tela iPhone 14 Pro';
                sMax = 240; sMin = 180;
                break;

            case 'ip_14_tela':
                label = 'Troca de Tela iPhone 14/14 Plus';
                sMax = 220; sMin = 160;
                break;

            case 'ip_13pm_tela':
                label = 'Troca de Tela iPhone 13 Pro Max';
                sMax = 230; sMin = 170;
                break;

            case 'ip_13p_tela':
                label = 'Troca de Tela iPhone 13 Pro';
                sMax = 220; sMin = 160;
                break;

            case 'ip_13_tela':
                label = 'Troca de Tela iPhone 13';
                sMax = 200; sMin = 150;
                break;

            case 'ip_13_mini_tela':
                label = 'Troca de Tela iPhone 13 mini';
                sMax = 200; sMin = 150;
                break;

            case 'ip_12pm_tela':
                label = 'Troca de Tela iPhone 12 Pro Max';
                sMax = 220; sMin = 160;
                break;

            case 'ip_12p_tela':
                label = 'Troca de Tela iPhone 12 Pro';
                sMax = 210; sMin = 150;
                break;

            case 'ip_12_tela':
                label = 'Troca de Tela iPhone 12';
                sMax = 200; sMin = 150;
                break;

            case 'ip_12_mini_tela':
                label = 'Troca de Tela iPhone 12 mini';
                sMax = 210; sMin = 150;
                break;

            case 'ip_11pm_tela':
                label = 'Troca de Tela iPhone 11 Pro Max';
                sMax = 190; sMin = 140;
                break;

            case 'ip_11p_tela':
                label = 'Troca de Tela iPhone 11 Pro';
                sMax = 180; sMin = 130;
                break;

            case 'ip_11_tela':
                label = 'Troca de Tela iPhone 11';
                sMax = 170; sMin = 120;
                break;

            case 'ip_xsmax_tela':
                label = 'Troca de Tela iPhone XS Max';
                sMax = 180; sMin = 130;
                break;

            case 'ip_xs_tela':
                label = 'Troca de Tela iPhone XS';
                sMax = 170; sMin = 120;
                break;

            case 'ip_xr_tela':
                label = 'Troca de Tela iPhone XR';
                sMax = 160; sMin = 110;
                break;

            case 'ip_x_tela':
                label = 'Troca de Tela iPhone X';
                sMax = 160; sMin = 110;
                break;

            case 'ip_se3_tela':
                label = 'Troca de Tela iPhone SE (3ª geração)';
                sMax = 140; sMin = 100;
                break;

            case 'ip_se2_tela':
                label = 'Troca de Tela iPhone SE (2ª geração)';
                sMax = 140; sMin = 100;
                break;

            case 'ip_8plus_tela':
                label = 'Troca de Tela iPhone 8 Plus';
                sMax = 140; sMin = 100;
                break;

            case 'ip_8_tela':
                label = 'Troca de Tela iPhone 8';
                sMax = 130; sMin = 90;
                break;


            // ============================================================
            // IPHONE - REPARO DE TELA / DISPLAY
            // ============================================================

            case 'ip_vidro_tela':
                label = 'Troca do Vidro da Tela - Display Original';
                sMax = 300; sMin = 180;
                break;

            case 'ip_reparo_touch':
                label = 'Reparo de Touch da Tela';
                sMax = 280; sMin = 180;
                break;

            case 'ip_problema_touch':
                label = 'Diagnóstico de Falha no Touch';
                sMax = 150; sMin = 80;
                break;

            case 'ip_problema_imagem':
                label = 'Diagnóstico de Falha de Imagem';
                sMax = 180; sMin = 100;
                break;

            case 'ip_linhas_tela':
                label = 'Diagnóstico de Linhas na Tela';
                sMax = 180; sMin = 100;
                break;

            case 'ip_tela_piscando':
                label = 'Diagnóstico de Tela Piscando';
                sMax = 180; sMin = 100;
                break;

            case 'ip_tela_sem_brilho':
                label = 'Diagnóstico de Tela sem Brilho';
                sMax = 180; sMin = 100;
                break;

            case 'ip_tela_manchas':
                label = 'Diagnóstico de Tela com Manchas';
                sMax = 160; sMin = 90;
                break;

            case 'ip_tela_quebrada':
                label = 'Avaliação de Tela Quebrada';
                sMax = 120; sMin = 60;
                break;


            // ============================================================
            // IPHONE - BATERIAS
            // ============================================================

            case 'ip_17_bat':
                label = 'Troca de Bateria iPhone 17 Series';
                sMax = 180; sMin = 120;
                break;

            case 'ip_16_17_bat':
                label = 'Troca de Bateria iPhone 16/17';
                sMax = 180; sMin = 120;
                break;

            case 'ip_16e_bat':
                label = 'Troca de Bateria iPhone 16e';
                sMax = 160; sMin = 110;
                break;

            case 'ip_14_15_bat':
                label = 'Troca de Bateria iPhone 14/15';
                sMax = 160; sMin = 110;
                break;

            case 'ip_12_13_bat':
                label = 'Troca de Bateria iPhone 12/13';
                sMax = 150; sMin = 100;
                break;

            case 'ip_11_bat':
                label = 'Troca de Bateria iPhone 11 Series';
                sMax = 140; sMin = 90;
                break;

            case 'ip_x_bat':
                label = 'Troca de Bateria iPhone X/XR/XS';
                sMax = 130; sMin = 90;
                break;

            case 'ip_8_bat':
                label = 'Troca de Bateria iPhone 7/8/SE';
                sMax = 120; sMin = 80;
                break;

            case 'ip_bat_diagnostico':
                label = 'Diagnóstico de Bateria iPhone';
                sMax = 100; sMin = 50;
                break;

            case 'ip_bat_consumo':
                label = 'Diagnóstico de Consumo e Descarga de Bateria';
                sMax = 150; sMin = 80;
                break;

            case 'ip_bat_conector':
                label = 'Reparo do Conector da Bateria';
                sMax = 220; sMin = 120;
                break;


            // ============================================================
            // IPHONE - CONECTOR DE CARGA
            // ============================================================

            case 'conector_iphone':
                label = 'Reparo/Troca do Conector de Carga iPhone';
                sMax = 180; sMin = 130;
                break;

            case 'ip_conector_limpeza':
                label = 'Limpeza do Conector de Carga iPhone';
                sMax = 80; sMin = 40;
                break;

            case 'ip_conector_reparo':
                label = 'Reparo do Conector de Carga iPhone';
                sMax = 220; sMin = 130;
                break;

            case 'ip_flex_carga':
                label = 'Troca do Flex/Conjunto de Carga iPhone';
                sMax = 220; sMin = 140;
                break;

            case 'ip_nao_reconhece_cabo':
                label = 'Diagnóstico de Falha no Reconhecimento do Cabo';
                sMax = 140; sMin = 70;
                break;

            case 'ip_falha_carregamento':
                label = 'Diagnóstico de Falha de Carregamento iPhone';
                sMax = 150; sMin = 80;
                break;


            // ============================================================
            // IPHONE - ÁUDIO E MICROFONES
            // ============================================================

            case 'ip_alto_falante':
                label = 'Troca do Alto-Falante Inferior iPhone';
                sMax = 140; sMin = 80;
                break;

            case 'ip_auricular':
                label = 'Troca do Alto-Falante de Chamadas iPhone';
                sMax = 150; sMin = 90;
                break;

            case 'ip_audio_reparo':
                label = 'Reparo de Áudio iPhone';
                sMax = 220; sMin = 120;
                break;

            case 'ip_audio_limpeza':
                label = 'Limpeza do Alto-Falante e Saídas de Áudio';
                sMax = 80; sMin = 40;
                break;

            case 'ip_microfone_principal':
                label = 'Reparo/Troca do Microfone Principal iPhone';
                sMax = 160; sMin = 90;
                break;

            case 'ip_microfone_secundario':
                label = 'Reparo/Troca do Microfone Secundário iPhone';
                sMax = 160; sMin = 90;
                break;

            case 'ip_microfone_video':
                label = 'Reparo/Troca do Microfone de Vídeo iPhone';
                sMax = 180; sMin = 100;
                break;

            case 'ip_audio_baixo':
                label = 'Diagnóstico de Áudio Baixo iPhone';
                sMax = 120; sMin = 60;
                break;

            case 'ip_audio_distorcido':
                label = 'Diagnóstico de Áudio Distorcido iPhone';
                sMax = 130; sMin = 70;
                break;

            case 'ip_falha_audio':
                label = 'Diagnóstico de Falha de Áudio iPhone';
                sMax = 150; sMin = 80;
                break;


            // ============================================================
            // IPHONE - CÂMERAS
            // ============================================================

            case 'ip_camera_traseira':
                label = 'Troca da Câmera Traseira iPhone';
                sMax = 180; sMin = 100;
                break;

            case 'ip_camera_principal':
                label = 'Troca da Câmera Principal iPhone';
                sMax = 200; sMin = 110;
                break;

            case 'ip_camera_frontal':
                label = 'Troca da Câmera Frontal iPhone';
                sMax = 180; sMin = 100;
                break;

            case 'ip_camera_ultrawide':
                label = 'Reparo/Troca da Câmera Ultra-Wide iPhone';
                sMax = 220; sMin = 120;
                break;

            case 'ip_camera_teleobjetiva':
                label = 'Reparo/Troca da Câmera Teleobjetiva iPhone';
                sMax = 250; sMin = 140;
                break;

            case 'ip_lente_camera':
                label = 'Troca do Vidro/Lente da Câmera iPhone';
                sMax = 140; sMin = 70;
                break;

            case 'ip_camera_sem_foco':
                label = 'Diagnóstico de Câmera sem Foco iPhone';
                sMax = 150; sMin = 80;
                break;

            case 'ip_camera_tremendo':
                label = 'Diagnóstico de Câmera Tremendo iPhone';
                sMax = 180; sMin = 90;
                break;

            case 'ip_camera_manchas':
                label = 'Diagnóstico de Câmera com Manchas iPhone';
                sMax = 150; sMin = 80;
                break;

            case 'ip_camera_sem_imagem':
                label = 'Diagnóstico de Câmera sem Imagem iPhone';
                sMax = 160; sMin = 80;
                break;

            case 'camera_reparo':
                label = 'Reparo de Câmera iPhone';
                sMax = 220; sMin = 100;
                break;


            // ============================================================
            // IPHONE - CARCAÇA, TAMPA E COMPONENTES EXTERNOS
            // ============================================================

            case 'ip_tampa_comum':
                label = 'Troca de Tampa Traseira iPhone';
                sMax = 180; sMin = 100;
                break;

            case 'ip_carcaca_completa':
                label = 'Troca de Carcaça Completa iPhone';
                sMax = 350; sMin = 200;
                break;

            case 'ip_aro_chassi':
                label = 'Troca de Aro/Chassi iPhone';
                sMax = 300; sMin = 180;
                break;

            case 'ip_reparo_aro':
                label = 'Reparo de Aro/Estrutura iPhone';
                sMax = 250; sMin = 130;
                break;

            case 'ip_vidro_traseiro':
                label = 'Troca do Vidro Traseiro iPhone';
                sMax = 250; sMin = 150;
                break;

            case 'ip_botao_power':
                label = 'Reparo/Troca do Botão Power iPhone';
                sMax = 150; sMin = 80;
                break;

            case 'ip_botoes_volume':
                label = 'Reparo/Troca dos Botões de Volume iPhone';
                sMax = 150; sMin = 80;
                break;

            case 'ip_chave_silenciosa':
                label = 'Reparo/Troca da Chave Silenciosa iPhone';
                sMax = 160; sMin = 90;
                break;

            case 'ip_bandeja_sim':
                label = 'Troca da Bandeja SIM iPhone';
                sMax = 80; sMin = 40;
                break;

            case 'ip_lente_traseira_camera':
                label = 'Troca da Lente Traseira da Câmera iPhone';
                sMax = 120; sMin = 60;
                break;


            // ============================================================
            // IPHONE - FACE ID, TOUCH ID E SENSORES
            // ============================================================

            case 'ip_faceid_diagnostico':
                label = 'Diagnóstico de Face ID iPhone';
                sMax = 180; sMin = 100;
                break;

            case 'ip_faceid_reparo':
                label = 'Reparo de Face ID iPhone';
                sMax = 500; sMin = 250;
                break;

            case 'ip_sensor_proximidade':
                label = 'Reparo/Troca do Sensor de Proximidade';
                sMax = 180; sMin = 100;
                break;

            case 'ip_sensor_luz':
                label = 'Reparo/Troca do Sensor de Luz';
                sMax = 160; sMin = 90;
                break;

            case 'ip_flex_frontal':
                label = 'Reparo/Troca do Flex Frontal iPhone';
                sMax = 200; sMin = 100;
                break;

            case 'ip_reconhecimento_facial':
                label = 'Diagnóstico de Falha no Reconhecimento Facial';
                sMax = 180; sMin = 100;
                break;

            case 'ip_touchid_diagnostico':
                label = 'Diagnóstico de Touch ID iPhone';
                sMax = 150; sMin = 80;
                break;

            case 'ip_home_reparo':
                label = 'Reparo/Troca do Botão Home iPhone';
                sMax = 180; sMin = 100;
                break;


            // ============================================================
            // IPHONE - SOFTWARE
            // ============================================================

            case 'ip_formatacao':
                label = 'Formatação e Configuração do iPhone';
                sMax = 150; sMin = 80;
                break;

            case 'ip_restauracao':
                label = 'Restauração do Sistema iPhone';
                sMax = 120; sMin = 70;
                break;

            case 'ip_atualizacao':
                label = 'Atualização do Sistema iPhone';
                sMax = 100; sMin = 50;
                break;

            case 'ip_configuracao_inicial':
                label = 'Configuração Inicial do iPhone';
                sMax = 120; sMin = 60;
                break;

            case 'ip_migracao_dados':
                label = 'Migração de Dados para iPhone';
                sMax = 180; sMin = 100;
                break;

            case 'ip_backup':
                label = 'Backup de Dados iPhone';
                sMax = 120; sMin = 60;
                break;

            case 'ip_recuperacao_software':
                label = 'Recuperação de Sistema iPhone';
                sMax = 180; sMin = 100;
                break;

            case 'ip_travando':
                label = 'Diagnóstico de iPhone Travando';
                sMax = 120; sMin = 60;
                break;

            case 'ip_reiniciando':
                label = 'Diagnóstico de iPhone Reiniciando';
                sMax = 140; sMin = 70;
                break;

            case 'ip_software_diagnostico':
                label = 'Diagnóstico de Software iPhone';
                sMax = 100; sMin = 50;
                break;

            case 'ip_configuracao_contas':
                label = 'Configuração de Conta e Serviços do iPhone';
                sMax = 100; sMin = 50;
                break;

            case 'ip_limpeza_sistema':
                label = 'Otimização e Limpeza de Sistema iPhone';
                sMax = 120; sMin = 60;
                break;


            // ============================================================
            // IPHONE - PLACA / MICROELETRÔNICA
            // ============================================================

            case 'ip_placa_diagnostico':
                label = 'Diagnóstico de Placa iPhone';
                sMax = 180; sMin = 80;
                break;

            case 'ip_placa_reparo':
                label = 'Reparo de Placa iPhone';
                sMax = 450; sMin = 200;
                break;

            case 'ip_circuito_carga':
                label = 'Reparo do Circuito de Carga iPhone';
                sMax = 400; sMin = 180;
                break;

            case 'ip_circuito_audio':
                label = 'Reparo do Circuito de Áudio iPhone';
                sMax = 450; sMin = 200;
                break;

            case 'ip_circuito_imagem':
                label = 'Reparo do Circuito de Imagem iPhone';
                sMax = 500; sMin = 220;
                break;

            case 'ip_alimentacao':
                label = 'Reparo do Circuito de Alimentação iPhone';
                sMax = 500; sMin = 220;
                break;

            case 'ip_oxidacao':
                label = 'Reparo de Placa após Oxidação iPhone';
                sMax = 450; sMin = 180;
                break;

            case 'ip_curto':
                label = 'Diagnóstico e Reparo de Curto iPhone';
                sMax = 500; sMin = 200;
                break;

            case 'ip_nao_liga':
                label = 'Diagnóstico e Reparo de iPhone que Não Liga';
                sMax = 450; sMin = 180;
                break;

            case 'ip_reinicia_placa':
                label = 'Diagnóstico e Reparo de Reinicialização iPhone';
                sMax = 400; sMin = 180;
                break;

            case 'ip_consumo_anormal':
                label = 'Diagnóstico de Consumo Anormal iPhone';
                sMax = 250; sMin = 120;
                break;

            case 'ip_comunicacao_componentes':
                label = 'Reparo de Comunicação entre Componentes iPhone';
                sMax = 500; sMin = 220;
                break;

            case 'ip_microsolda':
                label = 'Micro-Solda em Placa iPhone';
                sMax = 500; sMin = 200;
                break;


            // ============================================================
            // ANDROID - TELAS
            // ============================================================

            case 'and_tela_premium':
                label = 'Troca de Tela Android OLED/AMOLED';
                sMax = 180; sMin = 120;
                break;

            case 'and_tela_amoled':
                label = 'Troca de Tela Android AMOLED';
                sMax = 180; sMin = 120;
                break;

            case 'and_tela_super_amoled':
                label = 'Troca de Tela Android Super AMOLED';
                sMax = 200; sMin = 130;
                break;

            case 'and_tela_oled':
                label = 'Troca de Tela Android OLED';
                sMax = 180; sMin = 120;
                break;

            case 'and_tela_lcd':
                label = 'Troca de Tela Android LCD';
                sMax = 150; sMin = 90;
                break;

            case 'and_tela_incell':
                label = 'Troca de Tela Android Incell';
                sMax = 140; sMin = 90;
                break;

            case 'and_tela_ips':
                label = 'Troca de Tela Android IPS';
                sMax = 140; sMin = 90;
                break;

            case 'and_tela_compativel':
                label = 'Troca de Tela Android Compatível';
                sMax = 130; sMin = 80;
                break;

            case 'and_vidro_tela':
                label = 'Troca de Vidro da Tela Android';
                sMax = 250; sMin = 150;
                break;

            case 'and_reparo_touch':
                label = 'Reparo de Touch Android';
                sMax = 220; sMin = 120;
                break;

            case 'and_display_quebrado':
                label = 'Avaliação de Display Android Quebrado';
                sMax = 100; sMin = 50;
                break;

            case 'and_display_sem_imagem':
                label = 'Diagnóstico de Display sem Imagem Android';
                sMax = 130; sMin = 70;
                break;

            case 'and_display_manchas':
                label = 'Diagnóstico de Display com Manchas Android';
                sMax = 120; sMin = 60;
                break;

            case 'and_display_linhas':
                label = 'Diagnóstico de Display com Linhas Android';
                sMax = 130; sMin = 70;
                break;

            case 'and_display_piscando':
                label = 'Diagnóstico de Display Piscando Android';
                sMax = 130; sMin = 70;
                break;


            // ============================================================
            // ANDROID - BATERIA
            // ============================================================

            case 'and_bat':
                label = 'Troca de Bateria Android';
                sMax = 120; sMin = 80;
                break;

            case 'and_bat_diagnostico':
                label = 'Diagnóstico de Bateria Android';
                sMax = 90; sMin = 50;
                break;

            case 'and_bat_estufada':
                label = 'Troca de Bateria Estufada Android';
                sMax = 140; sMin = 90;
                break;

            case 'and_bat_descarga':
                label = 'Diagnóstico de Descarga Rápida Android';
                sMax = 120; sMin = 60;
                break;

            case 'and_bat_carregamento':
                label = 'Diagnóstico de Bateria e Carregamento Android';
                sMax = 120; sMin = 60;
                break;


            // ============================================================
            // ANDROID - CONECTOR
            // ============================================================

            case 'and_conector':
                label = 'Troca do Conector de Carga USB-C Android';
                sMax = 140; sMin = 90;
                break;

            case 'and_conector_micro_usb':
                label = 'Troca do Conector Micro USB Android';
                sMax = 130; sMin = 80;
                break;

            case 'and_conector_reparo':
                label = 'Reparo do Conector de Carga Android';
                sMax = 180; sMin = 100;
                break;

            case 'and_conector_limpeza':
                label = 'Limpeza do Conector de Carga Android';
                sMax = 60; sMin = 30;
                break;

            case 'and_nao_carrega':
                label = 'Diagnóstico de Aparelho Android sem Carregamento';
                sMax = 100; sMin = 50;
                break;

            case 'and_carga_lenta':
                label = 'Diagnóstico de Carregamento Lento Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_nao_reconhece_cabo':
                label = 'Diagnóstico de Falha no Reconhecimento do Cabo';
                sMax = 100; sMin = 50;
                break;

            case 'and_placa_carga':
                label = 'Reparo de Placa Relacionado à Carga Android';
                sMax = 350; sMin = 150;
                break;


            // ============================================================
            // ANDROID - ÁUDIO
            // ============================================================

            case 'and_alto_falante':
                label = 'Troca do Alto-Falante Inferior Android';
                sMax = 120; sMin = 70;
                break;

            case 'and_alto_falante_superior':
                label = 'Troca do Alto-Falante Superior Android';
                sMax = 120; sMin = 70;
                break;

            case 'and_auricular':
                label = 'Troca do Auricular Android';
                sMax = 120; sMin = 70;
                break;

            case 'and_audio_reparo':
                label = 'Reparo de Áudio Android';
                sMax = 180; sMin = 100;
                break;

            case 'and_microfone':
                label = 'Troca/Reparo do Microfone Android';
                sMax = 140; sMin = 80;
                break;

            case 'and_microfone_reparo':
                label = 'Reparo de Microfone Android';
                sMax = 180; sMin = 90;
                break;

            case 'and_audio_limpeza':
                label = 'Limpeza do Alto-Falante Android';
                sMax = 60; sMin = 30;
                break;

            case 'and_audio_baixo':
                label = 'Diagnóstico de Áudio Baixo Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_audio_distorcido':
                label = 'Diagnóstico de Áudio Distorcido Android';
                sMax = 110; sMin = 50;
                break;

            case 'and_falha_audio':
                label = 'Diagnóstico de Falha de Áudio Android';
                sMax = 120; sMin = 60;
                break;


            // ============================================================
            // ANDROID - CÂMERAS
            // ============================================================

            case 'and_camera_frontal':
                label = 'Troca da Câmera Frontal Android';
                sMax = 140; sMin = 80;
                break;

            case 'and_camera_traseira':
                label = 'Troca da Câmera Traseira Android';
                sMax = 160; sMin = 90;
                break;

            case 'and_camera_principal':
                label = 'Troca da Câmera Principal Android';
                sMax = 180; sMin = 100;
                break;

            case 'and_camera_ultrawide':
                label = 'Troca da Câmera Ultra-Wide Android';
                sMax = 180; sMin = 100;
                break;

            case 'and_camera_macro':
                label = 'Troca da Câmera Macro Android';
                sMax = 140; sMin = 80;
                break;

            case 'and_camera_tele':
                label = 'Troca da Câmera Teleobjetiva Android';
                sMax = 200; sMin = 120;
                break;

            case 'and_lente_camera':
                label = 'Troca do Vidro/Lente da Câmera Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_camera_foco':
                label = 'Diagnóstico de Falha de Foco da Câmera Android';
                sMax = 120; sMin = 60;
                break;

            case 'and_camera_sem_imagem':
                label = 'Diagnóstico de Câmera sem Imagem Android';
                sMax = 130; sMin = 70;
                break;

            case 'and_camera_tremendo':
                label = 'Diagnóstico de Câmera Tremendo Android';
                sMax = 140; sMin = 70;
                break;

            case 'and_camera_reparo':
                label = 'Reparo de Câmera Android';
                sMax = 200; sMin = 100;
                break;


            // ============================================================
            // ANDROID - CARCAÇA
            // ============================================================

            case 'and_tampa':
                label = 'Troca de Tampa Traseira Android';
                sMax = 150; sMin = 80;
                break;

            case 'and_carcaca':
                label = 'Troca de Carcaça Completa Android';
                sMax = 250; sMin = 150;
                break;

            case 'and_aro':
                label = 'Troca/Reparo de Aro Android';
                sMax = 180; sMin = 100;
                break;

            case 'and_power':
                label = 'Reparo/Troca do Botão Power Android';
                sMax = 120; sMin = 70;
                break;

            case 'and_volume':
                label = 'Reparo/Troca dos Botões de Volume Android';
                sMax = 120; sMin = 70;
                break;

            case 'and_bandeja_sim':
                label = 'Troca da Bandeja SIM Android';
                sMax = 70; sMin = 40;
                break;

            case 'and_tampa_camera':
                label = 'Troca da Tampa/Lente da Câmera Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_componentes_externos':
                label = 'Reparo de Componentes Externos Android';
                sMax = 150; sMin = 80;
                break;


            // ============================================================
            // ANDROID - SOFTWARE
            // ============================================================

            case 'and_software':
                label = 'Diagnóstico e Recuperação de Software Android';
                sMax = 150; sMin = 80;
                break;

            case 'and_formatacao':
                label = 'Formatação Android';
                sMax = 130; sMin = 80;
                break;

            case 'and_restauracao':
                label = 'Restauração do Sistema Android';
                sMax = 120; sMin = 70;
                break;

            case 'and_atualizacao':
                label = 'Atualização do Sistema Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_configuracao':
                label = 'Configuração Inicial Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_migracao':
                label = 'Migração de Dados Android';
                sMax = 150; sMin = 80;
                break;

            case 'and_backup':
                label = 'Backup de Dados Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_recuperacao':
                label = 'Recuperação de Sistema Android';
                sMax = 180; sMin = 100;
                break;

            case 'and_diagnostico_software':
                label = 'Diagnóstico de Software Android';
                sMax = 100; sMin = 50;
                break;

            case 'and_travando':
                label = 'Diagnóstico de Android Travando';
                sMax = 100; sMin = 50;
                break;

            case 'and_reiniciando':
                label = 'Diagnóstico de Android Reiniciando';
                sMax = 120; sMin = 60;
                break;

            case 'and_erros_sistema':
                label = 'Correção de Erros de Sistema Android';
                sMax = 150; sMin = 80;
                break;


            // ============================================================
            // ANDROID - PLACA / MICROELETRÔNICA
            // ============================================================

            case 'and_placa_diagnostico':
                label = 'Diagnóstico de Placa Android';
                sMax = 150; sMin = 70;
                break;

            case 'and_placa_reparo':
                label = 'Reparo de Placa Android';
                sMax = 400; sMin = 180;
                break;

            case 'and_placa_carga_reparo':
                label = 'Reparo do Circuito de Carga Android';
                sMax = 350; sMin = 150;
                break;

            case 'and_placa_alimentacao':
                label = 'Reparo do Circuito de Alimentação Android';
                sMax = 400; sMin = 180;
                break;

            case 'and_placa_oxidacao':
                label = 'Reparo de Placa após Oxidação Android';
                sMax = 400; sMin = 150;
                break;

            case 'and_placa_curto':
                label = 'Diagnóstico e Reparo de Curto Android';
                sMax = 450; sMin = 180;
                break;

            case 'and_nao_liga':
                label = 'Diagnóstico e Reparo de Android que Não Liga';
                sMax = 400; sMin = 150;
                break;

            case 'and_reinicia_placa':
                label = 'Diagnóstico e Reparo de Reinicialização Android';
                sMax = 350; sMin = 150;
                break;

            case 'and_falha_audio_placa':
                label = 'Reparo de Placa - Falha de Áudio Android';
                sMax = 350; sMin = 150;
                break;

            case 'and_falha_imagem_placa':
                label = 'Reparo de Placa - Falha de Imagem Android';
                sMax = 400; sMin = 180;
                break;

            case 'and_falha_rede':
                label = 'Reparo de Placa - Falha de Rede/Sinal Android';
                sMax = 450; sMin = 200;
                break;

            case 'and_wifi_bluetooth':
                label = 'Reparo de Placa - Falha de Wi-Fi/Bluetooth Android';
                sMax = 400; sMin = 180;
                break;

            case 'and_smd':
                label = 'Reparo de Componentes SMD Android';
                sMax = 400; sMin = 180;
                break;

            case 'and_microsolda':
                label = 'Micro-Solda em Placa Android';
                sMax = 450; sMin = 180;
                break;


            // ============================================================
            // TABLETS
            // ============================================================

            case 'tab_tela':
                label = 'Troca de Tela de Tablet';
                sMax = 250; sMin = 150;
                break;

            case 'tab_vidro':
                label = 'Troca de Vidro de Tablet';
                sMax = 300; sMin = 180;
                break;

            case 'tab_bateria':
                label = 'Troca de Bateria de Tablet';
                sMax = 180; sMin = 100;
                break;

            case 'tab_conector':
                label = 'Troca de Conector de Carga de Tablet';
                sMax = 180; sMin = 100;
                break;

            case 'tab_conector_reparo':
                label = 'Reparo de Conector de Carga de Tablet';
                sMax = 220; sMin = 120;
                break;

            case 'tab_alto_falante':
                label = 'Troca de Alto-Falante de Tablet';
                sMax = 140; sMin = 80;
                break;

            case 'tab_auricular':
                label = 'Troca de Auricular de Tablet';
                sMax = 140; sMin = 80;
                break;

            case 'tab_microfone':
                label = 'Reparo/Troca de Microfone de Tablet';
                sMax = 140; sMin = 80;
                break;

            case 'tab_camera':
                label = 'Reparo/Troca de Câmera de Tablet';
                sMax = 160; sMin = 90;
                break;

            case 'tab_tampa':
                label = 'Troca de Tampa Traseira de Tablet';
                sMax = 180; sMin = 100;
                break;

            case 'tab_carcaca':
                label = 'Reparo/Troca de Carcaça de Tablet';
                sMax = 250; sMin = 140;
                break;

            case 'tab_botoes':
                label = 'Reparo/Troca de Botões de Tablet';
                sMax = 130; sMin = 70;
                break;

            case 'tab_software':
                label = 'Formatação e Recuperação de Sistema de Tablet';
                sMax = 150; sMin = 80;
                break;

            case 'tab_diagnostico':
                label = 'Diagnóstico Técnico de Tablet';
                sMax = 120; sMin = 60;
                break;

            case 'tab_placa':
                label = 'Reparo de Placa de Tablet';
                sMax = 400; sMin = 180;
                break;

            case 'tab_oxidacao':
                label = 'Reparo de Tablet após Oxidação';
                sMax = 400; sMin = 150;
                break;


            // ============================================================
            // SERVIÇOS GERAIS PARA CELULARES
            // ============================================================

            case 'diagnostico':
                label = 'Diagnóstico Técnico';
                sMax = 100; sMin = 50;
                break;

            case 'avaliacao_aparelho':
                label = 'Avaliação Técnica do Aparelho';
                sMax = 80; sMin = 40;
                break;

            case 'limpeza_interna':
                label = 'Limpeza Interna do Aparelho';
                sMax = 120; sMin = 60;
                break;

            case 'limpeza_conectores':
                label = 'Limpeza de Conectores';
                sMax = 70; sMin = 30;
                break;

            case 'desoxidacao':
                label = 'Desoxidação / Limpeza Técnica';
                sMax = 250; sMin = 150;
                break;

            case 'liquido':
                label = 'Recuperação após Contato com Líquido';
                sMax = 300; sMin = 150;
                break;

            case 'nao_liga':
                label = 'Diagnóstico de Aparelho que Não Liga';
                sMax = 150; sMin = 70;
                break;

            case 'reiniciando':
                label = 'Diagnóstico de Aparelho Reiniciando';
                sMax = 150; sMin = 70;
                break;

            case 'consumo_anormal':
                label = 'Diagnóstico de Consumo Anormal';
                sMax = 180; sMin = 80;
                break;

            case 'recuperacao_dados':
                label = 'Recuperação de Dados';
                sMax = 300; sMin = 150;
                break;

            case 'transferencia_dados':
                label = 'Transferência de Dados';
                sMax = 120; sMin = 60;
                break;

            case 'backup':
                label = 'Backup de Dados';
                sMax = 100; sMin = 50;
                break;

            case 'configuracao_inicial':
                label = 'Configuração Inicial do Aparelho';
                sMax = 100; sMin = 50;
                break;

            case 'instalacao_apps':
                label = 'Instalação e Configuração de Aplicativos';
                sMax = 100; sMin = 50;
                break;
        }

    } else if (d.servPcId !== "50") {

        switch(d.servPcId) {

            // ============================================================
            // NOTEBOOK - TELAS
            // ============================================================

            case 'nb_tela_13':
                label = 'Troca de Tela Notebook 13.3"';
                sMax = 300; sMin = 180;
                break;

            case 'nb_tela_14':
                label = 'Troca de Tela Notebook 14"';
                sMax = 280; sMin = 180;
                break;

            case 'nb_tela_15':
                label = 'Troca de Tela Notebook 15.6"';
                sMax = 300; sMin = 190;
                break;

            case 'nb_tela_17':
                label = 'Troca de Tela Notebook 17"';
                sMax = 350; sMin = 220;
                break;


            // ============================================================
            // NOTEBOOK - COMPONENTES
            // ============================================================

            case 'nb_teclado':
                label = 'Troca de Teclado Notebook';
                sMax = 180; sMin = 100;
                break;

            case 'nb_touchpad':
                label = 'Troca/Reparo de Touchpad Notebook';
                sMax = 180; sMin = 100;
                break;

            case 'nb_bat':
                label = 'Troca de Bateria Notebook';
                sMax = 180; sMin = 100;
                break;

            case 'nb_conector':
                label = 'Troca de Conector de Carga Notebook';
                sMax = 220; sMin = 120;
                break;

            case 'nb_conector_reparo':
                label = 'Reparo de Conector de Carga Notebook';
                sMax = 300; sMin = 150;
                break;

            case 'nb_cooler':
                label = 'Troca de Cooler/Ventoinha Notebook';
                sMax = 180; sMin = 100;
                break;

            case 'nb_webcam':
                label = 'Reparo/Troca de Webcam Notebook';
                sMax = 150; sMin = 80;
                break;

            case 'nb_microfone':
                label = 'Reparo/Troca de Microfone Notebook';
                sMax = 150; sMin = 80;
                break;

            case 'nb_audio':
                label = 'Reparo/Troca de Alto-Falantes Notebook';
                sMax = 160; sMin = 90;
                break;


            // ============================================================
            // NOTEBOOK - MANUTENÇÃO
            // ============================================================

            case 'nb_limpeza':
                label = 'Limpeza Interna + Troca de Pasta Térmica';
                sMax = 180; sMin = 120;
                break;

            case 'nb_limpeza_interna':
                label = 'Limpeza Interna Notebook';
                sMax = 140; sMin = 80;
                break;

            case 'nb_pasta_termica':
                label = 'Troca de Pasta Térmica Notebook';
                sMax = 120; sMin = 70;
                break;


            // ============================================================
            // NOTEBOOK - ARMAZENAMENTO E MEMÓRIA
            // ============================================================

            case 'nb_ssd':
                label = 'Instalação de SSD + Sistema';
                sMax = 200; sMin = 150;
                break;

            case 'nb_instalacao_ssd':
                label = 'Instalação de SSD';
                sMax = 120; sMin = 70;
                break;

            case 'nb_ram':
                label = 'Upgrade de Memória RAM';
                sMax = 120; sMin = 80;
                break;

            case 'nb_hd':
                label = 'Instalação/Troca de HD';
                sMax = 120; sMin = 70;
                break;


            // ============================================================
            // NOTEBOOK - SOFTWARE
            // ============================================================

            case 'nb_formatacao':
                label = 'Formatação e Instalação do Sistema';
                sMax = 180; sMin = 120;
                break;

            case 'nb_sistema':
                label = 'Instalação e Configuração do Sistema';
                sMax = 180; sMin = 100;
                break;

            case 'nb_backup':
                label = 'Backup de Dados Notebook';
                sMax = 120; sMin = 70;
                break;

            case 'nb_migracao':
                label = 'Migração de Dados Notebook';
                sMax = 180; sMin = 100;
                break;

            case 'nb_windows_reparo':
                label = 'Reparo do Windows';
                sMax = 180; sMin = 100;
                break;

            case 'nb_drivers':
                label = 'Instalação e Configuração de Drivers';
                sMax = 120; sMin = 60;
                break;


            // ============================================================
            // NOTEBOOK - CARCAÇA E ESTRUTURA
            // ============================================================

            case 'nb_carcaca':
                label = 'Reparo de Carcaça Notebook';
                sMax = 250; sMin = 130;
                break;

            case 'nb_dobradiça':
                label = 'Reparo de Dobradiças Notebook';
                sMax = 250; sMin = 130;
                break;

            case 'nb_usb':
                label = 'Reparo de USB Notebook';
                sMax = 250; sMin = 120;
                break;

            case 'nb_hdmi':
                label = 'Reparo de HDMI Notebook';
                sMax = 300; sMin = 150;
                break;

            case 'nb_wifi':
                label = 'Reparo de Wi-Fi/Rede Notebook';
                sMax = 220; sMin = 100;
                break;


            // ============================================================
            // NOTEBOOK - DIAGNÓSTICO E PLACA
            // ============================================================

            case 'nb_diagnostico':
                label = 'Diagnóstico de Hardware Notebook';
                sMax = 120; sMin = 60;
                break;

            case 'nb_placa':
                label = 'Reparo de Placa Notebook';
                sMax = 500; sMin = 220;
                break;

            case 'nb_oxidacao':
                label = 'Reparo de Placa após Oxidação Notebook';
                sMax = 500; sMin = 200;
                break;


            // ============================================================
            // COMPUTADORES / DESKTOP
            // ============================================================

            case 'pc_formatacao':
                label = 'Formatação e Instalação do Sistema';
                sMax = 180; sMin = 120;
                break;

            case 'pc_instalacao_sistema':
                label = 'Instalação e Configuração do Sistema';
                sMax = 150; sMin = 100;
                break;

            case 'pc_configuracao':
                label = 'Configuração do Computador';
                sMax = 120; sMin = 70;
                break;

            case 'pc_montagem':
                label = 'Montagem de Computador';
                sMax = 300; sMin = 180;
                break;

            case 'pc_manutencao':
                label = 'Manutenção Preventiva de Computador';
                sMax = 180; sMin = 100;
                break;

            case 'pc_limpeza':
                label = 'Limpeza Interna de Computador';
                sMax = 150; sMin = 80;
                break;

            case 'pc_pasta_termica':
                label = 'Troca de Pasta Térmica de Computador';
                sMax = 120; sMin = 70;
                break;

            case 'pc_ssd':
                label = 'Instalação de SSD';
                sMax = 120; sMin = 70;
                break;

            case 'pc_hd':
                label = 'Instalação de HD';
                sMax = 100; sMin = 60;
                break;

            case 'pc_ram':
                label = 'Upgrade de Memória RAM';
                sMax = 100; sMin = 60;
                break;

            case 'pc_gpu':
                label = 'Instalação de Placa de Vídeo';
                sMax = 120; sMin = 70;
                break;

            case 'pc_diagnostico':
                label = 'Diagnóstico de Hardware';
                sMax = 120; sMin = 60;
                break;

            case 'pc_reparo_hardware':
                label = 'Reparo de Hardware';
                sMax = 250; sMin = 120;
                break;

            case 'pc_rede':
                label = 'Configuração de Rede';
                sMax = 120; sMin = 70;
                break;

            case 'pc_drivers':
                label = 'Instalação e Configuração de Drivers';
                sMax = 100; sMin = 50;
                break;

            case 'pc_backup':
                label = 'Backup de Dados';
                sMax = 120; sMin = 60;
                break;

            case 'pc_migracao':
                label = 'Migração de Dados';
                sMax = 180; sMin = 100;
                break;
        }
    }

    // ================================================================
    // LÓGICA ORIGINAL DE CÁLCULO - PRESERVADA
    // ================================================================

    let maoDeObraBase = (d.riscId === 0)
        ? sMax
        : ((sMax + sMin) / 2);

    return {
        maoDeObraBase: maoDeObraBase,
        servNome: label
    };
}


// ================================================================
// DESCONTO PROGRESSIVO PARA COMBOS
// 1º serviço  = 0%
// 2º serviço  = 20%
// 3º serviço  = 25%
// 4º serviço ou mais = 30%
//
// O desconto é aplicado SOMENTE sobre a mão de obra.
// O valor das peças permanece integral.
// ================================================================
function obterDescontoCombo(numeroServico) {
    if (numeroServico === 1) return 0;
    if (numeroServico === 2) return 0.20;
    if (numeroServico === 3) return 0.25;
    return 0.30;
}


function inserir() {
    const dados = capturaDados();

    if (dados.servId === "50" && dados.servPcId === "50") {
        document.getElementById('erro').innerText =
            "Selecione um serviço primeiro!";
        return;
    }

    const infoServico = calculoTotal(dados);

    // Proteção contra opção inexistente no switch
    if (!infoServico.servNome) {
        document.getElementById('erro').innerText =
            "O serviço selecionado ainda não possui configuração de preço.";
        return;
    }

    // Número do serviço que está sendo adicionado
    const numeroServico = itensOrcamento.length + 1;

    // Obtém o desconto progressivo
    const descontoPercentual =
        obterDescontoCombo(numeroServico);

    // Desconto aplicado SOMENTE na mão de obra
    const maoDeObraReal =
        infoServico.maoDeObraBase *
        (1 - descontoPercentual);

    // Peça permanece com o valor integral
    const valorFinalItem =
        maoDeObraReal + dados.pecVal;

    itensOrcamento.push({
        descricao: infoServico.servNome,
        valor: valorFinalItem,
        desconto: descontoPercentual > 0,
        descontoPercentual: descontoPercentual * 100
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
    
    let somaServicos = itensOrcamento.reduce(
        (acc, item) => acc + item.valor,
        0
    );

    let taxa = 0;

    if (d.tipoUrgencia !== "0" && d.valorUrgencia > 0) {
        taxa = (d.tipoUrgencia === "fixo")
            ? d.valorUrgencia
            : (somaServicos * (d.valorUrgencia / 100));
    }

    let totalFinal = somaServicos + taxa + d.entrVal;

    const resDiv = document.getElementById('res');
    const existentes = resDiv.querySelectorAll('.linha-total');

    existentes.forEach(el => el.remove());

    let htmlFinal = `
        <div class="linha-total"
             style="margin-top:10px;
                    border-top:2px solid #2563eb;
                    padding-top:10px;">
    `;

    if (taxa > 0) {
        htmlFinal += `
            <p style="color:var(--danger); font-size:0.85rem;">
                + Taxa Urgência: R$ ${taxa.toFixed(2)}
            </p>
        `;
    }

    if (d.entrVal > 0) {
        htmlFinal += `
            <p style="color:var(--text-main); font-size:0.85rem;">
                + Entrega: R$ ${d.entrVal.toFixed(2)}
            </p>
        `;
    }

    htmlFinal += `
            <p style="color:var(--success); font-size:1.2rem">
                <strong>Total Final: R$ ${totalFinal.toFixed(2)}</strong>
            </p>
        </div>
    `;
    
    resDiv.innerHTML += htmlFinal;

    salvarNoHistorico(
        d.nomeVal,
        d.modeloVal,
        totalFinal
    );
}


function salvarNoHistorico(nome, modelo, total) {
    let d = capturaDados();

    let historico =
        JSON.parse(localStorage.getItem('orcamentos')) || [];

    const dataAtual =
        new Date().toLocaleString('pt-BR');
    
    const indexExistente =
        historico.findIndex(
            item => item.id === window.idOrcamentoAtual
        );
 
    const registro = {
        id: window.idOrcamentoAtual || Date.now(),
        nome: nome || "Cliente não identificado",
        modelo: modelo || "Modelo não informado",
        telefone: d.telefone.value,
        entrega: d.entrVal,
        total: parseFloat(total).toFixed(2),
        data: window.idOrcamentoAtual
            ? (historico[indexExistente]?.data || dataAtual)
            : dataAtual,
        servicosLista: [...itensOrcamento]
    };
 
    if (indexExistente !== -1) {
        historico[indexExistente] = registro;
    } else {
        historico.unshift(registro);
    }
 
    if (historico.length > 10) {
        historico.pop();
    }

    localStorage.setItem(
        'orcamentos',
        JSON.stringify(historico)
    );

    atualizarInterfaceHistorico();
}


function atualizarInterfaceHistorico() {
    let historico =
        JSON.parse(localStorage.getItem('orcamentos')) || [];

    let divLista =
        document.getElementById('historico-lista');

    if (!divLista) return;
    
    if (historico.length === 0) {
        divLista.innerHTML = `
            <p style="text-align: center;
                      color: #64748b;
                      font-size: 0.9rem;">
                Nenhum orçamento salvo.
            </p>
        `;
        return;
    }
 
    divLista.innerHTML = '';

    historico.forEach((item, index) => {

        divLista.innerHTML += `
            <div class="card-historico"
                 onclick="recuperarOrcamento(${index})"
                 style="cursor: pointer;
                        margin-bottom: 8px;
                        padding: 10px;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;">

                <span style="font-size: 0.7rem;
                             color: #94a3b8;">
                    ${item.data}
                </span>
                <br>

                <strong>${item.nome}</strong> -
                <span>${item.modelo}</span>

                <br>

                <span style="color: #16a34a;
                             font-weight: bold;">
                    R$ ${item.total}
                </span>
            </div>
        `;
    });
}


function recuperarOrcamento(index) {
    let historico =
        JSON.parse(localStorage.getItem('orcamentos')) || [];

    let orc = historico[index];

    if (!orc) return;
 
    novo();

    window.idOrcamentoAtual = orc.id;
 
    document.getElementById('cliente').value =
        orc.nome;

    document.getElementById('modelo').value =
        orc.modelo;

    document.getElementById('telefone').value =
        orc.telefone || "";

    document.getElementById('entrega').value =
        orc.entrega || 0;
 
    if (orc.servicosLista) {

        itensOrcamento =
            [...orc.servicosLista];

        atualizarResumoVisual();
        
        let somaServicos =
            itensOrcamento.reduce(
                (acc, item) => acc + item.valor,
                0
            );

        let totalFinal =
            somaServicos + Number(orc.entrega || 0);
        
        const resDiv =
            document.getElementById('res');

        resDiv.innerHTML += `
            <div class="linha-total"
                 style="margin-top:10px;
                        border-top:2px solid #2563eb;
                        padding-top:10px;">

                <p style="color:var(--success);
                          font-size:1.2rem">

                    <strong>
                        Total Final:
                        R$ ${totalFinal.toFixed(2)}
                    </strong>

                </p>
            </div>
        `;

        document.getElementById('nome').innerHTML =
            `Soma Serviços: R$ ${somaServicos.toFixed(2)}`;
    }
}


function atualizarResumoVisual() {

    let html = "";
    let totalParcial = 0;

    itensOrcamento.forEach((item) => {

        totalParcial += item.valor;

        html += `
            <p style="font-size: 0.85rem;
                      border-bottom: 1px solid #eee;
                      padding: 5px 0;">

                <strong>
                    ${item.descricao}:
                </strong>

                R$ ${item.valor.toFixed(2)}
            </p>
        `;
    });

    document.getElementById('res').innerHTML =
        html;

    document.getElementById('nome').innerHTML =
        `Soma Serviços: R$ ${totalParcial.toFixed(2)}`;
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

    let telefone =
        document.getElementById('telefone').value;

    let resConteudo =
        document.getElementById('res').innerText;

    if (!telefone) {
        alert("Insira o telefone!");
        return;
    }

    let msg =
        `Olá ${d.nomeVal || 'cliente'}!%0A` +
        `Segue orçamento para *${d.modeloVal}*:%0A` +
        `${resConteudo.replace(/\n/g, '%0A')}`;

    window.open(
        `https://api.whatsapp.com/send?phone=55${telefone}&text=${msg}`,
        '_blank'
    );
}


function gerarPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const d = capturaDados();
    
    if (itensOrcamento.length === 0) {

        alert(
            "Adicione serviços antes de gerar o PDF."
        );

        return;
    }
 
    const dataAtual =
        new Date().toLocaleString('pt-BR');

    let somaItens =
        itensOrcamento.reduce(
            (acc, item) => acc + item.valor,
            0
        );

    let totalFinal =
        somaItens + d.entrVal;
 
    // ================================================================
    // CONFIGURAÇÃO DE CORES E ESTILO
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
 
    doc.setFontSize(9);

    doc.text(
        `Data: ${dataAtual}`,
        195,
        20,
        { align: "right" }
    );

    doc.text(
        "Betim - MG",
        195,
        26,
        { align: "right" }
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
 
    doc.setFillColor(
        cinzaClaro[0],
        cinzaClaro[1],
        cinzaClaro[2]
    );

    doc.roundedRect(
        10,
        55,
        190,
        25,
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
        62
    );

    doc.text(
        "APARELHO:",
        15,
        69
    );

    doc.text(
        "CONTATO:",
        15,
        76
    );
 
    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.text(
        d.nomeVal || "Não informado",
        45,
        62
    );

    doc.text(
        d.modeloVal || "Não informado",
        45,
        69
    );

    doc.text(
        document.getElementById('telefone').value ||
        "Não informado",
        45,
        76
    );
 
    // ================================================================
    // TABELA DE SERVIÇOS
    // ================================================================

    let y = 95;

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
        { align: "right" }
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

    itensOrcamento.forEach(
        (item, index) => {

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
            
            doc.text(
                item.descricao,
                15,
                y
            );

            doc.text(
                `R$ ${item.valor.toFixed(2)}`,
                195,
                y,
                { align: "right" }
            );
            
            
            y += 8;
        }
    );
 
    // ================================================================
    // TOTAIS
    // ================================================================

    y += 5;

    doc.line(
        10,
        y,
        200,
        y
    );

    y += 10;
 
    if (d.entrVal > 0) {

        doc.setFont(
            "helvetica",
            "normal"
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
            { align: "right" }
        );

        y += 7;
    }
 
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
        { align: "right" }
    );
 
    // ================================================================
    // RODAPÉ E GARANTIA
    // ================================================================

    y = 265;

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
        y + 7,
        { align: "center" }
    );
    
    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.text(
        "Obrigado pela confiança!",
        105,
        y + 12,
        { align: "center" }
    );
 
    // ================================================================
    // SALVAR PDF
    // ================================================================

    const nomeArquivo =
        `Orcamento_${(d.nomeVal || "Cliente")
            .replace(/\s+/g, '_')}.pdf`;

    doc.save(nomeArquivo);
}