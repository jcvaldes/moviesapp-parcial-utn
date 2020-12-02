import { Component, Input, OnInit } from '@angular/core';
import { SwalService } from '../../../common/services/swal.service';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-borrar',
  templateUrl: './actor-borrar.component.html',
  styleUrls: ['./actor-borrar.component.scss']
})
export class ActorBorrarComponent implements OnInit {
  @Input() actorId: string;
  constructor(private swalService: SwalService, private actorService: ActorService) { }

  ngOnInit(): void {
  }
  deleteActor() {
    this.swalService.confirm('Eliminas el actor?', null, 'info').then(result => {
      if (result.value) {
        this.actorService.deleteActor(this.actorId).subscribe(data => {
          this.swalService.success('Atención', 'Actor eliminado');
        });
      }
    });
  }
}
