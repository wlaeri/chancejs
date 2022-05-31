# unique

## ES Module

```ts
// tree-shakeable import
import { unique, state} from "chance";

//usage
unique({fn, args?, n?, comparator?})

//Example
//returns ["SC", "WA", "CO", "TX", "ND"]
unique({fn: state, n: 5});
```

Provide any function that generates random stuff (usually another **Chance** function) and a number and `unique()` will generate a random array of unique (not repeating) items with a length matching the one you specified.

This is helpful when there are a limited number of options and you want a bunch but want to ensure each is different.

Optionally specify the comparator used to determine whether a generated item is in the list of already generated items. By default the comparator just checks to see if the newly generated item is in the array of already generated items. This works for most simple cases (such as `chance.state()`) but will not work if the generated item is an object (because the `Array.prototype.indexOf()` method will not work on an object since 2 objects will not be strictly equal, `===`, unless they are references to the same object).

You can also specify any arbitrary options in this third argument and they'll be passed along to the method you specify as the first.

For example, let's say you want to retrieve 10 unique integers between 0 and 100. This is easily achievable by specifying `chance.integer` as hte function, 10 as the number to retrieve, and a min/max in the options.

```ts
import { unique, integer } from "chance";
//returns [78, 49, 7, 87, 59, 89, 84, 62, 60, 63]
unique({fn: integer, n: 10, args: [{min: 0, max: 100}]});
```

Note, there could be cases where it is impossible to generate the unique number. For example, if you choose `chance.state` as shown above as the random function and want say, 55 uniques, **Chance** will throw a RangeError because it is impossible to generate 55 uniques because there are only 51 states in the available pool (50 states plus the District of Columbia).

```ts
//throws RangeError: Chance: n is likely too large for sample set
unique({fn: chance.state, n: 55});
```

If you don't pass any value for n, the unique array will return an array with length 1

```ts
//returns [204]
unique({ fn: natural });
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `unique` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns [1, 10, 5, 8, 2]
chance.unique({fn: chance.natural.bind(chance), n: 5, args: [{ min: 1, max: 10 }]});
```
