import { PaisService } from './../pais.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from '../pais.model';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.scss']
})
export class PaisDetalleComponent  {
  @Input() pais: Pais;
  @Output() back: EventEmitter<any> = new EventEmitter<any>();
  @Output() deactivated: EventEmitter<Pais> = new EventEmitter<Pais>();

  constructor(
    public _paisService: PaisService) {
  }
  onDeactivate(pais: Pais) {
    this.deactivated.emit(pais);
  }
  onClose() {
    this.back.emit();
  }
}
