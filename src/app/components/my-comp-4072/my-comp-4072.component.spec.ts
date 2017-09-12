import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4072Component } from './my-comp-4072.component';

describe('MyComp4072Component', () => {
  let component: MyComp4072Component;
  let fixture: ComponentFixture<MyComp4072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
