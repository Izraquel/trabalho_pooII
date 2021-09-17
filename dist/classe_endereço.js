"use strict";
/*
6) Crie uma interface chamado IEndereço com os seguintes atributos rua, numero,
bairro e cidade. Crie um variável do endereço que seja do tipo da interface
endereço. Atribua um endereço uma rua, numero, bairro e cidade para a variável
endereço que é do mesmo tipo da interface. Utilize o console.log para exibir o
conteúdo da variável endereço.
*/
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    Endereco.RUA = 'Avenida Francisco Antonio Francisco';
    return Endereco;
}());
var endereco = {
    /*  rua: 'Avenida Francisco Antonio Francisco', */
    rua: Endereco.RUA,
    numero: 271,
    bairro: 'Açude I',
    cidade: "Volta Redonda"
};
console.table(endereco);
