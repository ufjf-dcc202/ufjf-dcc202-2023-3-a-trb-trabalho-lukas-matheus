//funcoes.js

let Rodada = true; //True (Player1), False (Player2)
let Dado;
let MatrizP1 = Array.from({ length: 3 }, () => Array(3).fill(0)); //Matriz 3x3 preenchida de zeros
let MatrizP2 = Array.from({ length: 3 }, () => Array(3).fill(0));

export function valorDado() { // Gera um valor de 1 a 6 para o dado
    return Math.floor(Math.random() * 6) + 1;
}

export function SetDadoP1() //Altera o valor de dado
{
    Dado = valorDado();
}

export function GetDadoP1() // Pega o valor de dado para main
{
    return Dado;
}

export function RodadaDeQuem() { //Define de quem é a rodada
    return Rodada;
}

export function AlteraRodada() { // Altera a rodada entre o Player1 e o Player2
    if (RodadaDeQuem()) {
        Rodada = false;
    } else {
        Rodada = true;
    }
}

export function BotAleatorio() { //"Aleatoriza" os valores de i e j para o player2 de 0 a 2
    return Math.floor(Math.random() * 3);
}

export function MP1PosVazia(i, j) { //Indica se a posição i, j da matriz é nula ou não
    if (MatrizP1[i][j] === 0) {
        return true;
    } else {
        return false;
    }
}

export function MP2PosVazia(i, j) {
    if (MatrizP2[i][j] === 0) {
        return true;
    } else {
        return false;
    }
}

export function AtribuiMatrizP1(i, j, valor) { //Atribui valor à matriz e já testa para ver se há correspondente na outra matriz para anular no somatório final
    MatrizP1[i][j] = valor;
    if (MatrizP1[i][j] !== 0 && MatrizP1[i][j] === MatrizP2[0][j]) {
        MatrizP2[0][j] = 0;
    }
    if (MatrizP1[i][j] !== 0 && MatrizP1[i][j] === MatrizP2[1][j]) {
        MatrizP2[1][j] = 0;
    }
    if (MatrizP1[i][j] !== 0 && MatrizP1[i][j] === MatrizP2[2][j]) {
        MatrizP2[2][j] = 0;
    }
}

export function AtribuiMatrizP2(i, j, valor) {
    MatrizP2[i][j] = valor;
    if (MatrizP2[i][j] !== 0 && MatrizP2[i][j] === MatrizP1[0][j]) {
        MatrizP1[0][j] = 0;
    }
    if (MatrizP2[i][j] !== 0 && MatrizP2[i][j] === MatrizP1[1][j]) {
        MatrizP1[1][j] = 0;
    }
    if (MatrizP2[i][j] !== 0 && MatrizP2[i][j] === MatrizP1[2][j]) {
        MatrizP1[2][j] = 0;
    }
}

export function SColuna1P1() { //Todas abaixo são para o somatório de pontos
    let Player1C1 = 0;

    if (MatrizP1[0][2] === MatrizP1[1][2] && MatrizP1[0][2] === MatrizP1[2][2]) {
        Player1C1 = MatrizP1[0][2] * 9;
    }
    else if (MatrizP1[0][2] === MatrizP1[1][2] && MatrizP1[0][2] !== MatrizP1[2][2]) {
        Player1C1 = MatrizP1[0][2] * 3 + MatrizP1[2][2];
    }
    else if (MatrizP1[0][2] !== MatrizP1[1][2] && MatrizP1[0][2] === MatrizP1[2][2]) {
        Player1C1 = MatrizP1[0][2] * 3 + MatrizP1[1][2];
    }
    else if (MatrizP1[1][2] === MatrizP1[2][2]) {
        Player1C1 = MatrizP1[1][2] * 3 + MatrizP1[0][2];
    }
    else {
        for (let i = 0; i < 3; i += 1) {
            Player1C1 += MatrizP1[i][2];
        }
    }

    return Player1C1;
}

export function SColuna2P1() {
    let Player1C2 = 0;
    if (MatrizP1[0][1] === MatrizP1[1][1] && MatrizP1[0][1] === MatrizP1[2][1]) {
        Player1C2 = MatrizP1[0][1] * 9;
    }
    else if (MatrizP1[0][1] === MatrizP1[1][1] && MatrizP1[0][1] !== MatrizP1[2][1]) {
        Player1C2 = MatrizP1[0][1] * 3 + MatrizP1[2][1];
    }
    else if (MatrizP1[0][1] !== MatrizP1[1][1] && MatrizP1[0][1] === MatrizP1[2][1]) {
        Player1C2 = MatrizP1[0][1] * 3 + MatrizP1[1][1];
    }
    else if (MatrizP1[1][1] === MatrizP1[2][1]) {
        Player1C2 = MatrizP1[1][1] * 3 + MatrizP1[0][1];
    }
    else {
        for (let i = 0; i < 3; i += 1) {
            Player1C2 += MatrizP1[i][1];
        }
    }
    return Player1C2;

}

export function SColuna3P1() {
    let Player1C3 = 0;

    if (MatrizP1[0][0] === MatrizP1[1][0] && MatrizP1[0][0] === MatrizP1[2][0]) {
        Player1C3 = MatrizP1[0][0] * 9;
    }
    else if (MatrizP1[0][0] === MatrizP1[1][0] && MatrizP1[0][0] !== MatrizP1[2][0]) {
        Player1C3 = MatrizP1[0][0] * 3 + MatrizP1[2][0];
    }
    else if (MatrizP1[0][0] !== MatrizP1[1][0] && MatrizP1[0][0] === MatrizP1[2][0]) {
        Player1C3 = MatrizP1[0][0] * 3 + MatrizP1[1][0];
    }
    else if (MatrizP1[1][0] === MatrizP1[2][0]) {
        Player1C3 = MatrizP1[1][0] * 3 + MatrizP1[0][0];
    }
    else {
        for (let i = 0; i < 3; i += 1) {
            Player1C3 += MatrizP1[i][0];
        }
    }
    return Player1C3;
}

export function SColuna1P2() {
    let Player2C1 = 0;
    if (MatrizP2[0][2] === MatrizP2[1][2] && MatrizP2[0][2] === MatrizP2[2][2]) {
        Player2C1 = MatrizP2[0][2] * 9;
    }
    else if (MatrizP2[0][2] === MatrizP2[1][2] && MatrizP2[0][2] !== MatrizP2[2][2]) {
        Player2C1 = MatrizP2[0][2] * 3 + MatrizP2[2][2];
    }
    else if (MatrizP2[0][2] !== MatrizP2[1][2] && MatrizP2[0][2] === MatrizP2[2][2]) {
        Player2C1 = MatrizP2[0][2] * 3 + MatrizP2[1][2];
    }
    else if (MatrizP2[1][2] === MatrizP2[2][2]) {
        Player2C1 = MatrizP2[1][2] * 3 + MatrizP2[0][2];
    }
    else {
        for (let i = 0; i < 3; i += 1) {
            Player2C1 += MatrizP2[i][2];
        }
    }
    return Player2C1;
}

export function SColuna2P2() {
    let Player2C2 = 0;
    if (MatrizP2[0][1] === MatrizP2[1][1] && MatrizP2[0][1] === MatrizP2[2][1]) {
        Player2C2 = MatrizP2[0][1] * 9;
    }
    else if (MatrizP2[0][1] === MatrizP2[1][1] && MatrizP2[0][1] !== MatrizP2[2][1]) {
        Player2C2 = MatrizP2[0][1] * 3 + MatrizP2[2][1];
    }
    else if (MatrizP2[0][1] !== MatrizP2[1][1] && MatrizP2[0][1] === MatrizP2[2][1]) {
        Player2C2 = MatrizP2[0][1] * 3 + MatrizP2[1][1];
    }
    else if (MatrizP2[1][1] === MatrizP2[2][1]) {
        Player2C2 = MatrizP2[1][1] * 3 + MatrizP2[0][1];
    }
    else {
        for (let i = 0; i < 3; i += 1) {
            Player2C2 += MatrizP2[i][1];
        }
    }
    return Player2C2;
}

export function SColuna3P2() {
    let Player2C3 = 0;
    if (MatrizP2[0][0] === MatrizP2[1][0] && MatrizP2[0][0] === MatrizP2[2][0]) {
        Player2C3 = MatrizP2[0][0] * 9;
    }
    else if (MatrizP2[0][0] === MatrizP2[1][0] && MatrizP2[0][0] !== MatrizP2[2][0]) {
        Player2C3 = MatrizP2[0][0] * 3 + MatrizP2[2][0];
    }
    else if (MatrizP2[0][0] !== MatrizP2[1][0] && MatrizP2[0][0] === MatrizP2[2][0]) {
        Player2C3 = MatrizP2[0][0] * 3 + MatrizP2[1][0];
    }
    else if (MatrizP2[1][0] === MatrizP2[2][0]) {
        Player2C3 = MatrizP2[1][0] * 3 + MatrizP2[0][0];
    }
    else {
        for (let i = 0; i < 3; i += 1) {
            Player2C3 += MatrizP2[i][0];
        }
    }
    return Player2C3;
}