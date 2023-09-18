class PessoaFisica extends Pessoa {
    
    private cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome + ' - Física', idade, dataNascimento);
        this.cpf = cpf;
    }

    get _cpf(): string {
        return this.cpf;
    }
}