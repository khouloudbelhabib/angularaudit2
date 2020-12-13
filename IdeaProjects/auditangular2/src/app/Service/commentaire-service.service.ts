import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commentaire} from '../Model/Commentaire';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class CommentaireServiceService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public addcommentaireToRemote(commentaire: Commentaire) {
    return this.http.post('http://localhost:8090/evaluation/saveEvaluation', commentaire);
  }
  // tslint:disable-next-line:typedef
  public listcommentaireToRemote(): Observable<any> {
    return this.http.get('http://localhost:8090/evaluation/getEvaluations');
  }
  // tslint:disable-next-line:typedef
  public listcommentairebyUser(user: User) {
    return this.http.get('http://localhost:8090/evaluation/getEvaluationByUser' + user);
  }
}
