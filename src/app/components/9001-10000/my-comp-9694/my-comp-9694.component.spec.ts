import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9694Component } from './my-comp-9694.component';

describe('MyComp9694Component', () => {
  let component: MyComp9694Component;
  let fixture: ComponentFixture<MyComp9694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
