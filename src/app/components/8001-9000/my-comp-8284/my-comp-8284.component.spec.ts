import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8284Component } from './my-comp-8284.component';

describe('MyComp8284Component', () => {
  let component: MyComp8284Component;
  let fixture: ComponentFixture<MyComp8284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
