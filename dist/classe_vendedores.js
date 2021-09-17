"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vendedores = /** @class */ (function () {
    function Vendedores(_nome, _salario, _valorVenda) {
        this._nome = _nome;
        this._salario = _salario;
        this._valorVenda = _valorVenda;
    }
    Object.defineProperty(Vendedores.prototype, "nome", {
        /* nome */
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (!nome) {
                throw new Error('Nome inválido !');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "salario", {
        /* salario */
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            if (salario < 0) {
                throw new Error('Salário invalido !');
            }
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "valorVenda", {
        /* valor renda */
        get: function () {
            return this._valorVenda;
        },
        set: function (valorVenda) {
            if (valorVenda < 0) {
                throw new Error('Valor inválido !');
            }
            this._valorVenda = valorVenda;
        },
        enumerable: false,
        configurable: true
    });
    Vendedores.prototype.metodoDesconto = function () {
        return this.salario * 0.08;
    };
    return Vendedores;
}());
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
var VendedorPessoaFisica = /** @class */ (function (_super) {
    __extends(VendedorPessoaFisica, _super);
    function VendedorPessoaFisica(nome, salario, valorVenda, regiao) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this._regiao = regiao;
        return _this;
    }
    Object.defineProperty(VendedorPessoaFisica.prototype, "regiao", {
        /* regiao */
        get: function () {
            return this._regiao;
        },
        set: function (regiao) {
            if (!VendedorPessoaFisica.REGIAO.includes(regiao)) {
                throw new Error('Região Inválida!!');
            }
            this._regiao = regiao;
        },
        enumerable: false,
        configurable: true
    });
    VendedorPessoaFisica.prototype.metodoComissao = function () {
        if (this.regiao == 'Sul') {
            return this.valorVenda * 0.10;
        }
        else if (this.regiao == 'Sudeste') {
            return this.valorVenda * 0.12;
        }
        else if (this.regiao == 'Centro-Oeste') {
            return this.valorVenda * 0.14;
        }
        else if (this.regiao == 'Norte') {
            return this.valorVenda * 0.15;
        }
        else if (this.regiao == 'Nordeste') {
            return this.valorVenda * 0.17;
        }
        return 0;
    };
    VendedorPessoaFisica.prototype.salarioTotal = function () {
        return this.salario + this.metodoComissao();
    };
    VendedorPessoaFisica.REGIAO = ['Sul', 'Sudeste', 'Centro-Oeste', 'Norte', 'Nordeste'];
    return VendedorPessoaFisica;
}(Vendedores));
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
var VendedorPessoaJuridica = /** @class */ (function (_super) {
    __extends(VendedorPessoaJuridica, _super);
    function VendedorPessoaJuridica(nome, salario, valorVenda, nomeEmpresa, totalFuncionarios) {
        var _this = _super.call(this, nome, salario, valorVenda) || this;
        _this._nomeEmpresa = nomeEmpresa;
        _this._totalFuncionarios = totalFuncionarios;
        return _this;
    }
    Object.defineProperty(VendedorPessoaJuridica.prototype, "nomeEmpresa", {
        /* nome da empresa */
        get: function () {
            return this._nomeEmpresa;
        },
        set: function (nomeEmpresa) {
            if (!nomeEmpresa) {
                throw new Error('Nome da Empresa não pode ser vazio!');
            }
            this._nomeEmpresa = nomeEmpresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VendedorPessoaJuridica.prototype, "totalFuncionarios", {
        /* total de funcionarios */
        get: function () {
            return this._totalFuncionarios;
        },
        set: function (totalFuncionarios) {
            if (!totalFuncionarios) {
                throw new Error('Total de funcionarios inválido  !');
            }
            this._totalFuncionarios = totalFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    VendedorPessoaJuridica.prototype.metodoComiss = function () {
        if (this.valorVenda < 5000) {
            return this.valorVenda * 0.02;
        }
        else if (this.valorVenda >= 5000 && this.valorVenda < 10000 * 0.4) {
            return this.valorVenda * 0.04;
        }
        else if (this.valorVenda >= 10000) {
            return this.valorVenda * 0.06;
        }
        return 0;
    };
    VendedorPessoaJuridica.prototype.metodoTotalSalario = function () {
        if (this.totalFuncionarios < 100) {
            return this.salario + this.metodoComiss() + 200;
        }
        else {
            return this.salario + this.metodoComiss() + 300;
        }
    };
    return VendedorPessoaJuridica;
}(Vendedores));
/* Vendedor Pessoa Juridica */
var vendedorPessoaJuridica = new VendedorPessoaJuridica('Hellen', 1800, 456, 'CSN', 897);
console.log(vendedorPessoaJuridica);
try {
    vendedorPessoaJuridica.nome = 'Hellen de Oliveira',
        vendedorPessoaJuridica.salario = 1000;
    vendedorPessoaJuridica.valorVenda = 10000;
    // vendedorPessoaJuridica.regiao = 'Centro-Oeste'
    vendedorPessoaJuridica.nomeEmpresa = 'CPP';
    vendedorPessoaJuridica.totalFuncionarios = 213;
    console.table(vendedorPessoaJuridica);
}
catch (err) {
    console.log(err.message);
}
console.log('Comissão: ' + vendedorPessoaJuridica.metodoComiss());
console.table('Salário Total: ' + vendedorPessoaJuridica.metodoTotalSalario());
