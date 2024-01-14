import {Destination} from "../index";

export class HttpDestination implements Destination {
    name!: string;
    transport!: 'http.post' | 'http.get' | 'http.delete';
    url!: string;

    constructor(props: Omit<HttpDestination, 'execute'>) {
        Object.assign(this, props);
    }

    execute(payload?: any): void {
        console.log(`hey this ${this.transport}`)
    }

}