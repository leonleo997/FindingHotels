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


  constructor(public hotelService: HotelService) {
    this.hotel = {
      id : '',
      nombre: '',
      costoHabitacion: 0,
      latitud: 0,
      longitud: 0
    };
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  addHotel() {
    this.hotelService.addHotel(this.hotel);
  }
}
