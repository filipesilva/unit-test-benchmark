import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4102Component } from './my-comp-4102.component';

describe('MyComp4102Component', () => {
  let component: MyComp4102Component;
  let fixture: ComponentFixture<MyComp4102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
