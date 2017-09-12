import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5186Component } from './my-comp-5186.component';

describe('MyComp5186Component', () => {
  let component: MyComp5186Component;
  let fixture: ComponentFixture<MyComp5186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
