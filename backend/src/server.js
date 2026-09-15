import http from "node:http";
import { createExpressApp } from "./app/index.js";

import "dotenv/config.js";

async function main() {
    const port = process.env.PORT;

    const app = createExpressApp();
    const server = http.createServer(app);

    server.listen(port, () => {
        console.log(`---- Server is Running at http://localhost:${port} ----`)
    });
}

main()
    .catch(error => {
        console.log(`--- Could not start the server --- \n ${error}`);
        console.log(error);
    })
    .finally(() => {
        process.exit(1); 
    })