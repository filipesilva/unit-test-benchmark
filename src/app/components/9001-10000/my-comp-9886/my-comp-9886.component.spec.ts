import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9886Component } from './my-comp-9886.component';

describe('MyComp9886Component', () => {
  let component: MyComp9886Component;
  let fixture: ComponentFixture<MyComp9886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
