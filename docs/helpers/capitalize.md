# capitalize

## ES Module

```ts
// tree-shakeable import
import { capitalize } from "chance";

// returns Word
capitalize({ word: 'word' });

// usage
capitalize({word: string});
```

Capitalize the first letter of a word.

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `capitalize` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns Bread
chance.bool({ word: 'bread' });
```
