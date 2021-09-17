class Pessoa {
  static SEXOO = ["Masculino, Feminino"]

  constructor(
      public _nome: string, 
      public _sexo: string, 
      public _idade: number,
      ) {}

      /* nome */
      get nome() {
          return this._nome
      }

      set nome(nome: string) {
        if (!nome) {
            throw new Error('Nome Inválido!!')
        }
        this._nome = nome
      }


      /* sexo */
      get sexo() {
        return this._sexo
    }

    set sexo(sexo: string) {
      if (!Pessoa.SEXOO.includes(sexo)) {
          throw new Error('Sexo Inválido!!')
      }
      this._sexo = sexo
    }


    /* idade */
    get idade() {
        return this._idade
    }

    set idade(idade: number) {
      if (idade <= 0 ) {
          throw new Error('Idade Inválida!!')
      }
      this._idade = idade
    }

    metodoVerificarIdade(idade: number) {
        if (idade >= 18) {
            console.log('Maior de idade');
        } else {
            console.log('Menor de idade');
        }
     
    }
      
}

const pessoa = new Pessoa('Raquel', 'Feminino', 20)
console.table(pessoa);

console.log(pessoa.nome, 'possui ' + pessoa.idade, pessoa.metodoVerificarIdade(20))

console.log('\n');

try {
   // pessoa.nome = ''
    //pessoa.idade = 0
    pessoa.sexo = 'TESTE'
    console.log(pessoa.nome, 'possui ' + pessoa.idade, pessoa.metodoVerificarIdade(16))
} catch (err:any) {
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




