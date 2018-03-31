import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Likeparent2Component } from './likeparent2.component';

describe('Likeparent2Component', () => {
  let component: Likeparent2Component;
  let fixture: ComponentFixture<Likeparent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Likeparent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Likeparent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
