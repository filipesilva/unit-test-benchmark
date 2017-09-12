import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9253Component } from './my-comp-9253.component';

describe('MyComp9253Component', () => {
  let component: MyComp9253Component;
  let fixture: ComponentFixture<MyComp9253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
