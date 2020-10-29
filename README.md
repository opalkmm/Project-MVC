# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was extended with [Create-React-App-Fullstack](https://github.com/ekatzenstein/create-react-app-fullstack)

To get started with this app locally:

You will need to install and run Postgress database server first: [Postgress.App](https://postgresapp.com/) is one way

run in your terminal: 
```createdb buddle```

Run the app and make sure a database is running named 'buddle'

Open the PostGres app and double click on the database 'buddle' to open a terminal access to the postgres instance. Then run the command ```\dt``` to show tables 

```  » /Applications/Postgres.app/Contents/Versions/13/bin/psql -p5432 "buddle"
psql (13.0)
Type "help" for help.

buddle=# \dt
         List of relations
 Schema |   Name   | Type  | Owner 
--------+----------+-------+-------
 public | products | table | Alex
 public | reviews  | table | Alex
(2 rows)

buddle=# 
```

Before getting started, seed the database with dummy data by running:
```npm run seed```

if you get this 
```
Opening database connection to postgres://localhost:5432/buddlebuddle
Synced models to db postgres://localhost:5432/buddle
TypeError: Cannot read property 'map' of undefined
```
you can try to run
```
 » sudo npm run seed
```
and if you see
```
> buddle@0.1.0 seed /Users/Alex/Documents/OpalandAlex/Buddle
> node db/seed.js

Opening database connection to postgres://localhost:5432/buddlebuddle
{ SequelizeConnectionError: role "root" does not exist
```
then try
```

```

start
After the database is seeded, you should be all set. To enable full-stack development with hot-reloading, use the same script as create-react-app:
```npm run start```
build
To build deployment-ready, we use the same script as create-react-app:
```npm run build```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

