import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, 
AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {hotel} from '../models/hotel';

@Injectable()
export class HotelService {
  hotelCollection: AngularFirestoreCollection<hotel>;
  hotelDocument: AngularFirestoreDocument<hotel>;
  hotels: Observable<hotel[]>;

  constructor(db: AngularFirestore) { 
    this.hotelCollection=db.collection('');
  }

}
