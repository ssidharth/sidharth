import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingattribComponent } from './classbindingattrib.component';

describe('ClassbindingattribComponent', () => {
  let component: ClassbindingattribComponent;
  let fixture: ComponentFixture<ClassbindingattribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassbindingattribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbindingattribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
