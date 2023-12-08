//main.js

import { valorDado, RodadaDeQuem, AlteraRodada, MP1PosVazia, MP2PosVazia, BotAleatorio, SetDadoP1, GetDadoP1 } from "./funções.js";
import { GetDadoP1, SetDadoP1 } from "./funções.js";

let numSelec = null;
const MatP1 = document.querySelectorAll('button[id^=M1]');
const MatP2 = document.querySelectorAll('button[id^=M2]');

Player1();

function Player1() {
    if (RodadaDeQuem()) { //Se verdadeiro, player1 joga
        const dadoP1 = document.querySelector("#dadoP1");
        SetDadoP1();
        dadoP1.textContent = GetDadoP1();
        dadoP1.classList.add("numeros");
        dadoP1.addEventListener("click", SelecNum);
        SelecCelP1();
    }
}
function Player2() {
    if (!RodadaDeQuem()) { //Se Rodada for falso, Player2 joga
        const dadoP2 = document.querySelector("#dadoP2");
        let DadoP2 = valorDado();
        dadoP2.textContent = DadoP2;
        dadoP2.classList.add("numeros");
        SelecCelP2(DadoP2);
    }
}

function SelecNum() { //Só para adicionar estilo ao clicar no botão do dado
    numSelec = this;
    numSelec.classList.add("nselec");
}

function SelecCelP1() { //Faz o Player1 Poder escolher uma célula
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            MatP1[i * 3 + j].addEventListener("click", function () { //Aqui eu uso essa expressão para passar os valores de i e j de forma linear no vetor
                let celSelec = this;
                if (celSelec.textContent === '' && numSelec !== null) {
                    AtribuiMatrizP1(i, j, GetDadoP1());
                    numSelec.classList.remove("nselec");
                    numSelec = null;
                    for (let i = 0; i < 3; i += 1) {
                        for (let j = 0; j < 3; j += 1) {
                            if (MP2PosVazia(i, j)) {
                                MatP2[i * 3 + j].textContent = '';
                            }
                        }
                    }
                    celSelec.textContent = GetDadoP1();
                    AlteraRodada();
                    Player2();
                }
            });
        }
    }
}

function SelecCelP2(valor) { //Gera aleatoriamente uma posição para o Bot jogar sozinho
    let i = BotAleatorio();
    let j = BotAleatorio();
    while (!MP2PosVazia(i, j)) {
        i = BotAleatorio();
        j = BotAleatorio();
    }
    AtribuiMatrizP2(i, j, valor);
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            if (MP1PosVazia(i, j)) {
                MatP1[i * 3 + j].textContent = '';
            }
        }
    }
    MatP2[i * 3 + j].textContent = valor;
    AlteraRodada();
    Player1();
}
