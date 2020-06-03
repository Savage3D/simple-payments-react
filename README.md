# "Simple Payments App" frontend (React)
The repo contains the frontend part of the "Simple Payments App". 
A deployed version ===> https://simple-payments-react.herokuapp.com/

You can find a backend part (done on Node.js + Express) here:
- https://simple-payments-api.herokuapp.com/api/users (deployed);
- https://github.com/Savage3D/simple-payments-api (code);

## A couple of words about the app
The "Simple Payments App" allows users to register and make payments to each other. 
All transactions can be viewed on the user's dashboard. The authentication requires just a nickname (yep, no passwords, and no email confirmation for simplicity). If there is no user with the entered nickname, a new user is created with 0$ on a balance. 

The user can send a certain amount of the "money" to another one, even if his balance is negative. 

A home page shows all registered users and their balances. A dashboard is protected by an authentication service based on JSON web Token. 

## Frontend part
The frontend part contains 3 pages: 

- / - shows list of users and payment form after logging in;
- /login - form for logging or creating a user;
- /dashboard - shows list of all payments (transactions) of logged user;

## Technology stack:
- React;
- material-ui;
- validator.js;
- axios;
