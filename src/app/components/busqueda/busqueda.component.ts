import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../model/hotel';
import { HotelService } from '../../services/hotel.service';
import { Comentario } from '../../model/comentario';
import {Observable} from 'rxjs/Observable';
import { equal } from 'assert';
import { Subscribe } from '@firebase/util';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
hoteles: Hotel[];
busqueda: Hotel[];
nombre: string;


lat: number = 51.678418;
lng: number = 7.809007;
zoom: number = 13;



constructor(public hotelService: HotelService) {
  this.hotelService.getHotels().subscribe(valores => this.hoteles = valores);
    this.hotelService.getHotels().subscribe(valores => this.busqueda = valores);
    this.nombre = '';
  this.nombre = '';

}

  ngOnInit() {

    //this.isCollapsed = false;
  }

  buscar() {
    console.log('inicia buscar');
    if ( this.nombre === '' ) {
      this.nombre = ' ';
    }

    if (this.nombre !== null && this.busqueda !== null) {
      this.busqueda = this.busqueda.filter(hotel => hotel.nombre.toLowerCase().startsWith(this.nombre.toLocaleLowerCase()));
    }
    if ( (this.busqueda.length) === 0 ) {
      this.busqueda = this.hoteles;
    }
    const m: number = this.busqueda.length;
  }


}

export class NgbdRatingEvents {
  selected = 0;
  hovered = 0;
  readonly = false;
}
