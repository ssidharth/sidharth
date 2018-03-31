import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickdemoComponent } from './clickdemo.component';

describe('ClickdemoComponent', () => {
  let component: ClickdemoComponent;
  let fixture: ComponentFixture<ClickdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
