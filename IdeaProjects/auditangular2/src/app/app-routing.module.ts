import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './Component/register/register.component';
import {LoginComponent} from './Component/login/login.component';
import {RisquesComponent} from './Component/risques/risques.component';
import {NewRisqueComponent} from './Component/new-risque/new-risque.component';
import {EditRisqueComponent} from './Component/edit-risque/edit-risque.component';
import {ReclamationComponent} from './Component/reclamation/reclamation.component';
import {ListReclamationComponent} from './Component/list-reclamation/list-reclamation.component';
import {CommentaireComponent} from './Component/commentaire/commentaire.component';
import {ListcommentaireComponent} from './Component/listcommentaire/listcommentaire.component';
import {AjoutRendezVousComponent} from './Component/ajout-rendez-vous/ajout-rendez-vous.component';
import {HomeComponent} from './Component/home/home.component';
import {ListClientComponent} from './Component/list-client/list-client.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'risques', component: RisquesComponent },
  { path: 'newrisques', component: NewRisqueComponent },
  { path: 'editrisque', component: EditRisqueComponent },
  { path: 'editrisque/:id', component: EditRisqueComponent},
  { path: 'reclamation', component: ReclamationComponent},
  { path: 'listreclamation', component: ListReclamationComponent},
  { path: 'AjoutCommentaire', component: CommentaireComponent},
  { path: 'ListCommentaire', component: ListcommentaireComponent},
  { path: 'AjouterRendezVous', component: AjoutRendezVousComponent},
  { path: 'home', component: HomeComponent},
  { path: 'ListClient', component: ListClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
