import { Route } from "@angular/router";
import { HotelComponent } from "./hotel/hotel.component";
import { NuevoHotelComponent } from "./nuevo-hotel/nuevo-hotel.component";
import { SobreNosotrosComponent } from "./sobre-nosotros/sobre-nosotros.component";

export const RouterConfig: Route [] = [
    {path: 'hotel', component: HotelComponent},
    {path: 'nuevo-hotel', component: NuevoHotelComponent},
    {path: 'sobre-nosotros', component: SobreNosotrosComponent},
    {path: '', redirectTo: 'hotel' , pathMatch:"full"},
    {path: '**', redirectTo: 'hotel'},
]