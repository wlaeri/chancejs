# ampm

## ES Module

```ts
// tree-shakeable import
import { ampm } from "chance";

//usage
// returns 'am'
ampm();
```

Return am or pm. Very simple.

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `ampm` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns 'pm'
chance.ampm();
```
