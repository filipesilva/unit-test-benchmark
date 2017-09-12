import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5151Component } from './my-comp-5151.component';

describe('MyComp5151Component', () => {
  let component: MyComp5151Component;
  let fixture: ComponentFixture<MyComp5151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
