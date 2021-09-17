/* 
5) Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
venda. Crie os getters e setters e as validações. Crie um método desconto para
calcular 8% do salário.
Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
região for sul a comissão será de 10% sobre o valor da venda. Se a região for
sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a 
comissão será de 14% sobre o valor da venda, se a região for norte a
comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
será o salario mais a comissão.
Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
total de funcionários, crie os getters, setters e as suas validações. Crie um método
para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.
*/

class Vendedores {
    constructor(
       private _nome: string,
       private _salario: number,
       private _valorVenda: number,
    ){ }

    /* nome */
    get nome() {
        return this._nome
    }

    set nome(nome: string) {
        if(!nome) {
            throw new Error('Nome inválido !')
        }
        this._nome = nome
    }

    /* salario */
    get salario() {
        return this._salario
    }

    set salario(salario: number) {
        if(salario < 0) {
            throw new Error('Salário invalido !')
        }
        this._salario= salario
    }

    /* valor renda */
    get valorVenda() {
        return this._valorVenda
    }

    set valorVenda(valorVenda: number) {
        if (valorVenda < 0) {
            throw new Error('Valor inválido !')
        }
        this._valorVenda = valorVenda
    }

    metodoDesconto(): number{
        return this.salario * 0.08
    }
}
/* Vendedores */
/* const vendedores = new Vendedores('Raquel', 5000, 150)
console.table(vendedores);

try {
    vendedores.nome = 'Raquel Izidorio'
    vendedores.salario = 8000
    vendedores.valorVenda = 350
    console.table(vendedores)
    
} catch (err) {
   // console.log(err.message);
} 
console.log('Valor do desconto: ' + vendedores.metodoDesconto());  */



class VendedorPessoaFisica extends Vendedores {
    static REGIAO = ['Sul', 'Sudeste', 'Centro-Oeste', 'Norte', 'Nordeste']
    private _regiao: string 

    constructor(nome: string, salario: number, valorVenda: number, regiao:string) {
        super(nome, salario, valorVenda)
        this._regiao = regiao
    } 

    /* regiao */
    get regiao(): string {
        return this._regiao
    }

    set regiao(regiao: string) {
        if (!VendedorPessoaFisica.REGIAO.includes(regiao)) {
            throw new Error('Região Inválida!!')
        }

        this._regiao = regiao
    }

    metodoComissao(): number {
        if(this.regiao == 'Sul') {
            return this.valorVenda * 0.10
        } else if (this.regiao == 'Sudeste') {
            return this.valorVenda * 0.12
        } else if (this.regiao == 'Centro-Oeste') {
            return this.valorVenda * 0.14
        } else if (this.regiao == 'Norte') {
            return this.valorVenda * 0.15
        } else if (this.regiao == 'Nordeste') {
            return this.valorVenda * 0.17
        }
        return 0
    }

    salarioTotal() {
        return this.salario + this.metodoComissao()
    }

}

/* Vendedor Pessoa Fisica */
/* const vendedorPessoaFisica = new VendedorPessoaFisica('Stephany', 1500, 150, 'Sudeste')
console.table(vendedorPessoaFisica)

try {
    vendedorPessoaFisica.nome = 'Stephany Rodrigues',
    vendedorPessoaFisica.salario = 4500
    vendedorPessoaFisica.valorVenda = 900
    vendedorPessoaFisica.regiao = 'Sul'
    console.table(vendedorPessoaFisica)
} catch (err:any) {
   console.log(err.message);
} 
console.log('Comissão Pessoa Física : ' + vendedorPessoaFisica.metodoComissao())
console.log('Salário Total Pessoa Física: ' + vendedorPessoaFisica.salarioTotal()); */ 



class VendedorPessoaJuridica extends Vendedores{
    private _nomeEmpresa: string
    private _totalFuncionarios: number 

    constructor(nome: string, salario: number, valorVenda: number, nomeEmpresa:string, totalFuncionarios: number) {
        super(nome, salario, valorVenda)
        this._nomeEmpresa = nomeEmpresa
        this._totalFuncionarios = totalFuncionarios
    } 

    /* nome da empresa */
    get nomeEmpresa() {
        return this._nomeEmpresa
    }

    set nomeEmpresa(nomeEmpresa: string) {
        if (!nomeEmpresa) {
            throw new Error('Nome da Empresa não pode ser vazio!')
        }
        this._nomeEmpresa = nomeEmpresa
    }
    

    /* total de funcionarios */
    get totalFuncionarios() {
        return this._totalFuncionarios
    }

    set totalFuncionarios(totalFuncionarios: number) {
        if(!totalFuncionarios) {
            throw new Error('Total de funcionarios inválido  !')
        }
        this._totalFuncionarios = totalFuncionarios
    }

    metodoComiss() {
        if(this.valorVenda < 5000) {
            return this.valorVenda * 0.02
        } else if (this.valorVenda >= 5000 && this.valorVenda < 10000 * 0.4){
            return this.valorVenda * 0.04
        } else if (this.valorVenda >= 10000) {
            return this.valorVenda * 0.06
        }
        return 0
    }

    metodoTotalSalario(): number {
        if (this.totalFuncionarios < 100 ) {
            return this.salario + this.metodoComiss() + 200
        } else {
            return this.salario + this.metodoComiss() + 300
        }
    }
}
/* Vendedor Pessoa Juridica */
const vendedorPessoaJuridica = new VendedorPessoaJuridica('Hellen', 1800, 456, 'CSN', 897)
console.log(vendedorPessoaJuridica);

try {
    vendedorPessoaJuridica.nome = 'Hellen de Oliveira',
    vendedorPessoaJuridica.salario = 1000
    vendedorPessoaJuridica.valorVenda = 10000
   // vendedorPessoaJuridica.regiao = 'Centro-Oeste'
    vendedorPessoaJuridica.nomeEmpresa = 'CPP'
    vendedorPessoaJuridica.totalFuncionarios = 213
    console.table(vendedorPessoaJuridica)
} catch (err:any) {
   console.log(err.message);
} 
console.log('Comissão: ' + vendedorPessoaJuridica.metodoComiss());
console.table('Salário Total: ' + vendedorPessoaJuridica.metodoTotalSalario()) 
