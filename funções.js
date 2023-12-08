//funcoes.js

let Rodada = true; //True (Player1), False (Player2)
let Dado;
let MatrizP1 = Array.from({ length: 3 }, () => Array(3).fill(0)); //Matriz 3x3 preenchida de zeros
let MatrizP2 = Array.from({ length: 3 }, () => Array(3).fill(0));

export function valorDado() //Gera valor entre 1 e 6 para o dado
{
    return Math.floor(Math.random() * 6) + 1;
}

export function RodadaDeQuem()
{
    return Rodada;
}

export function AlteraRodada() //Passa do Player1 para o Player2 e vice versa
{
    if( RodadaDeQuem())
    {
        Rodada = false;
    } else {
        Rodada = true;
    }
}

export function BotAleatorio() {
    return Math.floor(Math.random() * 3);
}

export function MP1PosVazia()
{
    if(MatrizP1[i][j] === 0)
    {
        return true;
    } else{
        return false;
    }
}

export function MP2PosVazia()
{
    if(MatrizP2[i][j] === 0)
    {
        return true;
    } else{
        return false;
    }
}

export function AtribuiMatrizP1(i , j, valor)
{
    MatrizP1[i][j] = valor;
    if (MatrizP1[i][j] !== 0 && MatrizP1[i][j] === MatrizP2[0][j])
    {
        MatrizP2[0][j] = 0;
    }
    if (MatrizP1[i][j] !== 0 && MatrizP1[i][j] === MatrizP2[1][j])
    {
        MatrizP2[1][j] = 0;
    }
    if (MatrizP1[i][j] !== 0 && MatrizP1[i][j] === MatrizP2[2][j])
    {
        MatrizP2[2][j] = 0;
    }
}

export function AtribuiMatrizP2(i , j, valor)
{
    MatrizP2[i][j] = valor;
    if (MatrizP2[i][j] !== 0 && MatrizP2[i][j] === MatrizP1[0][j])
    {
        MatrizP1[0][j] = 0;
    }
    if (MatrizP2[i][j] !== 0 && MatrizP2[i][j] === MatrizP1[1][j])
    {
        MatrizP1[1][j] = 0;
    }
    if (MatrizP2[i][j] !== 0 && MatrizP2[i][j] === MatrizP1[2][j])
    {
        MatrizP1[2][j] = 0;
    }
}