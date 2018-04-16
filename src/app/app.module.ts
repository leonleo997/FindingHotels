import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HotelComponent } from './components/hotel/hotel.component';

import {HotelService} from './services/hotel.service';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NuevoHotelComponent } from './components/nuevo-hotel/nuevo-hotel.component';
import { RouterModule } from '@angular/router';
import { RouterConfig } from './components/router.config';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    BusquedaComponent,
    NuevoHotelComponent,
    SobreNosotrosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterializeModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
