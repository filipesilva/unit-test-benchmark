import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1364Component } from './my-comp-1364.component';

describe('MyComp1364Component', () => {
  let component: MyComp1364Component;
  let fixture: ComponentFixture<MyComp1364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
