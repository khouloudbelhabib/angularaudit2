import { Component, OnInit } from '@angular/core';
import {Rendezvous} from '../../Model/Rendzvous';
import {Router} from '@angular/router';
import {AjoutRendezVousService} from '../../Service/ajout-rendez-vous.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-ajout-rendez-vous',
  templateUrl: './ajout-rendez-vous.component.html',
  styleUrls: ['./ajout-rendez-vous.component.css']
})
export class AjoutRendezVousComponent implements OnInit {

  rendezvous = new Rendezvous();
  rendezvous1: any;

  // tslint:disable-next-line:variable-name
  constructor(private  _route: Router, private  rendezvousService: AjoutRendezVousService, private toastrService: ToastService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addrendezvousformsubmit() {
    this.rendezvous1 = this.rendezvousService.addRendezvous(this.rendezvous);
    if (this.rendezvous1 == null) {
      this.rendezvousService.saveRendezvous(this.rendezvous);
      console.log('data est ajouté');

    } else {
      console.log('imposible de prendre un rendez_vous');
    }
  }
  // tslint:disable-next-line:typedef
  showSuccess() {
    this.toastrService.success('le rendez_vous a été  ajouté avec succés');
  }

}
