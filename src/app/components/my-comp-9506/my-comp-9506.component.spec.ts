import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9506Component } from './my-comp-9506.component';

describe('MyComp9506Component', () => {
  let component: MyComp9506Component;
  let fixture: ComponentFixture<MyComp9506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
