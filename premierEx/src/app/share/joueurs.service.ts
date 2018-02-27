import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Joueur} from "./joueur";
import {JOUEURS} from "./mock-joueurs";

@Injectable()
export class JoueursService {

    constructor() {
    }

    getJoueurs(): Observable<Joueur[]> {
        return of(JOUEURS);
    }

    getJoueur(id: number): Observable<Joueur> {
        return of(JOUEURS.find(joueur => joueur.id === id));
    }
}
