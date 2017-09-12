import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5739Component } from './my-comp-5739.component';

describe('MyComp5739Component', () => {
  let component: MyComp5739Component;
  let fixture: ComponentFixture<MyComp5739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
