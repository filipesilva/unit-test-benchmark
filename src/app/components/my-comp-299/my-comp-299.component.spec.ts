import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp299Component } from './my-comp-299.component';

describe('MyComp299Component', () => {
  let component: MyComp299Component;
  let fixture: ComponentFixture<MyComp299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
