import { Component, OnInit } from '@angular/core';
import {Commentaire} from '../../Model/Commentaire';
import {Router} from '@angular/router';
import {CommentaireServiceService} from '../../Service/commentaire-service.service';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  commentaire = new Commentaire();
  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router,  private commentaireService: CommentaireServiceService , private toastrService: ToastService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addCommentaireformsubmit(){
    this.commentaireService.addcommentaireToRemote(this.commentaire).subscribe(
      data =>
      {
        console.log('data added');
      },
      error => console.log('error')
    );
  }
  // tslint:disable-next-line:typedef
  showSuccess() {
    this.toastrService.success('le commentaire a été  ajouté avec succés');
  }
}
