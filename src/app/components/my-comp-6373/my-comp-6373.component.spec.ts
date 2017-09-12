import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6373Component } from './my-comp-6373.component';

describe('MyComp6373Component', () => {
  let component: MyComp6373Component;
  let fixture: ComponentFixture<MyComp6373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
