class Fatura {
    constructor (
        private _numero: number,
        private _descricao: string,
        private _qtdComprada: number,
        private _preco: number
    ) {}


    /* numero */
    get numero() {
        return this._numero
    }

    set numero(numero: number) {
        this._numero = numero
    }


    /* descricao */
    get descricao() {
        return this._descricao
    }

    set descricao(descricao: string) {
        this._descricao = descricao
    }


    /* quantidade comprada */
    get qtdComprada() {
        return this._qtdComprada
    }

    set qtdComprada(qtdComprada: number) {
        this._qtdComprada = qtdComprada
    }


    /* valor */
    get preco() {
        return this._preco
    }

    set preco(preco: number) {
        this._preco = preco
    }


    metodoValorFatura() { 
        return this.qtdComprada * this.preco
    }

}

const fatura = new Fatura (28, 'Notebook Acer', 9, 3200 ) 
console.log(fatura)
console.log('O valor total da fatura é ' +fatura.metodoValorFatura());


try {
    fatura.numero = 2905
    fatura.descricao = 'Alguma coisa'
    fatura.qtdComprada = 1500
    fatura.preco = 1221
} catch (err:any) {
   console.log(err.message)
      
} 
/* console.log('\n');
console.log(fatura);  */
