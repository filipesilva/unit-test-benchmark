import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9183Component } from './my-comp-9183.component';

describe('MyComp9183Component', () => {
  let component: MyComp9183Component;
  let fixture: ComponentFixture<MyComp9183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
