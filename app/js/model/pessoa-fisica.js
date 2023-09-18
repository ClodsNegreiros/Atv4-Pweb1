class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome + ' - Física', idade, dataNascimento);
        this.cpf = cpf;
    }
    get _cpf() {
        return this.cpf;
    }
}
