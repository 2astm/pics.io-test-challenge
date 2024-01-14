import {ConsoleDestination, HttpDestination } from '../models';
import config from '../../config.json'
export class DestinationService {

    private static _instance: DestinationService;
    private destinations: Record<string, HttpDestination | ConsoleDestination> = {};

    private constructor() {
        this.initDestination();
    }

    public static get Instance() {
        return this._instance || (this._instance = new DestinationService())
    }

    private initDestination() {
        config.destinations.forEach((destination) => {
            const transportClass = destination?.transport?.split('.')[0];

            switch (transportClass) {
                case 'http': this.destinations[destination.name] = new HttpDestination(destination as HttpDestination); break;
                case 'console': this.destinations[destination.name] = new ConsoleDestination(destination as ConsoleDestination); break;
                default: console.error(`destination transport unsuported: ${destination.transport}`);
            }
        });

        Object.keys(this.destinations).forEach((key) => {
            this.destinations[key].execute()
        })

    }
}