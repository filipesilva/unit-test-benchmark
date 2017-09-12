import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9299Component } from './my-comp-9299.component';

describe('MyComp9299Component', () => {
  let component: MyComp9299Component;
  let fixture: ComponentFixture<MyComp9299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
