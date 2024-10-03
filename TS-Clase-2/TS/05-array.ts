//En typescritp podemos hacer varias cosas con los arrays, ya habiamos visto un poco pero podemos definir arreglos con varios tipos convinados, arreglos de un solo tipo, arreglos de objetos, arreglos de funciones, etc.

//Array de muchos tipos 

let array: (string | number | boolean)[] = ['Hola', 2, true];

//Tuplas:


let persona: [string, number, boolean] = ['Carlos', 25, true];

type PersonTuple = [string, number, boolean];

const person1: PersonTuple = ['Alice', 30, true];
const person2: PersonTuple = ['Bob', 25, false];
