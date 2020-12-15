import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Commentaire} from '../../Model/Commentaire';
import {CommentaireServiceService} from '../../Service/commentaire-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listcommentaire',
  templateUrl: './listcommentaire.component.html',
  styleUrls: ['./listcommentaire.component.css']
})
export class ListcommentaireComponent implements OnInit {
  page = 1;

  totalRecord: number;

  private commentaire;
  commentaires: Observable<Commentaire[]>;
  // tslint:disable-next-line:variable-name
  constructor( private commentaireservice: CommentaireServiceService , private _route: Router ) { }

  ngOnInit(): void {
    this.getCommentaire();
  }
// tslint:disable-next-line:typedef
  getCommentaire(){
    this.commentaires = this.commentaireservice.listcommentaireToRemote();
  }
  // tslint:disable-next-line:typedef
  gotocommentaire() {
    this._route.navigate(['/AjoutCommentaire']);
  }

}
