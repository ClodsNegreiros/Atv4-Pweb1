class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
    }
    get _nome() {
        return this.nome;
    }
    set _nome(novoNome) {
        this.nome = novoNome;
    }
    get _idade() {
        return this.idade;
    }
    set _idade(novaIdade) {
        this.idade = novaIdade;
    }
    get _dataNascimento() {
        return this.dataNascimento;
    }
    set _dataNascimento(novaDataNascimento) {
        this.dataNascimento = novaDataNascimento;
    }
}
