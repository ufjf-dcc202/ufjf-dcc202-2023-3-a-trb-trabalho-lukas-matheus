//main.js

import { valorDado, RodadaDeQuem, AlteraRodada, MP1PosVazia, MP2PosVazia, BotAleatorio} from "./funções.js";
import { GetDadoP1, SetDadoP1, SColuna1P1, SColuna2P1, SColuna3P1, SColuna1P2, SColuna2P2, SColuna3P2 } from "./funções.js";

let numSelec = null;
const MatP1 = document.querySelectorAll('button[id^=M1]');
const MatP2 = document.querySelectorAll('button[id^=M2]');
const V1 = document.querySelector("#pts1");
const V2 = document.querySelector("#pts2");

Somatorios();
Player1();

function Ganhador() { //Função para verificar quem ganhou e resetar o jogo;
    let restart = document.querySelector("#Reiniciar");
    if (GameOver()) {
        restart.addEventListener("click", function () {
            Reinicia();
            for (let i = 0; i < 3; i += 1) {
                for (let j = 0; j < 3; j += 1) {
                    MatP1[i * 3 + j].textContent = '';
                    MatP2[i * 3 + j].textContent = '';
                }
            }
            restart.removeEventListener("click", this);
            Somatorios();
            Player1();
        })
    }
}

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
    Somatorios();
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
                    Somatorios();
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
    Somatorios();
    AlteraRodada();
    Player1();
}

function Somatorios() // Soma os Pontos
{
    let C1P1 = document.querySelector("#P1L1");
    let C1P2 = document.querySelector("#P1L2");
    let C1P3 = document.querySelector("#P1L3");

    let C2P1 = document.querySelector("#P2L1");
    let C2P2 = document.querySelector("#P2L2");
    let C2P3 = document.querySelector("#P2L3");

    C1P1.textContent = SColuna1P1();
    C1P2.textContent = SColuna2P1();
    C1P3.textContent = SColuna3P1();

    C2P1.textContent = SColuna1P2();
    C2P2.textContent = SColuna2P2();
    C2P3.textContent = SColuna3P2();

    let SomaP1 = SColuna1P1() + SColuna2P1() + SColuna3P1();
    let SomaP2 = SColuna1P2() + SColuna2P2() + SColuna3P2();

    V1.textContent = SomaP1;
    V2.textContent = SomaP2;    
}