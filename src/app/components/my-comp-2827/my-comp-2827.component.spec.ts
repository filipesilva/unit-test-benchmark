import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2827Component } from './my-comp-2827.component';

describe('MyComp2827Component', () => {
  let component: MyComp2827Component;
  let fixture: ComponentFixture<MyComp2827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
