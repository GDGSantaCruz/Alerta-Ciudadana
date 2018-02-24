import { Injectable } from '@angular/core';
import { Incident } from './incident';
//import { INCIDENTS } from './incident.mock';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IncidentService {
    constructor(private db: AngularFirestore) {}

    getIncidents(): Observable<any[]> {
        let since = new Date;
        since.setDate(since.getDate() - 3);
        console.log(since);
        var incidentsRef = this.db.collection('Incidents', ref => ref.where("dateTime", ">=", since));
        // incidentsRef.where("dateTime", ">=", since );
        return incidentsRef.valueChanges();
    }


}