//name es una palabra reservada


let persona1  = 'migue;'

persona1 = 2

//typescript es capas de inferir el tipo aunque no se le declare en algunos objetos o const

//tipos basicos

const persona = {

    name: 'edgar',
    age: 26

}
 
//en typescript usar la menor cantidad de tipos
//inferencia de datos es como en c#

const number = 1
let n : number = 2

let a = 'hola'
let b: undefined = undefined

//no sabe inferir el tipo de datos, any

//con any ignoramos el tipo del dato
let anyvalue : any = 'hola'

//tipo unknown

let unknownvalue : any = 'value'

