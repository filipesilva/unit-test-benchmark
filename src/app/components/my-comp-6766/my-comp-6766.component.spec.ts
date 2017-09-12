import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6766Component } from './my-comp-6766.component';

describe('MyComp6766Component', () => {
  let component: MyComp6766Component;
  let fixture: ComponentFixture<MyComp6766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
