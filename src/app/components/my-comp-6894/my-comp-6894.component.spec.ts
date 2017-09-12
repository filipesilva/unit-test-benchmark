import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6894Component } from './my-comp-6894.component';

describe('MyComp6894Component', () => {
  let component: MyComp6894Component;
  let fixture: ComponentFixture<MyComp6894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
