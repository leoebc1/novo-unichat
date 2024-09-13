"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuInicial = menuInicial;
exports.menuCriarConta = menuCriarConta;
exports.mensagemContaCriada = mensagemContaCriada;
exports.congelaTela = congelaTela;
exports.menuLogin = menuLogin;
exports.mensagemNenhumaContaExistente = mensagemNenhumaContaExistente;
var Artes_1 = require("./Artes");
var ask = require("readline-sync");
var Conta_1 = require("./Conta");
function menuInicial() {
    console.clear();
    (0, Artes_1.logoArte)();
    console.log("--------------------------");
    console.log("|                        |");
    console.log("|   [1] - Criar conta    |");
    console.log("|   [2] - Login          |");
    console.log("|                        |");
    console.log("--------------------------");
    return ask.questionInt("Selecione uma opção: ");
}
function menuCriarConta() {
    console.clear();
    (0, Artes_1.criarContaArte)();
    var nomeUsuario = ask.question("Digite o nome de usuario: ");
    var senha = ask.question("Digite a senha: ");
    var bio = ask.question("Digite a bio do seu perfil: ");
    return new Conta_1.Conta(nomeUsuario, senha, bio);
}
function mensagemContaCriada(nome) {
    console.clear();
    (0, Artes_1.contaCriadaArte)();
    ask.question("\nSeja bem vindo, ".concat(nome, "!"));
    congelaTela();
}
function congelaTela() {
    ask.question("Tecle ENTER para continuar...");
}
function menuLogin(redeSocial) {
    console.clear();
    (0, Artes_1.loginArte)();
    var nomeUsuario = ask.question("Nome de usuário: ");
    var senha = ask.question("Senha: ");
    var contaLogada = redeSocial.login(nomeUsuario, senha);
    if (contaLogada) {
        return contaLogada;
    }
    else {
        console.clear();
        console.log("Nome de usuario e/ou senha incorretos.");
        congelaTela();
        menuLogin(redeSocial);
    }
}
function mensagemNenhumaContaExistente() {
    console.clear();
    console.log("Nenhuma conta cadastrada");
    congelaTela();
}
