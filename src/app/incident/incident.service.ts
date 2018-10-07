import { Injectable } from '@angular/core';
import { Incident } from './incident';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IncidentService {
    constructor(private db: AngularFirestore) {}
    getIncidents(): Observable<any[]> {
        const since = new Date;
        since.setDate(since.getDate() - 3);
        console.log(since);
        const incidentsRef = this.db.collection('Incidents', ref => ref.where('dateTime', '>=', since));
        return incidentsRef.valueChanges();
    }
}
