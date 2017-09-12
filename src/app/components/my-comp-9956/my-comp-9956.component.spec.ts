import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9956Component } from './my-comp-9956.component';

describe('MyComp9956Component', () => {
  let component: MyComp9956Component;
  let fixture: ComponentFixture<MyComp9956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
