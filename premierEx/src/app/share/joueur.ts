export class Joueur {
  constructor(public id: number,
              public nom: string,
              public prenom: string,
              public images?: string,
              public post?: string,
              public nbMatches?: number,
              public pointsMarques?: number,
              public description?: string) {
  }
}
