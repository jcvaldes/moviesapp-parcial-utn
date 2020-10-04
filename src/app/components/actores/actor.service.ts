import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map, first, take } from 'rxjs/operators';
import { convertSnaps } from '../../../utils/db-utils';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  constructor(
    private db: AngularFirestore
  ) {
  }
  loadAllActors(): Observable<Actor[]> {
    return this.db.collection('actors')
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return convertSnaps<Actor>(snaps);
          // return snaps.map(snap => {
          //   return <Course>{
          //     id: snap.payload.doc.id,
          //     ...snap.payload.doc.data() as {}
          //   };
          // });
        }), first()); // o take(1)
  }

  // Partial permite que no todas las propiedades sean obligatorias de pasar
  saveActor(actorId: string, changes: Partial<Actor>): Observable<any> {
    // si el documento existe usamos update si no existe usamos set
    // from: transforma la promesa en un observable
    if (actorId) {
      return from(this.db.doc(`actors/${actorId}`).update(changes));
    } else {
      return from(this.db.collection('actors').add(changes));
    }
  }

  deleteActor(actorId: string): Observable<any> {
    return from(this.db.doc(`actors/${actorId}`).delete());
  }
}
