import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8797Component } from './my-comp-8797.component';

describe('MyComp8797Component', () => {
  let component: MyComp8797Component;
  let fixture: ComponentFixture<MyComp8797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
