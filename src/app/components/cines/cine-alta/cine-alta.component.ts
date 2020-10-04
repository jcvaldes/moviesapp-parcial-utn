import { CineService } from '../cine.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cine } from '../cine.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cine-alta',
  templateUrl: './cine-alta.component.html',
  styleUrls: ['./cine-alta.component.scss']
})
// Padre de CineListadoComponent
export class CineAltaComponent implements OnInit {
  cine: Cine;
  form: FormGroup;
  constructor(
    private router: Router,
    public _cineService: CineService) {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      foto: new FormControl(null, Validators.required),
      paisOrigen: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.cine = this.createCine();
    this._cineService.altaCine(this.cine);
    this.form.reset();
    Swal.fire({
      title: 'Atención',
      html: 'El cine ha sido guardado<br>¿Deseas cargar peliculas?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/peliculas/alta'],
          { queryParams: { cineId: this.cine.id } });
      }
    });
  }
  createCine() {
    const cine: Cine = {
      id: 0,
      nombre: this.form.value.nombre,
      paisOrigen: this.form.value.paisOrigen,
      foto: this.form.value.foto,
      peliculas: []
    };
    return cine;
  }
}
