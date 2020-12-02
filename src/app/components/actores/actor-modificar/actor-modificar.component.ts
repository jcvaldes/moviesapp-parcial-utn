import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';
import { SwalService } from '../../../common/services/swal.service';
declare var $: any;

@Component({
  selector: 'app-actor-modificar',
  templateUrl: './actor-modificar.component.html',
  styleUrls: ['./actor-modificar.component.scss']
})
export class ActorModificarComponent implements OnInit {
  @Input() actor: Actor;
  constructor(private swalService: SwalService, private actorService: ActorService) { }
  ngOnInit(): void {}
  updateActor() {
    const actor = {
      id: $('#id').val(),
      nombre: $('#nombre').val(),
      apellido: $('#apellido').val(),
      sexo: $('#sexo').val(),
      fechaNacimiento: $('#fechaNacimiento').val(),
      foto: $('#foto')[0].currentSrc,
      paisOrigen: $('#paisOrigen').val()
    }
    this.actorService.saveActor(actor).subscribe(data => {
      this.swalService.success('Atención', 'usuario modificado');
    });
  }
}
