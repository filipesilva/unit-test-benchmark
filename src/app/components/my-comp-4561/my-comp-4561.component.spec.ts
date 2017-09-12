import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4561Component } from './my-comp-4561.component';

describe('MyComp4561Component', () => {
  let component: MyComp4561Component;
  let fixture: ComponentFixture<MyComp4561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
