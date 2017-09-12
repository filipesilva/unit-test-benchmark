import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6619Component } from './my-comp-6619.component';

describe('MyComp6619Component', () => {
  let component: MyComp6619Component;
  let fixture: ComponentFixture<MyComp6619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
