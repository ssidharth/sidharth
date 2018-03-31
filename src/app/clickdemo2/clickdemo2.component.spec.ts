import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clickdemo2Component } from './clickdemo2.component';

describe('Clickdemo2Component', () => {
  let component: Clickdemo2Component;
  let fixture: ComponentFixture<Clickdemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clickdemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clickdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
