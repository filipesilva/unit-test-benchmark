import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp770Component } from './my-comp-770.component';

describe('MyComp770Component', () => {
  let component: MyComp770Component;
  let fixture: ComponentFixture<MyComp770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
