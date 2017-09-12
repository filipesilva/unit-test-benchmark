import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6806Component } from './my-comp-6806.component';

describe('MyComp6806Component', () => {
  let component: MyComp6806Component;
  let fixture: ComponentFixture<MyComp6806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
