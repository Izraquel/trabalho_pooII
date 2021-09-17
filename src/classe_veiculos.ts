class Veiculos {

   constructor(
       private _modelo: string, 
       private _marca: string, 
       private _ano: number,
       private _valorLocacao: number,
       private _qtdDias: number

       ) {}


       /* modelo */
      get modelo(){
        return this._modelo
    }

    set modelo(modelo: string) {
      if (!modelo) {
          throw new Error('Não é aceito modelo vazio!!')
      }
      this._modelo = modelo
    }


    /* marca */
    get marca(){
        return this._marca
    }

    set marca(marca: string) {
      if (!marca) {
          throw new Error('Não é aceito marca vazia!!')
      }
      this._marca = marca
    }


    /* ano */
    get ano(){
        return this._ano
    }

    set ano(ano: number) {
      if (ano <= 0) {
          throw new Error('Este ano é inválido!!')
      }
      this._ano = ano
    }
    
    

    /* valor locacao */
    get valorLocacao(){
        return this._valorLocacao
    }

    set valorLocacao(valorLocacao: number) {
      if (valorLocacao <= 0) {
          throw new Error('Este valor é inválido!!')
      }
      this._valorLocacao = valorLocacao
    } 


    /* quantidade de dias */
    get qtdDias(){
        return this._qtdDias
    }

    set qtdDias(qtdDias: number) {
      if (qtdDias <= 0) {
          throw new Error('Esta quantidade de dias é inválida!!')
      }
      this._qtdDias = qtdDias
    } 

    metodoPasseio(){
        return this.qtdDias * this.valorLocacao
    }
}

const veiculo = new Veiculos ('Onix', 'Chevrolet', 2015, 50, 8)
//console.table(veiculo);

try {
   // veiculo.modelo = ''
   // veiculo.marca = ''
    //veiculo.ano = 0
   // veiculo.valorLocacao = 0
    veiculo.qtdDias = 0
} catch (err:any) {
   console.log(err.message);
    
}
console.table(veiculo);
console.log("Total:" + veiculo.metodoPasseio());
