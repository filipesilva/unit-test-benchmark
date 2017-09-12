import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5423Component } from './my-comp-5423.component';

describe('MyComp5423Component', () => {
  let component: MyComp5423Component;
  let fixture: ComponentFixture<MyComp5423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
