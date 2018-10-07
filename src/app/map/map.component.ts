import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs';

import { Incident } from './../incident/incident';
import { IncidentService } from './../incident/incident.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = -17.774040;
  longitude = -63.180234;
  zoom = 8;
  minZoom = 8;
  incidents: Observable<any[]>;
  constructor(private incidentService: IncidentService) {}

  ngOnInit() {
    this.incidents = this.incidentService.getIncidents();
    console.log(this.incidents);
  }

  clickedMarker(incident: Incident) {
    console.log(`clicked the marker: ${incident.title}`);
  }
}
