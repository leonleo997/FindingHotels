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
  busqueda: Observable<Hotel[]>;

  nombreObservable: Observable<string>;
  nombre: string;

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

    this.busqueda = this.hotels;
  }

  getHotels() {
    return this.hotels;
  }

  getBusqueda() {
    return this.busqueda;
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

  filterHotel(nombre: string) {
    console.log('inicia filter ' + nombre);
    this.nombre = nombre;
    this.nombreObservable.subscribe( (value) => nombre = value);

    //console.log(this.nombre);
    //this.busqueda = null;
    //this.busqueda = this.hotels.map( hoteles => {
    //  return (hoteles.filter( hotel => hotel.nombre === this.nombre ));
    //});
    //this.busqueda.forEach(element => element.forEach(element2 => {
    //  console.log(element2.nombre);
    //}) );
    console.log('end filter');
  }

}
