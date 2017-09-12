import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5282Component } from './my-comp-5282.component';

describe('MyComp5282Component', () => {
  let component: MyComp5282Component;
  let fixture: ComponentFixture<MyComp5282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
