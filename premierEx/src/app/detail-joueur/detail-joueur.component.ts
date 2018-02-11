import {Component, OnInit, Input} from '@angular/core';
import {Joueur} from "../share/joueur";


@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.component.html',
  styleUrls: ['./detail-joueur.component.css'],
})

export class DetailJoueurComponent implements OnInit {
  @Input() monJoueur: Joueur;

  constructor() {
  }

  ngOnInit() {
  }

  title = "Détail des joueurs"
}
