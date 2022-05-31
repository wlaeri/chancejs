# weighted

## ES Module

```ts
// tree-shakeable import
import { weighted } from "chance";

//usage
weighted({array, weights, trim?})

//Example
//returns 'c'
weighted({array: ['a', 'b', 'c', 'd'], weights: [1, 2, 3, 4]})
```

Provide an array of items, and another array of items specifying the relative weights and **Chance** will select one of those items, obeying the specified weight.

For example, the following code:

```ts
//returns 'a'
weighted({array: ['a', 'b'], weights: [100, 1]});
```

Will generate `'a'` 100 times more often than `'b'` but still choose one or the other randomly.

The weights are all relative, so if you have more than just two it will ensure that all items are generated relative to all of the weights.

For example, the following code:

```ts
//returns 'c'
weighted({array: ['a', 'b', 'c', 'd'], weights: [1, 2, 3, 4]});
```

Will generate a letter from the array but will pick `'b'` twice as often as it picks `'a'` and will pick `'c'` three times as often as it picks `'a'` and will pick `'d'` four times as often as it will pick `'a'` and will pick `'d'` two times as often as it will pick `'b'`.

The weights can be whole numbers as shown above or fractions.

```ts
// returns 'd'
weighted({array: ['a', 'b', 'c', 'd'], weights: [0.1, 0.2, 0.3, 0.4]});
```

There is no requirement that the weights sum to anything in particular, they are all compared relative to each other so all of the following are equivalent:

```ts
weighted({array: ['a', 'b', 'c', 'd'], weights: [1, 2, 3, 4]});
weighted({array:['a', 'b', 'c', 'd'], weights:[0.1, 0.2, 0.3, 0.4]});
weighted({array:['a', 'b', 'c', 'd'], weights:[100, 200, 300, 400]});
weighted({array:['a', 'b', 'c', 'd'], weights:[17, 34, 51, 68]});
weighted({array:['a', 'b', 'c', 'd'], weights:[0.17, 0.34, 0.51, 0.68]});
```

Recall JavaScript has first class functions so you could do something like the following:

```ts
// returns 10000345166213
weighted({array:[chance.fbid, chance.twitter, chance.ip], weights: [10, 5, 1]})();
```

That will pick one of the **Chance** methods with the relative weights specified and then immediately invoke it, so it will return a random fbid twice as often as it will return a twitter handle (because 10/5 is 2) and an fbid 10 times more often than it will return a random ip address (because 10/1 is 10). It will return a random twitter handle 5 times more often than it will return an ip address (because 5/1 is 5).

If you pass the option trim, weighted will return the random value in array

```ts
//Example
//returns ['c']
weighted({array: ['a', 'b', 'c', 'd'], weights: [1, 2, 3, 4], trim: true})
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `weighted` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

//usage
chance.weighted({array, weights, trim?});

//Example
//returns 'c'
chance.weighted({array: ['a', 'b', 'c', 'd'], weights: [1, 2, 3, 4]})
```
