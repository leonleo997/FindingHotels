import { GeoPoint } from '@firebase/firestore-types';

export class Hotel {
    id: string;
    nombre: string;
    costoHabitacion: number;
    latitud: number;
    longitud: number;
}
