export interface Car {
    brand: string;
    model: string;
    color: string;
    gas: 'gasoline' | 'electric';
    year: number;
    description: string;
    price: number;
}