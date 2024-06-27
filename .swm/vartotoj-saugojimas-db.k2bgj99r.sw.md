---
title: Vartotojų saugojimas DB
---
Vartotojai yra sugomi mongo DB.

Vartotojų lentelės duomenų stuktūra yra aprašyta models dalyje User.js faile.

Vartotojų lentelės duomenų stuktūra:

<SwmSnippet path="/models/User.js" line="3">

---

This code snippet defines a `userSchema` using `mongoose` library which has two properties: `googleId` of type `String` and `credits` of type `Number` with a default value of `0`.

```javascript
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY2FyLXJlbnQtbm9kZWpzLXJlYWN0anMtbW9uZ29kYiUzQSUzQWV6b3Bhcw==" repo-name="car-rent-nodejs-reactjs-mongodb"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
