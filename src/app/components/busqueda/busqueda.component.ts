import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class BusquedaComponent  {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}

export class NgbdModalOptions {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(contenido) {
    this.modalService.open(contenido, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(contenido) {
    this.modalService.open(contenido, { windowClass: 'dark-modal' });
  }

  openSm(contenido) {
    this.modalService.open(contenido, { size: 'sm' });
  }

  openLg(contenido) {
    this.modalService.open(contenido, { size: 'lg' });
  }

  openVerticallyCentered(contenido) {
    this.modalService.open(contenido, { centered: true });
  }

}

