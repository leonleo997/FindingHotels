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
    console.log('entra');
    this.hotels = this.hotelCollection.snapshotChanges().map(
      hotels => {
        return hotels.map(hotel => ({
          id: hotel.payload.doc.id,
        nombre: hotel.payload.doc.get('nombre'),
        costoHabitacion: hotel.payload.doc.get('costoHabitacion'),
        latitud: hotel.payload.doc.get('latitud'),
        longitud: hotel.payload.doc.get('longitud')
        })
      );
      }
    );
  }

  getHotels() {
    return this.hotels;
  }

  addHotel(hotel: Hotel) {
    console.log('entra add');
    console.log(hotel.nombre);
    console.log(hotel.costoHabitacion);
    console.log(hotel.longitud);
    console.log(hotel.latitud);
    this.hotelCollection.add(hotel);
  }

  delHotel(hotel: Hotel) {
    const url = 'hotels/' + hotel.id;
    console.log(hotel.nombre);
    console.log(url);
    this.hotelDocument = this.db.doc(url);
    this.hotelDocument.delete();
  }

  findHotel(nombre: String) {
    console.log('inicia find hotel ' + nombre);
    const url = 'hotels/' + nombre;
    console.log(url);
    this.hotelDocument = this.db.doc(url);

  }

}
