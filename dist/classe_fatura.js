"use strict";
var Fatura = /** @class */ (function () {
    function Fatura(_numero, _descricao, _qtdComprada, _preco) {
        this._numero = _numero;
        this._descricao = _descricao;
        this._qtdComprada = _qtdComprada;
        this._preco = _preco;
    }
    Object.defineProperty(Fatura.prototype, "numero", {
        /* numero */
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "descricao", {
        /* descricao */
        get: function () {
            return this._descricao;
        },
        set: function (descricao) {
            this._descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "qtdComprada", {
        /* quantidade comprada */
        get: function () {
            return this._qtdComprada;
        },
        set: function (qtdComprada) {
            this._qtdComprada = qtdComprada;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "preco", {
        /* valor */
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Fatura.prototype.metodoValorFatura = function () {
        return this.qtdComprada * this.preco;
    };
    return Fatura;
}());
var fatura = new Fatura(28, 'Notebook Acer', 9, 3200);
console.log(fatura);
console.log('O valor total da fatura é ' + fatura.metodoValorFatura());
try {
    fatura.numero = 2905;
    fatura.descricao = 'Alguma coisa';
    fatura.qtdComprada = 1500;
    fatura.preco = 1221;
}
catch (err) {
    console.log(err.message);
}
/* console.log('\n');
console.log(fatura);  */
