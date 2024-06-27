---
title: 'Vartotojo autentifikacija per Google '
---
Šioje dokumentacijoje aprašysiu vartotojo autentifikacija per Google paskyrą.

Autentifikacijos pagrindą sudaro passport.js node paketas. Jo pagalba yra sukurti endpointai, kurie leidžia prisijungti, atsijungti, patikrinti dabartinį vartotoją. Kai naršklės klientas kreipiasi per API, yra galimi šie kreipiniai:

<SwmSnippet path="/routes/authRoutes.js" line="1">

---

This code snippet exports a function that takes an `app` object as an argument. Inside the function, it sets up a route for '/auth/google' on the `app` object. When this route is accessed, it uses `passport` to authenticate the user using the 'google' strategy and redirects them to a Google login page with the specified `scope` for permissions.

```javascript
const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
```

---

</SwmSnippet>

Atsijungimo endpointui:

<SwmSnippet path="/routes/authRoutes.js" line="16">

---

This code snippet handles a GET request to '/api/logout'. It logs out the current user by calling `req.logout()` and then redirects the user to the home page by calling `res.redirect('/')`.

```javascript
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY2FyLXJlbnQtbm9kZWpzLXJlYWN0anMtbW9uZ29kYiUzQSUzQWV6b3Bhcw==" repo-name="car-rent-nodejs-reactjs-mongodb"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
