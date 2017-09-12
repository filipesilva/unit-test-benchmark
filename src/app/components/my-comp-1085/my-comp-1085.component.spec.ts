import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1085Component } from './my-comp-1085.component';

describe('MyComp1085Component', () => {
  let component: MyComp1085Component;
  let fixture: ComponentFixture<MyComp1085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
