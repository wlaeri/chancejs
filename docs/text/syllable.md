# syllable

## ES Module

```ts
// tree-shakeable import
import { syllable } from "chance";

// usage
syllable({length?, capitalize?}?, seed?)

//Example
// returns 'bed'
syllable();
```

Return a semi-speakable syllable, 2 or 3 letters

```js
//Another Example
//returns 'fop'
syllable();
```

The syllable is returned in all lower case.

A syllable generally alternates between vowel and consonant and is used as the
core building block for a word.

You can pass length option and capitalize option

```ts
//Another Example
//returns 'fopes'
syllable({length: 5});

//returns 'Fop'
syllable({capitalize: true});
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `syllable` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// usage
chance.syllable({length?, capitalize?}?, seed?)

//Example
// returns 'bed'
chance.syllable();
```
