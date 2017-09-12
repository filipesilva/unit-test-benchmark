import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1670Component } from './my-comp-1670.component';

describe('MyComp1670Component', () => {
  let component: MyComp1670Component;
  let fixture: ComponentFixture<MyComp1670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
