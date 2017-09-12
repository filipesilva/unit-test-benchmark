import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1574Component } from './my-comp-1574.component';

describe('MyComp1574Component', () => {
  let component: MyComp1574Component;
  let fixture: ComponentFixture<MyComp1574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
