import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alerta ciudadana';
  denuncias: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.denuncias = db.collection('denuncias').valueChanges();
  }
}
