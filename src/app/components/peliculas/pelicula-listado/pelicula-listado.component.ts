import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Pelicula } from '../pelicula.model';
import { PeliculaService } from '../pelicula.service';
import { PeliculaTablaComponent } from '../pelicula-tabla/pelicula-tabla.component';
import { Actor } from '../../actores/actor.model';
import { ActorService } from '../../actores/actor.service';

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
  constructor(private actorService: ActorService) { }
  onSelected(pelicula: Pelicula) {
    //
    // this.actores = pelicula.actores;
    this.actorService.loadActors(pelicula.actores).subscribe(actors => {
      debugger
      this.pelicula = {...pelicula, actores: actors};
    });
  }
  onDeleted(pelicula: Pelicula) {
    this.peliculas = this.peliculaTabla.peliculas.filter(i => {
      return i !== pelicula;
    });
    this.pelicula = null;
  }
}
