import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp387Component } from './my-comp-387.component';

describe('MyComp387Component', () => {
  let component: MyComp387Component;
  let fixture: ComponentFixture<MyComp387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
