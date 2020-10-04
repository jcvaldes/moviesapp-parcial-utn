import { Component } from '@angular/core';
import { PeliculasServiceMock } from '../utils/mocks/peliculas';
import { ActoresServiceMock } from '../utils/mocks/actores';
import { CinesServiceMock } from '../utils/mocks/cines';
import { Pelicula } from './components/peliculas/pelicula.model';
import { Actor } from './components/actores/actor.model';
import { Cine } from './components/cines/cine.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  peliculas: Pelicula[] = [];
  actores: Actor[] = [];
  cines: Cine[] = [];
  title = 'moviesapp';
  constructor() {
    this.initDb();
  }
  private initDb() {
    this.retrivePeliculas();
    this.retriveActores();
    this.retriveCines();
  }

  private retrivePeliculas() {
    const peliculasMock = new PeliculasServiceMock();
    let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    if (peliculas.length === 0) {
      peliculasMock.getPeliculas().then(data => {
        this.peliculas = data;
        localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
      });
    }
  }
  private retriveActores() {
    const actoresMock = new ActoresServiceMock();
    let actores = JSON.parse(localStorage.getItem('actores')) || [];
    if (actores.length === 0) {
      actoresMock.getActores().then(data => {
        this.actores = data;
        localStorage.setItem('actores', JSON.stringify(this.actores));
      });
    }
  }
  private retriveCines() {
    const cinesMock = new CinesServiceMock();
    let cines = JSON.parse(localStorage.getItem('cines')) || [];
    if (cines.length === 0) {
      cinesMock.getCines().then(data => {
        this.cines = data;
        localStorage.setItem('cines', JSON.stringify(this.cines));
      });
    }
  }
}
