import { logoArte, criarContaArte, contaCriadaArte, loginArte, menuRedeSocialArte } from "./Artes"
const ask = require("readline-sync")
import { Conta } from "./Conta"
import { Rede } from "./Rede"


export function menuInicial(): number {
        console.clear()
        logoArte()
        console.log("--------------------------")
        console.log("|                        |")
        console.log("|   [1] - Criar conta    |")
        console.log("|   [2] - Login          |")
        console.log("|                        |")
        console.log("--------------------------")
        return ask.questionInt("Selecione uma opcao: ")
}

export function menuCriarConta(): Conta {
    console.clear()
    criarContaArte()
    let nomeUsuario = ask.question("Digite o nome de usuario: ")
    let senha = ask.question("Digite a senha: ")
    let bio = ask.question("Digite a bio do seu perfil: ")
    return new Conta(nomeUsuario, senha, bio)    
}

export function mensagemContaCriada(nome: string): void {
    console.clear()
    contaCriadaArte()
    ask.question(`\nSeja bem vindo, ${nome}!`)
    congelaTela()
}

export function congelaTela(): void {
    ask.question("Tecle ENTER para continuar...")
}

export function menuLogin(redeSocial: Rede): Conta {
    console.clear()
    loginArte()
    let nomeUsuario = ask.question("Nome de usuário: ")
    let senha = ask.question("Senha: ")
    let contaLogada = redeSocial.login(nomeUsuario, senha)
    if(!(contaLogada instanceof(Conta))){
        console.clear()
        console.log("Nome de usuario e/ou senha incorretos.")
        congelaTela()
        menuLogin(redeSocial)
    } 
    return contaLogada
}

export function mensagemNenhumaContaExistente(){
    console.clear()
    console.log("Nenhuma conta cadastrada")
    congelaTela()
}

export function menuRedeSocial(contaLogada: Conta | void, redeSocial: Rede){
    let sustentaMenuRedeSocial: boolean = true
    while(sustentaMenuRedeSocial){
        console.clear()
        menuRedeSocialArte()
        console.log(`
            Olá, ${contaLogada.getNomeUsuario()}
        `)
    }

}