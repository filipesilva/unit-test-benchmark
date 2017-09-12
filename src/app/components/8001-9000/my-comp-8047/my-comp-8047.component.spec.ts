import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8047Component } from './my-comp-8047.component';

describe('MyComp8047Component', () => {
  let component: MyComp8047Component;
  let fixture: ComponentFixture<MyComp8047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
