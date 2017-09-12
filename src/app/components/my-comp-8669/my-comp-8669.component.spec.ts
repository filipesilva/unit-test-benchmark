import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8669Component } from './my-comp-8669.component';

describe('MyComp8669Component', () => {
  let component: MyComp8669Component;
  let fixture: ComponentFixture<MyComp8669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
