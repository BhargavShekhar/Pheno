import express from "express";
import cors from "cors";

export function createExpressApp() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors());

    app.get("/health", ((req, res) => res.json({ healthy: true })));

    app.use((error, req, res, next) => {
        console.log(error);

        res.status(500).json({
            sucess: false,
            message: { error: error.message },
            data: null
        })
    })

    return app;
}