# paragraph

## ES Module

```ts
// tree-shakeable import
import { paragraph } from "chance";

// usage
paragraph({sentences?, linebreak?}?, seed?)

//Example
// returns 'Lel fi huepe jupu akse zej ire vesik kojvulom zon is biwuwkef pa. Uv hokivej voh ebu numdogi akolo hik uwlez ta vacev ofdaimi acunetum suvet uhdab ir soglazo ju pafbeb. Pub cezeh fuc kebamnul he ok luumoabi rawkig me fov pin zup biv risugra. Ralpunad apkomgib alnirciw akel wa lus wahfum burog buol vecotihe abadahoj ugolo wovki ucojal fec.'
paragraph();
```

Return a random paragraph generated from sentences populated by semi-pronounceable
random (nonsense) words.

Default is a paragraph with a random number of sentences from 3 to 7.

Optionally specify the number of sentences in the paragraph.

```ts
//returns 'Idefeulo foc omoemowa wahteze liv juvde puguprof epehuji upuga zige odfe igo sit pilamhul oto ukurecef.'
paragraph({ sentences: 1 });
```

Optionally specify if each sentence in the paragraph should start a new line.

```ts
paragraph({ linebreak: true });
//returns  
`
      Moku kazkubib adi apo bebiw movarne rab tusa vura nok ji iv otukib dewut.
      Tiwlo orojel vuhhet emluliv loha ma rulical fokuv re dob fabup bit.
      Veza ermethit osgues dohjeci pezlal su ibi cib zerezci bode ca hopmub gigwosut culhoca nubu.
`
```

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `paragraph` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// usage
chance.paragraph({sentences?, linebreak?}?, seed?)

//Example
// returns 'Lel fi huepe jupu akse zej ire vesik kojvulom zon is biwuwkef pa. Uv hokivej voh ebu numdogi akolo hik uwlez ta vacev ofdaimi acunetum suvet uhdab ir soglazo ju pafbeb. Pub cezeh fuc kebamnul he ok luumoabi rawkig me fov pin zup biv risugra. Ralpunad apkomgib alnirciw akel wa lus wahfum burog buol vecotihe abadahoj ugolo wovki ucojal fec.'
chance.paragraph();

//returns 'Idefeulo foc omoemowa wahteze liv juvde puguprof epehuji upuga zige odfe igo sit pilamhul oto ukurecef.'
chance.paragraph({ sentences: 1 });

chance.paragraph({ linebreak: true });
//returns  
`
      Moku kazkubib adi apo bebiw movarne rab tusa vura nok ji iv otukib dewut.
      Tiwlo orojel vuhhet emluliv loha ma rulical fokuv re dob fabup bit.
      Veza ermethit osgues dohjeci pezlal su ibi cib zerezci bode ca hopmub gigwosut culhoca nubu.
`
```
