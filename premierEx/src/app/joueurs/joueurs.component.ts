import {Component, OnInit} from '@angular/core';
import {Joueur} from "../share/joueur";
import {JoueursService} from "../share/joueurs.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-joueurs',
    templateUrl: './joueurs.component.html',
    styleUrls: ['./joueurs.component.css'],
    providers: [JoueursService]
})
export class JoueursComponent implements OnInit {
    unJoueur: Joueur;
    deuxJoueur: Joueur;
    troisJoeur: Joueur;
    // Déclaration
    lesJoueurs: Observable<Joueur[]>;
    joueurSelectionne: Joueur;

    constructor(private JoueurService: JoueursService) {

    }

    ngOnInit() {
        // Allocation
        // this.lesJoueurs = [];
        this.getJoueurs();
        // this.unJoueur = new Joueur(1, "botia", "Levani", "1.jpg", '3ieme ligne', 83, 90);
        // this.deuxJoueur = new Joueur(2, "gourdon", "kevin", "2.jpg", "3ieme ligne", 135, 90);
        // this.troisJoeur = new Joueur(3, "priso", "dany", "3.jpg", "pilier", 34, 10);
        // this.lesJoueurs = [this.unJoueur, this.deuxJoueur, this.troisJoeur];
    }

    // Récupère les informations d'un joueur sélectionné
    select(joueur: Joueur): void {
        this.joueurSelectionne = joueur;
        console.log(this.joueurSelectionne)
    }

    getJoueurs(): void {
        //Synchrone
        //     this.lesJoueurs = this.JoueurService.getJoueurs();

        //Asynchrone
        // this.JoueurService.getJoueurs().subscribe(joueur => this.lesJoueurs = joueur);
        this.lesJoueurs = this.JoueurService.getJoueursDb();
    }



    title = 'Equipe Pro';
}
