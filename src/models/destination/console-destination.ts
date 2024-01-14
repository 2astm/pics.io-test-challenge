import { Destination } from "./destination";

export class ConsoleDestination implements Destination {
    name!: string;
    transport!: 'console.log' | 'console.warn';

    constructor(props: Omit<ConsoleDestination, 'execute'>) {
        Object.assign(this, props);
    }

    execute(payload?: any): void {
        console.log(`hey this ${this.transport}`)
    }
}