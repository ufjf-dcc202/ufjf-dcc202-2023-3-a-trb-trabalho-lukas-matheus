//main.js

import { MP1PosVazia, MP2PosVazia, Reinicia, GameOver, AtribuiMatrizP1, SColuna3P2, SColuna2P2, SColuna1P2, SColuna3P1, SColuna2P1, SColuna1P1, valorDado, RodadaDeQuem, AlteraRodada, BotAleatorio, AtribuiMatrizP2, GetDadoP1, SetDadoP1 } from "./funções.js";
//Estava tendo problemas com a importação


let numSelec = null; //Variável para selecionar o botão
const MatP1 = document.querySelectorAll('#M1'); //Selecionar todos os botões cujo id começa com "M1" e "M2"
const MatP2 = document.querySelectorAll('#M2');
let contP1 = 0; //Contar o placar do P1
let contP2 = 0; //Contar o placar do P2
let emp = 0; //Contar empates


Somatorios();
Player1();

function Ganhador() { //Função para verificar quem ganhou e resetar o jogo;

        const restart = document.querySelector("#Reiniciar");
        const apagatudo = function () {
            Reinicia();
            for (let i = 0; i < 3; i += 1) {
                for (let j = 0; j < 3; j += 1) {
                    MatP1[i * 3 + j].textContent = '';
                    MatP2[i * 3 + j].textContent = '';
                }
            }
            Somatorios();
            Player1();
            restart.removeEventListener("click", apagatudo);
        }
        restart.addEventListener("click", apagatudo);

}

function Player1() {
    if (RodadaDeQuem()) { //Se verdadeiro, player1 joga
        const dadoP1 = document.querySelector("#dadoP1");
        SetDadoP1();
        dadoP1.textContent = GetDadoP1();
        dadoP1.classList.add("numeros");
        if (!GameOver()) {
            dadoP1.addEventListener("click", SelecNum);
            SelecCelP1();
        }
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
    numSelec.classList.add("nselec")
}

function SelecCelP1() { //Faz o Player1 Poder escolher uma célula   
    Somatorios();
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            MatP1[i * 3 + j].addEventListener("click", function () {
                if (!GameOver()) {
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
                        if (!GameOver()) {
                            AlteraRodada();
                            Player2();
                        }
                        else {
                            Ganhador();
                        }
                        

                    }
                }

            }); //Aqui eu uso essa expressão para passar os valores de i e j de forma linear no vetor
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
    if (!GameOver()) {
        AlteraRodada();
        Player1();
    }
    else {
        Ganhador();
    }



}

function Somatorios() // Soma os Pontos
{
    const Placar1 = document.querySelector("#Placar1");
    const Placar2 = document.querySelector("#Placar2");
    const Empates = document.querySelector("#Empates");

    const V1 = document.querySelector("#pts1");
    const V2 = document.querySelector("#pts2");

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

    if (GameOver()) { //
        if (SomaP1 > SomaP2) {
            contP1 += 1;
        }
        else if (SomaP2 > SomaP1) {
            contP2 += 1;
        }
        else {
            emp += 1;
        }
    }

    Placar1.textContent = contP1;
    Placar2.textContent = contP2;
    Empates.textContent = emp;

    V1.textContent = SomaP1;
    V2.textContent = SomaP2;
}
