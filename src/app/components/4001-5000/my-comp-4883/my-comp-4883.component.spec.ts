import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4883Component } from './my-comp-4883.component';

describe('MyComp4883Component', () => {
  let component: MyComp4883Component;
  let fixture: ComponentFixture<MyComp4883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
