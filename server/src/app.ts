import * as express from 'express';
import { mountTestRoutes } from './routes';

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

        mountTestRoutes(router);

        this.express.use('/', router);
    }

    private initAdmin(): void {
        
    }
}

export default new App().express;