# millisecond

## ES Module

```ts
// tree-shakeable import
import { millisecond } from "chance";

// returns 534
millisecond();
```

Return a random millisecond.

By default, returns a millisecond from 0 to 999. Idea is for generating a clock time.

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `millisecond` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns 493
chance.millisecond();
```
