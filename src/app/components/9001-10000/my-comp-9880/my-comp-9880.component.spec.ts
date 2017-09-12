import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9880Component } from './my-comp-9880.component';

describe('MyComp9880Component', () => {
  let component: MyComp9880Component;
  let fixture: ComponentFixture<MyComp9880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
