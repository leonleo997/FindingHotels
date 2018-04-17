import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,
AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../model/hotel';
import { createUploadTask } from 'angularfire2/storage';
import {Comentario} from '../model/comentario';
import { validateArgCount } from '@firebase/util';


@Injectable()
export class HotelService {
  hotelCollection: AngularFirestoreCollection<Hotel>;
  hotelDocument: AngularFirestoreDocument<Hotel>;
  hotels: Observable<Hotel[]>;
  busqueda: Observable<Hotel[]>;

  comentariosCollection: AngularFirestoreCollection<Hotel>;
  comentarios: Observable<Comentario[]>;

  comentar: Comentario[];


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

  addHotel(hotel: Hotel, hotelitos: Hotel[]) {
    this.hotelCollection.add(hotel);
    let algo: Hotel[];
    this.hotels.subscribe( valores => algo = valores);
    console.log(algo);

  console.log(hotel.nombre);

    //const url = 'hotels/' + varHotel.id + '/comentarios';
    /*
    const come: Comentario = {
      id: null,
      usuario: 'yesid',
      email: null,
      comentario: null,
      calificacion: 0
    };
    console.log(url);
    this.db.doc(url).collection('comentarios').add(come);
    */
  }

  nada() {
    let algo: Hotel[];
    this.hotels.subscribe( valores => algo = valores);
    console.log(algo);
  }

  delHotel(hotel: Hotel) {
    const url = 'hotels/' + hotel.id;
    console.log(hotel.nombre);
    console.log(url);
    this.hotelDocument = this.db.doc(url);
    this.hotelDocument.delete();
  }



  getComments(hotel: string) {
    const url = 'hotels/' + hotel ;
    console.log(hotel);
    console.log(url);
    this.comentarios = this.db.doc(url).collection('comentarios').snapshotChanges().map(
      comentarios => {
        return comentarios.map( comentariesito => ({
          id: comentariesito.payload.doc.id,
        email: comentariesito.payload.doc.get('email'),
        usuario: comentariesito.payload.doc.get('usuario'),
        calificacion: comentariesito.payload.doc.get('calificacion'),
        comentario: comentariesito.payload.doc.get('comentario')
        })
      );
      }
    );
    console.log('comentariooooooooooos ');
    this.comentarios.subscribe(valores => this.comentar = valores);
    if (this.comentar != null ) {
    this.comentar.forEach(value => console.log(value.comentario));
    }
    console.log(this.comentar);
    return this.comentarios;
  }

  addComment(comentario: Comentario, hotel: Hotel) {
    const url = 'hotels/' + hotel.id;
    this.db.doc(url).collection('comentarios').add(comentario);
    console.log(hotel.nombre);
    console.log(url);
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
