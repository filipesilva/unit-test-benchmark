import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9355Component } from './my-comp-9355.component';

describe('MyComp9355Component', () => {
  let component: MyComp9355Component;
  let fixture: ComponentFixture<MyComp9355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
