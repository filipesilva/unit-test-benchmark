import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6536Component } from './my-comp-6536.component';

describe('MyComp6536Component', () => {
  let component: MyComp6536Component;
  let fixture: ComponentFixture<MyComp6536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
