"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        /* nome */
        get: function () {
            return this._nome;
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
    Object.defineProperty(Pessoa.prototype, "sexo", {
        /* sexo */
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (!Pessoa.SEXOO.includes(sexo)) {
                throw new Error('Sexo Inválido!!');
            }
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "idade", {
        /* idade */
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade <= 0) {
                throw new Error('Idade Inválida!!');
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.metodoVerificarIdade = function (idade) {
        if (idade >= 18) {
            console.log('Maior de idade');
        }
        else {
            console.log('Menor de idade');
        }
    };
    Pessoa.SEXOO = ["Masculino, Feminino"];
    return Pessoa;
}());
var pessoa = new Pessoa('Raquel', 'Feminino', 20);
console.table(pessoa);
console.log(pessoa.nome, 'possui ' + pessoa.idade, pessoa.metodoVerificarIdade(20));
console.log('\n');
try {
    // pessoa.nome = ''
    //pessoa.idade = 0
    pessoa.sexo = 'TESTE';
    console.log(pessoa.nome, 'possui ' + pessoa.idade, pessoa.metodoVerificarIdade(16));
}
catch (err) {
    console.log(err.message);
}
//console.log('\n');
/* try {
    pessoa.idade = 16
    console.log(pessoa.nome, 'possui ' + pessoa.idade)
} catch (err) {
    //console.log(err.message)
}  */
//console.log(pessoa.metodoVerificarIdade(16));
