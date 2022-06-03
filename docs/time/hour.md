# hour

## ES Module

```ts
// tree-shakeable import
import { hour } from "chance";

// usage
hour({min?, max?, twentyfour?}?, seed?)

//Example
//returns 10
hour() 
```

Returns a random hour.

By default, returns an hour from 0 to 11 for a standard [12-hour clock][12h].

Can optionally specify a full twenty-four.

```ts
// returns 21(between 0 and 23)
hour({twentyfour: true});
```

This will return an hour from 0 to 23.

Also, you can specify the mininum hour and maximum hour that you want generate.

```ts
// returns 15(between 10 and 20)
hour({min:10, max: 20, twentyfour: true});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `hour` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

//Example
//returns 10
chance.hour()
```
