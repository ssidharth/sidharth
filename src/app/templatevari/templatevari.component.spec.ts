import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevariComponent } from './templatevari.component';

describe('TemplatevariComponent', () => {
  let component: TemplatevariComponent;
  let fixture: ComponentFixture<TemplatevariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatevariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatevariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
