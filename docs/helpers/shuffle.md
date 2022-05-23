# shuffle

## ES Module

```ts
// tree-shakeable import
import { shuffle } from "chance";

// usage
shuffle({array})

//Example
// returns ['echo', 'delta', 'alpha', 'charlie', 'bravo']
shuffle({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo']});
```

Given an array, scramble the order and return it.

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `shuffle` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

//Example
// returns ['echo', 'delta', 'alpha', 'charlie', 'bravo']
chance.shuffle({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo']});

```
