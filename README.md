# JS-to-PDF

App that generates PDF for personalised printable items

## Install

```
$ npm install
```

## Run

```
$ npm start
```

## Run in dev mode

Ensure you have nodemon installed globally

```
$ npm install nodemon -g
$ npm run dev
```

## Server

The server can be accessed at [http://localhost:8080](http://localhost:8080).

Currently only the `/badges` endpoint is available: [http://localhost:8080/badges](http://localhost:8080/badges).

The badges endpoint generates a PDF based on information found in `/data/badges.json`.
