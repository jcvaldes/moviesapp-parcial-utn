import { Pelicula } from '../peliculas/pelicula.model';
export interface Cine {
  nombre: string;
  foto: string;
  paisOrigen: string;
  peliculas?: Pelicula[];
  id?: string;
}
