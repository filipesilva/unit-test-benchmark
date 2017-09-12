import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1945Component } from './my-comp-1945.component';

describe('MyComp1945Component', () => {
  let component: MyComp1945Component;
  let fixture: ComponentFixture<MyComp1945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
