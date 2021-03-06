import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actores/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actores/actor-listado/actor-listado.component';
import { PaisListadoComponent } from './components/paises/pais-listado/pais-listado.component';
import { PaisDetalleComponent } from './components/paises/pais-detalle/pais-detalle.component';
import { CineListadoComponent } from './components/cines/cine-listado/cine-listado.component';
import { CineAltaComponent } from './components/cines/cine-alta/cine-alta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidaComponent },
  { path: 'busqueda', component: BuscadorComponent },
  {
    path: 'peliculas',
    children: [
      { path: 'alta', component: PeliculaAltaComponent },
      { path: 'listado', component: PeliculaListadoComponent },
      { path: ':id', component: PeliculaAltaComponent },
    ]
  },
  {
    path: 'actores',
    children: [
      { path: 'alta', component: ActorAltaComponent },
      { path: 'listado', component: ActorListadoComponent }
    ]
  },
  {
    path: 'paises',
    children: [
      { path: 'listado', component: PaisListadoComponent },
      { path: ':name', component: PaisDetalleComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'bienvenido' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
