import { PeliculaService } from './../pelicula.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pelicula } from '../pelicula.model';
import { ActivatedRoute } from '@angular/router';
import { CineService } from '../../cines/cine.service';
import { Cine } from '../../cines/cine.model';
import { ActorTablaComponent } from '../../actores/actor-tabla/actor-tabla.component';
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  cine: Cine;
  form: FormGroup;
  @ViewChild(ActorTablaComponent) actorTabla: ActorTablaComponent;
  constructor(
    private route: ActivatedRoute,
    public _cineService: CineService,
    public peliculaService: PeliculaService) {
    this.form = new FormGroup({
      nombre: new FormControl(null,  Validators.required),
      tipo: new FormControl(null, Validators.required),
      fechaEstreno: new FormControl(new Date(), Validators.required),
      cantidadPublico: new FormControl(null, Validators.required),
      fotoPelicula: new FormControl(null, Validators.required),
    });
    this.route.queryParams.subscribe(data  => {
      this._cineService.getCine(data.cineId).subscribe(cine => {
        this.cine = cine[0];
      });
      this.cine.peliculas = [];
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if ( this.cine ) {
      this._cineService.updateCine(this.cine.id, this.form.value);
    } else {
      // solo obtengo los ids para mandarselo a la coleccion de movies
      const actores = this.actorTabla.actores.filter(a => a.selected ).map(i => i.id);
      const movie = { ...this.form.value, actores };
      this.peliculaService.saveMovie(movie);
    }
    this.form.reset();
    Swal.fire('Atención', 'La película ha sido guardada', 'success');
  }
}
