import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4564Component } from './my-comp-4564.component';

describe('MyComp4564Component', () => {
  let component: MyComp4564Component;
  let fixture: ComponentFixture<MyComp4564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
