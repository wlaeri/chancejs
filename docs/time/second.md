# second

## ES Module

```ts
// tree-shakeable import
import { second } from "chance";

// usage
second({min?:number, max?:number}?, seed?)

//Example
// returns 19
second();
```

Return a random second.

By default, returns a second from 0 to 59. Idea is for generating a clock time.

Also, you can specify the min and max value for the second that will be generated.

```ts
//returns 40
second({min: 20, max: 50});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `second` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns  10
chance.second();
// returns 49
chance.second({ min: 30});
```
