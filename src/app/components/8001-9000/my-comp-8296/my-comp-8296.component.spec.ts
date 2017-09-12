import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8296Component } from './my-comp-8296.component';

describe('MyComp8296Component', () => {
  let component: MyComp8296Component;
  let fixture: ComponentFixture<MyComp8296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
