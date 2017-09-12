import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp197Component } from './my-comp-197.component';

describe('MyComp197Component', () => {
  let component: MyComp197Component;
  let fixture: ComponentFixture<MyComp197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
