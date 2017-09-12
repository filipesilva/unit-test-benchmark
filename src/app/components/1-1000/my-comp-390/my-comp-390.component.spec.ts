import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp390Component } from './my-comp-390.component';

describe('MyComp390Component', () => {
  let component: MyComp390Component;
  let fixture: ComponentFixture<MyComp390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
