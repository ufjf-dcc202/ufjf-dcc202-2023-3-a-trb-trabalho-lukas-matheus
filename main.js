//main.js

import { valorDado, RodadaDeQuem, AlteraRodada } from "./funções.js";

let numSelec = null;

Player1();

function Player1()
{
    if(RodadaDeQuem()) // Se verdadeiro, Player 1 que joga;
    {   
        const dadoP1 = document.querySelector("#dadosP1");
        let DadoP1 = valorDado();
        dadoP1.textContent = DadoP1;
        dadoP1.classList.add("numeros");
        dadoP1.addEventListener("click", SelecNum);
        SelecCelP1();

    }
}

function Player2()
{
    if(!RodadaDeQuem()) //Se Falso, Player 2 que Joga
    {   
        const dadoP2 = document.querySelector("#dadosP2");
        let DadoP2 = valorDado();
        dadoP2.textContent = DadoP2;
        dadoP2.classList.add("numeros");
    }
}

function SelecNum()
{
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