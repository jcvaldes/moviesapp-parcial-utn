import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';
import { CineTablaComponent } from '../cine-tabla/cine-tabla.component';
import { Pelicula } from '../../peliculas/pelicula.model';

@Component({
  selector: 'app-cine-listado',
  templateUrl: './cine-listado.component.html',
  styleUrls: ['./cine-listado.component.scss']
})
// Padre de CineTablaComponent y PeliculaListadoComponent
export class CineListadoComponent implements OnInit, OnChanges {
  @Input() cine: Cine;
  cines: Cine[] = [];
  peliculas: Pelicula[];
  @Input() pelicula: Pelicula[];
  // Obtengo referencia a el componente hijo para poder usar los métodos del mismo
  // desde el componente padre.
  @ViewChild(CineTablaComponent, { static: true }) cineTabla: CineTablaComponent;

  constructor(public _cineService: CineService) { }
  onSelected(cine: Cine) {
    this.cine = cine;
    debugger
    this.peliculas = cine.peliculas;
  }
  onDeleted(cine: Cine) {
    this.cines = this.cineTabla.cines.filter(i => {
      return i !== cine;
    });
    this.cine = null;
  }
  ngOnInit(): void {
    if (this.cine && this.cines.length === 0) {
      this.cines = this.cineTabla.cines;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.cine && changes.cine.currentValue) {
      this.cineTabla.ngOnInit();
    }
  }
}
