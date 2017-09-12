import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1998Component } from './my-comp-1998.component';

describe('MyComp1998Component', () => {
  let component: MyComp1998Component;
  let fixture: ComponentFixture<MyComp1998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
