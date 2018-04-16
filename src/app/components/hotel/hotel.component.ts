import { Component, OnInit } from "@angular/core";
import { Hotel } from "../../model/hotel";
import { HotelService } from "../../services/hotel.service";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.css"]
})
export class HotelComponent implements OnInit {
  hotels: Hotel[];
  hotel: Hotel;
  nombre: String;

  constructor(public hotelService: HotelService) {
    console.log("HOLAAAA");
    this.hotel = {
      id : "",
      nombre: "",
      costoHabitacion: 0,
      latitud: 0,
      longitud: 0
    };
    this.nombre = '';
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
    console.log(this.hotels);
  }

  ngOnInit() {
    console.log("entra init");
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
    console.log("sale init");
  }

  addHotel() {
    console.log("adicionar hotel");
    this.hotelService.addHotel(this.hotel);
  }

  delHotel(e, hotel: Hotel) {
    console.log('eliminar hotel');
    this.hotelService.delHotel(hotel);
  }

  findHotel() {
    console.log(this.nombre);
    this.hotelService.findHotel(this.nombre);
  }
}
