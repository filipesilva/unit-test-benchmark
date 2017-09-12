import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4391Component } from './my-comp-4391.component';

describe('MyComp4391Component', () => {
  let component: MyComp4391Component;
  let fixture: ComponentFixture<MyComp4391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
