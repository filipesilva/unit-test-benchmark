import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1955Component } from './my-comp-1955.component';

describe('MyComp1955Component', () => {
  let component: MyComp1955Component;
  let fixture: ComponentFixture<MyComp1955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
