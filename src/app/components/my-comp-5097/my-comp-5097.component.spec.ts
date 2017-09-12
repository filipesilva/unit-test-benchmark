import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5097Component } from './my-comp-5097.component';

describe('MyComp5097Component', () => {
  let component: MyComp5097Component;
  let fixture: ComponentFixture<MyComp5097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
