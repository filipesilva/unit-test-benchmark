import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9791Component } from './my-comp-9791.component';

describe('MyComp9791Component', () => {
  let component: MyComp9791Component;
  let fixture: ComponentFixture<MyComp9791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
