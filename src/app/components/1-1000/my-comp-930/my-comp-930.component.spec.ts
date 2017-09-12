import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp930Component } from './my-comp-930.component';

describe('MyComp930Component', () => {
  let component: MyComp930Component;
  let fixture: ComponentFixture<MyComp930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
