import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1430Component } from './my-comp-1430.component';

describe('MyComp1430Component', () => {
  let component: MyComp1430Component;
  let fixture: ComponentFixture<MyComp1430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
