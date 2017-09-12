import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8163Component } from './my-comp-8163.component';

describe('MyComp8163Component', () => {
  let component: MyComp8163Component;
  let fixture: ComponentFixture<MyComp8163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
