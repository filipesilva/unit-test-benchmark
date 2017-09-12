import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8423Component } from './my-comp-8423.component';

describe('MyComp8423Component', () => {
  let component: MyComp8423Component;
  let fixture: ComponentFixture<MyComp8423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
