import { ActorService } from '../actor.service';
import { Component, OnInit, Inject, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { Actor } from '../actor.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.scss']
})
export class ActorDetalleComponent implements OnChanges {
  @Input() actor: Actor;
  @Output() actorUpdated = new EventEmitter();

  @Output() actorDeleted: EventEmitter<Actor> = new EventEmitter<Actor>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();
  isEdit = false;
  form: FormGroup;
  constructor(
    public _actorService: ActorService) {
      this.crearForm();
    }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.actor && changes.actor.currentValue) {
      this.form.get('id').setValue(changes.actor.currentValue.id);
      this.form.get('apellido').setValue(changes.actor.currentValue.apellido);
      this.form.get('nombre').setValue(changes.actor.currentValue.nombre);
      this.form.get('sexo').setValue(changes.actor.currentValue.sexo);
      this.form.get('fechaNacimiento').setValue(changes.actor.currentValue.fechaNacimiento);
      this.form.get('paisOrigen').setValue(changes.actor.currentValue.paisOrigen);
    }
  }
  crearForm() {
    this.form  = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl(null),
      apellido: new FormControl(null),
      sexo: new FormControl(null),
      fechaNacimiento: new FormControl(null),
      paisOrigen: new FormControl(null)
    });

  }
  onDelete() {
    this._actorService.deleteActor(this.form.get('id').value).subscribe(data => {
      Swal.fire('Atención', 'Actor Eliminado', 'success');
    });
    this.actorDeleted.emit(this.form.get('id').value);
    this.onClose();
  }
  onEdit() {
    this.isEdit = !this.isEdit;
  }
  onUpdate(actor) {
    debugger

    this._actorService.saveActor(actor.id, this.form.value).subscribe(data => {
      this.actorUpdated.emit();
      Swal.fire('Atención', 'Actor Actualizado', 'success');
    });

  }
  onClose() {
    this.actor = null;
    this.back.emit();
  }
}
