import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5795Component } from './my-comp-5795.component';

describe('MyComp5795Component', () => {
  let component: MyComp5795Component;
  let fixture: ComponentFixture<MyComp5795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
