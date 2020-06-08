/*
    Definição do método: O Object.values() retorna um array 
    com os VALUES das propriedades de um objeto.

    Sintaxe: Object.values(obj)

    Parâmetros: O próprio objeto que será verificado, cujo value será retornado.

    Valor de retorno: Um array contendo os VALUES das propriedades do objeto;

*/

// Ex:

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

// Exemplo com For...in
const listSkillsWithFor = (student) => {
    const skills = [];
    for (skill in student) {
        skills.push(student[skill]);
    }

    return skills;
};

// Exemplo com método de objetos Object.values()
const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));
