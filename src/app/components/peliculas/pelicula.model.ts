import { TreeError } from '@angular/compiler';
import { Actor } from '../actores/actor.model';

export enum validTypes {
    TERROR,
    COMEDIA,
    AMOR,
    OTROS
}
export interface Pelicula {
  id: string;
  nombre: string;
  tipo: validTypes;
  fechaEstreno: Date;
  cantidadPublico: number;
  fotoPelicula: string;
  actores: Actor[];

}
