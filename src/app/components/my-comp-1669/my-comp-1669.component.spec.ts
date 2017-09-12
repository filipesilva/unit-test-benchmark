import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1669Component } from './my-comp-1669.component';

describe('MyComp1669Component', () => {
  let component: MyComp1669Component;
  let fixture: ComponentFixture<MyComp1669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
