import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9429Component } from './my-comp-9429.component';

describe('MyComp9429Component', () => {
  let component: MyComp9429Component;
  let fixture: ComponentFixture<MyComp9429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
