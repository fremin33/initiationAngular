import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {JoueursComponent} from './joueurs/joueurs.component';
import {DetailJoueurComponent} from './detail-joueur/detail-joueur.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {ShowCardDirective} from './share/directive/show-card.directive';
import {MedicPipe} from './share/pipes/medic.pipe';
import {AgmCoreModule} from '@agm/core';


@NgModule({
    declarations: [
        AppComponent,
        JoueursComponent,
        DetailJoueurComponent,
        ContactComponent,
        HomeComponent,
        MenuComponent,
        ShowCardDirective,
        MedicPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB73DUAPlw9sdislBZoda5O3oNdjAyTrY4'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
