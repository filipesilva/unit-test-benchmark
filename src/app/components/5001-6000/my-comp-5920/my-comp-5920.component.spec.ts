import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5920Component } from './my-comp-5920.component';

describe('MyComp5920Component', () => {
  let component: MyComp5920Component;
  let fixture: ComponentFixture<MyComp5920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
