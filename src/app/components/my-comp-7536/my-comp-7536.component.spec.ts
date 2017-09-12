import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7536Component } from './my-comp-7536.component';

describe('MyComp7536Component', () => {
  let component: MyComp7536Component;
  let fixture: ComponentFixture<MyComp7536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
