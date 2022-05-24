# pickset

## ES Module

```ts
// tree-shakeable import
import { pickSet } from "chance";

//usage
pickSet({array, count})

//Example
//returns ['echo', 'alpha', 'bravo']
pickSet({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo'], count: 3});

```

Return a set of random elements from array with length of count.

Optionally omit the count to retrieve a set with length 1.

```ts
// tree-shakeable import
import { pickSet } from "chance";

//Example
//returns ['delta']
pickSet({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo']});
```

If you pass count as 0. It returns an empty array.

```ts
//Example
//returns []
pickSet({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo'], count: 0});
```

If you pass count as negative number or array with length 0. Throws an error.

```ts
//Example

//returns "Chance: count argument from pickSet() must be a non-negative number."
pickSet({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo'], count: -1});

//returns "Chance: pickSet() cannot pick set from an empty array."
pickSet({array: []});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `pickSet` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts

// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

//Example
//returns ['echo', 'alpha', 'bravo']
chance.pickSet({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo'], count: 3});

//returns ['delta']
chance.pickSet({array: ['alpha', 'bravo', 'charlie', 'delta', 'echo']});
```
