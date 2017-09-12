import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8429Component } from './my-comp-8429.component';

describe('MyComp8429Component', () => {
  let component: MyComp8429Component;
  let fixture: ComponentFixture<MyComp8429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
