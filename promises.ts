// Execute command: tsc promises.ts; node promises.js

//*--------------------------------------------------------------------------------------------*//

//! 1.
//! Crea una funcion que devuelva una promesa que resuelva 
//! el string 'Hello World'

function helloWorld(): Promise<string> {
    return Promise.resolve('Hello World')
} 

helloWorld().then(result => console.log('1. ' + result))

//*--------------------------------------------------------------------------------------------*//

//! 2.
//! Crea una funcion que devuelva una promesa que falle con el error 'Ups! Algo ha fallado'

function fail(): Promise<string> {
    return Promise.reject('Ups! Algo ha fallado')
}

fail()
    .then(result => console.log('2. ' + result))    // No hace nada aquí
    .catch(err   => console.log('2. ' + err))       // Como rechazamos, lo pilla el catch


//! Define la siguiente funcion fetch "falsa". Esta funcion, de forma aleatoria, resolverá 
//! correctamente o cascará error:

function fakeFetch(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
        resolve('Hello World')
        } else {
        reject('Ups! Algo ha fallado')
        }
    })
}

//*--------------------------------------------------------------------------------------------*//

//! 3.
//! Crea una funcion que llame a fakeFetch y que, si la promesa se resuelve correctamente, 
//! devuelva el string 'Todo ha ido bien'. Si la promesa falla, devolverá el 
//! string 'Ups! Algo ha fallado'. Esta funcion debe usar async/await y try/catch

function fakeFetchThenCatch():  Promise<string> {
    return fakeFetch('https://immense-bookcase-91f.notion.site/Training-f49e5826b63a4cfb879e92d8b8c2d929')
        .then(() => 'Todo correcto')
        .catch(() => 'Ha ocurrido un fallo')
}

fakeFetchThenCatch()
    .then((result) => console.log('3. ' + result))
    .catch((err) => console.log('3. ' + err))

//*--------------------------------------------------------------------------------------------*//

//! 4.
//! Crea una funcion que llame a fakeFetch y que, si la promesa se resuelve correctamente, 
//! devuelva el string 'Todo ha ido bien'. Si la promesa falla, devolverá el 
//! string 'Ups! Algo ha fallado'. Esta funcion debe usar async/await y try/catch

async function fakeFetchAsyncAwait(): Promise<string> {
    try {
        await fakeFetch('https://immense-bookcase-91f.notion.site/Training-f49e5826b63a4cfb879e92d8b8c2d929')
        return 'Todo ha ido bien'
    } catch (err) {
        return 'Ups! Algo ha fallado'
    }
} 

console.log('4. ' + fakeFetchAsyncAwait())


//*--------------------------------------------------------------------------------------------*//

//! 5.
//! Crea una funcion que llame a fakeFetch 30 veces. Si alguna de las promesas falla, la 
//! funcion debe devolver el string 'Ups! Algo ha fallado'. (tip: usar Promise.all).

async function fakeFetch30Times(): Promise<string> {
    const promises = Array.from({length: 30}, () => fakeFetch('https://google.com'))
    try{
        await Promise.all(promises)
        return 'Todo ha ido bien'
    }catch (err){
        return 'Ups! Algo ha fallado'
    }
}

console.log('5. ' + fakeFetch30Times())

//*--------------------------------------------------------------------------------------------*//

//! 6.
//! Crea una funcion que llame a fakeFetch 30 veces en serie. Tras finalizar, la funcion 
//! debe devolver un array con todos los resultados de las promesas. Si alguna falla, no 
//! debe parar la ejecución de las demás promesas. (tip: usar for await)

async function fakeFetch30TimesSerial(): Promise<string[]> {
    // const results = []
    // for (let i = 0; i < 30; ++i) {
    //     try {
    //         await fakeFetch('https://google.com')
    //         results.push('Todo ha ido bien')
    //     } catch {
    //         results.push('Ups! Algo ha fallado')
    //     }
    // }
    // return results


    const results = []
    const fakeFetches = Array.from({ length: 30 }, () => fakeFetch('https://google.com'))

    for (const fnFetch of fakeFetches) {
        try {
            const fetchResult = await fnFetch
            results.push(fetchResult)
        } catch (err) {
            console.error('Error en fakeFetch', err)
        }
    }
    return results
}

//console.log('6. ' + fakeFetch30TimesSerial())
fakeFetch30TimesSerial()
    .then(results => console.log('6. ' + results))
    .catch(err => console.log('6. ' + err))

//*--------------------------------------------------------------------------------------------*//