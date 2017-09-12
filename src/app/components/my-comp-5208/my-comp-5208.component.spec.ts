import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5208Component } from './my-comp-5208.component';

describe('MyComp5208Component', () => {
  let component: MyComp5208Component;
  let fixture: ComponentFixture<MyComp5208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
