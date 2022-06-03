# minute

## ES Module

```ts
// tree-shakeable import
import { minute } from "chance";

//usage
//minute({min?:number, max?:number}?, seed?)

// returns 45
minute();
```

Return a random minute.

By default, returns a minute from 0 to 59. Idea is for generating a clock time. But you can specify the min and max value for the random minute.

```ts
// returns 39
minute({min: 30, max: 45});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `minute` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns 29
chance.minute();

// returns 34
chance.bool({min: 30, max: 35});
```
