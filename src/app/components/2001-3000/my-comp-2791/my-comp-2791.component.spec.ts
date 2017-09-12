import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2791Component } from './my-comp-2791.component';

describe('MyComp2791Component', () => {
  let component: MyComp2791Component;
  let fixture: ComponentFixture<MyComp2791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
