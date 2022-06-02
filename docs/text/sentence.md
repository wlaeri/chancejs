# sentence

## ES Module

```ts
// tree-shakeable import
import { sentence } from "chance";

// usage
sentence({words?, punctuation?}?, seed?)

//Example
// returns 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne.'
sentence();
```

Return a random sentence populated by semi-pronounceable random (nonsense) words.

```js
//returns 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne.'
sentence();
```

The sentence starts with a capital letter, and ends with a period.

Default is a sentence with a random number of words from 12 to 18.

*This length is chosen as the default as it works out to the average English
sentence is in that range.*

Optionally specify the number of words in the sentence or the punctuation.

```js
// returns 'Waddik jeasmov cakgilta ficub up.'
sentence({ words: 5 });

// returns 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne?'
sentence({ punctuation: '?' });
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `sentence` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// usage
chance.sentence({words?, punctuation?}?, seed?)

//Example
// returns 'Witpevze mappos isoletu fo res bi geow pofin mu rupoho revzi utva ne.'
chance.sentence();
```
