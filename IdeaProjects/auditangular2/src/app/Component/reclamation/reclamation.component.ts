import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../../Model/Reclamation';
import {Router} from '@angular/router';
import {ReclamationServiceService} from '../../Service/reclamation-service.service';
import {Observable} from 'rxjs';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamation = new Reclamation();

  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router, private reclamationService: ReclamationServiceService, private toastrService: ToastService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addreclamationformsubmit() {
    this.reclamationService.addreclamationToRemote(this.reclamation).subscribe(
      data => {
        console.log('data added');
      },
      error => console.log('error')
    );

  }
  // tslint:disable-next-line:typedef
  showSuccess() {
    this.toastrService.success('la reclamation a été  ajoutée avec succés');
  }
}
