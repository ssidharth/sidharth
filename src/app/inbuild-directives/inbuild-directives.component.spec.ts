import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuildDirectivesComponent } from './inbuild-directives.component';

describe('InbuildDirectivesComponent', () => {
  let component: InbuildDirectivesComponent;
  let fixture: ComponentFixture<InbuildDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuildDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuildDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
