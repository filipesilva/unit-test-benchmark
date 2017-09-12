import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2711Component } from './my-comp-2711.component';

describe('MyComp2711Component', () => {
  let component: MyComp2711Component;
  let fixture: ComponentFixture<MyComp2711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
