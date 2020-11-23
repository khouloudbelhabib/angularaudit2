import { Injectable } from '@angular/core';
import {Reclamation} from '../Model/Reclamation';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  public addreclamationToRemote(reclamation: Reclamation){
    return this.http.post('http://localhost:8090/reclamation/saveReclamation', reclamation);
  }
// tslint:disable-next-line:typedef
  public listReclamationToRemote(): Observable<any> {
    return this.http.get('http://localhost:8090/reclamation/getReclamations');
  }
}
