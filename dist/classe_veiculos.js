"use strict";
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelo, _marca, _ano, _valorLocacao, _qtdDias) {
        this._modelo = _modelo;
        this._marca = _marca;
        this._ano = _ano;
        this._valorLocacao = _valorLocacao;
        this._qtdDias = _qtdDias;
    }
    Object.defineProperty(Veiculos.prototype, "modelo", {
        /* modelo */
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            if (!modelo) {
                throw new Error('Não é aceito modelo vazio!!');
            }
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        /* marca */
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (!marca) {
                throw new Error('Não é aceito marca vazia!!');
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        /* ano */
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (ano <= 0) {
                throw new Error('Este ano é inválido!!');
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        /* valor locacao */
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (valorLocacao <= 0) {
                throw new Error('Este valor é inválido!!');
            }
            this._valorLocacao = valorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "qtdDias", {
        /* quantidade de dias */
        get: function () {
            return this._qtdDias;
        },
        set: function (qtdDias) {
            if (qtdDias <= 0) {
                throw new Error('Esta quantidade de dias é inválida!!');
            }
            this._qtdDias = qtdDias;
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.metodoPasseio = function () {
        return this.qtdDias * this.valorLocacao;
    };
    return Veiculos;
}());
var veiculo = new Veiculos('Onix', 'Chevrolet', 2015, 50, 8);
//console.table(veiculo);
try {
    // veiculo.modelo = ''
    // veiculo.marca = ''
    //veiculo.ano = 0
    // veiculo.valorLocacao = 0
    veiculo.qtdDias = 0;
}
catch (err) {
    console.log(err.message);
}
console.table(veiculo);
console.log("Total:" + veiculo.metodoPasseio());
