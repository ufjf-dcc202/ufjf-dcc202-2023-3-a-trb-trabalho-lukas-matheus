//funcoes.js

let Rodada = true;
let Dado;


export function valorDado() 
{
    return Math.floor(Math.random() * 6) + 1;
}

export function RodadaDeQuem()
{
    return Rodada;
}

export function AlteraRodada()
{
    if( RodadaDeQuem())
    {
        Rodada = false;
    } else {
        Rodada = true;
    }
}