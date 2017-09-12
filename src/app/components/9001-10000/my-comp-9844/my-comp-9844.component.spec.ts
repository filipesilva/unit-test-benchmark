import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9844Component } from './my-comp-9844.component';

describe('MyComp9844Component', () => {
  let component: MyComp9844Component;
  let fixture: ComponentFixture<MyComp9844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
