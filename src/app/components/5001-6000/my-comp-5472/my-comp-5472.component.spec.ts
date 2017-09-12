import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5472Component } from './my-comp-5472.component';

describe('MyComp5472Component', () => {
  let component: MyComp5472Component;
  let fixture: ComponentFixture<MyComp5472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
