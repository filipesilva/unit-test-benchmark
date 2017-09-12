import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9536Component } from './my-comp-9536.component';

describe('MyComp9536Component', () => {
  let component: MyComp9536Component;
  let fixture: ComponentFixture<MyComp9536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
