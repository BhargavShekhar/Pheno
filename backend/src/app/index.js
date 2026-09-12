import express from "express";

export function createExpressApp() {
    const app = express();

    app.use(express.json());

    return app;
}