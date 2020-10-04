import * as firebase from 'firebase';
import { ACTORS, MOVIES } from './db-data';
import { environment } from './src/environments/environment';
const config = environment.firebase;

console.log('Uploading data to the database with the following config:\n');
console.log(JSON.stringify(config));

console.log('\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n');

const app = firebase.initializeApp(config);
const db = firebase.firestore();

main().then(r => console.log('Done.'));

async function main() {
  try {
    console.log('Start main...\n\n');
    await uploadData();
    console.log('\n\nClosing Application...');
    await app.delete();
  } catch (e) {
    console.log('Data upload failed, reason:', e, '\n\n');
  }
}

async function uploadData() {
  await uploadActors();
  await uploadMovies();
}


async function uploadActors() {
  const actors = await db.collection('actors');
  for (let actor of Object.values(ACTORS)) {
    const userRef = await actors.add(actor);
    console.log(`Uploading user ${actor['nombre']}`);
  }
}

async function uploadMovies() {
  const movies = await db.collection('movies');
  for (let movie of Object.values(MOVIES)) {
    const userRef = await movies.add(movie);
    console.log(`Uploading user ${movie['nombre']}`);
  }
}




