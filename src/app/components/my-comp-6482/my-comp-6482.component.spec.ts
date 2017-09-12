import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6482Component } from './my-comp-6482.component';

describe('MyComp6482Component', () => {
  let component: MyComp6482Component;
  let fixture: ComponentFixture<MyComp6482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
