import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6863Component } from './my-comp-6863.component';

describe('MyComp6863Component', () => {
  let component: MyComp6863Component;
  let fixture: ComponentFixture<MyComp6863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
