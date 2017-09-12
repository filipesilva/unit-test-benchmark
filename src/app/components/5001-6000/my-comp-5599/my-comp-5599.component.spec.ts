import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5599Component } from './my-comp-5599.component';

describe('MyComp5599Component', () => {
  let component: MyComp5599Component;
  let fixture: ComponentFixture<MyComp5599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
