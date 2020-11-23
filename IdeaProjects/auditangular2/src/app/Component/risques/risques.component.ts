import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../Service/user-service.service';
import {RisquesServiceService} from '../../Service/risques-service.service';
import {Router} from '@angular/router';
import '@angular/compiler';

@Component({
  selector: 'app-risques',
  templateUrl: './risques.component.html',
  styleUrls: ['./risques.component.css']
})

export class RisquesComponent implements OnInit {
  maxSize = 5;
  bigTotalItems = 175;
  bigCurrentPage = 1;
  private risque;
  public dataSource: any;
  risques: any;
  // tslint:disable-next-line:variable-name
  constructor(private userService: UserServiceService, private risquesService: RisquesServiceService, private _route: Router) { }

  ngOnInit(): void { this.getRisques();
  }
  // tslint:disable-next-line:typedef
  private getRisques() {
    this.risquesService.getRisqueList().subscribe(
      data => {
        console.log('data id  ' + data);
        this.risques = data;
      }
    );

  }

  // tslint:disable-next-line:typedef
  gotoEditRisque(id: number) {
    console.log('id' + id);
    this._route.navigate(['/editrisque', id]);
  }
  // tslint:disable-next-line:typedef
  gotoAddRisque() {
    this._route.navigate(['/newrisques']);
  }
  // tslint:disable-next-line:typedef
  deleteRisque(id: number) {
    this.risquesService.deleteRisqueById(id).subscribe(
      data => {
        console.log('delete succesfully');
        this._route.navigate(['/risques']);
      },
      error => console.log('Exception')
    );

  }
}
