import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6334Component } from './my-comp-6334.component';

describe('MyComp6334Component', () => {
  let component: MyComp6334Component;
  let fixture: ComponentFixture<MyComp6334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
