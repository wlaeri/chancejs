# pad

## ES Module

```ts
// tree-shakeable import
import { pad } from "chance";

// usage
pad({number, length})
pad({number, length, padding})

//Example
// returns '007'
pad({ number: 7, length: 3});
```

Pad a number with some string until it reaches a desired length.

By default, `chance.pad()` will pad with zeroes. For example, to zero-pad
numbers such that the outcome width is 5, do the following.

```ts
pad({number: 45, length: 5})
=> '00045'

pad({number: 284, length: 5})
=> '00284'

// when number length is the same as length returns number
pad({number: 82843, length: 5})
=> '82843'

```



Can optionally specify a character if the desire is to pad with something other
than zero.

```js
pad({number: 81, length: 5, padding: 'Z'})
=> 'ZZZ81'

pad(number: 692, length: 5, padding: 'Z')
=> 'ZZ692'

pad(number: 52859, length: 5, padding: 'Z')
=> '52859'
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `pad` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns '007'
chance.pad({ number: 7, length: 3});

// returns 'PP1'
pad({ number: 1, length: 3, padding: "P"});
```
