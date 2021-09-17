"use strict";
/*
4) Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
getter e o setter com a validação.
Regras para os cálculos
Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
Trabalho de POO II 2
cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
14% = 56.000,00
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
var impostoRenda = /** @class */ (function () {
    function impostoRenda(_nome, _rendaAnual) {
        this._nome = _nome;
        this._rendaAnual = _rendaAnual;
    }
    Object.defineProperty(impostoRenda.prototype, "nome", {
        /* nome */
        get: function () {
            return this.nome;
        },
        set: function (nome) {
            if (!nome) {
                throw new Error('Nome Inválido!!');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(impostoRenda.prototype, "rendaAnual", {
        /* renda mensal */
        get: function () {
            return this._rendaAnual;
        },
        set: function (rendaAnual) {
            if (rendaAnual < 0) {
                throw new Error('Renda mensal negativa!!');
            }
            this._rendaAnual = rendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    return impostoRenda;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, rendaAnual, _gastoSaude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._gastoSaude = _gastoSaude;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "gastoSaude", {
        /* gastos da saude */
        get: function () {
            return this._gastoSaude;
        },
        set: function (gastoSaude) {
            if (gastoSaude < 0) {
                throw new Error('Gasto de saúde inválido !!');
            }
            this._gastoSaude = gastoSaude;
        },
        enumerable: false,
        configurable: true
    });
    PessoaFisica.prototype.calculaImpostoPF = function () {
        if (this.rendaAnual < 20000 && this._gastoSaude) {
            return this.rendaAnual * 0.15;
        }
    };
    return PessoaFisica;
}(impostoRenda));
var pessoaFisica = new PessoaFisica('Raquel', 50000, 2000);
console.log("Valor do imposto de renda Pessoa Fisica: " + pessoaFisica.calculaImpostoPF());
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, rendaAnual, numeroFuncionario) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._numeroFuncionario = numeroFuncionario;
        return _this;
    }
    Object.defineProperty(PessoaJuridica.prototype, "numeroFuncionario", {
        /* gastos da saude */
        get: function () {
            return this._numeroFuncionario;
        },
        set: function (numeroFuncionario) {
            if (numeroFuncionario < 0) {
                throw new Error('Número de funcionários inválidos !!');
            }
            this._numeroFuncionario = numeroFuncionario;
        },
        enumerable: false,
        configurable: true
    });
    PessoaJuridica.prototype.calculaImpostoPJ = function () {
        if (this.numeroFuncionario < 10) {
            return this.rendaAnual * 0.16;
        }
        else {
            return this.rendaAnual * 0.14;
        }
    };
    return PessoaJuridica;
}(impostoRenda));
/* Pessoa Juridica */
var pessoaJuridica = new PessoaJuridica('Silvio', 400000, 25);
console.log(pessoaJuridica);
console.log('Valor do imposto de renda Pessoa Jurídica: ' + pessoaJuridica.calculaImpostoPJ());
try {
    pessoaJuridica.nome = 'Raquel Izidorio';
    pessoaJuridica.numeroFuncionario = 400;
    pessoaJuridica.rendaAnual = 5500;
}
catch (err) {
    console.log(err.messege);
}
//console.table(pessoaJuridica);
/* try {
    pessoaFisica.nome = 'Renata'
    pessoaFisica.numeroFuncionario = 850
    pessoaFisica.rendaAnual = 1500
} catch (err:any) {
    console.log(err.message);
}  */
