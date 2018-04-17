import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import {Comentario} from '../../model/comentario';
import { HotelService } from '../../services/hotel.service';
import {Hotel} from '../../model/hotel';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit, AfterViewInit {

  comentario: Comentario;
  comentarios: Comentario[];
  calificacionProm: number;
  @Input('hotel') hotel: string;
  @Input('hoteles') hoteles: Hotel[];

  constructor(public hotelService: HotelService) {

  }

  ngOnInit() {
    this.calificacionProm = 0;
  }

  ngAfterViewInit() {
    console.log(this.hotel);
    this.hotelService.getComments(this.hotel).subscribe(valores => this.comentarios = valores);
    let cantidad = 0;
    /*
    for (let index = 0; index < this.comentarios.length; index++) {
      cantidad += this.comentarios[index].calificacion;
    }
    this.calificacionProm = cantidad/this.comentarios.length;
    }*/
    console.log();
  }

  refrescar() {
    this.comentario = {
      id: null,
      usuario: null,
      email: null,
      comentario: null,
      calificacion: 0
    };
  }



}
