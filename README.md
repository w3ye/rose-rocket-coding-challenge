# Driver Assginment

A logistic application that manages dispatch of drivers and their cargo orders.

Click [here](https://stupefied-dijkstra-eddaea.netlify.app/) to see the demo

This Application is hosted using various services:

- Client - Hosted on Netify
- Server - Hosted on Heroku
- Database - Hosted on AWS RDS

On The hosted version, there is a new inclusion of the reset button that refreshes the database. Please refresh the page after clicking reset

## Font-end setup

The front end of this project is written in ReactJS

1. Go the the `client` directory
2. Run `npm start` in terminal

## Back-end setup

For this project, I've decided to use [PostgreSQL](https://www.postgresql.org/) as my database.

Documentation for PostgreSQL can be found [here](https://www.postgresql.org/docs/14/index.html)

SQL queries to create `drivers` and `orders` table is found in `/server/schema`

SQL queries to insert seeds into `drivers` and `orders` is found in `/server/seeds`.

### PostgresSQL setup

1. Create a postgres database by running `createdb rose-rocket-challenge` in terminal OR run `CREATE DATABASE rose-rocket-challenge` within the PostgreSQL interactive terminal (psql)
1. Create a `.env` file using `.env.example` as a template
1. Enter database information to the `.env` file

### NodeJS setup

1. Go to the `server` directory run `npm install` in terminal
1. Run `npm run db:reset` first thing, if you are running `server` for the first time
1. Run `npm run db:reset` to reset the database
1. Run `npm start` to start `server`

## Features

Bonus Features can be found in [FEATURES.md](./FEATURES.md)

All Features and requirements and it's completion can be found in [Requirements.md](./Requirements.md)

## Screenshots

Screenshots of the progect and be found [here](./screenshots/SCREENSHOTS.md)

## Tests

Pseudocode for tests can be found in [TEST.md](./TEST.md)

## Dependencies

### Front-end

- React
- axios
- node-sass
- react-dnd

### Backend

- Express
- morgan
- pg
- pg-native
- dotenv
- nodemon

### Testing

- Jest
- storybook
