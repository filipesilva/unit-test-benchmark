import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9564Component } from './my-comp-9564.component';

describe('MyComp9564Component', () => {
  let component: MyComp9564Component;
  let fixture: ComponentFixture<MyComp9564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
