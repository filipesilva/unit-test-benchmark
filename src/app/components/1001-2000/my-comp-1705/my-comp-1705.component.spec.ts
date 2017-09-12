import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1705Component } from './my-comp-1705.component';

describe('MyComp1705Component', () => {
  let component: MyComp1705Component;
  let fixture: ComponentFixture<MyComp1705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
