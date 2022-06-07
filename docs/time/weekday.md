# weekday

## ES Module

```ts
// tree-shakeable import
import { weekday } from "chance";

// usage
weekday({weekdayOnly?:boolean}, seed?);

//Example
// returns 'Wednesday'
weekday();
```

Return a random day of week.

By default, weekday_only is false. If set to true it will never return Saturday or Sunday.

```ts
// returns 'Tuesday'
chance.weekday({weekdayOnly: true});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `weekday` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// usage
chance.weekday({weekdayOnly?:boolean}, seed?);

//Example
// returns 'Saturday'
chance.weekday();
```
