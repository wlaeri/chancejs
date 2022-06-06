# timestamp

## ES Module

```ts
// tree-shakeable import
import { timestamp } from "chance";

// returns 576556683
timestamp();
```

Return a random timestamp. This is a standard Unix time, so a random number of
seconds since January 1, 1970.

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `timestamp` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns 576556683
chance.timestamp();
```
