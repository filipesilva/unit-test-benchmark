import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9974Component } from './my-comp-9974.component';

describe('MyComp9974Component', () => {
  let component: MyComp9974Component;
  let fixture: ComponentFixture<MyComp9974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
