export class Conta {
    private id: number // ID único para cada conta
    private nomeUsuario: string // nome de usuário
    private senha: string // senha para login
    private informacaoAdicional: string // informações adicionais sobre o usuário
    private seguidores: number[] // IDs das contas que seguem o usuário
    private seguindo: number[] // IDs das contas que o usuário atual segue
    //private posts: Post[] // lista de posts feitos pelo usuário
    private mensagensDiretas: [string, number, boolean][] // mensagens diretas recebidas, armazenando conteúdo e ID da conta remetente
    //private notificacoes: Array<Notificacao> // notificações recebidas, com conteúdo e ID da conta que gerou a notificação

    constructor(nomeUsuario: string, senha: string, informacaoAdicional: string) {
        this.nomeUsuario = nomeUsuario // define o nome de usuário
        this.senha = senha // define a senha do usuário
        this.informacaoAdicional = informacaoAdicional // define informações adicionais
        this.seguidores = [] // inicia o array de seguidores vazio
        this.seguindo = [] // inicia o array de contas seguidas vazio
        //this.posts = [] // inicia o array de posts vazio
        this.mensagensDiretas = [] // inicia o array de mensagens diretas vazio
       // this.notificacoes = [] // inicia o array de notificações vazio
    }

    public setId(id: number): void{
        this.id = id
    }

    getNomeUsuario(): string{
        return this.nomeUsuario
    }

    getSenha(): string{
        return this.senha
    }
}