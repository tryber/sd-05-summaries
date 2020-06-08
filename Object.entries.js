/* 
Definição do método: O método retorn um array dos próprios pares de [key, value], enumeráveis de um dado objeto.

Sintaxe: Object.entries(obj)

Parâmetros: O próprio objeto que será verificado, cuja [key, value] serão retornados.

Valor de retorno: Um array de pares [key, value] enumeráveis de propriedade de um dado objeto.

*/

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
for (i in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[i][0]);
    console.log('Capital:', pairKeyValue[i][1]);
};

console.log(pairKeyValue);
