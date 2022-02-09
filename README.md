# useItch

An unofficial and bare minimal implementation of [Itch.io APIs](https://itch.io/docs/api/overview).

**Fair Warning**, this is a very first implementation and it might break quite spectacularly.
**DO NOT CONSIDER THIS PRODUCTION READY**

The main Use Case for this library is to build Companion Apps that can enforce your desired type of paywall trough the Itch.io storefront.

## Installation

Using [npm](https://www.npmjs.com/)

```
npm install useitch
```

## Getting Started

Wrap you application with `ItchProvider`.

Use the `useItch` hook in your components to access auth state (`isLogged`, `isLoading` and `user`) and auth method (`logIn` and `logOut`).


### ItchProvider

Props | Value
--- | --- 
**itchIoClientId** | The clientId for your [Itch.io oAuth Application](https://itch.io/user/settings/oauth-apps).
**scope** | The only available value to date is `profile:me`
**redirect_uri** | The redirect URI of your Itch.io oAuth Application

### useItch

All the current paramenters are contained in the `user` object.

Parameters | Type | Notes
--- | --- | ---
**isLogged** | Boolean | The state of login.
**isLoading** | Boolean | It's `true` while the user data are being fetched.
**logIn** | function | LogIn function, redirects to Itch.io oAuth page.
**logOut** | function | Clears all the relevant state.
**data** | String(s) | user data. Please refer to the [Itch.io /me API call](https://itch.io/docs/api/serverside#reference/profilegames-httpsitchioapi1keymy-games)

## Troubleshooting

You can track issues on the [GitHub issue tracker](https://github.com/NuclearManatee/useItch/issues). I'll try to address them the best I can.

## Roadmap

- [x] first implementation: oAuth and user info
- [ ] implementing the [games purchased scope](https://itch.io/docs/api/serverside#reference/profilegames-httpsitchioapi1keymy-games) for check games ownership
- [ ] session persistance
- [ ] automation testing
- [ ] Expo compatible
- [ ] React Navigator compatible
- [ ] Nextjs compatible

## Contribution

Contributions are **absolutely open**. Just submit a pull request or drop me an email if you want a more steady collaboration.




