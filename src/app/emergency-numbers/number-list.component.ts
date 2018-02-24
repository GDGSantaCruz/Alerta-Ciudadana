import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent {
  numberList: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.numberList = db.collection('emergencyNumbers').valueChanges();
  }
  ngOnInit() {

  }
}
