//name es una palabra reservada

let persona1 = "migue;";

persona1 = 2;

//typescript es capas de inferir el tipo aunque no se le declare en algunos objetos o const

//tipos basicos

const persona = {
  name: "edgar",
  age: 26,
};

//en typescript usar la menor cantidad de tipos
//inferencia de datos es como en c#

const number = 1;
let n: number = 2;

let a = "hola";
let b: undefined = undefined;

//no sabe inferir el tipo de datos, any

//con any ignoramos el tipo del dato
let anyvalue: any = "hola";

//tipo unknown

let unknownvalue: any = "value";

//funciones

//en las funciones no entienden el tipo de inferencia que quieres darle

function saludar(name: string) {
  console.log(`Hola ${name}`);
}

function saludar2({ name, age }) {
  console.log(`Hola ${name} tu edad es ${age}`);
}

saludar2({ name: "pepe", age: 2 });

//formas de tipar un objeto, ojo no se puede hacer de la siguiente forma porque causa conflicto con js

//FROMA 1 PONEMOS EL OBJETO LUEGO : { EL ATRIBUTO: TIPO N.........}
function saludar3({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name} tu edad es ${age}`);
}
saludar3({ name: "hola", age: 2 });

//FORMA2

function saludar4(persona3: { name: string; age: number }) {
  //aqui destructuramos persona
  const { name, age } = persona3;

  console.log(`Hola ${name} tu edad es ${age}`);
}
saludar4({ name: "hola", age: 2 });

// tambien podemos tipar lo que devuelve la funcion, cuando se pone encima de la funcion saludar 5 la sintaxis indica los parametros que recibe y : el retorno en este caso un number

function saludar5({ name, age }: { name: string; age: number }): string {
  //no permite return ege de tipo string porque la inferencia dice que age es un number no un string

  console.log(`Hola ${name} tu edad es ${age}`);
  return age;
}
saludar3({ name: "hola", age: 2 });

//arrow functions con funciones que usan como parametro otras funciones

const sayHiFromFunction = (fn) => {
  return fn("miguel");
};

sayHiFromFunction((name) => {
  console.log(`hola ${name}`);
});

// lo anterior esta lleno de any en el name y en fn, una mala forma de tipar las funciones es con revvisar notas en obsidian
const sayHiFromFunction2 = (fn: Function) => {
  return fn("miguel");
};

sayHiFromFunction2((name: string) => {
  console.log(`hola ${name}`);
});

sayHiFromFunction2(() => {
  return Math.random();
});

//Forma correcta

const sayHiFromFunction3 = (fn: (name: string) => void) => {
  return fn("miguel");
};

const sayHi = (name: string) => {
  console.log(`hola ${name}`);
};

sayHiFromFunction3(sayHi);

//arrow functions tipado

const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

//never

function throwError(message: string): never {
  throw new Error(message);
}

const avengers = ["hulk", "spiderman", "ironman"];

avengers.forEach((avengers) => {
  console.log(avengers.toUpperCase());
});

avengers.forEach(function (avengers) {
  console.log(avengers.toUpperCase());
});

//TYPE ALIAS PARA OBJETOS

// type Heroid = `${string}-${string}-${string}-${string}`;

// type Heropower  = 'local' | 'mundial'| 'universal'| 'intergalactico'

// const enableAnimationDuration : boolean|number  = 500;

// type Hero = {
//   readonly id?: Heroid;
//   name: string;
//   age: number;
//   isActive?: boolean;
//   heroPower?: Heropower;
// };

// let hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(name: string, age: number): Hero {
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = Object.freeze(createHero("thor", 1500)) 
// const ironman = createHero("ironman", 1500)
// thor.id?.toString();

ironman.heroPower = "mundial"




type HexadecimalColor = `#${string}`

const color: HexadecimalColor = '333fff'
const color2:HexadecimalColor = '#000fff'