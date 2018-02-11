import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur.component';


@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    DetailJoueurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
