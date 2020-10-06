import { Component, OnInit, ViewChildren, ViewChild, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cine-tabla',
  templateUrl: './cine-tabla.component.html',
  styleUrls: ['./cine-tabla.component.scss']
})
export class CineTablaComponent implements OnInit {
  searchTerm: string;
  @Output() cineSelected: EventEmitter<Cine> = new EventEmitter<Cine>();
  @Input() cines: Cine[] = [];
  constructor(
    public cineService: CineService
  ) { }
  ngOnInit() {
    this.cineService
      .loadAllCines()
      .subscribe(cines => {
        this.cines = cines;
      });
  }
  onSelect(cine) {
    this.cineSelected.emit(cine);
  }
  onDelete(cine) {
    this.cineService.deleteCine(cine);
    Swal.fire('Atención', 'El cine ha sido desactivado', 'success');
    this.ngOnInit();
  }
}
