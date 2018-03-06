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
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const CONFIG: FirebaseAppConfig = {
    apiKey: "AIzaSyAvzz3g_yLGPTsSziDeBfY10_tl9iriRp8",
    authDomain: "staderochelais-a21da.firebaseapp.com",
    databaseURL: "https://staderochelais-a21da.firebaseio.com",
    projectId: "staderochelais-a21da",
    storageBucket: "staderochelais-a21da.appspot.com",
    messagingSenderId: "42173517487"
};

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
        }),
        AngularFireModule.initializeApp(CONFIG),
        AngularFireDatabaseModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
