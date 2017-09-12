import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8334Component } from './my-comp-8334.component';

describe('MyComp8334Component', () => {
  let component: MyComp8334Component;
  let fixture: ComponentFixture<MyComp8334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
