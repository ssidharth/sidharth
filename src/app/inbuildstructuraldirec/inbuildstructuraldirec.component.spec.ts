import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuildstructuraldirecComponent } from './inbuildstructuraldirec.component';

describe('InbuildstructuraldirecComponent', () => {
  let component: InbuildstructuraldirecComponent;
  let fixture: ComponentFixture<InbuildstructuraldirecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuildstructuraldirecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuildstructuraldirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
