import { PeliculaService } from './../pelicula.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pelicula } from '../pelicula.model';
import { ActivatedRoute } from '@angular/router';
import { CineService } from '../../cines/cine.service';
import { Cine } from '../../cines/cine.model';
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  cine: Cine;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    public _cineService: CineService,
    public _peliculaService: PeliculaService) {
    this.form = new FormGroup({
      nombre: new FormControl(null,  Validators.required),
      tipo: new FormControl(null, Validators.required),
      fechaEstreno: new FormControl(new Date(), Validators.required),
      cantidadPublico: new FormControl(null, Validators.required),
      fotoPelicula: new FormControl(null, Validators.required),
    });
    this.route.queryParams.subscribe(data  => {
      this.cine = this._cineService.getCine(+data.cineId);
      this.cine.peliculas = [];
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if ( this.cine ) {
      this._cineService.updateCine(this.form.value);
    } else {
      this._peliculaService.saveMovie(null, this.form.value);
    }
    this.form.reset();
    Swal.fire('Atención', 'La película ha sido guardada', 'success');
  }
}
