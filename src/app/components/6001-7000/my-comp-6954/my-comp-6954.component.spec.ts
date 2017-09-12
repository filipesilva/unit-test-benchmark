import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6954Component } from './my-comp-6954.component';

describe('MyComp6954Component', () => {
  let component: MyComp6954Component;
  let fixture: ComponentFixture<MyComp6954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
