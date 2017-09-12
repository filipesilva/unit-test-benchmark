import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp803Component } from './my-comp-803.component';

describe('MyComp803Component', () => {
  let component: MyComp803Component;
  let fixture: ComponentFixture<MyComp803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
