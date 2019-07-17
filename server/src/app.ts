import * as express from 'express';
//based on https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/
class App {
    public express;

    public constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();

        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            })
        });

        this.express.use('/', router);
    }
}

export default new App().express;