import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1839Component } from './my-comp-1839.component';

describe('MyComp1839Component', () => {
  let component: MyComp1839Component;
  let fixture: ComponentFixture<MyComp1839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
