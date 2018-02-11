import {Component, OnInit} from '@angular/core';
import {Joueur} from "../share/joueur";

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  unJoueur: Joueur;
  deuxJoueur: Joueur;
  troisJoeur: Joueur;
  // Déclaration
  lesJoueurs: Array<Joueur>;
  joueurSelectionne: Joueur;

  constructor() {

  }

  ngOnInit() {
    // Allocation
    this.lesJoueurs = [];
    this.unJoueur = new Joueur(1, "botia", "Levani", "1.jpg", '3ieme ligne', 83, 90);
    this.deuxJoueur = new Joueur(2, "gourdon", "kevin", "2.jpg", "3ieme ligne", 135, 90);
    this.troisJoeur = new Joueur(3, "priso", "dany", "3.jpg", "pilier", 34, 10);
    this.lesJoueurs = [this.unJoueur, this.deuxJoueur, this.troisJoeur];
  }

  // Récupère les informations d'un joueur sélectionné
  select(joueur: Joueur): void {
    this.joueurSelectionne = joueur;
    console.log(this.joueurSelectionne)
  }

  title = 'Equipe Pro';
}
