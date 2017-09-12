import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6933Component } from './my-comp-6933.component';

describe('MyComp6933Component', () => {
  let component: MyComp6933Component;
  let fixture: ComponentFixture<MyComp6933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
