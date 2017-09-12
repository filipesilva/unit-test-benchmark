import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1631Component } from './my-comp-1631.component';

describe('MyComp1631Component', () => {
  let component: MyComp1631Component;
  let fixture: ComponentFixture<MyComp1631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
