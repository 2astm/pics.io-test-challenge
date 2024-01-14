export interface EventDto {
    payload: any;
    possibleDesintations: Array<Record<string, boolean>>;
    strategy: string;
}