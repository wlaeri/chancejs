# timezone

## ES Module

```ts
// tree-shakeable import
import { timezone } from "chance";

// returns 
//{
//"name": "India Standard Time",
//"abbr": "IST",
//"offset": 5.5,
//"isdst": false,
//"text": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
//"utc": ["Asia/Calcutta"]
//}

timezone();
```

Return a random timezone.

## Class Instantiation

Alternatively, you can create an instance of a `Chance` class and call the `timezone` method.
This approach avoids instantiating a new PRNG instance on every function call.

```ts
// import the Chance class
import { Chance } from "chance";

const chance = new Chance("my-random-seed");

// returns 
//{
//"name": "India Standard Time",
//"abbr": "IST",
//"offset": 5.5,
//"isdst": false,
//"text": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
//"utc": ["Asia/Calcutta"]
//}
chance.timezone();
```
