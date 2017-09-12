import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3423Component } from './my-comp-3423.component';

describe('MyComp3423Component', () => {
  let component: MyComp3423Component;
  let fixture: ComponentFixture<MyComp3423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
