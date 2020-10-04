import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cine } from './cine.model';
import { Pelicula } from '../peliculas/pelicula.model';
@Injectable({
  providedIn: 'root'
})
export class CineService {
  constructor(public http: HttpClient) {}
  getCines() {
    return JSON.parse(localStorage.getItem('cines'));
  }
  getCine(id: number) {
    const cines: Cine[] = JSON.parse(localStorage.getItem('cines'));
    return cines.filter((cine: Cine) => cine.id === id )[0];
  }
  altaCine(cine: Cine) {
    let cines: Cine[] = JSON.parse(localStorage.getItem('cines'));
    cine.id = this.genId(cines);
    cines.push(cine);
    localStorage.setItem('cines', JSON.stringify(cines));
  }
  updateCine(cine: Cine) {
    const cines: Cine[] = this.getCines();
    const idx = cines.findIndex(item => item.id === cine.id);
    cines[idx] = cine;
    localStorage.setItem('cines', JSON.stringify(cines));
  }
  deleteCine(cine: Cine) {
    const cines: Cine[] = this.getCines();
    const cinesFiltered = cines.filter(el => {
      return el.id !== cine.id;
    });
    localStorage.setItem('cines', JSON.stringify(cinesFiltered));
  }
  private genId(cines: Cine[]) {
    return cines.length + 1;
  }
}
