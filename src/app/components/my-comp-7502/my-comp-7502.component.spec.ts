import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7502Component } from './my-comp-7502.component';

describe('MyComp7502Component', () => {
  let component: MyComp7502Component;
  let fixture: ComponentFixture<MyComp7502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
