import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[];

  constructor(public hotelService: HotelService) {
    console.log('HOLAAAA');
    /*this.hotels = [
      {
        'id': '12e',
        'nombre': 'Torre cali',
        'costoHabitacion': 150000,
        'latitud': 23323223,
        'longitud': -2334234
      }
    ];
    */
  }

  ngOnInit() {
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels;
    });
  }

}
