# n

## ES Module

```ts
// tree-shakeable import
import { n, natural } from "chance";

// usage
n({fn: randomFunction, n?: number, args?:<any>[]})

//example
//returns [1, 4, 6, 9, 8, 2, 3, 5, 7, 1] 
n({fn: natural, n: 10, args:[{min: 1, max:10}]})
```

Provide any function that generates random stuff (usually another **Chance** function) and a number and `n()` will generate an array of items with a length matching the length you specified.

If you don't pass n for `n`, the standard value for it will be 1. Any options that would be sent to the random function can be added in args.

```ts
// tree-shakeable import
import { n, natural } from "chance";

//example
//returns [4] 
n({fn: natural, args:[{min: 1, max:10}]})
```

Note, these items are not guaranteed to be unique. If that is the intent, see [`chance.unique()`](http://chancejs.com/#unique). Also, you must verify if you random function needs arguments to do its duty. Below has example of natural without arguments, because it doesn't need the arguments to return random natural number.

```ts
// tree-shakeable import
import { n, natural } from "chance";

//example
//returns [5034] 
n({fn: natural})
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `n` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");


//example
//returns [1, 4, 6, 9, 8, 2, 3, 5, 7, 1] 
chance.n({fn: chance.natural.bind(chance), n: 10, args:[{min: 1, max:10}]})
//don't forget to bind chance.natural to chance, due `this` of chance.natural lost his reference when it passed to chance.n 
```
