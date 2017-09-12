import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1496Component } from './my-comp-1496.component';

describe('MyComp1496Component', () => {
  let component: MyComp1496Component;
  let fixture: ComponentFixture<MyComp1496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
