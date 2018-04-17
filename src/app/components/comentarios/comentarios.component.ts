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
  @Input('hotel') hotel: string;
  @Input('hoteles') hoteles: Hotel[];

  constructor(public hotelService: HotelService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.hotel);
    this.hotelService.getComments(this.hotel).subscribe(valores => this.comentarios = valores);
    console.log(this.comentarios);
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
