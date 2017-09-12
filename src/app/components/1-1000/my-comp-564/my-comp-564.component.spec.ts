import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp564Component } from './my-comp-564.component';

describe('MyComp564Component', () => {
  let component: MyComp564Component;
  let fixture: ComponentFixture<MyComp564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
