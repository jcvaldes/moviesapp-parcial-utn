import { ActorService } from '../actor.service';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Actor } from '../actor.model';


@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.scss']
})
export class ActorDetalleComponent {
  @Input() actor: Actor;
  @Output() actorDeleted: EventEmitter<Actor> = new EventEmitter<Actor>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _actorService: ActorService) {}

  onDelete(actor) {
    this._actorService.deleteActor(actor);
    this.actorDeleted.emit(actor);
    this.onClose();
  }
  onClose() {
    this.actor = null;
    this.back.emit();
  }
}
