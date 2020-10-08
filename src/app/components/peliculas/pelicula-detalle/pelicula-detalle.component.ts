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
    public peliculaService: PeliculaService) {}

  onDelete(pelicula) {
    this.peliculaService.deleteMovie(pelicula.id).subscribe(() => {
      Swal.fire('Atención', 'Pelicula Eliminada', 'success');
    });
    this.peliculaDeleted.emit(pelicula);
    this.onClose();
  }
  onClose() {
    this.back.emit();
  }
}
