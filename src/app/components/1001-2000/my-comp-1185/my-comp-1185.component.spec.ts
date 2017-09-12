import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1185Component } from './my-comp-1185.component';

describe('MyComp1185Component', () => {
  let component: MyComp1185Component;
  let fixture: ComponentFixture<MyComp1185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
