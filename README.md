# Training
Pequeña introducción a conceptos básicos de TypeScript si no sabes conceptos propios de JS o TS.
# Índice
- [Training](#training)
- [Índice](#índice)
- [Tipos de datos primitivos](#tipos-de-datos-primitivos)
- [Estructuras de datos](#estructuras-de-datos)
  - [Objetos](#objetos)
  - [Arrays y Tuplas](#arrays-y-tuplas)
    - [Arrays](#arrays)
    - [Tuplas](#tuplas)
- [Operadores spread y rest](#operadores-spread-y-rest)
- [Asincronía](#asincronía)
  - [Promesas](#promesas)
  - [Callbacks](#callbacks)
  - [`then` vs `async/await`](#then-vs-asyncawait)
    - [Uso de `try/catch` con `async/await`](#uso-de-trycatch-con-asyncawait)
  - [`Promise.all` vs `Promise.allSettled` vs `for await`](#promiseall-vs-promiseallsettled-vs-for-await)
- [Buenas prácticas](#buenas-prácticas)

# Tipos de datos primitivos

Ver vídeo de [midudev](https://www.youtube.com/watch?v=fUgxxhI_bvc).

> [!NOTE]  
> POR COMPLETAR.

# Estructuras de datos

## Objetos
Los objetos son colecciones de pares `clave-valor` donde cada clave es una cadena (o símbolo en ES6) y cada valor puede ser cualquier tipo de dato, incluyendo otros objetos, funciones, arreglos, etc.
Se definen con `{}`

```typescript
let person: { name: string, age: number } = {
    name: 'Juan',
    age: 30
};

// Acceso a las propiedades del objeto
console.log(person.name); // 'Juan'
console.log(person.age);  // 30
```

> [!TIP]
> Además de definir objetos con propiedades específicas en una sola declaración, TypeScript también permite definir tipos de objetos personalizados utilizando **interfaces** o tipos:
> 
> ```typescript
> interface Person {
>     name: string;
>     age: number;
> }
> 
> let person: Person = {
>     name: 'Juan',
>     age: 30
> };
> ```

## Arrays y Tuplas
Son tipos especiales de objetos. Pueden contener cualquier tipo de datos. Se definen con `[]`

### Arrays
Los [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) en TypeScript son colecciones ordenadas de elementos del **mismo tipo**. La longitud de un array puede ser dinámica.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let colors: string[] = ['red', 'green', 'blue'];

// Acceso a los elementos de los arrays:
console.log(number[0]); // 1
console.log(number[4]); // 5
console.log(colors[1]); // "green"
```

### Tuplas
Las tuplas en TypeScript son arreglos con un número fijo de elementos, donde cada elemento puede tener un **tipo específico**. A diferencia de los arrays, las tuplas permiten definir el tipo y la posición de cada elemento de forma precisa.

```typescript
let point: [number, number] = [10, 20];
console.log(`${point[0]} y ${point[1]}`); // 10 y 20
```
En este ejemplo, `point` es una tupla que tiene exactamente dos elementos, ambos de tipo `number`, y cada elemento representa las coordenadas x y y de un punto en el plano cartesiano.  

En resumen, los arrays son colecciones dinámicas de elementos del mismo tipo, mientras que las tuplas son arreglos con un número fijo de elementos, donde cada elemento puede tener un tipo diferente y está fuertemente tipado según su posición.

# Operadores spread y rest

> [!NOTE]  
> POR COMPLETAR.

# Asincronía

## Promesas
> [!NOTE]  
> POR COMPLETAR.

## Callbacks 

> [!NOTE]  
> POR COMPLETAR.

## `then` vs `async/await`

> [!NOTE]  
> POR COMPLETAR.

### Uso de `try/catch` con `async/await`

> [!NOTE]  
> POR COMPLETAR.

## `Promise.all` vs `Promise.allSettled` vs `for await`

> [!NOTE]  
> POR COMPLETAR.

# Buenas prácticas

[Haciendo clic aquí](https://peacockindia.mintlify.app/introduction) encontrarás una introducción a mejores prácticas de programación (calidad, mantenibilidad, escalabilidad, legibilidad): 




