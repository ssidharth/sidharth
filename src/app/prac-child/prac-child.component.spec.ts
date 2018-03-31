import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracChildComponent } from './prac-child.component';

describe('PracChildComponent', () => {
  let component: PracChildComponent;
  let fixture: ComponentFixture<PracChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
