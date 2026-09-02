// ==========================================
// BANCO DE DADOS HIERÁRQUICO - DADOS.JS
// VERSÃO EXPANDIDA
//
// Estrutura:
// baseDadosServicos[Tipo][Marca][Modelo][ServicoID]
//
// sMin / sMax = SOMENTE MÃO DE OBRA
// Peças/componentes devem ser adicionados separadamente.
//
// Atualizado para referência de mercado 2026
// ==========================================

const baseDadosServicos = {

    // ============================================================
    // ============================================================
    // CELULARES
    // ============================================================
    // ============================================================

    "Celular": {

        // ========================================================
        // APPLE
        // ========================================================

        "Apple": {

            "iPhone 11": {
                "iphone11_tela": { nome: "Troca de Tela", sMax: 220, sMin: 150 },
                "iphone11_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "iphone11_tampa": { nome: "Troca de Tampa Traseira", sMax: 200, sMin: 130 },
                "iphone11_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "iphone11_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "iPhone 11 Pro": {
                "iphone11pro_tela": { nome: "Troca de Tela", sMax: 260, sMin: 180 },
                "iphone11pro_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 130 },
                "iphone11pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 230, sMin: 150 },
                "iphone11pro_conector": { nome: "Troca de Conector de Carga", sMax: 200, sMin: 140 },
                "iphone11pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 250 }
            },

            "iPhone 11 Pro Max": {
                "iphone11promax_tela": { nome: "Troca de Tela", sMax: 280, sMin: 200 },
                "iphone11promax_bateria": { nome: "Troca de Bateria", sMax: 190, sMin: 140 },
                "iphone11promax_tampa": { nome: "Troca de Tampa Traseira", sMax: 250, sMin: 160 },
                "iphone11promax_conector": { nome: "Troca de Conector de Carga", sMax: 210, sMin: 150 },
                "iphone11promax_camera": { nome: "Reparo de Câmera/Placa", sMax: 420, sMin: 270 }
            },

            "iPhone 12": {
                "iphone12_tela": { nome: "Troca de Tela OLED", sMax: 300, sMin: 200 },
                "iphone12_bateria": { nome: "Troca de Bateria", sMax: 190, sMin: 140 },
                "iphone12_tampa": { nome: "Troca de Tampa Traseira", sMax: 260, sMin: 170 },
                "iphone12_conector": { nome: "Troca de Conector de Carga", sMax: 220, sMin: 150 },
                "iphone12_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 280 }
            },

            "iPhone 12 Mini": {
                "iphone12mini_tela": { nome: "Troca de Tela OLED", sMax: 320, sMin: 220 },
                "iphone12mini_bateria": { nome: "Troca de Bateria", sMax: 210, sMin: 150 },
                "iphone12mini_tampa": { nome: "Troca de Tampa Traseira", sMax: 270, sMin: 180 },
                "iphone12mini_conector": { nome: "Troca de Conector de Carga", sMax: 230, sMin: 160 },
                "iphone12mini_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 300 }
            },

            "iPhone 12 Pro": {
                "iphone12pro_tela": { nome: "Troca de Tela OLED", sMax: 320, sMin: 220 },
                "iphone12pro_bateria": { nome: "Troca de Bateria", sMax: 210, sMin: 150 },
                "iphone12pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 280, sMin: 190 },
                "iphone12pro_conector": { nome: "Troca de Conector de Carga", sMax: 230, sMin: 160 },
                "iphone12pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 480, sMin: 300 }
            },

            "iPhone 12 Pro Max": {
                "iphone12promax_tela": { nome: "Troca de Tela OLED", sMax: 350, sMin: 250 },
                "iphone12promax_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 160 },
                "iphone12promax_tampa": { nome: "Troca de Tampa Traseira", sMax: 300, sMin: 200 },
                "iphone12promax_conector": { nome: "Troca de Conector de Carga", sMax: 240, sMin: 170 },
                "iphone12promax_camera": { nome: "Reparo de Câmera/Placa", sMax: 500, sMin: 320 }
            },

            "iPhone 13": {
                "iphone13_tela": { nome: "Troca de Tela OLED", sMax: 320, sMin: 220 },
                "iphone13_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 160 },
                "iphone13_tampa": { nome: "Troca de Tampa Traseira", sMax: 280, sMin: 190 },
                "iphone13_conector": { nome: "Troca de Conector de Carga", sMax: 240, sMin: 170 },
                "iphone13_camera": { nome: "Reparo de Câmera/Placa", sMax: 500, sMin: 320 }
            },

            "iPhone 13 Mini": {
                "iphone13mini_tela": { nome: "Troca de Tela OLED", sMax: 340, sMin: 240 },
                "iphone13mini_bateria": { nome: "Troca de Bateria", sMax: 230, sMin: 170 },
                "iphone13mini_tampa": { nome: "Troca de Tampa Traseira", sMax: 290, sMin: 190 },
                "iphone13mini_conector": { nome: "Troca de Conector de Carga", sMax: 250, sMin: 180 },
                "iphone13mini_camera": { nome: "Reparo de Câmera/Placa", sMax: 520, sMin: 340 }
            },

            "iPhone 13 Pro": {
                "iphone13pro_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 380, sMin: 260 },
                "iphone13pro_bateria": { nome: "Troca de Bateria", sMax: 230, sMin: 170 },
                "iphone13pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 320, sMin: 220 },
                "iphone13pro_conector": { nome: "Troca de Conector de Carga", sMax: 260, sMin: 180 },
                "iphone13pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            },

            "iPhone 13 Pro Max": {
                "iphone13promax_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 400, sMin: 280 },
                "iphone13promax_bateria": { nome: "Troca de Bateria", sMax: 240, sMin: 180 },
                "iphone13promax_tampa": { nome: "Troca de Tampa Traseira", sMax: 350, sMin: 240 },
                "iphone13promax_conector": { nome: "Troca de Conector de Carga", sMax: 270, sMin: 190 },
                "iphone13promax_camera": { nome: "Reparo de Câmera/Placa", sMax: 580, sMin: 380 }
            },

            "iPhone 14": {
                "iphone14_tela": { nome: "Troca de Tela OLED", sMax: 350, sMin: 240 },
                "iphone14_bateria": { nome: "Troca de Bateria", sMax: 230, sMin: 170 },
                "iphone14_tampa": { nome: "Troca de Tampa Traseira", sMax: 300, sMin: 200 },
                "iphone14_conector": { nome: "Troca de Conector de Carga", sMax: 260, sMin: 180 },
                "iphone14_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            },

            "iPhone 14 Plus": {
                "iphone14plus_tela": { nome: "Troca de Tela OLED", sMax: 370, sMin: 250 },
                "iphone14plus_bateria": { nome: "Troca de Bateria", sMax: 240, sMin: 180 },
                "iphone14plus_tampa": { nome: "Troca de Tampa Traseira", sMax: 320, sMin: 210 },
                "iphone14plus_conector": { nome: "Troca de Conector de Carga", sMax: 270, sMin: 190 },
                "iphone14plus_camera": { nome: "Reparo de Câmera/Placa", sMax: 570, sMin: 370 }
            },

            "iPhone 14 Pro": {
                "iphone14pro_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 420, sMin: 300 },
                "iphone14pro_bateria": { nome: "Troca de Bateria", sMax: 250, sMin: 180 },
                "iphone14pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 360, sMin: 250 },
                "iphone14pro_conector": { nome: "Troca de Conector de Carga", sMax: 280, sMin: 200 },
                "iphone14pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 600, sMin: 400 }
            },

            "iPhone 14 Pro Max": {
                "iphone14promax_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 450, sMin: 320 },
                "iphone14promax_bateria": { nome: "Troca de Bateria", sMax: 260, sMin: 190 },
                "iphone14promax_tampa": { nome: "Troca de Tampa Traseira", sMax: 390, sMin: 270 },
                "iphone14promax_conector": { nome: "Troca de Conector de Carga", sMax: 300, sMin: 210 },
                "iphone14promax_camera": { nome: "Reparo de Câmera/Placa", sMax: 650, sMin: 420 }
            },

            "iPhone 15": {
                "iphone15_tela": { nome: "Troca de Tela OLED", sMax: 380, sMin: 260 },
                "iphone15_bateria": { nome: "Troca de Bateria", sMax: 250, sMin: 180 },
                "iphone15_tampa": { nome: "Troca de Tampa Traseira", sMax: 320, sMin: 220 },
                "iphone15_conector": { nome: "Troca de Conector USB-C", sMax: 300, sMin: 210 },
                "iphone15_camera": { nome: "Reparo de Câmera/Placa", sMax: 600, sMin: 400 }
            },

            "iPhone 15 Plus": {
                "iphone15plus_tela": { nome: "Troca de Tela OLED", sMax: 400, sMin: 280 },
                "iphone15plus_bateria": { nome: "Troca de Bateria", sMax: 260, sMin: 190 },
                "iphone15plus_tampa": { nome: "Troca de Tampa Traseira", sMax: 340, sMin: 230 },
                "iphone15plus_conector": { nome: "Troca de Conector USB-C", sMax: 310, sMin: 220 },
                "iphone15plus_camera": { nome: "Reparo de Câmera/Placa", sMax: 620, sMin: 420 }
            },

            "iPhone 15 Pro": {
                "iphone15pro_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 450, sMin: 320 },
                "iphone15pro_bateria": { nome: "Troca de Bateria", sMax: 280, sMin: 200 },
                "iphone15pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 380, sMin: 260 },
                "iphone15pro_conector": { nome: "Troca de Conector USB-C", sMax: 330, sMin: 230 },
                "iphone15pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 700, sMin: 450 }
            },

            "iPhone 15 Pro Max": {
                "iphone15promax_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 480, sMin: 340 },
                "iphone15promax_bateria": { nome: "Troca de Bateria", sMax: 290, sMin: 210 },
                "iphone15promax_tampa": { nome: "Troca de Tampa Traseira", sMax: 420, sMin: 290 },
                "iphone15promax_conector": { nome: "Troca de Conector USB-C", sMax: 350, sMin: 240 },
                "iphone15promax_camera": { nome: "Reparo de Câmera/Placa", sMax: 750, sMin: 480 }
            },

            "iPhone 16": {
                "iphone16_tela": { nome: "Troca de Tela OLED", sMax: 420, sMin: 290 },
                "iphone16_bateria": { nome: "Troca de Bateria", sMax: 270, sMin: 200 },
                "iphone16_tampa": { nome: "Troca de Tampa Traseira", sMax: 350, sMin: 240 },
                "iphone16_conector": { nome: "Troca de Conector USB-C", sMax: 320, sMin: 220 },
                "iphone16_camera": { nome: "Reparo de Câmera/Placa", sMax: 650, sMin: 420 }
            },

            "iPhone 16 Plus": {
                "iphone16plus_tela": { nome: "Troca de Tela OLED", sMax: 440, sMin: 300 },
                "iphone16plus_bateria": { nome: "Troca de Bateria", sMax: 280, sMin: 200 },
                "iphone16plus_tampa": { nome: "Troca de Tampa Traseira", sMax: 370, sMin: 250 },
                "iphone16plus_conector": { nome: "Troca de Conector USB-C", sMax: 330, sMin: 230 },
                "iphone16plus_camera": { nome: "Reparo de Câmera/Placa", sMax: 680, sMin: 440 }
            },

            "iPhone 16 Pro": {
                "iphone16pro_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 480, sMin: 340 },
                "iphone16pro_bateria": { nome: "Troca de Bateria", sMax: 300, sMin: 220 },
                "iphone16pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 400, sMin: 280 },
                "iphone16pro_conector": { nome: "Troca de Conector USB-C", sMax: 350, sMin: 240 },
                "iphone16pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 750, sMin: 500 }
            },

            "iPhone 16 Pro Max": {
                "iphone16promax_tela": { nome: "Troca de Tela OLED ProMotion", sMax: 520, sMin: 360 },
                "iphone16promax_bateria": { nome: "Troca de Bateria", sMax: 320, sMin: 230 },
                "iphone16promax_tampa": { nome: "Troca de Tampa Traseira", sMax: 450, sMin: 310 },
                "iphone16promax_conector": { nome: "Troca de Conector USB-C", sMax: 370, sMin: 250 },
                "iphone16promax_camera": { nome: "Reparo de Câmera/Placa", sMax: 800, sMin: 520 }
            },

            "iPhone 17": {
                "iphone17_tela": { nome: "Troca de Tela", sMax: 450, sMin: 320 },
                "iphone17_bateria": { nome: "Troca de Bateria", sMax: 300, sMin: 220 },
                "iphone17_tampa": { nome: "Troca de Tampa Traseira", sMax: 380, sMin: 260 },
                "iphone17_conector": { nome: "Troca de Conector USB-C", sMax: 350, sMin: 250 },
                "iphone17_camera": { nome: "Reparo de Câmera/Placa", sMax: 750, sMin: 500 }
            },

            "iPhone 17 Pro": {
                "iphone17pro_tela": { nome: "Troca de Tela ProMotion", sMax: 520, sMin: 370 },
                "iphone17pro_bateria": { nome: "Troca de Bateria", sMax: 330, sMin: 240 },
                "iphone17pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 430, sMin: 300 },
                "iphone17pro_conector": { nome: "Troca de Conector USB-C", sMax: 380, sMin: 270 },
                "iphone17pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 850, sMin: 550 }
            },

            "iPhone 17 Pro Max": {
                "iphone17promax_tela": { nome: "Troca de Tela ProMotion", sMax: 550, sMin: 400 },
                "iphone17promax_bateria": { nome: "Troca de Bateria", sMax: 350, sMin: 250 },
                "iphone17promax_tampa": { nome: "Troca de Tampa Traseira", sMax: 480, sMin: 330 },
                "iphone17promax_conector": { nome: "Troca de Conector USB-C", sMax: 400, sMin: 280 },
                "iphone17promax_camera": { nome: "Reparo de Câmera/Placa", sMax: 900, sMin: 600 }
            }
        },

        // ========================================================
        // SAMSUNG
        // ========================================================

        "Samsung": {

            // GALAXY S
            "Galaxy S20": {
                "s20_tela": { nome: "Troca de Tela AMOLED", sMax: 280, sMin: 190 },
                "s20_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 110 },
                "s20_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 90 },
                "s20_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "s20_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 250 }
            },

            "Galaxy S20 FE": {
                "s20fe_tela": { nome: "Troca de Tela Super AMOLED", sMax: 250, sMin: 170 },
                "s20fe_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "s20fe_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "s20fe_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 110 },
                "s20fe_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Galaxy S21": {
                "s21_tela": { nome: "Troca de Tela AMOLED", sMax: 300, sMin: 200 },
                "s21_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "s21_tampa": { nome: "Troca de Tampa Traseira", sMax: 160, sMin: 100 },
                "s21_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "s21_camera": { nome: "Reparo de Câmera/Placa", sMax: 420, sMin: 270 }
            },

            "Galaxy S21 FE": {
                "s21fe_tela": { nome: "Troca de Tela AMOLED", sMax: 280, sMin: 190 },
                "s21fe_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "s21fe_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "s21fe_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "s21fe_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 250 }
            },

            "Galaxy S22": {
                "s22_tela": { nome: "Troca de Tela AMOLED", sMax: 320, sMin: 220 },
                "s22_bateria": { nome: "Troca de Bateria", sMax: 190, sMin: 130 },
                "s22_tampa": { nome: "Troca de Tampa Traseira", sMax: 180, sMin: 110 },
                "s22_conector": { nome: "Troca de Conector de Carga", sMax: 210, sMin: 140 },
                "s22_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 280 }
            },

            "Galaxy S22 Ultra": {
                "s22ultra_tela": { nome: "Troca de Tela AMOLED", sMax: 400, sMin: 280 },
                "s22ultra_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 150 },
                "s22ultra_tampa": { nome: "Troca de Tampa Traseira", sMax: 210, sMin: 140 },
                "s22ultra_conector": { nome: "Troca de Conector de Carga", sMax: 240, sMin: 160 },
                "s22ultra_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            },

            "Galaxy S23": {
                "s23_tela": { nome: "Troca de Tela AMOLED", sMax: 350, sMin: 240 },
                "s23_bateria": { nome: "Troca de Bateria", sMax: 210, sMin: 140 },
                "s23_tampa": { nome: "Troca de Tampa Traseira", sMax: 190, sMin: 120 },
                "s23_conector": { nome: "Troca de Conector de Carga", sMax: 220, sMin: 150 },
                "s23_camera": { nome: "Reparo de Câmera/Placa", sMax: 500, sMin: 320 }
            },

            "Galaxy S23 FE": {
                "s23fe_tela": { nome: "Troca de Tela AMOLED", sMax: 320, sMin: 220 },
                "s23fe_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 140 },
                "s23fe_tampa": { nome: "Troca de Tampa Traseira", sMax: 180, sMin: 110 },
                "s23fe_conector": { nome: "Troca de Conector de Carga", sMax: 210, sMin: 140 },
                "s23fe_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 280 }
            },

            "Galaxy S23 Ultra": {
                "s23ultra_tela": { nome: "Troca de Tela AMOLED", sMax: 450, sMin: 320 },
                "s23ultra_bateria": { nome: "Troca de Bateria", sMax: 230, sMin: 160 },
                "s23ultra_tampa": { nome: "Troca de Tampa Traseira", sMax: 230, sMin: 150 },
                "s23ultra_conector": { nome: "Troca de Conector de Carga", sMax: 250, sMin: 170 },
                "s23ultra_camera": { nome: "Reparo de Câmera/Placa", sMax: 600, sMin: 380 }
            },

            "Galaxy S24": {
                "s24_tela": { nome: "Troca de Tela AMOLED", sMax: 400, sMin: 280 },
                "s24_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 150 },
                "s24_tampa": { nome: "Troca de Tampa Traseira", sMax: 210, sMin: 140 },
                "s24_conector": { nome: "Troca de Conector de Carga", sMax: 240, sMin: 160 },
                "s24_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            },

            "Galaxy S24 Ultra": {
                "s24ultra_tela": { nome: "Troca de Tela AMOLED", sMax: 500, sMin: 350 },
                "s24ultra_bateria": { nome: "Troca de Bateria", sMax: 250, sMin: 170 },
                "s24ultra_tampa": { nome: "Troca de Tampa Traseira", sMax: 250, sMin: 170 },
                "s24ultra_conector": { nome: "Troca de Conector de Carga", sMax: 270, sMin: 180 },
                "s24ultra_camera": { nome: "Reparo de Câmera/Placa", sMax: 650, sMin: 420 }
            },

            "Galaxy S25": {
                "s25_tela": { nome: "Troca de Tela AMOLED", sMax: 450, sMin: 320 },
                "s25_bateria": { nome: "Troca de Bateria", sMax: 230, sMin: 160 },
                "s25_tampa": { nome: "Troca de Tampa Traseira", sMax: 230, sMin: 150 },
                "s25_conector": { nome: "Troca de Conector de Carga", sMax: 250, sMin: 170 },
                "s25_camera": { nome: "Reparo de Câmera/Placa", sMax: 600, sMin: 400 }
            },

            "Galaxy S25 Ultra": {
                "s25ultra_tela": { nome: "Troca de Tela AMOLED", sMax: 550, sMin: 380 },
                "s25ultra_bateria": { nome: "Troca de Bateria", sMax: 270, sMin: 190 },
                "s25ultra_tampa": { nome: "Troca de Tampa Traseira", sMax: 280, sMin: 190 },
                "s25ultra_conector": { nome: "Troca de Conector de Carga", sMax: 290, sMin: 200 },
                "s25ultra_camera": { nome: "Reparo de Câmera/Placa", sMax: 700, sMin: 450 }
            },

            // GALAXY A
            "Galaxy A12": {
                "a12_tela": { nome: "Troca de Tela", sMax: 160, sMin: 100 },
                "a12_bateria": { nome: "Troca de Bateria", sMax: 130, sMin: 80 },
                "a12_tampa": { nome: "Troca de Tampa Traseira", sMax: 110, sMin: 70 },
                "a12_conector": { nome: "Troca de Conector de Carga", sMax: 130, sMin: 80 },
                "a12_camera": { nome: "Reparo de Câmera/Placa", sMax: 280, sMin: 170 }
            },

            "Galaxy A13": {
                "a13_tela": { nome: "Troca de Tela", sMax: 170, sMin: 110 },
                "a13_bateria": { nome: "Troca de Bateria", sMax: 130, sMin: 90 },
                "a13_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 70 },
                "a13_conector": { nome: "Troca de Conector de Carga", sMax: 140, sMin: 90 },
                "a13_camera": { nome: "Reparo de Câmera/Placa", sMax: 300, sMin: 180 }
            },

            "Galaxy A14": {
                "a14_tela": { nome: "Troca de Tela", sMax: 180, sMin: 120 },
                "a14_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "a14_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "a14_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "a14_camera": { nome: "Reparo de Câmera/Placa", sMax: 300, sMin: 190 }
            },

            "Galaxy A15": {
                "a15_tela": { nome: "Troca de Tela Super AMOLED", sMax: 190, sMin: 130 },
                "a15_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "a15_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 80 },
                "a15_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "a15_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Galaxy A16": {
                "a16_tela": { nome: "Troca de Tela", sMax: 190, sMin: 130 },
                "a16_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "a16_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 80 },
                "a16_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 100 },
                "a16_camera": { nome: "Reparo de Câmera/Placa", sMax: 330, sMin: 210 }
            },

            "Galaxy A22": {
                "a22_tela": { nome: "Troca de Tela Super AMOLED", sMax: 190, sMin: 130 },
                "a22_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "a22_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "a22_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "a22_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Galaxy A23": {
                "a23_tela": { nome: "Troca de Tela", sMax: 180, sMin: 120 },
                "a23_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "a23_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "a23_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "a23_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Galaxy A24": {
                "a24_tela": { nome: "Troca de Tela Super AMOLED", sMax: 200, sMin: 140 },
                "a24_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "a24_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "a24_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "a24_camera": { nome: "Reparo de Câmera/Placa", sMax: 340, sMin: 220 }
            },

            "Galaxy A25": {
                "a25_tela": { nome: "Troca de Tela Super AMOLED", sMax: 210, sMin: 140 },
                "a25_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "a25_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "a25_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 110 },
                "a25_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Galaxy A32": {
                "a32_tela": { nome: "Troca de Tela Super AMOLED", sMax: 190, sMin: 130 },
                "a32_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "a32_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "a32_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "a32_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Galaxy A33": {
                "a33_tela": { nome: "Troca de Tela AMOLED", sMax: 210, sMin: 140 },
                "a33_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "a33_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "a33_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 110 },
                "a33_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Galaxy A34": {
                "a34_tela": { nome: "Troca de Tela AMOLED", sMax: 220, sMin: 150 },
                "a34_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "a34_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "a34_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 120 },
                "a34_camera": { nome: "Reparo de Câmera/Placa", sMax: 370, sMin: 240 }
            },

            "Galaxy A35": {
                "a35_tela": { nome: "Troca de Tela AMOLED", sMax: 230, sMin: 160 },
                "a35_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 110 },
                "a35_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "a35_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "a35_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 250 }
            },

            "Galaxy A52": {
                "a52_tela": { nome: "Troca de Tela Super AMOLED", sMax: 220, sMin: 150 },
                "a52_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "a52_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "a52_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 110 },
                "a52_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Galaxy A53": {
                "a53_tela": { nome: "Troca de Tela Super AMOLED", sMax: 230, sMin: 160 },
                "a53_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "a53_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "a53_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "a53_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 240 }
            },

            "Galaxy A54": {
                "a54_tela": { nome: "Troca de Tela Super AMOLED", sMax: 250, sMin: 170 },
                "a54_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 110 },
                "a54_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "a54_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "a54_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 260 }
            },

            "Galaxy A55": {
                "a55_tela": { nome: "Troca de Tela Super AMOLED", sMax: 270, sMin: 190 },
                "a55_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "a55_tampa": { nome: "Troca de Tampa Traseira", sMax: 160, sMin: 110 },
                "a55_conector": { nome: "Troca de Conector de Carga", sMax: 200, sMin: 140 },
                "a55_camera": { nome: "Reparo de Câmera/Placa", sMax: 420, sMin: 280 }
            },

            // GALAXY M
            "Galaxy M12": {
                "m12_tela": { nome: "Troca de Tela", sMax: 160, sMin: 100 },
                "m12_bateria": { nome: "Troca de Bateria", sMax: 130, sMin: 80 },
                "m12_tampa": { nome: "Troca de Tampa Traseira", sMax: 110, sMin: 70 },
                "m12_conector": { nome: "Troca de Conector de Carga", sMax: 130, sMin: 80 },
                "m12_camera": { nome: "Reparo de Câmera/Placa", sMax: 280, sMin: 170 }
            },

            "Galaxy M13": {
                "m13_tela": { nome: "Troca de Tela", sMax: 170, sMin: 110 },
                "m13_bateria": { nome: "Troca de Bateria", sMax: 130, sMin: 90 },
                "m13_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 70 },
                "m13_conector": { nome: "Troca de Conector de Carga", sMax: 140, sMin: 90 },
                "m13_camera": { nome: "Reparo de Câmera/Placa", sMax: 300, sMin: 180 }
            },

            "Galaxy M14": {
                "m14_tela": { nome: "Troca de Tela", sMax: 180, sMin: 120 },
                "m14_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "m14_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "m14_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "m14_camera": { nome: "Reparo de Câmera/Placa", sMax: 310, sMin: 190 }
            },

            "Galaxy M23": {
                "m23_tela": { nome: "Troca de Tela", sMax: 180, sMin: 120 },
                "m23_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "m23_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "m23_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "m23_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Galaxy M34": {
                "m34_tela": { nome: "Troca de Tela Super AMOLED", sMax: 210, sMin: 140 },
                "m34_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "m34_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "m34_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 110 },
                "m34_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Galaxy M54": {
                "m54_tela": { nome: "Troca de Tela Super AMOLED", sMax: 230, sMin: 150 },
                "m54_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "m54_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "m54_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "m54_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 240 }
            }
        },

        // ========================================================
        // MOTOROLA
        // ========================================================

        "Motorola": {

            "Moto G20": {
                "motog20_tela": { nome: "Troca de Tela", sMax: 160, sMin: 100 },
                "motog20_bateria": { nome: "Troca de Bateria", sMax: 120, sMin: 80 },
                "motog20_tampa": { nome: "Troca de Tampa Traseira", sMax: 110, sMin: 70 },
                "motog20_conector": { nome: "Troca de Conector de Carga", sMax: 130, sMin: 80 },
                "motog20_camera": { nome: "Reparo de Câmera/Placa", sMax: 280, sMin: 170 }
            },

            "Moto G30": {
                "motog30_tela": { nome: "Troca de Tela", sMax: 170, sMin: 110 },
                "motog30_bateria": { nome: "Troca de Bateria", sMax: 130, sMin: 90 },
                "motog30_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 70 },
                "motog30_conector": { nome: "Troca de Conector de Carga", sMax: 140, sMin: 90 },
                "motog30_camera": { nome: "Reparo de Câmera/Placa", sMax: 300, sMin: 180 }
            },

            "Moto G31": {
                "motog31_tela": { nome: "Troca de Tela AMOLED", sMax: 180, sMin: 120 },
                "motog31_bateria": { nome: "Troca de Bateria", sMax: 130, sMin: 90 },
                "motog31_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "motog31_conector": { nome: "Troca de Conector de Carga", sMax: 140, sMin: 90 },
                "motog31_camera": { nome: "Reparo de Câmera/Placa", sMax: 300, sMin: 190 }
            },

            "Moto G32": {
                "motog32_tela": { nome: "Troca de Tela", sMax: 180, sMin: 120 },
                "motog32_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "motog32_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 80 },
                "motog32_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "motog32_camera": { nome: "Reparo de Câmera/Placa", sMax: 310, sMin: 190 }
            },

            "Moto G34": {
                "motog34_tela": { nome: "Troca de Tela", sMax: 190, sMin: 130 },
                "motog34_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "motog34_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 80 },
                "motog34_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "motog34_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Moto G35": {
                "motog35_tela": { nome: "Troca de Tela", sMax: 190, sMin: 130 },
                "motog35_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "motog35_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 80 },
                "motog35_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 100 },
                "motog35_camera": { nome: "Reparo de Câmera/Placa", sMax: 330, sMin: 210 }
            },

            "Moto G40 Fusion": {
                "motog40fusion_tela": { nome: "Troca de Tela", sMax: 190, sMin: 130 },
                "motog40fusion_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "motog40fusion_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 80 },
                "motog40fusion_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "motog40fusion_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Moto G41": {
                "motog41_tela": { nome: "Troca de Tela OLED", sMax: 200, sMin: 140 },
                "motog41_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "motog41_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "motog41_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "motog41_camera": { nome: "Reparo de Câmera/Placa", sMax: 330, sMin: 210 }
            },

            "Moto G52": {
                "motog52_tela": { nome: "Troca de Tela OLED", sMax: 200, sMin: 140 },
                "motog52_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "motog52_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "motog52_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "motog52_camera": { nome: "Reparo de Câmera/Placa", sMax: 340, sMin: 220 }
            },

            "Moto G53": {
                "motog53_tela": { nome: "Troca de Tela", sMax: 190, sMin: 130 },
                "motog53_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "motog53_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "motog53_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "motog53_camera": { nome: "Reparo de Câmera/Placa", sMax: 330, sMin: 210 }
            },

            "Moto G54": {
                "motog54_tela": { nome: "Troca de Tela", sMax: 200, sMin: 140 },
                "motog54_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "motog54_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "motog54_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "motog54_camera": { nome: "Reparo de Câmera/Placa", sMax: 340, sMin: 220 }
            },

            "Moto G55": {
                "motog55_tela": { nome: "Troca de Tela", sMax: 210, sMin: 140 },
                "motog55_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "motog55_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "motog55_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 120 },
                "motog55_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 230 }
            },

            "Moto G60": {
                "motog60_tela": { nome: "Troca de Tela", sMax: 200, sMin: 140 },
                "motog60_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "motog60_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "motog60_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "motog60_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Moto G62": {
                "motog62_tela": { nome: "Troca de Tela", sMax: 200, sMin: 140 },
                "motog62_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "motog62_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "motog62_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "motog62_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Moto G72": {
                "motog72_tela": { nome: "Troca de Tela P-OLED", sMax: 230, sMin: 160 },
                "motog72_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "motog72_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "motog72_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 120 },
                "motog72_camera": { nome: "Reparo de Câmera/Placa", sMax: 370, sMin: 240 }
            },

            "Moto G73": {
                "motog73_tela": { nome: "Troca de Tela", sMax: 210, sMin: 140 },
                "motog73_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "motog73_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "motog73_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 120 },
                "motog73_camera": { nome: "Reparo de Câmera/Placa", sMax: 360, sMin: 230 }
            },

            "Moto G84": {
                "motog84_tela": { nome: "Troca de Tela P-OLED", sMax: 230, sMin: 160 },
                "motog84_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 120 },
                "motog84_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "motog84_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "motog84_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 250 }
            },

            "Moto G85": {
                "motog85_tela": { nome: "Troca de Tela P-OLED", sMax: 250, sMin: 170 },
                "motog85_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "motog85_tampa": { nome: "Troca de Tampa Traseira", sMax: 160, sMin: 110 },
                "motog85_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "motog85_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 260 }
            },

            "Moto Edge 20": {
                "edge20_tela": { nome: "Troca de Tela OLED", sMax: 280, sMin: 190 },
                "edge20_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "edge20_tampa": { nome: "Troca de Tampa Traseira", sMax: 170, sMin: 110 },
                "edge20_conector": { nome: "Troca de Conector de Carga", sMax: 200, sMin: 140 },
                "edge20_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 280 }
            },

            "Moto Edge 30": {
                "edge30_tela": { nome: "Troca de Tela OLED", sMax: 300, sMin: 210 },
                "edge30_bateria": { nome: "Troca de Bateria", sMax: 190, sMin: 130 },
                "edge30_tampa": { nome: "Troca de Tampa Traseira", sMax: 180, sMin: 120 },
                "edge30_conector": { nome: "Troca de Conector de Carga", sMax: 210, sMin: 140 },
                "edge30_camera": { nome: "Reparo de Câmera/Placa", sMax: 480, sMin: 300 }
            },

            "Moto Edge 30 Pro": {
                "edge30pro_tela": { nome: "Troca de Tela OLED", sMax: 330, sMin: 230 },
                "edge30pro_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 140 },
                "edge30pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 200, sMin: 130 },
                "edge30pro_conector": { nome: "Troca de Conector de Carga", sMax: 220, sMin: 150 },
                "edge30pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 520, sMin: 330 }
            },

            "Moto Edge 40": {
                "edge40_tela": { nome: "Troca de Tela P-OLED", sMax: 330, sMin: 230 },
                "edge40_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 140 },
                "edge40_tampa": { nome: "Troca de Tampa Traseira", sMax: 200, sMin: 130 },
                "edge40_conector": { nome: "Troca de Conector de Carga", sMax: 220, sMin: 150 },
                "edge40_camera": { nome: "Reparo de Câmera/Placa", sMax: 520, sMin: 330 }
            },

            "Moto Edge 50 Fusion": {
                "edge50fusion_tela": { nome: "Troca de Tela P-OLED", sMax: 350, sMin: 240 },
                "edge50fusion_bateria": { nome: "Troca de Bateria", sMax: 210, sMin: 150 },
                "edge50fusion_tampa": { nome: "Troca de Tampa Traseira", sMax: 210, sMin: 140 },
                "edge50fusion_conector": { nome: "Troca de Conector de Carga", sMax: 230, sMin: 160 },
                "edge50fusion_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            },

            "Moto Edge 50 Pro": {
                "edge50pro_tela": { nome: "Troca de Tela P-OLED", sMax: 380, sMin: 260 },
                "edge50pro_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 150 },
                "edge50pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 230, sMin: 150 },
                "edge50pro_conector": { nome: "Troca de Conector de Carga", sMax: 250, sMin: 170 },
                "edge50pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 600, sMin: 380 }
            }
        },

        // ========================================================
        // XIAOMI
        // ========================================================

        "Xiaomi": {

            "Redmi Note 9": {
                "redminote9_tela": { nome: "Troca de Tela", sMax: 170, sMin: 110 },
                "redminote9_bateria": { nome: "Troca de Bateria", sMax: 130, sMin: 90 },
                "redminote9_tampa": { nome: "Troca de Tampa Traseira", sMax: 120, sMin: 70 },
                "redminote9_conector": { nome: "Troca de Conector de Carga", sMax: 140, sMin: 90 },
                "redminote9_camera": { nome: "Reparo de Câmera/Placa", sMax: 300, sMin: 180 }
            },

            "Redmi Note 10": {
                "redminote10_tela": { nome: "Troca de Tela AMOLED", sMax: 190, sMin: 130 },
                "redminote10_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "redminote10_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 80 },
                "redminote10_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "redminote10_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Redmi Note 11": {
                "redminote11_tela": { nome: "Troca de Tela AMOLED", sMax: 200, sMin: 140 },
                "redminote11_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "redminote11_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "redminote11_conector": { nome: "Troca de Conector de Carga", sMax: 160, sMin: 110 },
                "redminote11_camera": { nome: "Reparo de Câmera/Placa", sMax: 330, sMin: 210 }
            },

            "Redmi Note 12": {
                "redminote12_tela": { nome: "Troca de Tela AMOLED", sMax: 210, sMin: 140 },
                "redminote12_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "redminote12_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "redminote12_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 110 },
                "redminote12_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Redmi Note 13": {
                "redminote13_tela": { nome: "Troca de Tela AMOLED", sMax: 230, sMin: 150 },
                "redminote13_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "redminote13_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "redminote13_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "redminote13_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 240 }
            },

            "Redmi Note 13 Pro": {
                "redminote13pro_tela": { nome: "Troca de Tela AMOLED", sMax: 260, sMin: 180 },
                "redminote13pro_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "redminote13pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 170, sMin: 110 },
                "redminote13pro_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "redminote13pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 420, sMin: 270 }
            },

            "Redmi Note 14": {
                "redminote14_tela": { nome: "Troca de Tela AMOLED", sMax: 240, sMin: 160 },
                "redminote14_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 110 },
                "redminote14_tampa": { nome: "Troca de Tampa Traseira", sMax: 160, sMin: 100 },
                "redminote14_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "redminote14_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 250 }
            },

            "Poco X3 NFC": {
                "pocox3_tela": { nome: "Troca de Tela", sMax: 190, sMin: 130 },
                "pocox3_bateria": { nome: "Troca de Bateria", sMax: 140, sMin: 90 },
                "pocox3_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 80 },
                "pocox3_conector": { nome: "Troca de Conector de Carga", sMax: 150, sMin: 100 },
                "pocox3_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Poco X3 Pro": {
                "pocox3pro_tela": { nome: "Troca de Tela", sMax: 200, sMin: 140 },
                "pocox3pro_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 100 },
                "pocox3pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 130, sMin: 90 },
                "pocox3pro_conector": { nome: "Troca de Conector de Carga", sMax: 170, sMin: 110 },
                "pocox3pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 240 }
            },

            "Poco X4 Pro 5G": {
                "pocox4pro_tela": { nome: "Troca de Tela AMOLED", sMax: 220, sMin: 150 },
                "pocox4pro_bateria": { nome: "Troca de Bateria", sMax: 160, sMin: 110 },
                "pocox4pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 140, sMin: 90 },
                "pocox4pro_conector": { nome: "Troca de Conector de Carga", sMax: 180, sMin: 120 },
                "pocox4pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 240 }
            },

            "Poco X5 Pro": {
                "pocox5pro_tela": { nome: "Troca de Tela AMOLED", sMax: 240, sMin: 160 },
                "pocox5pro_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 110 },
                "pocox5pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "pocox5pro_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "pocox5pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 420, sMin: 270 }
            },

            "Poco X6 Pro": {
                "pocox6pro_tela": { nome: "Troca de Tela AMOLED", sMax: 270, sMin: 180 },
                "pocox6pro_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "pocox6pro_tampa": { nome: "Troca de Tampa Traseira", sMax: 160, sMin: 110 },
                "pocox6pro_conector": { nome: "Troca de Conector de Carga", sMax: 200, sMin: 140 },
                "pocox6pro_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 290 }
            },

            "Poco F3": {
                "pocof3_tela": { nome: "Troca de Tela AMOLED", sMax: 250, sMin: 170 },
                "pocof3_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 110 },
                "pocof3_tampa": { nome: "Troca de Tampa Traseira", sMax: 150, sMin: 100 },
                "pocof3_conector": { nome: "Troca de Conector de Carga", sMax: 190, sMin: 130 },
                "pocof3_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 260 }
            },

            "Poco F4": {
                "pocof4_tela": { nome: "Troca de Tela AMOLED", sMax: 260, sMin: 180 },
                "pocof4_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "pocof4_tampa": { nome: "Troca de Tampa Traseira", sMax: 160, sMin: 110 },
                "pocof4_conector": { nome: "Troca de Conector de Carga", sMax: 200, sMin: 140 },
                "pocof4_camera": { nome: "Reparo de Câmera/Placa", sMax: 430, sMin: 280 }
            },

            "Poco F5": {
                "pocof5_tela": { nome: "Troca de Tela AMOLED", sMax: 280, sMin: 190 },
                "pocof5_bateria": { nome: "Troca de Bateria", sMax: 190, sMin: 130 },
                "pocof5_tampa": { nome: "Troca de Tampa Traseira", sMax: 170, sMin: 110 },
                "pocof5_conector": { nome: "Troca de Conector de Carga", sMax: 210, sMin: 140 },
                "pocof5_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 290 }
            },

            "Poco F6": {
                "pocof6_tela": { nome: "Troca de Tela AMOLED", sMax: 300, sMin: 200 },
                "pocof6_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 140 },
                "pocof6_tampa": { nome: "Troca de Tampa Traseira", sMax: 180, sMin: 120 },
                "pocof6_conector": { nome: "Troca de Conector de Carga", sMax: 220, sMin: 150 },
                "pocof6_camera": { nome: "Reparo de Câmera/Placa", sMax: 480, sMin: 310 }
            },

            "Xiaomi 12": {
                "xiaomi12_tela": { nome: "Troca de Tela AMOLED", sMax: 300, sMin: 200 },
                "xiaomi12_bateria": { nome: "Troca de Bateria", sMax: 190, sMin: 130 },
                "xiaomi12_tampa": { nome: "Troca de Tampa Traseira", sMax: 180, sMin: 120 },
                "xiaomi12_conector": { nome: "Troca de Conector de Carga", sMax: 210, sMin: 140 },
                "xiaomi12_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 300 }
            },

            "Xiaomi 13": {
                "xiaomi13_tela": { nome: "Troca de Tela AMOLED", sMax: 330, sMin: 220 },
                "xiaomi13_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 140 },
                "xiaomi13_tampa": { nome: "Troca de Tampa Traseira", sMax: 200, sMin: 130 },
                "xiaomi13_conector": { nome: "Troca de Conector de Carga", sMax: 220, sMin: 150 },
                "xiaomi13_camera": { nome: "Reparo de Câmera/Placa", sMax: 500, sMin: 320 }
            },

            "Xiaomi 14": {
                "xiaomi14_tela": { nome: "Troca de Tela AMOLED", sMax: 350, sMin: 240 },
                "xiaomi14_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 150 },
                "xiaomi14_tampa": { nome: "Troca de Tampa Traseira", sMax: 210, sMin: 140 },
                "xiaomi14_conector": { nome: "Troca de Conector de Carga", sMax: 240, sMin: 160 },
                "xiaomi14_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            }
        }
    },

    // ============================================================
    // ============================================================
    // TABLETS
    // ============================================================
    // ============================================================

    "Tablet": {

        // ========================================================
        // APPLE IPAD
        // ========================================================

        "Apple": {

            "iPad 7": {
                "ipad7_tela": { nome: "Troca de Tela", sMax: 220, sMin: 150 },
                "ipad7_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 150 },
                "ipad7_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 280, sMin: 190 },
                "ipad7_conector": { nome: "Troca de Conector de Carga", sMax: 250, sMin: 170 },
                "ipad7_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "iPad 8": {
                "ipad8_tela": { nome: "Troca de Tela", sMax: 230, sMin: 160 },
                "ipad8_bateria": { nome: "Troca de Bateria", sMax: 230, sMin: 160 },
                "ipad8_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 290, sMin: 200 },
                "ipad8_conector": { nome: "Troca de Conector de Carga", sMax: 260, sMin: 180 },
                "ipad8_camera": { nome: "Reparo de Câmera/Placa", sMax: 370, sMin: 230 }
            },

            "iPad 9": {
                "ipad9_tela": { nome: "Troca de Tela", sMax: 240, sMin: 170 },
                "ipad9_bateria": { nome: "Troca de Bateria", sMax: 240, sMin: 170 },
                "ipad9_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 300, sMin: 210 },
                "ipad9_conector": { nome: "Troca de Conector de Carga", sMax: 270, sMin: 190 },
                "ipad9_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 240 }
            },

            "iPad 10": {
                "ipad10_tela": { nome: "Troca de Tela", sMax: 280, sMin: 190 },
                "ipad10_bateria": { nome: "Troca de Bateria", sMax: 250, sMin: 170 },
                "ipad10_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 340, sMin: 230 },
                "ipad10_conector": { nome: "Troca de Conector USB-C", sMax: 300, sMin: 200 },
                "ipad10_camera": { nome: "Reparo de Câmera/Placa", sMax: 420, sMin: 270 }
            },

            "iPad Air 3": {
                "ipadair3_tela": { nome: "Troca de Tela", sMax: 280, sMin: 190 },
                "ipadair3_bateria": { nome: "Troca de Bateria", sMax: 260, sMin: 180 },
                "ipadair3_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 340, sMin: 230 },
                "ipadair3_conector": { nome: "Troca de Conector de Carga", sMax: 280, sMin: 190 },
                "ipadair3_camera": { nome: "Reparo de Câmera/Placa", sMax: 400, sMin: 250 }
            },

            "iPad Air 4": {
                "ipadair4_tela": { nome: "Troca de Tela", sMax: 320, sMin: 220 },
                "ipadair4_bateria": { nome: "Troca de Bateria", sMax: 280, sMin: 190 },
                "ipadair4_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 380, sMin: 260 },
                "ipadair4_conector": { nome: "Troca de Conector USB-C", sMax: 320, sMin: 220 },
                "ipadair4_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 280 }
            },

            "iPad Air 5": {
                "ipadair5_tela": { nome: "Troca de Tela", sMax: 350, sMin: 240 },
                "ipadair5_bateria": { nome: "Troca de Bateria", sMax: 300, sMin: 210 },
                "ipadair5_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 400, sMin: 280 },
                "ipadair5_conector": { nome: "Troca de Conector USB-C", sMax: 340, sMin: 230 },
                "ipadair5_camera": { nome: "Reparo de Câmera/Placa", sMax: 480, sMin: 300 }
            },

            "iPad Pro 11": {
                "ipadpro11_tela": { nome: "Troca de Tela", sMax: 400, sMin: 280 },
                "ipadpro11_bateria": { nome: "Troca de Bateria", sMax: 330, sMin: 230 },
                "ipadpro11_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 450, sMin: 310 },
                "ipadpro11_conector": { nome: "Troca de Conector USB-C", sMax: 380, sMin: 260 },
                "ipadpro11_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            },

            "iPad Pro 12.9": {
                "ipadpro129_tela": { nome: "Troca de Tela", sMax: 500, sMin: 350 },
                "ipadpro129_bateria": { nome: "Troca de Bateria", sMax: 380, sMin: 260 },
                "ipadpro129_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 550, sMin: 380 },
                "ipadpro129_conector": { nome: "Troca de Conector USB-C", sMax: 420, sMin: 280 },
                "ipadpro129_camera": { nome: "Reparo de Câmera/Placa", sMax: 650, sMin: 420 }
            },

            "iPad Mini 5": {
                "ipadmini5_tela": { nome: "Troca de Tela", sMax: 300, sMin: 200 },
                "ipadmini5_bateria": { nome: "Troca de Bateria", sMax: 280, sMin: 190 },
                "ipadmini5_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 350, sMin: 240 },
                "ipadmini5_conector": { nome: "Troca de Conector de Carga", sMax: 300, sMin: 200 },
                "ipadmini5_camera": { nome: "Reparo de Câmera/Placa", sMax: 420, sMin: 270 }
            },

            "iPad Mini 6": {
                "ipadmini6_tela": { nome: "Troca de Tela", sMax: 350, sMin: 240 },
                "ipadmini6_bateria": { nome: "Troca de Bateria", sMax: 300, sMin: 210 },
                "ipadmini6_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 400, sMin: 280 },
                "ipadmini6_conector": { nome: "Troca de Conector USB-C", sMax: 350, sMin: 240 },
                "ipadmini6_camera": { nome: "Reparo de Câmera/Placa", sMax: 480, sMin: 300 }
            }
        },

        // ========================================================
        // SAMSUNG TABLETS
        // ========================================================

        "Samsung": {

            "Galaxy Tab A7": {
                "taba7_tela": { nome: "Troca de Tela", sMax: 220, sMin: 150 },
                "taba7_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 120 },
                "taba7_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 200, sMin: 130 },
                "taba7_conector": { nome: "Troca de Conector de Carga", sMax: 200, sMin: 130 },
                "taba7_camera": { nome: "Reparo de Câmera/Placa", sMax: 320, sMin: 200 }
            },

            "Galaxy Tab A8": {
                "taba8_tela": { nome: "Troca de Tela", sMax: 230, sMin: 160 },
                "taba8_bateria": { nome: "Troca de Bateria", sMax: 190, sMin: 130 },
                "taba8_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 210, sMin: 140 },
                "taba8_conector": { nome: "Troca de Conector de Carga", sMax: 210, sMin: 140 },
                "taba8_camera": { nome: "Reparo de Câmera/Placa", sMax: 340, sMin: 220 }
            },

            "Galaxy Tab A9": {
                "taba9_tela": { nome: "Troca de Tela", sMax: 240, sMin: 160 },
                "taba9_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 130 },
                "taba9_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 220, sMin: 140 },
                "taba9_conector": { nome: "Troca de Conector de Carga", sMax: 220, sMin: 150 },
                "taba9_camera": { nome: "Reparo de Câmera/Placa", sMax: 350, sMin: 220 }
            },

            "Galaxy Tab S6 Lite": {
                "tabs6lite_tela": { nome: "Troca de Tela", sMax: 280, sMin: 190 },
                "tabs6lite_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 150 },
                "tabs6lite_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 250, sMin: 170 },
                "tabs6lite_conector": { nome: "Troca de Conector de Carga", sMax: 250, sMin: 170 },
                "tabs6lite_camera": { nome: "Reparo de Câmera/Placa", sMax: 380, sMin: 240 }
            },

            "Galaxy Tab S7": {
                "tabs7_tela": { nome: "Troca de Tela", sMax: 350, sMin: 240 },
                "tabs7_bateria": { nome: "Troca de Bateria", sMax: 260, sMin: 180 },
                "tabs7_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 300, sMin: 200 },
                "tabs7_conector": { nome: "Troca de Conector USB-C", sMax: 280, sMin: 190 },
                "tabs7_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 290 }
            },

            "Galaxy Tab S8": {
                "tabs8_tela": { nome: "Troca de Tela AMOLED", sMax: 380, sMin: 260 },
                "tabs8_bateria": { nome: "Troca de Bateria", sMax: 280, sMin: 190 },
                "tabs8_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 330, sMin: 220 },
                "tabs8_conector": { nome: "Troca de Conector USB-C", sMax: 300, sMin: 210 },
                "tabs8_camera": { nome: "Reparo de Câmera/Placa", sMax: 500, sMin: 320 }
            },

            "Galaxy Tab S9": {
                "tabs9_tela": { nome: "Troca de Tela AMOLED", sMax: 420, sMin: 290 },
                "tabs9_bateria": { nome: "Troca de Bateria", sMax: 300, sMin: 210 },
                "tabs9_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 360, sMin: 250 },
                "tabs9_conector": { nome: "Troca de Conector USB-C", sMax: 320, sMin: 220 },
                "tabs9_camera": { nome: "Reparo de Câmera/Placa", sMax: 550, sMin: 350 }
            },

            "Galaxy Tab S9 FE": {
                "tabs9fe_tela": { nome: "Troca de Tela", sMax: 330, sMin: 230 },
                "tabs9fe_bateria": { nome: "Troca de Bateria", sMax: 260, sMin: 180 },
                "tabs9fe_tampa": { nome: "Troca de Tampa Traseira / Carcaça", sMax: 290, sMin: 200 },
                "tabs9fe_conector": { nome: "Troca de Conector USB-C", sMax: 280, sMin: 190 },
                "tabs9fe_camera": { nome: "Reparo de Câmera/Placa", sMax: 450, sMin: 290 }
            }
        },

        // ========================================================
        // POSITIVO TABLETS
        // ========================================================

        "Positivo": {
            "Vision Tab 7": {
                "vision7_tela": { "nome": "Troca de Tela", "sMax": 200, "sMin": 120 },
                "vision7_bateria": { "nome": "Troca de Bateria", "sMax": 150, "sMin": 90 },
                "vision7_tampa": { nome: "Troca de Tampa Traseira / Carcaça", "sMax": 160, "sMin": 90 },
                "vision7_conector": { "nome": "Troca de Conector de Carga", "sMax": 160, "sMin": 100 },
                "vision7_camera": { "nome": "Reparo de Câmera/Placa", "sMax": 250, "sMin": 150 }
            },
            "Vision Tab 10": {
                "vision10_tela": { "nome": "Troca de Tela", "sMax": 320, "sMin": 220 },
                "vision10_bateria": { "nome": "Troca de Bateria", "sMax": 220, "sMin": 140 },
                "vision10_tampa": { nome: "Troca de Tampa Traseira / Carcaça", "sMax": 230, "sMin": 150 },
                "vision10_conector": { "nome": "Troca de Conector de Carga", "sMax": 180, "sMin": 110 },
                "vision10_camera": { "nome": "Reparo de Câmera/Placa", "sMax": 350, "sMin": 220 }
            },
            "Vision Tab 11": {
                "vision11_tela": { "nome": "Troca de Tela", "sMax": 380, "sMin": 260 },
                "vision11_bateria": { "nome": "Troca de Bateria", "sMax": 250, "sMin": 160 },
                "vision11_tampa": { nome: "Troca de Tampa Traseira / Carcaça", "sMax": 270, "sMin": 180 },
                "vision11_conector": { "nome": "Troca de Conector de Carga", "sMax": 200, "sMin": 120 },
                "vision11_camera": { "nome": "Reparo de Câmera/Placa", "sMax": 400, "sMin": 250 }
            },
            "Twist Tab": {
                "twist_tela": { "nome": "Troca de Tela", "sMax": 180, "sMin": 100 },
                "twist_bateria": { "nome": "Troca de Bateria", "sMax": 140, "sMin": 80 },
                "twist_tampa": { nome: "Troca de Tampa Traseira / Carcaça", "sMax": 130, "sMin": 70 },
                "twist_conector": { "nome": "Troca de Conector de Carga", "sMax": 150, "sMin": 90 },
                "twist_camera": { "nome": "Reparo de Câmera/Placa", "sMax": 220, "sMin": 130 }
            },
            "Tab Q8": {
                "q8_tela": { "nome": "Troca de Tela", "sMax": 220, "sMin": 140 },
                "q8_bateria": { "nome": "Troca de Bateria", "sMax": 160, "sMin": 100 },
                "q8_tampa": { nome: "Troca de Tampa Traseira / Carcaça", "sMax": 170, "sMin": 100 },
                "q8_conector": { "nome": "Troca de Conector de Carga", "sMax": 170, "sMin": 100 },
                "q8_camera": { "nome": "Reparo de Câmera/Placa", "sMax": 280, "sMin": 170 }
            }
        }
    },

    // ============================================================
    // ============================================================
    // NOTEBOOKS
    // ============================================================
    // ============================================================

    "Notebook": {

        // ========================================================
        // DELL
        // ========================================================

        "Dell": {

            "Inspiron 15": {
                "dell_inspiron15_formatacao": { nome: "Formatação + Backup", sMax: 250, sMin: 150 },
                "dell_inspiron15_tela": { nome: "Troca de Tela 15.6\"", sMax: 220, sMin: 150 },
                "dell_inspiron15_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 90 },
                "dell_inspiron15_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 180, sMin: 100 },
                "dell_inspiron15_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 220, sMin: 150 }
            },

            "Inspiron 14": {
                "dell_inspiron14_formatacao": { nome: "Formatação + Backup", sMax: 250, sMin: 150 },
                "dell_inspiron14_tela": { nome: "Troca de Tela 14\"", sMax: 220, sMin: 150 },
                "dell_inspiron14_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 100 },
                "dell_inspiron14_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 180, sMin: 100 },
                "dell_inspiron14_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 230, sMin: 150 }
            },

            "Vostro 15": {
                "dell_vostro15_formatacao": { nome: "Formatação + Backup", sMax: 270, sMin: 170 },
                "dell_vostro15_tela": { nome: "Troca de Tela 15.6\"", sMax: 240, sMin: 160 },
                "dell_vostro15_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 100 },
                "dell_vostro15_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 190, sMin: 110 },
                "dell_vostro15_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 240, sMin: 160 }
            },

            "Latitude 14": {
                "dell_latitude14_formatacao": { nome: "Formatação + Backup", sMax: 280, sMin: 180 },
                "dell_latitude14_tela": { nome: "Troca de Tela 14\"", sMax: 250, sMin: 170 },
                "dell_latitude14_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 110 },
                "dell_latitude14_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 200, sMin: 120 },
                "dell_latitude14_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 250, sMin: 170 }
            },

            "Latitude 15": {
                "dell_latitude15_formatacao": { nome: "Formatação + Backup", sMax: 280, sMin: 180 },
                "dell_latitude15_tela": { nome: "Troca de Tela 15.6\"", sMax: 250, sMin: 170 },
                "dell_latitude15_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 110 },
                "dell_latitude15_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 200, sMin: 120 },
                "dell_latitude15_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 250, sMin: 170 }
            },

            "XPS 13": {
                "dell_xps13_formatacao": { nome: "Formatação + Backup", sMax: 320, sMin: 220 },
                "dell_xps13_tela": { nome: "Troca de Tela 13.3\"", sMax: 350, sMin: 230 },
                "dell_xps13_bateria": { nome: "Troca de Bateria", sMax: 230, sMin: 150 },
                "dell_xps13_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 250, sMin: 160 },
                "dell_xps13_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 300, sMin: 200 }
            },

            "XPS 15": {
                "dell_xps15_formatacao": { nome: "Formatação + Backup", sMax: 350, sMin: 230 },
                "dell_xps15_tela": { nome: "Troca de Tela 15.6\"", sMax: 400, sMin: 280 },
                "dell_xps15_bateria": { nome: "Troca de Bateria", sMax: 250, sMin: 160 },
                "dell_xps15_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 270, sMin: 180 },
                "dell_xps15_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 350, sMin: 230 }
            }
        },

        // ========================================================
        // LENOVO
        // ========================================================

        "Lenovo": {

            "IdeaPad 3": {
                "lenovo_ideapad3_formatacao": { nome: "Formatação + Backup", sMax: 250, sMin: 150 },
                "lenovo_ideapad3_tela": { nome: "Troca de Tela", sMax: 220, sMin: 150 },
                "lenovo_ideapad3_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 90 },
                "lenovo_ideapad3_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 180, sMin: 100 },
                "lenovo_ideapad3_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 220, sMin: 150 }
            },

            "IdeaPad 5": {
                "lenovo_ideapad5_formatacao": { nome: "Formatação + Backup", sMax: 270, sMin: 170 },
                "lenovo_ideapad5_tela": { nome: "Troca de Tela", sMax: 240, sMin: 160 },
                "lenovo_ideapad5_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 100 },
                "lenovo_ideapad5_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 200, sMin: 120 },
                "lenovo_ideapad5_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 240, sMin: 160 }
            },

            "ThinkPad E14": {
                "lenovo_thinkpade14_formatacao": { nome: "Formatação + Backup", sMax: 280, sMin: 180 },
                "lenovo_thinkpade14_tela": { nome: "Troca de Tela 14\"", sMax: 250, sMin: 170 },
                "lenovo_thinkpade14_bateria": { nome: "Troca de Bateria", sMax: 180, sMin: 110 },
                "lenovo_thinkpade14_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 200, sMin: 120 },
                "lenovo_thinkpade14_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 250, sMin: 170 }
            },

            "ThinkPad T14": {
                "lenovo_thinkpadt14_formatacao": { nome: "Formatação + Backup", sMax: 300, sMin: 200 },
                "lenovo_thinkpadt14_tela": { nome: "Troca de Tela 14\"", sMax: 280, sMin: 190 },
                "lenovo_thinkpadt14_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 130 },
                "lenovo_thinkpadt14_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 220, sMin: 140 },
                "lenovo_thinkpadt14_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 280, sMin: 190 }
            }
        },

        // ========================================================
        // ACER
        // ========================================================

        "Acer": {

            "Aspire 3": {
                "acer_aspire3_formatacao": { nome: "Formatação + Backup", sMax: 250, sMin: 150 },
                "acer_aspire3_tela": { nome: "Troca de Tela", sMax: 220, sMin: 150 },
                "acer_aspire3_bateria": { nome: "Troca de Bateria", sMax: 150, sMin: 90 },
                "acer_aspire3_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 180, sMin: 100 },
                "acer_aspire3_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 220, sMin: 150 }
            },

            "Aspire 5": {
                "acer_aspire5_formatacao": { nome: "Formatação + Backup", sMax: 270, sMin: 170 },
                "acer_aspire5_tela": { nome: "Troca de Tela", sMax: 240, sMin: 160 },
                "acer_aspire5_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 100 },
                "acer_aspire5_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 190, sMin: 110 },
                "acer_aspire5_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 240, sMin: 160 }
            },

            "Nitro 5": {
                "acer_nitro5_formatacao": { nome: "Formatação + Backup", sMax: 320, sMin: 220 },
                "acer_nitro5_tela": { nome: "Troca de Tela Gamer", sMax: 300, sMin: 200 },
                "acer_nitro5_bateria": { nome: "Troca de Bateria", sMax: 200, sMin: 130 },
                "acer_nitro5_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 230, sMin: 150 },
                "acer_nitro5_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 300, sMin: 200 }
            }
        },

        // ========================================================
        // ASUS
        // ========================================================

        "Asus": {

            "Vivobook 15": {
                "asus_vivobook15_formatacao": { nome: "Formatação + Backup", sMax: 270, sMin: 170 },
                "asus_vivobook15_tela": { nome: "Troca de Tela 15.6\"", sMax: 230, sMin: 150 },
                "asus_vivobook15_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 100 },
                "asus_vivobook15_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 190, sMin: 110 },
                "asus_vivobook15_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 240, sMin: 160 }
            },

            "Vivobook 14": {
                "asus_vivobook14_formatacao": { nome: "Formatação + Backup", sMax: 270, sMin: 170 },
                "asus_vivobook14_tela": { nome: "Troca de Tela 14\"", sMax: 230, sMin: 150 },
                "asus_vivobook14_bateria": { nome: "Troca de Bateria", sMax: 170, sMin: 100 },
                "asus_vivobook14_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 190, sMin: 110 },
                "asus_vivobook14_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 240, sMin: 160 }
            },

            "Zenbook 14": {
                "asus_zenbook14_formatacao": { nome: "Formatação + Backup", sMax: 320, sMin: 220 },
                "asus_zenbook14_tela": { nome: "Troca de Tela 14\"", sMax: 350, sMin: 230 },
                "asus_zenbook14_bateria": { nome: "Troca de Bateria", sMax: 220, sMin: 150 },
                "asus_zenbook14_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 250, sMin: 160 },
                "asus_zenbook14_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 300, sMin: 200 }
            },

            "TUF Gaming F15": {
                "asus_tuff15_formatacao": { nome: "Formatação + Backup", sMax: 320, sMin: 220 },
                "asus_tuff15_tela": { nome: "Troca de Tela Gamer", sMax: 300, sMin: 200 },
                "asus_tuff15_bateria": { nome: "Troca de Bateria", sMax: 210, sMin: 140 },
                "asus_tuff15_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 230, sMin: 150 },
                "asus_tuff15_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 320, sMin: 220 }
            }
        },

        // ========================================================
        // APPLE MACBOOK
        // ========================================================

        "Apple": {

            "MacBook Air 2017": {
                "macair2017_formatacao": { nome: "Formatação + Backup", sMax: 350, sMin: 230 },
                "macair2017_tela": { nome: "Troca de Tela", sMax: 350, sMin: 250 },
                "macair2017_bateria": { nome: "Troca de Bateria", sMax: 250, sMin: 170 },
                "macair2017_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 280, sMin: 180 },
                "macair2017_limpeza": { nome: "Limpeza Completa + Troca de Pasta Térmica", sMax: 300, sMin: 200 }
            },

            "MacBook Air M1": {
                "macairm1_formatacao": { nome: "Formatação + Backup", sMax: 400, sMin: 280 },
                "macairm1_tela": { nome: "Troca de Tela Retina", sMax: 450, sMin: 300 },
                "macairm1_bateria": { nome: "Troca de Bateria", sMax: 300, sMin: 210 },
                "macairm1_ssdram": { nome: "Upgrade de SSD/Memória - Avaliação", sMax: 300, sMin: 200 },
                "macairm1_limpeza": { nome: "Limpeza Completa + Manutenção Térmica", sMax: 350, sMin: 230 }
            },

            "MacBook Air M2": {
                "macairm2_formatacao": { nome: "Formatação + Backup", sMax: 420, sMin: 300 },
                "macairm2_tela": { nome: "Troca de Tela Retina", sMax: 500, sMin: 350 },
                "macairm2_bateria": { nome: "Troca de Bateria", sMax: 330, sMin: 230 },
                "macairm2_ssdram": { nome: "Upgrade de SSD/Memória - Avaliação", sMax: 320, sMin: 220 },
                "macairm2_limpeza": { nome: "Limpeza Completa + Manutenção Térmica", sMax: 380, sMin: 260 }
            },

            "MacBook Air M3": {
                "macairm3_formatacao": { nome: "Formatação + Backup", sMax: 450, sMin: 320 },
                "macairm3_tela": { nome: "Troca de Tela Retina", sMax: 520, sMin: 360 },
                "macairm3_bateria": { nome: "Troca de Bateria", sMax: 350, sMin: 240 },
                "macairm3_ssdram": { nome: "Upgrade de SSD/Memória - Avaliação", sMax: 350, sMin: 230 },
                "macairm3_limpeza": { nome: "Limpeza Completa + Manutenção Térmica", sMax: 400, sMin: 270 }
            },

            "MacBook Pro 13 2019": {
                "macpro132019_formatacao": { nome: "Formatação + Backup", sMax: 380, sMin: 260 },
                "macpro132019_tela": { nome: "Troca de Tela Retina", sMax: 450, sMin: 300 },
                "macpro132019_bateria": { nome: "Troca de Bateria", sMax: 300, sMin: 200 },
                "macpro132019_ssdram": { nome: "Troca/Upgrade de SSD ou Memória", sMax: 280, sMin: 180 }
            }
        }
    }
};