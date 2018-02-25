export class Incident {
    title: string;
    description: string;
    labels?: string[];
    latitude: number;
    longitude: number;
    date: Date;
    userReference: string;
}
