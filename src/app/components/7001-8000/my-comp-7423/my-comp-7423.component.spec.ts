import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7423Component } from './my-comp-7423.component';

describe('MyComp7423Component', () => {
  let component: MyComp7423Component;
  let fixture: ComponentFixture<MyComp7423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
