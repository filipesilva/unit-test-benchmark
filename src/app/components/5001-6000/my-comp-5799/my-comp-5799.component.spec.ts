import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5799Component } from './my-comp-5799.component';

describe('MyComp5799Component', () => {
  let component: MyComp5799Component;
  let fixture: ComponentFixture<MyComp5799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
