// Execute command: tsc map-filter-reduce.ts ; node map-filter-reduce.js

//! 1. 
//! (Map) Crea una funcion que, dada una lista de numeros y un numero N, 
//! devuelva la lista de numeros multiplicados por N

function multiply(numbers: number[], n: number): number[] {
    return numbers.map(number => number * n)
}

// const res = multiply([1,2,3,4],2)
// console.log(res)

//*--------------------------------------------------------------------------------------------*//

//! 2.
//! (Map) Crea una funcion que, dada una lista de strings, 
//! devuelva una lista de strings en mayusculas

function toUpperCase(stringList: string[]): string[]{
    return stringList.map(string => string.toUpperCase())
}

// const res = toUpperCase(["hola","buenos","días"])
// console.log(res)

//*--------------------------------------------------------------------------------------------*//

//! 3.
//! (Filter) Crea una funcion que, dada una lista de numeros, 
//! devuelva una lista con los numeros pares

function evenNumbers(numbers: number[]): number[] {
    return numbers.filter(n => n % 2 === 0)
}

// const res = evenNumbers([1,2,3,4,5,6,7,8,9,10])
// console.log(res)

//*--------------------------------------------------------------------------------------------*//

//! 4.
//! (Filter) Crea una funcion que, dada una lista de strings, 
//! devuelva una lista con los strings que tengan mas de 5 caracteres

function moreThan5Characters(strings: string[]): string[] {
    return strings.filter(str => str.length > 5)
}

// const res = moreThan5Characters(["hola","buenos","días","planeta"])
// console.log(res)

//*--------------------------------------------------------------------------------------------*//

//! 5.
//! Crea una funcion que, dada una lista de numeros, 
//! devuelva la suma de todos los numeros

function sum(numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0)
}

// const res = sum([1,2,3])
// console.log(res)


//*--------------------------------------------------------------------------------------------*//

//! 6.
//! Crea una funcion que, dada una lista de strings, 
//! devuelva un string con todos los strings concatenados

function concat(strings: string[]): string {
    return strings.reduce((acc, string) => acc + string, "")
}

// const res = concat(["Hola", "Buenos", "Días"])
// console.log(res)


//*--------------------------------------------------------------------------------------------*//

//! 7.
//! Crea una funcion que, dada una lista de numeros, 
//! encuentre el numero mas grande

function max(numbers: number[]): number {
    return numbers.reduce((acc, number) => acc = number > acc ? number : acc, numbers[0])
    // También existe la funcion Math.max(a,b)
}

// const res = max([1,3,2,10,5,7])
// console.log(res)

//*--------------------------------------------------------------------------------------------*//

//! 8.
//! Crea una funcion que reciba una lista de objetos del tipo {name: string, age: number} 
//! y agrupe los objetos por edad. Por ejemplo, si la lista es: 
//! [{name: 'Juan', age: 20}, {name: 'Maria', age: 20}, {name: 'Pedro', age: 30}], 
//! la funcion debe devolver 
//! {20: [{name: 'Juan', age: 20}, {name: 'Maria', age: 20}], 30: [{name: 'Pedro', age: 30}]}

function groupByAge(people: {name: string, age: number}[]): 
                    {[key: number]: {name: string, age: number}[]} {
    return people.reduce((acc, person) => {
        // if (!acc[person.age])
        //     acc[person.age] = []
        acc[person.age] = acc[person.age] || []

        acc[person.age].push(person)
        return acc
    },{});
}

const res = groupByAge([{name:'Carlos',age:20},{name:'Cristobal',age:18},{name:'Miguel',age:18}])
console.log(res)

//*--------------------------------------------------------------------------------------------*//

//! 
//! 




//*--------------------------------------------------------------------------------------------*//

//! 
//! 




//*--------------------------------------------------------------------------------------------*//