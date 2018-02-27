import {Component, OnInit, Input} from '@angular/core';
import {Joueur} from "../share/joueur";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {JoueursService} from '../share/joueurs.service';


@Component({
    selector: 'app-detail-joueur',
    templateUrl: './detail-joueur.component.html',
    styleUrls: ['./detail-joueur.component.css'],
    providers: [JoueursService]
})

export class DetailJoueurComponent implements OnInit {
    monJoueur: Joueur;

    // @Input() monJoueur: Joueur;

    constructor(private route: ActivatedRoute, private joueursService: JoueursService, private location: Location) {
    }

    ngOnInit() {
        this.getJoueur();
    }

    getJoueur(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.joueursService.getJoueur(id).subscribe(joueur => this.monJoueur = joueur);
    }

    goBack(): void {
        this.location.back()
    }

    title = "Détail des joueurs"
}
