import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6169Component } from './my-comp-6169.component';

describe('MyComp6169Component', () => {
  let component: MyComp6169Component;
  let fixture: ComponentFixture<MyComp6169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
