import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8527Component } from './my-comp-8527.component';

describe('MyComp8527Component', () => {
  let component: MyComp8527Component;
  let fixture: ComponentFixture<MyComp8527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
