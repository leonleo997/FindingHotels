import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,
AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../model/hotel';
import { createUploadTask } from 'angularfire2/storage';

@Injectable()
export class HotelService {
  hotelCollection: AngularFirestoreCollection<Hotel>;
  hotelDocument: AngularFirestoreDocument<Hotel>;
  hotels: Observable<Hotel[]>;

  constructor(public db: AngularFirestore) {
    this.hotelCollection = db.collection('hotels');
    this.hotels = this.hotelCollection.snapshotChanges().map(
      hotels => {
        return hotels.map(task => ({
          id: task.payload.doc.id,
        nombre: task.payload.doc.get('nombre'),
        costoHabitacion: task.payload.doc.get('costoHabitacion'),
        latitud: task.payload.doc.get('latitud'),
        longitud: task.payload.doc.get('longitud')
        })
      );
      }
    );
  }

  getHotels() {
    return this.hotels;
  }

  addHotel(hotel: Hotel) {
    this.hotelCollection.add(hotel);
  }

  delHotel(hotel: Hotel) {
    const url = 'tasks/' + hotel.id;
    this.hotelDocument = this.db.doc(url);
    this.hotelDocument.delete();
  }

}
