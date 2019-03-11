require("dotenv").config(); //import .env variables

const server = require("./api/server.js"); // import separate server

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n\n ***** Server up and running on port ${port} !!! *****\n\n`)
);
