import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbindingComponent } from './angularbinding.component';

describe('AngularbindingComponent', () => {
  let component: AngularbindingComponent;
  let fixture: ComponentFixture<AngularbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
