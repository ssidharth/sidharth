import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentlikecompoComponent } from './parentlikecompo.component';

describe('ParentlikecompoComponent', () => {
  let component: ParentlikecompoComponent;
  let fixture: ComponentFixture<ParentlikecompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentlikecompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentlikecompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
