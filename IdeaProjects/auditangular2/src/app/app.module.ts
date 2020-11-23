import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../_helpers/authInterceptor';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AuthenticationServiceService} from './Service/authentication-service.service';
import {TokenStorageService} from './Service/token-storage.service';
import { RisquesComponent } from './Component/risques/risques.component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { NewRisqueComponent } from './Component/new-risque/new-risque.component';
import { EditRisqueComponent } from './Component/edit-risque/edit-risque.component';
import {ReclamationComponent} from './Component/reclamation/reclamation.component';
import { ListReclamationComponent } from './Component/list-reclamation/list-reclamation.component';
import { CommentaireComponent } from './Component/commentaire/commentaire.component';
import { ListcommentaireComponent } from './Component/listcommentaire/listcommentaire.component';
import { AjoutRendezVousComponent } from './Component/ajout-rendez-vous/ajout-rendez-vous.component';
import {CustomDatePipe} from './Model/custom.datepipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import { ListRendezVousComponent } from './Component/list-rendez-vous/list-rendez-vous.component';
import { HomeComponent } from './Component/home/home.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { ListClientComponent } from './Component/list-client/list-client.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RisquesComponent,
    NewRisqueComponent,
    EditRisqueComponent,
    ReclamationComponent,
    ListReclamationComponent,
    CommentaireComponent,
    ListcommentaireComponent,
    AjoutRendezVousComponent,
    CustomDatePipe,
    ListRendezVousComponent,
    HomeComponent,
    ListClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatCardModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    // tslint:disable-next-line:max-line-length
  }, AuthenticationServiceService, TokenStorageService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
