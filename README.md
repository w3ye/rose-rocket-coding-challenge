## Back-end setup

For this project, I've decided to use PostgreSQL as my database.

SQL queries to create `drivers` and `orders` table is found in `/server/schema`

SQL queries to insert seeds into `drivers` and `orders` is found in `/server/seeds`.

### PostgresSQL setup

1. Create a postgres database by running `createdb rose-rocket-challenge` in terminal OR run `CREATE DATABASE rose-rocket-challenge` within the PostgreSQL interactive terminal (psql)
1. Create a `.env` file using `.env.example` as a template
1. Enter database information to the `.env` file

### NodeJS setup

1. Go to the server folder run `npm install`
1. Run `npm run db:reset` first thing, if you are running `server` for the first time
1. Run `npm run db:reset` to reset the database
1. Run `npm start` to start `server`
