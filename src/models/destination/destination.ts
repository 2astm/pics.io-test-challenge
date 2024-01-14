export interface Destination {
    transport: string;
    name: string;

    execute(payload?: any): void;
}