import { Injectable } from '@angular/core';
import { Incident } from './incident';
import { INCIDENTS } from './incident.mock';

@Injectable()
export class IncidentService {
    constructor() {}

    getIncidents(): Incident[] {
        return INCIDENTS;
    }
}