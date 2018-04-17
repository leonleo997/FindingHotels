import { Component, OnInit, Input } from '@angular/core';
import {Comentario} from '../../model/comentario';
import { HotelService } from '../../services/hotel.service';
import {Hotel} from '../../model/hotel';


@Component({
  selector: 'app-comentario-crear',
  templateUrl: './comentario-crear.component.html',
  styleUrls: ['./comentario-crear.component.css']
})
export class ComentarioCrearComponent implements OnInit {

  comentario: Comentario;
  @Input('hotel') hotel: Hotel;
  @Input('hoteles') hoteles: Hotel;


  constructor(public hotelService: HotelService) {
    this.refrescar();
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

  ngOnInit() {
  }

  addComment() {
    if (this.comentario.email !== null && this.comentario.usuario !== null
      && this.comentario.comentario !== null) {

        this.hotelService.addComment(this.comentario, this.hotel);

        this.refrescar();
        alert('comentario agregado exitosamente');
    } else {
      alert('Para añadir un comentario se deben llenar todos los campos');
    }
  }
}
