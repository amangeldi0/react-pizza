export type Pizza = {
    id: string;
    title: string;
    price: number;
    image: string;
    size: string[];
    types: string[];
    category: string[];
    rate: number
};

export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'idle',
    ERROR = 'error',
}