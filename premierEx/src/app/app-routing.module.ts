import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JoueursComponent} from "./joueurs/joueurs.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {DetailJoueurComponent} from "./detail-joueur/detail-joueur.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'joueurs', component: JoueursComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'detail/:id', component: DetailJoueurComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
