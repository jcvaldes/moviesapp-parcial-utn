import { Component, OnInit, ViewChildren, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Pelicula } from '../pelicula.model';
import { PeliculaListadoComponent } from '../pelicula-listado/pelicula-listado.component';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './pelicula-tabla.component.html',
  styleUrls: ['./pelicula-tabla.component.scss']
})
export class PeliculaTablaComponent implements OnInit {
  searchTerm: string;
  @Output() peliculaSelected: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  @Input() peliculas: Pelicula[];
  constructor(public _peliculaService: PeliculaService) {}
  onSelect(pelicula) {
    this.peliculaSelected.emit(pelicula);
  }
  ngOnInit(): void {
    if (!this.peliculas) {
      this.peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];
    }
  }
}
