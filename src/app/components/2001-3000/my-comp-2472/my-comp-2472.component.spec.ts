import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2472Component } from './my-comp-2472.component';

describe('MyComp2472Component', () => {
  let component: MyComp2472Component;
  let fixture: ComponentFixture<MyComp2472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
