import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9069Component } from './my-comp-9069.component';

describe('MyComp9069Component', () => {
  let component: MyComp9069Component;
  let fixture: ComponentFixture<MyComp9069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
