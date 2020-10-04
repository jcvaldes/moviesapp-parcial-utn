import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';
import { ActorTablaComponent } from '../actor-tabla/actor-tabla.component';
import { Pelicula } from '../../peliculas/pelicula.model';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit, OnChanges {
  actor: Actor;
  actores: Actor[] = [];
  @Input() pelicula: Pelicula[];
  @ViewChild(ActorTablaComponent, { static: true }) actorTabla: ActorTablaComponent;

  constructor(public _actorService: ActorService) { }
  onSelected(actor: Actor) {
    this.actor = actor;
  }
  onDeleted(actor: Actor) {
    this.actores = this.actorTabla.actores.filter(i => {
      return i !== actor;
    });
    this.actor = null;
  }
  ngOnInit(): void {
    if (this.actores && this.actores.length === 0) {
      this.actores = this.actorTabla.actores;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.pelicula && changes.pelicula.currentValue.actores) {
      this.actor = undefined;
      this.actores = changes.pelicula.currentValue.actores;
    }
  }
}
