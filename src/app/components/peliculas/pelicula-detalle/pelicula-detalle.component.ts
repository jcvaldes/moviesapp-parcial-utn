import { PeliculaService } from '../pelicula.service';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Pelicula } from '../pelicula.model';


@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.scss']
})
export class PeliculaDetalleComponent {
  @Input() pelicula: Pelicula;
  @Output() peliculaDeleted: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _peliculaService: PeliculaService) {}

  onDelete(pelicula) {
    debugger
    this._peliculaService.deleteMovie(pelicula.id);
    this.peliculaDeleted.emit(pelicula);
    this.onClose();
  }
  onClose() {
    this.back.emit();
  }
}
