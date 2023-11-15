// //aqui partimos de los intersections types para identificar el extend en type
// type Heroid = `${string}-${string}-${string}-${string}`;

// type Heropower  = 'local' | 'mundial'| 'universal'| 'intergalactico'

// const enableAnimationDuration : boolean|number  = 500;

// type HeroBasicinfo = {

//     name: string,
//     age: number

// }

// type HeroProperties = {
//   readonly id?: Heroid;
//   isActive?: boolean;
//   heroPower?: Heropower;
//   addres?: {
//     city: string,
//     planet:string

//   }
// };
// const address = {
//     planet: 'earth',
//     city: 'guatemala'

// }

// type Adress = typeof address
// const otraadress: Adress = {

//     planet: 'tierra',
//     city: 'mexico'

// }

// type Hero = HeroBasicinfo & HeroProperties

// let hero: Hero = {
//   name: "thor",
//   age: 1500,
// };

// function createHero(input: HeroBasicinfo): Hero {

//     const {name,age} = hero;
    
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   };
// }
// const addressHero : HeroProperties['addres'] = {

//     city: "new york",
//     planet: "tierra"

// }

// const thor = createHero({name:"thor",age: 1500}) 
// const ironman = createHero({name:"ironman", age:1500})
// thor.id?.toString();

// ironman.heroPower = "mundial"
 

function createAddress(){

    return {
        planet: "tiera",
        city: "new york"
    }

}

type Address = ReturnType<typeof createAddress>


//arays

const lenguajes: string[] = []

const numerosCadenas: (string|number)[] = []

lenguajes.push('javascript')
lenguajes.push('javascript')
lenguajes.push('javascript')
lenguajes.push('javascript')


const numeros:Array<string> = [] 
//////////////////////////////////////////////

type Heroid = `${string}-${string}-${string}-${string}`;

type Heropower  = 'local' | 'mundial'| 'universal'| 'intergalactico'

const enableAnimationDuration : boolean|number  = 500;

type HeroBasicinfo = {

    name: string,
    age: number

}

const heros: HeroBasicinfo[] = []

//matrices

//  [

//     ['x','0','x'],
//     ['0','x','0'],
//     ['x','','0']

//  ]

type CellValue = 'x'|''|'0'

type SizeMaxMatrix = [
[CellValue,CellValue,CellValue],
[CellValue,CellValue,CellValue],
[CellValue,CellValue,CellValue]

]


const gameBoard : SizeMaxMatrix =[

        ['x','0','x'],
        ['0','x','0'],
        ['x','','0']
    

] 

type Rgb = [number,number,number]

const rgb : Rgb = [2,2,2]

