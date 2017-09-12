import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9904Component } from './my-comp-9904.component';

describe('MyComp9904Component', () => {
  let component: MyComp9904Component;
  let fixture: ComponentFixture<MyComp9904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
