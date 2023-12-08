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
        dadoP1.addEventListener("click", );
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
        dadoP2.addEventListener("click", );
    }
}