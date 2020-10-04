import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { Pais } from '../pais.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent implements OnInit {
  @Output() paisSelected: EventEmitter<Pais> = new EventEmitter<Pais>();
  @Input() paises: Pais[] = [];
  searchTerm: string;
  url = 'https://restcountries.eu/rest/v2/region/americas';
  constructor(public _paisService: PaisService) { }

  ngOnInit() {
    this._paisService.get<Pais>(this.url).subscribe(paises => {
      this.paises = paises;
    });
}

onSelect(pais) {
  this.paisSelected.emit(pais);
}
}
