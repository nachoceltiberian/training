# **Training**
Pequeña introducción a conceptos básicos de TypeScript si no sabes conceptos propios de JS o TS.
# Índice
- [**Training**](#training)
- [Índice](#índice)
- [Qué es TypeScript](#qué-es-typescript)
  - [Características principales](#características-principales)
  - [Inferencia de datos](#inferencia-de-datos)
    - [Beneficios de la inferencia de tipos](#beneficios-de-la-inferencia-de-tipos)
- [Tipos de datos primitivos](#tipos-de-datos-primitivos)
  - [Valores primitivos](#valores-primitivos)
- [Estructuras de datos](#estructuras-de-datos)
  - [Objetos](#objetos)
  - [Declaración de tipos con `interface` y `type`](#declaración-de-tipos-con-interface-y-type)
    - [`type`](#type)
    - [`interface`](#interface)
    - [Consideraciones para elegir entre `type` e `interface`](#consideraciones-para-elegir-entre-type-e-interface)
  - [Arrays y Tuplas](#arrays-y-tuplas)
    - [Arrays](#arrays)
      - [Método `Array.map`](#método-arraymap)
      - [Método `Array.filter`](#método-arrayfilter)
      - [Método `Array.reduce`](#método-arrayreduce)
    - [Tuplas](#tuplas)
- [Funciones](#funciones)
  - [Tipar funciones](#tipar-funciones)
  - [Declaración de funciones](#declaración-de-funciones)
  - [Funciones como Tipos](#funciones-como-tipos)
  - [Funciones opcionales y por defecto](#funciones-opcionales-y-por-defecto)
  - [Sintaxis de spread y rest (`...`)](#sintaxis-de-spread-y-rest-)
    - [Spread](#spread)
    - [Rest](#rest)
- [Asincronía](#asincronía)
  - [Callbacks](#callbacks)
  - [Promesas](#promesas)
    - [Como se crea una promesa](#como-se-crea-una-promesa)
  - [`then` vs `async/await`](#then-vs-asyncawait)
  - [`Promise.all` vs `Promise.allSettled` vs `for await`](#promiseall-vs-promiseallsettled-vs-for-await)
- [Buenas prácticas](#buenas-prácticas)

# Qué es TypeScript

TypeScript es un superconjunto tipado de JavaScript que se compila a JavaScript estándar y se utiliza para el desarrollo de aplicaciones web y de servidor.

## Características principales

1. **Tipado Estático**:  
TypeScript agrega un sistema de tipos estático opcional que permite declarar tipos para variables, parámetros de función, propiedades de objeto, etc. Esto ayuda a detectar errores de tipo durante el desarrollo y proporciona un código más robusto y mantenible.
2. **Compatibilidad con JavaScript**:  
TypeScript es un superconjunto de JavaScript, lo que significa que todo el código JavaScript válido también es válido en TypeScript. Esto facilita la transición gradual de un proyecto JavaScript existente a TypeScript.
3. **Características de Última Generación de ECMAScript**:  
TypeScript admite todas las características de JavaScript de última generación especificadas en ECMAScript, además de agregar características propias, como clases, interfaces, módulos y decoradores.
4. **Compilación y Transpilación**:  
El código TypeScript se compila a JavaScript estándar para ejecutarse en cualquier entorno JavaScript. Esta compilación se realiza a través de un proceso de transpilación, donde el código TypeScript es convertido a JavaScript.

## Inferencia de datos

Es una característica clave de TypeScript que permite al compilador deducir automáticamente el tipo de una variable basándose en su valor y en cómo se usa en el código. Esto elimina la necesidad de especificar explícitamente los tipos de datos en muchos casos, lo que hace que el código sea más conciso y fácil de mantener.

La inferencia de tipos en TS ocurre en varias situaciones:
1. **Asignación de valores iniciales**:
```typescript
let numero = 10; // TypeScript infiere que 'numero' es de tipo 'number'
let texto = "Hola"; // TypeScript infiere que 'texto' es de tipo 'string'
let esVerdadero = true; // TypeScript infiere que 'esVerdadero' es de tipo 'boolean'
```

2. **Inferencia de Tipos en Funciones**:
```typescript
function suma(a: number, b: number) {
  return a + b; // TypeScript infiere que el tipo de retorno es 'number'
}
```

3. **Arrays y Objetos literales**:
```typescript
let numeros = [1, 2, 3]; // TypeScript infiere que 'numeros' es de tipo 'number[]'
let persona = { nombre: "Juan", edad: 30 }; // TypeScript infiere que 'persona' es de tipo '{ nombre: string, edad: number }'
```

4. **Contexto de uso**:
```typescript
let x = 10;
let y = "Hola";

x = y; // Error: Type 'string' is not assignable to type 'number'
```
En este caso, TypeScript deduce que x es de tipo number basándose en su valor inicial. Luego, al intentar asignarle un valor de tipo string (el tipo de y), TypeScript emite un error de tipo porque los tipos no coinciden.

> [!WARNING]
> No hay que fiarse de que en tiempo de ejecución TypeScript valide tipos, porque los ignora.

### Beneficios de la inferencia de tipos

- Reduce la necesidad de especificar tipos explícitamente, lo que hace que el código sea más conciso y legible.

- Ayuda a detectar errores de tipo durante el desarrollo, ya que el compilador TypeScript puede identificar inconsistencias de tipos automáticamente.

- Permite a los desarrolladores escribir código más rápido al eliminar la necesidad de escribir tipos redundantes.

# Tipos de datos primitivos

Ver vídeo de [midudev](https://www.youtube.com/watch?v=fUgxxhI_bvc).

> [!NOTE]  
> POR COMPLETAR.

Existen 6 tipos de datos primitivos:
- Undefined
- Boolean
- Number
- String
- BigInt
- Symbol

Null es un tipo primitivo especial que tiene un uso adicional a su valor: **si el objeto no se hereda**, se muestra null.

## Valores primitivos

- Tipo `boolean`  
  Dos valores, **true** o **false**.
- Tipo `null`  
  Tiene el valor **null**.
- Tipo `undefined`  
  No se le ha asignado un valor.
- Tipo `number`  
  Valor en formato binario de 64 bits de doble precisión. Además de representar punto flotante, tiene 3 valores simbólicos:
  - `+Infinity`
  - `-Infinity`
  - `NaN` (Not a Number)
- Tipo `bingint`  
  Puede representar números enteros con precisión arbitraria. Se declaran con una *n* al final: `let miliseconds: bigint = 100n`
- Tipo `string`  
  Para representar cadenas de texto.
- Tipo `symbol`  
  Valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto.  
  Ejemplo:
  ```typescript
  // Creación de un símbolo
  const mySymbol = Symbol('description');

  // Uso del símbolo como clave de propiedad en un objeto
  let myObject = {
      [mySymbol]: 'This is a custom property'
  };

  // Acceso a la propiedad utilizando el símbolo
  console.log(myObject[mySymbol]);
  ```


> [!NOTE]  
> Ver https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures para mayor profundidad.

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
> Además de definir objetos con propiedades específicas en una sola declaración, TypeScript también permite definir tipos de objetos personalizados utilizando **interfaces o tipos**:
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

## Declaración de tipos con `interface` y `type`

En TypeScript tanto `type` como `interface` se utilizan para definir tipos de datos, pero tienen alguna diferencias clave en su funcionamiento y propósito.

### `type`

Se utiliza para crear alias de tipos, lo que significa que puedes darle un nombre a un tipo existente o combinar varios tipos en uno solo. Puedes usar `type` para definir tipos primitivos, tipos de objetos, tipos de funciones y combinaciones complejas de tipos:

1. **Alias de Tipo para Tipos Primitivos**:

```typescript
type Edad = number;
type Nombre = string;
```

2. **Alias de Tipo para Tipos de Datos Complejos**:

```typescript
type Coordenada = { x: number; y: number };
type Empleado = { nombre: string; edad: number };
```

3. **Alias de Tipo para Uniones de Tipos**:

```typescript
type Resultado = number | string | boolean;

// Incluso uniones de tipos con valores
type Calificacion = number | 'No presentado'
```

4. **Alias de TIpo para intersecciones de Tipos**:

```typescript
type ConPersona = { persona: Persona };
type ConEdad = { edad: number };

type PersonaConEdad = ConPersona & ConEdad;
```

5. **Alias de Tipo para Tipos de Funciones**:

```typescript
type Suma = (a: number, b: number) => number;
type Saludo = (nombre: string) => string;
```

6. **Alias de Tipo para TIpos Genéricos**:

```typescript
type Par<T> = [T, T];
```

7. **Alias de Tipo para Tipos de Array**:

```typescript
type Numeros = number[];
```

8. **Alias de Tipo para Tipos de Objetos Indexados**:

```typescript
type Indice = { [clave: string]: number };
```

9.  **Alias de Tipo para Tipos de Objeto Readonly**:

```typescript
type ReadonlyPersona = Readonly<Persona>;
```

10. **Alias de Tipo para Tipos de Objeto Pick y Omit**:

```typescript
type SoloNombre = Pick<Persona, 'nombre'>;
type SinEdad = Omit<Persona, 'edad'>;
```

11. **Template Union Types**:

```typescript
type UUID = `${string}-${string}-${string}-${string}-${string}`
```

12. **Intersection Types**:

```typescript
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```

13. **Type Indexing**:

```typescript
type Client = {
  name: string,
  address: {
    street: string,
    city: string,
  }
}

// Type from value
const addressClient: Client['address'] = {
  street: 'Gran Vía',
  city: 'Granada'
}

type Address = typeof addressClient
const addressCeltiberian: Address = {
  street: 'Avenida de la Innovación',
  city: 'Granada'
}
```

14. **Type from function return**:

```typescript
function createAddress() {
  return {
    street: 'Calle Gorrión',
    city: 'Granada'
  }
}

type Address = ReturnType<typeof createAddress>;
```

### `interface`

En TypeScript, una `interface` es una forma de definir la estructura de un objeto, incluyendo los nombres de sus propiedades y los tipos de datos de esas propiedades. Proporciona una forma de definir contratos en tu código, especificando qué propiedades y métodos deben estar presentes en un objeto para cumplir con ciertas funcionalidades.

Casos de Uso de Interfaces:

1. **Definición de Estructuras de Datos**: Las interfaces se utilizan para definir la forma de los objetos y sus propiedades en TypeScript

```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}
```

2. **Contratos de Clases**: Las interfaces se pueden utilizar para definir contratos que las clases deben cumplir.

```typescript
interface Figura {
  calcularArea(): number;
}

class Rectangulo implements Figura {
  // Implementación del método calcularArea()
}

class Circulo implements Figura {
  // Implementación del método calcularArea()
}

```

3. **Herencia de Interfaces**: Las interfaces pueden heredar propiedades y métodos de otras interfaces.

```typescript
interface Animal {
  nombre: string;
  hacerSonido(): void;
}

interface Perro extends Animal {
  raza: string;
}
```

4. **Objetos Anónimos y Tipos Genéricos**: Las interfaces se pueden utilizar para definir tipos de objetos anónimos o tipos genéricos.

```typescript
interface Respuesta<T> {
  exito: boolean;
  datos?: T;
  mensaje?: string;
}

function procesarRespuesta(respuesta: Respuesta<string>) {
  // Implementación de la función
}
```

5. **Documentación y Contratos de API**: Las interfaces pueden utilizarse para documentar y definir los contratos de las APIs que deben cumplir los objetos

```typescript
interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  telefono?: string;
}
```

### Consideraciones para elegir entre `type` e `interface`

- Si necesitas crear un alias de tipo o combinar varios tipos en uno solo, usa `type`.
- Si necesitas definir la forma de un objeto y sus propiedades, usa `interface`.
- Si necesitas extender o implementar otras estructuras de datos, como en el caso de la herencia, es más común utilizar `interface`.

En general, la elección entre `type` e `interface` a menudo depende de las necesidades específicas del proyecto y de la preferencia del desarrollador. Ambos pueden ser útiles en diferentes contextos y se pueden utilizar juntos en un mismo proyecto cuando sea necesario.

## Arrays y Tuplas
Son tipos especiales de objetos. Pueden contener cualquier tipo de datos. Se definen con `[]`

### Arrays
Los [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) en TypeScript son colecciones ordenadas de elementos del **mismo tipo**. La longitud de un array puede ser dinámica. Se pueden definir de varias formas:
- Declaración de tipo explícito:
  ```typescript
  let numbers: number[] = [1,2,3,4,5];
  ```
- Declaración de tipo utilizando Array<T>:
  ```typescript
  let numbers: Array<number> = [1,2,3,4,5];
  ```
- Declaración con inferencia de tipos:
  ```typescript
  let numbers = [1,2,3,4,5];
  ```

Ejemplo:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let colors: string[] = ['red', 'green', 'blue'];

// Acceso a los elementos de los arrays:
console.log(number[0]); // 1
console.log(number[4]); // 5
console.log(colors[1]); // "green"
```
#### Método `Array.map`

Crea un nuevo array con los resultados de llamar a la función proprocionada en cada elemento del array original.

```typescript
const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map(numero => numero * 2);

console.log(duplicados); // Resultado: [2, 4, 6, 8, 10]
```

#### Método `Array.filter`

El método `filter` crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.

```typescript
const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares); // Resultado: [2, 4]
```

#### Método `Array.reduce`

El método `reduce` ejecuta una función reductora sobre cada elemento del array, devolviendo un único valor. El primer parámetro debe ser una función reductora y el segundo el valor que tomará el acumulador al inicio.

```typescript
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma); // Resultado: 15
```

> [!NOTE]
> Para ver más ejemplos al respecto, leer archivo [`map-filter-reduce.ts`](map-filter-reduce.ts) 

---
### Tuplas
Las tuplas en TypeScript son arreglos con un número fijo de elementos, donde cada elemento puede tener un **tipo específico**. A diferencia de los arrays, las tuplas permiten definir el tipo y la posición de cada elemento de forma precisa.

```typescript
let point: [number, number] = [10, 20];
console.log(`${point[0]} y ${point[1]}`); // 10 y 20
```
En este ejemplo, `point` es una tupla que tiene exactamente dos elementos, ambos de tipo `number`, y cada elemento representa las coordenadas x y y de un punto en el plano cartesiano.  

En resumen, los arrays son colecciones dinámicas de elementos del mismo tipo, mientras que las tuplas son arreglos con un número fijo de elementos, donde cada elemento puede tener un tipo diferente y está fuertemente tipado según su posición.

# Funciones
En TypeScript, las funciones son objetos de primer orden que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas como valores desde otras funciones. Sin embargo, TypeScript agrega tipos estáticos para ayudar a detectar errores de tipo en tiempo de compilación.

## Tipar funciones

En TypeScript, puedes definir los tipos de los parámetros y el tipo de retorno de una función:

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}
```
En este ejemplo, 'a' y 'b' son parámetros de tipo `number`, y el tipo de retorno de la función también es `number`.  

---

```typescript
function saludar({name, age}) {
  console.log(`Hola ${name}, tienes ${age} años`)
}
```
Este ejemplo está mal, porque podemos pasarle esto como parámetro a la función y se lo tragaría:

```typescript
saludar({ name: 2, age: 'Pepe'})
```

Uno podría pensar que añadiendo tipos a los parámetros de la función esto se soluciona:

```typescript
function saludar({name: string, age: number}) {
  console.log(`Hola ${name}, tienes ${age} años`)
}
```
> [!CAUTION]
> Esto está mal también, porque entra en colisión con la sintaxis de JavaScript, porque la sintaxis de JS te permite renombrar la propiedad de un objeto, y eso es lo que estaría pasando. `name` lo está transformando al nombre `string` y `age` al nombre `number`. 

Para poder tipar correctamente esto hay dos formas:



```typescript
function saludar({ name, age }: {name: string, age: number}) {
    console.log(`Hola ${name}, tienes ${age} años`)
}
```

```typescript
function saludar(persona: { name: string, age: number }) {
    const {name, age} = persona
    console.log(`Hola ${name}, tienes ${age} años`)
}
```
---

Otro ejemplo:

```typescript
const sayHiFromFunction = (fn) => {
  fn('Miguel')
}

sayHiFromFunction((name) => {
  console.log(`Hola ${name}`)
})
```

Esto no sería correcto, tenemos que tipar:

```typescript
const sayHiFromFunction = (fn: Function) => {
  fn('Miguel')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})
```

> [!CAUTION]
> Un error muy común es tipar las funciones como `Function`, porque podríamos escribir, por ejemplo, algo como esto:
> ```typescript
> sayHiFromFunction(Math.random())
> ```
> `Function` es el `any` de las funciones, esto hay que evitarlo siempre que podamos.

Tenemos que decirle exactamente la función que necesitamos:

```typescript
const sayHiFromFunction = (fn: (name: string) => void) => {

}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)
```

---

Hay 2 formas de tipar **arrow functions**:

```typescript
const sumar = (a: number, b: number): number => {
  return a + b
}
```

```typescript
const sumar: (a: number, b: number) => number = (a, b) => {
  return a + b
}
```

## Declaración de funciones

En TypeScript, puedes declarar funciones de varias maneras:
1. **Declaración de funciones con nombre**:
    ```typescript
    function sumar(a: number, b: number): number {
      return a + b;
    }
    ```
2. **Expresión de función asignada a una variable** (función anónima):
    ```typescript
    const sumar = function(a: number, b: number): number {
      return a + b;
    };
    ```
3. **Expresión de función flecha asignada a una variable** (función flecha anónima):
    ```typescript
    const sumar = (a: number, b: number): number => a + b; 
    ```

## Funciones como Tipos

En TypeScript, puedes utilizar funciones como tipos:

```typescript
type Operacion = (a: number, b: number) => number;

const sumar: Operacion = (a, b) => a + b;
```

Aquí, `Operacion` es un tipo que representa una función que toma dos parámetros `number` y devuelve un `number`. La variable `sumar` debe coincidir con este tipo.

## Funciones opcionales y por defecto

Puedes hacer que los parámetros de una función sean opcionales o tengan un valor por defecto:

```typescript
function saludar(nombre?: string) {
  return `¡Hola, ${nombre || 'Mundo'}!`;
}
```

En este ejemplo, `nombre` es un parámetro opcional que puede ser una cadena, y si no se proporciona, se utiliza el valor por defecto `'Mundo'`.

## Sintaxis de spread y rest (`...`)

Son funcionalidades relacionadas en TypeScript que se utilizan para manejar un número variable de elementos en arrays, objetos y funciones. Aunque comparten el mismo operador (`...`), tienen usos distintos.

- **[Spread Operator (...)](#spread)**: Se utiliza para descomponer elementos de un iterable en elementos individuales, o para combinar varios iterables en uno solo.

- **[Rest Parameter (...)](#rest)**: Se utiliza para recoger un número variable de argumentos en forma de un array dentro de una función.

### [Spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
La sintaxis de **spread (`...`)** se utiliza para **descomponer elementos de un iterable**, como un array, objeto o cadena, en elementos individuales.  Se utiliza en la llamada a funciones o al crear nuevos arrays u objetos. También se puede utilizar para combinar múltiples iterables en uno solo.

Ejemplos:
1. Descomponer un array:
```typescript
const array = [1, 2, 3];
console.log(...array); // Resultado: 1 2 3
```
2. Pasar un array como argumentos a una función:
```typescript
function sumar(a: number, b: number, c: number) {
  return a + b + c;
}

const numeros = [1, 2, 3];
const resultado = sumar(...numeros);
console.log(resultado); // Resultado: 6
```
3. Combinar arrays:
```typescript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // Resultado: [1, 2, 3, 4, 5, 6]
```
4. Copiar un array:
```typescript
const original = [1, 2, 3];
const copia = [...original];
console.log(copia); // Resultado: [1, 2, 3]
```
5. Descomponer propiedades de un objeto:
```typescript
const objeto = { a: 1, b: 2, c: 3 };
const { a, ...resto } = objeto;
console.log(a);      // Resultado: 1
console.log(resto);  // Resultado: { b: 2, c: 3 }
```
6. Descomponer caracteres de una cadena:
```typescript
const cadena = "hello";
console.log([...cadena]); // Resultado: ["h", "e", "l", "l", "o"]
```
---

### [Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
La sintaxis del parámetro **rest (`...`)** permite definir una **función que pueda aceptar un número variable de argumentos** como un array. Esto te permite trabajar con un número variable de argumentos dentro de una función sin tener que definir todos los parámetros explícitamente.  
Ejemplos:
1. Función que, dado un número indefinido de arrays de números, devuelva la suma de los números
```typescript
function sumar(...numeros: number[]): number {
  // De la forma tradicional...
  let total: number = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;

  // ...o usando el método de Array "reduce"
  return numeros.reduce((total, numero) => total + numero, 0);
}
```
2. Función que, dada una lista de numeros, devuelva todos menos el primero
```typescript
function rest(numbers: number[]): number[] {
  const [, ...rest] = numbers;
  return rest;
}
```
```typescript
function rest([, ...rest]: number[]): number[] {
  return rest;
}
```
3. Crea una función que combine un número indeterminado de objetos en uno solo. Si ambos objetos tienen la misma propiedad, el valor del primer objeto debe prevalecer.  
Ejemplo:  
`combine({a: 1, b: 2}, {b: 3, c: 4}, {c: 5, d: 6}) // {a: 1, b: 2, c: 4, d: 6}`

```typescript
function combine(...objects: object[]): object {
  return objects.reduce((acc, obj) => { ...acc, ...obj }, {});
}
```

# Asincronía

La asincronía se refiere a la capacidad de realizar **múltiples tareas independientes** en un programa sin tener que esperar a que una tarea se complete antes de comenzar la siguiente. Permite ejecutar operaciones en **segundo plano** mientras otras partes del programa continúan ejecutándose, lo que mejora la eficiencia y la capacidad de respuesta del sistema. 

Se utiliza principalmente para manejar tareas que pueden tomar tiempo para completarse, como solicitudes de red, E/S de archivos y temporizadores.

En JavaScript y TypeScript, hay varias formas de trabajar con la asincronía:

1. **Callbacks**:
 Se utilizan funciones callbacks para manejar operaciones asincrónicas. Una función de callback se pasa como argumento a una función asincrónica y se ejecutará una vez que la operación asincrónica se complete.

2. **Promesas**: Las promesas son objetos que representan la eventual completitud o falla de una operación asincrónica. Permiten escribir código más limpio y legible al evitar el anidamiento excesivo de callbacks.

3. **Async/Await**: Las palabras clave async y await proporcionan una sintaxis más limpia y concisa para trabajar con código asincrónico. async se utiliza para declarar funciones asincrónicas, mientras que await se utiliza dentro de funciones async para esperar la resolución de una promesa.

## Callbacks 

Los callbacks son funciones que se pasan como argumentos a otras funciones y que serán llamadas posteriormente, generalmente después de que se complete una operación asíncrona o después de cierto tiempo.

Permiten ejecutar código de manera secuencial, asegurándose de que una determinada accion se realice solo después de que otra acción haya terminado.

Ejemplo:

```typescript
function operacionAsincronica(callback: (resultado: string) => void) {
  setTimeout(() => {
    const resultado = 'Resultado de la operación asincrónica';
    callback(resultado);
  }, 2000); // Simulamos un retraso de 2 segundos
}

function manejarResultado(resultado: string) {
  console.log('El resultado es:', resultado);
}

// Llamada a la función operacionAsincronica con el callback manejarResultado
operacionAsincronica(manejarResultado);
```


## Promesas

Una promesa es un objeto que representa la eventual completitud o falla de una operacion asíncrona. Básicamente, una promesa es un contenedor para un valor que puede estar disponible ahora, en el futuro o nunca.  
Una promesa puede encontrarse en uno de los tres estados siguientes:
1. **Pendiente (Pending)**: El estado inicial de una promesa. Significa que la operación asíncronas aún no ha sido completada o rechazada.
2. **Cumplida (Fulfilled)**: La operación asíncronas fue completada exitosamente y la promesa ahora tiene un valor.
3. **Rechazada (Rejected)**: La operación asíncronas falló y la promesa tiene un motivo (un error) por el cual fue rechazada.

Las promesas se utilizan principalmente para trabajar con operaciones asíncronas, como solicitudes HTTP, lectura de archivos, temporizadores, etc. Permiten escribir código más limpio y legible, evitando el anidado excesivo de callbacks (lo que se conoce como "callback hell").

### Como se crea una promesa

Se puede crear una promesa utilizando la clase **[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**. Una promesa se crea con una función de ejecutor que recibe dos parámetros: `resolve` y `reject`. Estos parámetros son funciones que se utilizan para resolver (cumplir) o rechazar la promesa, respectivamente. La función de ejecutor se ejecuta de inmediato, y puede contener código asincrónico que eventualmente resolverá o rechazará la promesa.

```typescript
const miPromesa = new Promise<string>((resolve, reject) => {
  // Simulación de una operación asincrónica que se resuelve después de 2 segundos
  setTimeout(() => {
    const exito = Math.random() < 0.5; // 50% de probabilidad de éxito
    if (exito) {
      resolve('Operación completada exitosamente');
    } else {
      reject(new Error('Error en la operación'));
    }
  }, 2000);
});

```

Ejemplo simple de como crear y usar una promesa para simular una operacion asíncrona:
- Usando `then`:

  ```typescript
  function esperarUnSegundo(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Operación completada después de 1 segundo');
      }, 1000);
    });
  }

  esperarUnSegundo()
    .then((resultado) => {
      console.log(resultado); // Operación completada después de 1 segundo
    })
    .catch((error) => {
      console.error('Hubo un error:', error);
    });
  ```

- Usando `async/await`:
  ```typescript
  function esperarUnSegundo(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Operación completada después de 1 segundo');
      }, 1000);
    });
  }

  async function ejecutarOperacion() {
    try {
      const resultado = await esperarUnSegundo();
      console.log(resultado); // Operación completada después de 1 segundo
    } catch (error) {
      console.error('Hubo un error:', error);
    }
  }

  ejecutarOperacion();
  ```

Más adelante comentaremos las [diferencias entre `then` y `async/await`](#then-vs-asyncawait).


## `then` vs `async/await`

Cuando hacemos peticiones asíncronas, podemos usar tanto `then` como `async/await`. Se diferencian en que, en una función `async`, TypeScript pausará la ejecución hasta que la promesa se resuelva o rechace. Con `then`, el resto de la función continuará su ejecución pero TypeScript no ejecutará el callback `then` hasta que la promesa se resuelva/rechace:

```typescript
function testThen() {
  let example: Promise<Response> = fetch('https://test.com/'); // Supongamos que fetch tarda 1 minuto
  example.then(() => console.log('Tercero'));
  console.log('Primero');
}
testThen();
console.log('Segundo');
```

```typescript
async function testAsyncAwait() {
  let example: Response = await fetch('https://test.com/'); // Supongamos que fetch tarda 1 minuto
  console.log('Segundo');
}
testAsyncAwait();
console.log('Primero');
```

Como existe la posibilidad de que las promesas se rechacen o haya algún error, tenemos que capturar los errores con un `try/catch`:

```typescript
function testThenTryCatch() {
  let example: Promise<Response> = fetch('https://test.com/'); // Supongamos que fetch tarda 1 minuto
  example
    .then(() => console.log('Tercero'))
    .catch((error) => console.log('Error', error););
  console.log('Primero');
}
testThenTryCatch();
console.log('Segundo');
```

```typescript
async function testAsyncAwaitTryCatch() {
  try {
    let example: Response = await fetch('https://test.com/'); // Supongamos que fetch tarda 1 minuto
    console.log('Segundo');
  } catch (error) {
    console.log('Error', error);
  }
}
testAsyncAwaitTryCatch();
console.log('Primero');
```
> [!NOTE]  
> TODO: Igual hacer una conclusión al respecto.

## `Promise.all` vs `Promise.allSettled` vs `for await`

1. `Promise.all`:  
Toma un array de promesas y devuelve una sola promesa que se resuelve cuando todas las promesas en el array se han resuelto, o se rechaza tan pronto como una de las promesas en el array se rechaza.
   - **Resolución**: Si todas las promesas se resuelven, la promesa devuelta por `Promise.all` se resuelve con un array que contiene los resultados de cada promesa en el mismo orden que el array original de promesas.
   - **Rechazo**: Si una de las promesas se rechaza, la promesa devuelta por `Promise.all` se rechaza con el motivo del primer rechazo encontrado.
  
    ```typescript
    const promesas: Promise<any>[] = [operacionAsincronica1(), operacionAsincronica2()];

    Promise.all(promesas)
      .then((resultados) => {
        console.log('Todos los resultados:', resultados);
      })
      .catch((error) => {
        console.error('Al menos una promesa fue rechazada:', error);
      });
    ```

2. `Promise.allSettled`:  
Similar a `Promise.all`, pero espera a que todas las promesas en el array se resuelvan o se rechace, y luego duelve una sola promesa que se esuelve con un array de objetos que representan el resultado de cada promesa, ya sea resuelta o rechazada.
   - **Resultado**: Cada objeto en el array de resultados contiene una propiedad `status` que indica si la promesa se resolvió ("**fulfilled**") o se rechazó ("**rejected**"), y una propiedad `value` o `reason` que contiene el valor resuelto o el motivo del rechazo, respectivamente.
  
    ```typescript
    const promesas: Promise<any>[] = [operacionAsincronica1(), operacionAsincronica2()];

    Promise.allSettled(promesas)
      .then((resultados) => {
        console.log('Todos los resultados:', resultados);
      });
    ```

3. `for await...of`:  
   - **Funcionamiento**: Es una construcción de bule que permite iterar de forma asíncrona sobre iterables que devuelven promesas, como un array de promesas o un objeto iterable que devuelve promesas.  
   - **Uso**: Permite escribir código asíncrono de manera síncrona, ya que `await` se utiliza dentro del bucle para esperar la resolución de cada promesa antes de continuar con la siguiente iteración.   
   - **Beneficio**: Útil para manejar múltiples promesas de manera **secuencial**, esperando a que cada una se resuelva antes de continuar con la siguiente iteración.
  
    ```typescript
    const promesas: Promise<any>[] = [operacionAsincronica1(), operacionAsincronica2()];

    Promise.allSettled(promesas)
      .then((resultados) => {
        console.log('Todos los resultados:', resultados);
      });
    ```
    `Promise.all` y `Promise.allSettled` se utilizan para manejar múltiples promesas en **paralelo**, mientras que `for await...of` se utiliza para manejarlas de manera **secuencial**, esperando a que cada una se resuelva antes de continuar con la siguiente. 

> [!NOTE]
> Más ejemplos de promesas en el archivo [promises.js](promises.js).


# Buenas prácticas

[Haciendo clic aquí](https://peacockindia.mintlify.app/introduction) encontrarás una introducción a mejores prácticas de programación (calidad, mantenibilidad, escalabilidad, legibilidad).




