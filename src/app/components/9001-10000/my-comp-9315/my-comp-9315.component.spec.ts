import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9315Component } from './my-comp-9315.component';

describe('MyComp9315Component', () => {
  let component: MyComp9315Component;
  let fixture: ComponentFixture<MyComp9315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
