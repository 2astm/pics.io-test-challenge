import {Router, Request, Response} from "express";
import {event} from '../controllers';

class EventRoutes {
    router = Router()

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/', event)
    }
}

export default new EventRoutes().router;