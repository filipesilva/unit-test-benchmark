import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7238Component } from './my-comp-7238.component';

describe('MyComp7238Component', () => {
  let component: MyComp7238Component;
  let fixture: ComponentFixture<MyComp7238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
