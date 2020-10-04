import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { convertSnaps } from '../../../utils/db-utils';
import { map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  constructor(
    private db: AngularFirestore
  ) { }
  loadAllMovies(): Observable<Pelicula[]> {
    return this.db.collection('movies')
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return convertSnaps<Pelicula>(snaps);
        }), first()); // o take(1)
  }
  // Partial permite que no todas las propiedades sean obligatorias de pasar
  saveMovie(movieId: string, changes: Partial<Pelicula>): Observable<any> {
    // si el documento existe usamos update si no existe usamos set
    // from: transforma la promesa en un observable
    return from(this.db.doc(`movies/${movieId}`).update(changes));
  }

  deleteMovie(movieId: string): Observable<any> {
    return from(this.db.doc(`movies/${movieId}`).delete());
  }


}


