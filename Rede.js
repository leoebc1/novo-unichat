"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rede = void 0;
var Rede = /** @class */ (function () {
    function Rede() {
        this.contas = []; // inicia a lista de contas vazia
    }
    Rede.prototype.getContas = function () {
        return this.contas;
    };
    Rede.prototype.criarConta = function (conta) {
        this.contas.push(conta);
    };
    Rede.prototype.retornaNovoId = function () {
        return this.contas.length + 1;
    };
    Rede.prototype.login = function (nomeUsuario, senha) {
        var contaLogada = null;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.getNomeUsuario() === nomeUsuario && conta.getSenha() === senha) {
                contaLogada = conta;
            }
        }
        return contaLogada;
    };
    return Rede;
}());
exports.Rede = Rede;
