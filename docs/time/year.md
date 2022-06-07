# year

## ES Module

```ts
// tree-shakeable import
import { year } from "chance";

//usage
// year({min?:number, max?:number)?, seed)

// returns '2079'
year();
```

Return a random year.

By default, min is the current year and max is 100 years greater than min.

This is returned as a string. If for some reason you need it numeric, just
parse it:

```ts
// returns 2042
parseInt(year());
```

Optionally specify min, max, or both to limit the range.

```ts
// returns '1983'
year({min: 1900, max: 2100});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `year` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns '2079'
chance.year();
```
