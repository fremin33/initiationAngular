import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Joueur} from "./joueur";
import {JOUEURS} from "./mock-joueurs";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class JoueursService {

    constructor(private afDb: AngularFireDatabase) {
    }

    getJoueurs(): Observable<Joueur[]> {
        return of(JOUEURS);
    }

    getJoueur(id: number): Observable<Joueur> {
        return of(JOUEURS.find(joueur => joueur.id === id));
    }

    getJoueursDb(): Observable<any[]> {
        // Ajouter la clés id lors de la récupération des données
        return this.afDb.list('Joueurs').snapshotChanges().map(changes => {
            return changes.map(c => ({ id: c.payload.key, ...c.payload.val() }));
        });
    }
}
