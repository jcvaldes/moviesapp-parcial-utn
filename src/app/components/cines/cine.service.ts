import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cine } from './cine.model';
import { Pelicula } from '../peliculas/pelicula.model';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { convertSnaps } from '../../../utils/db-utils';
import { first, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CineService {
  constructor(
    private db: AngularFirestore
  ) { }
  loadAllCines(): Observable<Cine[]> {
    return this.db.collection('cines')
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return convertSnaps<Cine>(snaps);
        }), first()); // o take(1)
  }
  getCine(cineId: string): Observable<Cine[]> {
    return this.db.doc(`cines/{cineId}`)
      .snapshotChanges()
      .pipe(
        map(snaps => convertSnaps<Cine>(snaps)),
        first()
      );
    // el observable de completa cuando se emite el primer valor que coincide con la condicion especificada
  }
  // Partial permite que no todas las propiedades sean obligatorias de pasar
  saveCine(cine: Cine): Observable<any> {
    // si el documento existe usamos update si no existe usamos set
    // from: transforma la promesa en un observable
    return from(this.db.collection('cines').add(cine));
  }
  updateCine(cineId: string, changes: Partial<Cine>) {
    return from(this.db.doc(`cines/${cineId}`).update(changes));
  }
  deleteCine(cineId: string): Observable<any> {
    return from(this.db.doc(`movies/${cineId}`).delete());
  }





}
