# skaioskit client

A client admin interface to leverage skaioskit microservices.

initially generated with [create-react-app, and typescript](https://github.com/Microsoft/TypeScript-React-Starter)

## startup

To run this application, clone this repo, and run `yarn` from the terminal. This will install all the packages, and get you ready to start the application.

After yarn is complete, and all packages are installed run `yarn start`. The application should start up on a localhost:3000 browser tab.

## auth

this application uses Auth0 services for authentication, you will need to set up a client / backend api through their interfaces for login functionality to work correctly.

you will need to create a director in src/auth called `auth0config.js`.
example auth0 config object:

```javascript
// Config properties for API backend.
export const AUTH_CONFIG = {
  domain: "<YOUR_URL_DOMAIN>",
  clientID: "<YOUR_API_CLIENTID>",
  redirectUri: "http://localhost:3000/#/startSession", // your desired redirect url defined in auth0 interface
  audience: "<YOUR_API_AUDIENCE_URL>"
};
```
