import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4669Component } from './my-comp-4669.component';

describe('MyComp4669Component', () => {
  let component: MyComp4669Component;
  let fixture: ComponentFixture<MyComp4669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
