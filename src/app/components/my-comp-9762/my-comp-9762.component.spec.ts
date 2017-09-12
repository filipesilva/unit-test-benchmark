import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9762Component } from './my-comp-9762.component';

describe('MyComp9762Component', () => {
  let component: MyComp9762Component;
  let fixture: ComponentFixture<MyComp9762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
