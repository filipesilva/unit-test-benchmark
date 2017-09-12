import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9110Component } from './my-comp-9110.component';

describe('MyComp9110Component', () => {
  let component: MyComp9110Component;
  let fixture: ComponentFixture<MyComp9110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
