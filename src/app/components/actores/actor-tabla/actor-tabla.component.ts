import { Component, OnInit, ViewChildren, ViewChild, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorListadoComponent } from '../actor-listado/actor-listado.component';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.scss']
})
export class ActorTablaComponent implements OnInit, OnChanges {
  searchTerm: string;
  @Output() actorSelected: EventEmitter<Actor> = new EventEmitter<Actor>();
  @Input() actores: Actor[] = [];
  constructor(public actorService: ActorService) {
    debugger
    // this.actores = JSON.parse(localStorage.getItem('actores')) || [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger
    if (changes.actores && changes.actores.currentValue) {
      this.actores = changes.actores.currentValue;
    }
  }
  onSelect(actor) {
    this.actorSelected.emit(actor);
  }
  ngOnInit(): void {
    if (this.actores.length === 0) {
      this.actorService.loadAllActors().subscribe(actors => this.actores = actors);
    }

  }

}
