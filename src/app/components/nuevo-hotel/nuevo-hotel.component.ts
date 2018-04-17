import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-nuevo-hotel',
  templateUrl: './nuevo-hotel.component.html',
  styleUrls: ['./nuevo-hotel.component.css']
})
export class NuevoHotelComponent implements OnInit {
  hotels: Hotel[];
  hotel: Hotel;
  lat: number;
  lng: number;
  zoom: number;


  constructor(public hotelService: HotelService) {
    this.hotel = {
      id : null,
      nombre: null,
      costoHabitacion: null,
      latitud: null,
      longitud: null
    };
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
    this.lat = 3.4460088;
    this.lng = -76.50336999999999;
    this.zoom = 13;
    this.respuesta = '';
  }

  addHotel() {
    if (this.hotel.nombre !== null && this.hotel.costoHabitacion !== null &&
    this.hotel.latitud !== null && this.hotel.longitud !== null) {
      this.hotelService.addHotel(this.hotel);
      this.hotel = {
        id : null,
        nombre: null,
        costoHabitacion: null,
        latitud: null,
        longitud: null
      };
      alert('Hotel agregado exitosamente');

    } else {
     alert('Todos los campos deben de estar completos');
    }
  }
  click(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.hotel.latitud = this.lat;
    this.hotel.longitud = this.lng;
  }
}
