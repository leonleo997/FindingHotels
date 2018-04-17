import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MaterializeModule } from 'angular2-materialize';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HotelComponent } from './components/hotel/hotel.component';

import {HotelService} from './services/hotel.service';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NuevoHotelComponent } from './components/nuevo-hotel/nuevo-hotel.component';
import { RouterModule } from '@angular/router';
import { RouterConfig } from './components/router.config';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { AgmCoreModule } from '@agm/core';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { ComentarioCrearComponent } from './components/comentario-crear/comentario-crear.component';



@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    BusquedaComponent,
    NuevoHotelComponent,
    SobreNosotrosComponent,
    ComentariosComponent,
    ComentarioCrearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterializeModule,
    RouterModule.forRoot(RouterConfig),
    NgbModule.forRoot(),
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQDEONMhppVg8b1bK2bi2kbvsFkbJ2Q5Q'
    })
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
