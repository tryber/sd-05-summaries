/*
    Definição do método: O Object.assign() é usado para copiar os valores de todas as propriedades (entradas)
    de um objeto ou mais de origem para um objeto destino. O método retorna o objeto de destino. 

    Sintaxe: Object.assign(objDestino, ...objOrigens)

    Parâmetros: objeto de destino de Um ou mais objetos de origem.

    Valor de retorno: O objeto de destino será retornado.

*/

// Ex:

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};

const info = {
    age: 23,
    job: 'engenheiro',
};

const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
    {
        name: 'Alberto',
        lastName: 'Gomes',
        age: 23,
        job: 'engenheiro',
        child: [ 'Maria', 'João' ],
        wife: 'Ana'
    }
*/

/*
    Quando ocorre inclusão de informações em um objeto de destino, o objeto 
    de origem também é alterado, ou seja, este método causa interferência em ambos os objetos.

    Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um 
    objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo.
*/

//Ex:

const person = {
    name: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
