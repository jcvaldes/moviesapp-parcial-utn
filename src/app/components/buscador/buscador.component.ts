import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeliculaService } from '../peliculas/pelicula.service';
import { Pelicula } from '../peliculas/pelicula.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  searchTerm: string;
  pelicula: Pelicula;
  @Output() search = new EventEmitter();
  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {

  }
  searchMovie(term: string) {
    debugger
    // console.info(term);
    // this.data.searchProducto(term).then(res =>{
    //   if(res!="0")
    //   {
    //     console.info(res);
    //     this.eventoDatoProducto.emit(res);

    //   }
    //   else
    //   {
    //     this.toast.error("No exite el producto indicado","Error");

    //   }


    // }).catch(error=>{
    //   console.log("llega Mal")
    //   console.info(error);
    // })

  }
  peliculaSelected(pelicula: Pelicula) {
    this.pelicula = pelicula;
  }
  onDeleted(e) {
  }
}
