import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9839Component } from './my-comp-9839.component';

describe('MyComp9839Component', () => {
  let component: MyComp9839Component;
  let fixture: ComponentFixture<MyComp9839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
