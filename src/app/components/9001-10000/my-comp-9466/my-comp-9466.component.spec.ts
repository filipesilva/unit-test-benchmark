import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9466Component } from './my-comp-9466.component';

describe('MyComp9466Component', () => {
  let component: MyComp9466Component;
  let fixture: ComponentFixture<MyComp9466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
