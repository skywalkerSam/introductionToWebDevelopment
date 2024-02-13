# Backend server for [face-detection](https://github.com/skywalkerSam/face-detection)

Here's the link to the deployment of [face-detection-backend](https://github.com/skywalkerSam/face-detection-backend)

- Edit database configurations under `server.js`
- Enter your Clarifai PAT and username inside `controllers/image.js`
- Using `gRPC` instead of REST


## Server Specifications:
- Express.js
- bcrypt
- postgreSQL
- Knex.js

## Tools:
- DBeaver
- Postman
- VS Code

## Using nodemon, put this under `"scripts"` in package.json

```json
"start": "nodemon server.js"
```

## Install nodemon
```shell
npm i nodemon
```

## Start the server
```shell
npm start
```

## Until next time...

# ;)
