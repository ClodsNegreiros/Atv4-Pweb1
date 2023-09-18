let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const pessoa1 = new Pessoa('Clodoaldo', 19, new Date('03/05/2004'));
const pessoa2 = new PessoaJuridica('Nathalia', 22, new Date('21/05/2001'), '73.958.984/0001-91');
const pessoa3 = new PessoaFisica('Aisha', 19, new Date('03/05/2004'), '849.866.080-70');
const pessoa4 = new PessoaFisica('Gustavo', 22, new Date('11/08/2001'), '149.456.080-70');

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

console.log("pessoa:");
console.log("nome:", pessoa1._nome);
console.log("idade:", pessoa1._idade);
console.log("data de nascimento:", pessoa1._dataNascimento);

console.log("pessoa jurídica:");
console.log("nome:", pessoa2._nome);
console.log("idade:", pessoa2._idade);
console.log("data de nascimento:", pessoa2._dataNascimento);
console.log("cnpj:", pessoa2._cnpj);

console.log("pessoa física:");
console.log("nome:", pessoa3._nome);
console.log("idade:", pessoa3._idade);
console.log("data de nascimento:", pessoa3._dataNascimento);
console.log("cpf:", pessoa3._cpf);

console.log("pessoa física:");
console.log("nome:", pessoa4._nome);
console.log("idade:", pessoa4._idade);
console.log("data de nascimento:", pessoa4._dataNascimento);
console.log("cpf:", pessoa4._cpf);