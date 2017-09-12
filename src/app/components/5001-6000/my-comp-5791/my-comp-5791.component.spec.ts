import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5791Component } from './my-comp-5791.component';

describe('MyComp5791Component', () => {
  let component: MyComp5791Component;
  let fixture: ComponentFixture<MyComp5791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
