"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    //private notificacoes: Array<Notificacao> // notificações recebidas, com conteúdo e ID da conta que gerou a notificação
    function Conta(nomeUsuario, senha, informacaoAdicional) {
        this.nomeUsuario = nomeUsuario; // define o nome de usuário
        this.senha = senha; // define a senha do usuário
        this.informacaoAdicional = informacaoAdicional; // define informações adicionais
        this.seguidores = []; // inicia o array de seguidores vazio
        this.seguindo = []; // inicia o array de contas seguidas vazio
        //this.posts = [] // inicia o array de posts vazio
        this.mensagensDiretas = []; // inicia o array de mensagens diretas vazio
        // this.notificacoes = [] // inicia o array de notificações vazio
    }
    Conta.prototype.setId = function (id) {
        this.id = id;
    };
    Conta.prototype.getNomeUsuario = function () {
        return this.nomeUsuario;
    };
    Conta.prototype.getSenha = function () {
        return this.senha;
    };
    return Conta;
}());
exports.Conta = Conta;
