import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1791Component } from './my-comp-1791.component';

describe('MyComp1791Component', () => {
  let component: MyComp1791Component;
  let fixture: ComponentFixture<MyComp1791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
