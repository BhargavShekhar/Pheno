import express from "express";
import cors from "cors";

export function createExpressApp() {
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.get("/health", ((req, res) => res.json({ healthy: true })));

    app.use((error, req, res, next) => {
        console.log(error.stack);

        const statusCode = err.statusCode || 500;

        res.status(500).json({
            sucess: false,
            message: { error: error.message },
            data: null
        })

    })

    return app;
}x