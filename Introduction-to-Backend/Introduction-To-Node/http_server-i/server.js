// HTTP is pretty basic way to build a server. It's not very efficient, but it's a good way to get started.
const http = require("http");

// Error handling is important. If you don't handle errors, your server will crash and your users will be sad.
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    process.exit(1); //mandatory (as per the Node.js docs)
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// const server = http.createServer((request, response) => {
//     console.log("incoming request...");
//     console.log(request.headers);
//     console.log(request.method);
//     console.log(request.url);
//     response.setHeader("content-type", "text/html");
//     response.end("<h1>Hellooo!</h1>");
// })

const server = http.createServer((request, response) => {
    console.log("incoming request...");
    const user = {
        name: "Sam",
        hobby: "livin' new experiences"
    };
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify(user));
});

server.listen(3699);
