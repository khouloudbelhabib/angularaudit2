import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRendezVousComponent } from './list-rendez-vous.component';

// @ts-ignore
describe('ListRendezVousComponent', () => {
  let component: ListRendezVousComponent;
  let fixture: ComponentFixture<ListRendezVousComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRendezVousComponent ]
    })
    .compileComponents();
  });

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(ListRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
