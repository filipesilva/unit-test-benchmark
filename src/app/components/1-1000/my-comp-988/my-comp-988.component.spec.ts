import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp988Component } from './my-comp-988.component';

describe('MyComp988Component', () => {
  let component: MyComp988Component;
  let fixture: ComponentFixture<MyComp988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
