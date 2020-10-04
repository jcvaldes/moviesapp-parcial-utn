import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Pelicula } from '../pelicula.model';
import { PeliculaService } from '../pelicula.service';
import { PeliculaTablaComponent } from '../pelicula-tabla/pelicula-tabla.component';
import { Actor } from '../../actores/actor.model';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: [ './pelicula-listado.component.scss']
})
export class PeliculaListadoComponent {
  pelicula: Pelicula;
  @Input() peliculas: Pelicula[];
  actores: Actor[];
  @ViewChild(PeliculaTablaComponent, { static: true }) peliculaTabla: PeliculaTablaComponent;
  constructor() { }
  onSelected(pelicula: Pelicula) {
    this.pelicula = pelicula;
    this.actores = pelicula.actores;
  }
  onDeleted(pelicula: Pelicula) {
    this.peliculas = this.peliculaTabla.peliculas.filter(i => {
      return i !== pelicula;
    });
    this.pelicula = null;
  }
}
