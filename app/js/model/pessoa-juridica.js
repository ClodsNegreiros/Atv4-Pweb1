class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + ' - Jurídica', idade, dataNascimento);
        this.cnpj = cnpj;
    }
    get _cnpj() {
        return this.cnpj;
    }
}
