import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6942Component } from './my-comp-6942.component';

describe('MyComp6942Component', () => {
  let component: MyComp6942Component;
  let fixture: ComponentFixture<MyComp6942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
