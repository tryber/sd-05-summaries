/*
Definição do método: O método Object.keys() retorna uma matriz de sequências de caracteres 
de propriedades / nome das chaves de um determinado objeto.

Sintaxe: Object.keys(obj);

Parâmetros: O próprio objeto em si;

Retorno do método: Matriz de strings;

Ex: 

        const user = {
            name : "Jagathish",
            age  : 20,
            getAge() {
                return this.age;
            }
        }
        Object.keys(user); //  ["name", "age", "getAge"]

Outro ex: 

        const array = ['a', 'b', 'c'];
        console.log (Object.keys (array)); // ['0', '1', '2']


OBS: Quando passamos um não-objeto undefined, exceto , ele será coagido a um objeto.

Ex: 

       Object.keys ("oi") // ["0", "1"] 
*/

/*
Completar as informações do cliente adicionando uma nova propriedade para armazenar seu sobrenome
*/
const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

console.log(customer1);
console.log('--------');
customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

/*
    No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova propriedade. Para isso, basta seguir a sintaxe abaixo:

    objeto.nomeDaPropriedade.

    objeto[variavelQueContemONomeDaPropriedade].

*/

/*
  Agora, suponha que seja necessário adicionar algumas novas propriedades ao 
  objeto, como a naturalidade, a data de nascimento e o estado civil. 
  Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.

*/

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
