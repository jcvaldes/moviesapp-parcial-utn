import { Component,  ViewChild, Output, EventEmitter } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais.model';
import * as _ from 'lodash';
import { PaisTablaComponent } from '../pais-tabla/pais-tabla.component';

@Component({
  selector: 'app-pais-listado',
  templateUrl: './pais-listado.component.html',
  styleUrls: ['./pais-listado.component.scss']
})
export class PaisListadoComponent{
  pais: Pais;
  @Output() paisSelected: EventEmitter<Pais> = new EventEmitter<Pais>();
  paises: Pais[] = [];
  paisesDesactivados: string[] = [];
  @ViewChild(PaisTablaComponent, { static: true }) paisTabla: PaisTablaComponent;
  url =  'https://restcountries.eu/rest/v2/region/americas';
  constructor(public _paisService: PaisService) { }

  onSelected(pais: Pais) {
    this.pais = pais;
    this.paisSelected.emit(pais);
  }
  onDeactivated(pais: Pais) {
    this.paises = this.paisTabla.paises;
    this.paisesDesactivados.push(pais.name);
    this.paises = _.differenceWith(this.paises, this.paisesDesactivados,({ name }, id) => name === id);
    this.pais = null;
  }
}
