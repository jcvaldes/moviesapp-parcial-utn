import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';
import Swal from 'sweetalert2';
import { Pais } from '../../paises/pais.model';
@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {
  form: FormGroup;
  constructor(public _actorService: ActorService) {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      sexo: new FormControl('M', Validators.required),
      fechaNacimiento: new FormControl(null, Validators.required),
      foto: new FormControl(null, Validators.required),
      paisOrigen: new FormControl(null, Validators.required),
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this._actorService.saveActor(null, this.form.value).subscribe(data => {
      this.form.get('paisOrigen').setValue(null);
      this.form.reset();
      Swal.fire('Atención', 'La actor ha sido guardado', 'success');
    });
  }

  onSelected(pais: Pais) {
    this.form.get('paisOrigen').setValue(pais.name);
  }
}
