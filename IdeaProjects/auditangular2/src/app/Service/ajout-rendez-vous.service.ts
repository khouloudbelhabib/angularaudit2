import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rendezvous} from '../Model/Rendzvous';

@Injectable({
  providedIn: 'root'
})
export class AjoutRendezVousService {

  constructor(private http: HttpClient) { }
  public getrendezvousList(): Observable<any>{
    return this.http.get('http://localhost:8090/rendezvous/getRendezVous');
  }
  // tslint:disable-next-line:typedef
  public addRendezvous( rendezvous: Rendezvous ){
    return this.http.post('http://localhost:8090/rendezvous/ajouterunrendezvous', rendezvous);
  }
  // tslint:disable-next-line:typedef
  public updaterendezvous(rendezvous: Rendezvous){
    return this.http.post('http://localhost:8090/rendezvous/updateRendezVouz', rendezvous);
  }
  public deleteRendezvousById( id: number): Observable<any>{
    return this.http.delete('http://localhost:8090/rendezvous/deleteRendezvouz/' + id);
  }
  // tslint:disable-next-line:typedef
  public saveRendezvous(rendezvous: Rendezvous){
    return this.http.post('http://localhost:8090/rendezvous//save', rendezvous);
  }
}
