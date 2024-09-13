"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rede_1 = require("./Rede");
var Menus_1 = require("./Menus");
function main() {
    var redeSocial = new Rede_1.Rede;
    var sustentaMenuInicial = true;
    while (sustentaMenuInicial) {
        var opcaoMenuInicial = (0, Menus_1.menuInicial)();
        switch (opcaoMenuInicial) {
            //criar nova conta
            case 1:
                var novaConta = (0, Menus_1.menuCriarConta)();
                novaConta.setId(redeSocial.retornaNovoId());
                redeSocial.criarConta(novaConta);
                (0, Menus_1.mensagemContaCriada)(novaConta.getNomeUsuario());
                break;
            //login
            case 2:
                var contaLogada = void 0;
                if (redeSocial.getContas().length) {
                    contaLogada = (0, Menus_1.menuLogin)(redeSocial);
                    console.log(contaLogada);
                }
                else {
                    (0, Menus_1.mensagemNenhumaContaExistente)();
                }
                break;
            default: //opção invalida
                break;
        }
    }
}
main();
