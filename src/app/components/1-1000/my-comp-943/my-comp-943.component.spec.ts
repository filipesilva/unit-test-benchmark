import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp943Component } from './my-comp-943.component';

describe('MyComp943Component', () => {
  let component: MyComp943Component;
  let fixture: ComponentFixture<MyComp943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
